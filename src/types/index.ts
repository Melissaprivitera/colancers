// User types
export interface User {
  id: string;
  address: string;
  ensName?: string;
  avatar?: string;
  skills: Skill[];
  reputation: Reputation;
  teams: Team[];
  isVerified: boolean;
  worldIdVerified: boolean;
}

// Skill types
export interface Skill {
  id: string;
  name: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  verified: boolean;
  verificationSource?: string;
  endorsements: number;
  certifications: Certification[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuedAt: Date;
  expiresAt?: Date;
  credentialId: string;
}

// Reputation types
export interface Reputation {
  score: number;
  reviews: Review[];
  endorsements: Endorsement[];
  totalProjects: number;
  completedProjects: number;
  averageRating: number;
}

export interface Review {
  id: string;
  projectId: string;
  reviewer: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Endorsement {
  id: string;
  skillId: string;
  endorser: string;
  message?: string;
  createdAt: Date;
}

// Team types
export interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
  projects: Project[];
  skills: Skill[];
  reputation: Reputation;
  createdAt: Date;
}

export interface TeamMember {
  userId: string;
  role: 'owner' | 'admin' | 'member';
  joinedAt: Date;
  contribution: number;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  teamId: string;
  client: string;
  budget: number;
  currency: string;
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  skills: Skill[];
  members: ProjectMember[];
  payments: Payment[];
  createdAt: Date;
  deadline?: Date;
}

export interface ProjectMember {
  userId: string;
  role: string;
  contribution: number;
  payment: number;
}

// Payment types
export interface Payment {
  id: string;
  projectId: string;
  amount: number;
  currency: string;
  recipient: string;
  status: 'pending' | 'completed' | 'failed';
  transactionHash?: string;
  createdAt: Date;
  completedAt?: Date;
}

// ENS types
export interface ENSProfile {
  name: string;
  address: string;
  avatar?: string;
  records: ENSRecord[];
}

export interface ENSRecord {
  key: string;
  value: string;
  type: 'text' | 'address' | 'contenthash';
}

// World ID types
export interface WorldIDVerification {
  userId: string;
  verified: boolean;
  proof: string;
  verifiedAt: Date;
}

// Flare FDC types
export interface FlareCredential {
  id: string;
  type: string;
  issuer: string;
  subject: string;
  issuedAt: Date;
  expiresAt?: Date;
  data: Record<string, any>;
  proof: string;
} 