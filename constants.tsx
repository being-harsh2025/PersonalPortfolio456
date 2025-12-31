
import { UserProfile } from './types';

export const DECORATIVE_ASSETS = {
  heroBadges: [
    { icon: '🧠', label: 'AI & Logic', color: 'blue' },
    { icon: '💻', label: 'Clean Code', color: 'purple' },
    { icon: '🌐', label: 'Scalable Web', color: 'emerald' },
    { icon: '⚡', label: 'Performance', color: 'orange' }
  ],
  floatingBackground: [
    { type: 'cpu', color: 'blue', opacity: 0.07 },
    { type: 'database', color: 'purple', opacity: 0.05 },
    { type: 'code', color: 'pink', opacity: 0.06 }
  ]
};

export const USER_DATA: UserProfile = {
  name: "Harsh Shrivastav",
  role: "IT Student & Aspiring Full Stack Engineer",
  profileImage: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop", 
  bio: "Passionate IT student at Amity University Gwalior specializing in building scalable web applications and exploring the frontiers of AI. Currently pursuing a B.Tech degree with a focus on solving complex problems with clean, efficient code.",
  educationHistory: [
    {
      degree: "B.Tech in Information Technology",
      school: "Amity University Gwalior, MP",
      year: "2024 - 2028 (Present)",
      details: [
        "Focusing on Software Engineering, Data Structures, and Cloud Computing",
        "Exploring emerging technologies in AI and Machine Learning",
        "Active member of the University Technical Society"
      ]
    },
    {
      degree: "High School (12th Grade)",
      school: "Board of Secondary Education",
      year: "Completed 2024",
      details: [
        "Passed with Grade A (70.40%)",
        "Specialized in Physics, Chemistry, and Mathematics",
        "Recipient of Academic Excellence Award"
      ]
    }
  ],
  skills: [
    { name: "HTML5", level: 95, category: "Frontend", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", level: 90, category: "Frontend", icon: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "JavaScript", level: 85, category: "Frontend", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "Bootstrap", level: 80, category: "Frontend", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
    { name: "Python", level: 85, category: "Backend", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Node.js", level: 80, category: "Backend", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "MongoDB", level: 75, category: "Database", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "MySQL", level: 80, category: "Database", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "Git", level: 90, category: "Tools", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Figma", level: 85, category: "UI/UX", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Photoshop", level: 70, category: "Editing", icon: "https://cdn.simpleicons.org/adobephotoshop/31A8FF" },
    { name: "Vercel", level: 85, category: "Hosting", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" }
  ],
  certificates: [
    {
      id: "c1",
      title: "Certificate of Participation: Build with AI",
      issuer: "GDG on Campus - MITS DU",
      date: "February 10, 2025",
      details: "Successfully participated in the 'Build with AI' event conducted by Google Developer Groups on Campus at Madhav Institute of Technology & Science (MITS), Gwalior.\n\nSerial Number: MITS-DU-202502-00078\nMission: Mission to Innovate Technology for Society.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "c2",
      title: "45 Days of Code",
      issuer: "Amity Coding Club",
      date: "2024",
      details: "Rigorous daily coding challenge focused on competitive programming and algorithms.\nMastered complex data structures and optimized pathfinding solutions.",
      imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "c3",
      title: "Cyber Security Simulation",
      issuer: "Tata Forage",
      date: "2024",
      details: "Explored vulnerability assessment and network security protocols in a simulated environment.\nLearned defensive strategies against common web-based attack vectors.",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "c4",
      title: "Java Programming Foundations",
      issuer: "Oracle Academy",
      date: "2024",
      details: "Comprehensive study of object-oriented programming principles using Java.\nImplemented several modular applications with focus on design patterns.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "c5",
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      details: "Mastered HTML5, CSS3, and modern layout systems like Flexbox and CSS Grid.\nBuilt 5+ production-ready responsive websites as part of the certification.",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "c6",
      title: "Cloud Computing Fundamentals",
      issuer: "AWS",
      date: "2024",
      details: "Introductory course covering core AWS services including EC2, S3, and Lambda.\nLearned about high availability, scalability, and basic cloud security architectures.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    }
  ],
  engagements: [
    {
      title: "Build with AI Participant",
      event: "GDG on Campus MITS DU",
      date: "Feb 2025",
      experience: "Successfully participated in the Build with AI event organized by GDG on Campus MITS DU. Engaged in hands-on workshops and technical sessions focusing on integrating Gemini AI into full-stack workflows. Verified Serial: MITS-DU-202502-00078.",
      images: [
        "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Participant",
      event: "Google DevFest Gwalior",
      date: "November 2024",
      experience: "Attended workshops on Gemini Flash 2.0 and modern cloud architectures. Networked with senior engineers and gained insights into professional CI/CD pipelines.",
      images: [
        "https://images.unsplash.com/photo-1540575861501-7ad0582373f3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591115765373-520b7a52d844?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "Silver Medalist",
      event: "Inter-University Coding Brawl",
      date: "January 2025",
      experience: "Competed against 50+ teams in a data structures challenge. Optimized a pathfinding algorithm that secured our team the 2nd place position.",
      images: [
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
      ]
    },
    {
      title: "National Finalist",
      event: "Smart India Hackathon 2025",
      date: "March 2025",
      experience: "Developed a blockchain-based tracking system for pharmaceutical supply chains. Integrated IoT sensors with a secure distributed ledger to prevent counterfeit medicine distribution and ensure patient safety.",
      images: [
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop"
      ]
    }
  ],
  projects: [
    {
      id: "1",
      title: "Pulse - Real-time Analytics",
      description: "A high-performance dashboard for monitoring server metrics and user engagement using WebSockets.",
      tags: ["React", "TypeScript", "D3.js", "Socket.io"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=800&auto=format&fit=crop",
      category: "Web"
    },
    {
      id: "2",
      title: "Lumina AI - Assistant",
      description: "An AI-powered document summarizer utilizing Gemini API for processing long-form academic papers.",
      tags: ["Python", "FastAPI", "Gemini API", "Tailwind"],
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      category: "AI"
    },
    {
      id: "3",
      title: "Nexus - Social Networking",
      description: "A mobile-first social platform focusing on niche developer communities with encrypted messaging.",
      tags: ["React Native", "Firebase", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      category: "Mobile"
    },
    {
      id: "4",
      title: "SafeVault - Pass Manager",
      description: "Desktop security application using AES-256 encryption and biometric authentication prototypes.",
      tags: ["Rust", "Tauri", "SQLite"],
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
      category: "Systems"
    },
    {
      id: "5",
      title: "CryptoTrack - Explorer",
      description: "A real-time cryptocurrency price tracker and portfolio manager with automated alerts.",
      tags: ["React", "Node.js", "Chart.js"],
      imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
      category: "Web"
    },
    {
      id: "6",
      title: "Visionary - Computer Vision",
      description: "An object detection app for visually impaired users using TensorFlow and edge processing.",
      tags: ["Python", "TensorFlow", "React Native"],
      imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=800&auto=format&fit=crop",
      category: "AI"
    }
  ]
};
