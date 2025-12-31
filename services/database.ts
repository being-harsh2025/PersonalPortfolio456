
import { GuestbookEntry, Project, ContactMessage } from '../types';
import { USER_DATA } from '../constants';

const GUESTBOOK_KEY = 'nova_portfolio_guestbook';
const PROJECTS_KEY = 'nova_portfolio_projects';
const CONTACT_KEY = 'nova_portfolio_messages';

const DEFAULT_GUESTBOOK: GuestbookEntry[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    message: 'Harsh is an incredible developer! His work on Pulse was game-changing for our team.',
    date: 'Oct 12, 2023',
    avatarColor: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    message: 'Clean code and great UI sense. Definitely keep an eye on his AI projects!',
    date: 'Nov 05, 2023',
    avatarColor: 'bg-purple-500'
  }
];

export const DB = {
  // Guestbook Methods
  getGuestbook: (): GuestbookEntry[] => {
    const saved = localStorage.getItem(GUESTBOOK_KEY);
    if (!saved) {
      localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(DEFAULT_GUESTBOOK));
      return DEFAULT_GUESTBOOK;
    }
    return JSON.parse(saved);
  },

  addGuestbookEntry: (name: string, message: string): GuestbookEntry[] => {
    const entries = DB.getGuestbook();
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500', 'bg-pink-500', 'bg-orange-500'];
    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name,
      message,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      avatarColor: colors[Math.floor(Math.random() * colors.length)]
    };
    const updated = [newEntry, ...entries];
    localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(updated));
    return updated;
  },

  // Contact Message Methods
  getContactMessages: (): ContactMessage[] => {
    const saved = localStorage.getItem(CONTACT_KEY);
    return saved ? JSON.parse(saved) : [];
  },

  addContactMessage: (name: string, email: string, subject: string, message: string): ContactMessage[] => {
    const messages = DB.getContactMessages();
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      date: new Date().toLocaleString(),
      isRead: false
    };
    const updated = [newMessage, ...messages];
    localStorage.setItem(CONTACT_KEY, JSON.stringify(updated));
    return updated;
  },

  markContactMessageRead: (id: string): ContactMessage[] => {
    const messages = DB.getContactMessages();
    const updated = messages.map(m => m.id === id ? { ...m, isRead: true } : m);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(updated));
    return updated;
  },

  deleteContactMessage: (id: string): ContactMessage[] => {
    const messages = DB.getContactMessages();
    const updated = messages.filter(m => m.id !== id);
    localStorage.setItem(CONTACT_KEY, JSON.stringify(updated));
    return updated;
  },

  clearAllContactMessages: (): ContactMessage[] => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify([]));
    return [];
  },

  // Project Methods
  getProjects: (): Project[] => {
    const saved = localStorage.getItem(PROJECTS_KEY);
    if (!saved) {
      localStorage.setItem(PROJECTS_KEY, JSON.stringify(USER_DATA.projects));
      return USER_DATA.projects;
    }
    return JSON.parse(saved);
  },

  resetDatabase: () => {
    localStorage.clear();
    window.location.reload();
  }
};
