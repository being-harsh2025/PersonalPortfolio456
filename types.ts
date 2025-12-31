
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'Web' | 'Mobile' | 'AI' | 'Systems';
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools' | 'Database' | 'UI/UX' | 'Editing' | 'Hosting';
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  details: string;
  imageUrl: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  details: string[];
}

export interface TechEngagement {
  title: string;
  event: string;
  date: string;
  experience: string;
  images: string[];
}

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  date: string;
  avatarColor: string;
}

export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  profileImage?: string;
  educationHistory: EducationItem[];
  skills: Skill[];
  projects: Project[];
  engagements: TechEngagement[];
  certificates: Certificate[];
}
