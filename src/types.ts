export enum ServiceType {
  ARCHITECTURE = 'Architecture',
  INTERIOR = 'Interior Design',
  EXTERIOR = 'Exterior & Facade',
  AI_TRANSFORMATION = 'AI-Powered Transformation',
  CONSTRUCTION = 'Construction',
  VASTU = 'Vastu Consulting'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  strengths: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}