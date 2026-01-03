
export enum Role {
  USER = 'user',
  BOT = 'bot'
}

export interface Message {
  id: string;
  role: Role;
  content: string;
  timestamp: Date;
  intent?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  questions: string[];
}
