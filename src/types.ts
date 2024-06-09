/**
 * @fileoverview
 */

export interface Project {
    id: string;
    createdAt?: string;
    modifiedAt?: string;
    name?: string;
    description?: string;
    url?: string;
    imageUrl?: string;
    developerId: string;
}

export interface Experience {
    id: string;
    createdAt?: string;
    modifiedAt?: string;
    title?: string;
    company?: string;
    description?: string;
    companyWebsiteUrl?: string;
    startDate?: string;
    endDate?: string;
    userId: string;
}

export interface Education {
    id?: string;
    createdAt?: string;
    modifiedAt?: string;
    institutionName?: string;
    field?: string;
    degree?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
    userId?: string;
}

export interface SocialLink {
    Url?: string;
    Name?: string;
    DeveloperId: string; // Assuming Guid is represented as string in JavaScript
}

export interface Skill {
    id: string;
    imageUrl: string | null;
    name: string;
}

export interface DeveloperSkill {
    competencyLevel: number;
    developerId: string;
    skill: Skill;
    yearsOfExperience: number;
    skillId: string;
}

export interface Developer {
    fullName?: string;
    email?: string;
    country?: string;
    phoneNumber?: string;
    title?: string;
    profileOverview?: string | null;
    profilePictureUrl?: string | null;
    introVideoUrl?: string | null;
    resumeUrl?: string | null;
    companyCount?: number;
    score?: number;
    yearsOfExperience?: number;
    role?: string;
    socialLinks?: SocialLink[];
    skills?: Skill[];
    id: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface BasicInfo {
    profilePictureUrl: string;
    name: string;
    country: string;
    engineering: string;
    phoneNumber: string;
    socialMedia: SocialLink[];
}

export type UserInfo = {
    accessToken: string;
    id: string;
    fullName: string;
    email: string;
    role: string;
};

export interface Job {
    title: string;
    company: string;
    location: string;
    type: string;
    level: string;
    experience: string;
    description: string;
    skills: string[];
    status: 'short_listed' | 'active' | 'completed';
}

export type AddClinetInf = {
    fullName: string;
    email: string;
    companyName: string;
    phoneNumber: string;
};
