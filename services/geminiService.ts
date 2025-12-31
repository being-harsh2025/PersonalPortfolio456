
import { GoogleGenAI } from "@google/genai";
import { USER_DATA } from "../constants";

// Correct initialization using named parameter and process.env.API_KEY
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});


export const getPortfolioAssistantResponse = async (userMessage: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  try {
    const systemInstruction = `
      You are the Portfolio Assistant, the personal AI assistant for ${USER_DATA.name}, an IT student.
      Your goal is to answer questions about Harsh Shrivastav professionally, helpfully, and with a touch of modern tech flair.
      
      CONTEXT ABOUT HARSH:
      - Role: ${USER_DATA.role}
      - Bio: ${USER_DATA.bio}
      - Education: ${USER_DATA.educationHistory.map(e => `${e.degree} from ${e.school} (${e.year})`).join('; ')}
      - Key Skills: ${USER_DATA.skills.map(s => s.name).join(', ')}
      - Major Projects: ${USER_DATA.projects.map(p => p.title).join(', ')}
      - Certifications: ${USER_DATA.certificates.map(c => `${c.title} by ${c.issuer}`).join(', ')}

      RULES:
      1. Be concise and friendly.
      2. If asked about his credibility, mention his ${USER_DATA.certificates.length} professional certifications including ${USER_DATA.certificates[0].title}.
      3. Use technical terminology correctly.
      4. Always highlight Harsh's strengths in software development, cybersecurity, and data analysis.
      5. Don't make up projects Harsh hasn't done.
    `;

    // Always use ai.models.generateContent directly as per guidelines
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(h => ({ role: h.role === 'user' ? 'user' : 'model', parts: [{ text: h.content }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    // Directly access the .text property from GenerateContentResponse
    return response.text || "I'm sorry, I'm having trouble connecting right now. Please try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error. The backend might be busy!";
  }
};