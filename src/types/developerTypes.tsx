type Availability = {
    availability: string;
    availabilityInWeeks: number;
    availabilityStatus: number;
    createdAt: string; // ISO 8601 date string
    id: string;
    jobTypePreference: number;
    updatedAt: string; // ISO 8601 date string
};

type Developer = {
    availability: Availability;
    companyCount: number;
    introVideoUrl: string;
    profileOverview: string;
    profilePictureUrl: string;
    resumeUrl: string;
    score: number | null;
    developerSkills: DeveloperSkill[];
    socialLinks: SocialLink[];
    title: string;
    user: User;
    yearsOfExperience: number;
};

type DeveloperSkill = {
    skillId: string;
    developerId: string;
    yearsOfExperience: number;
    competencyLevel: number;
};

type SocialLink = {
    id: string;
    name: string;
    url: string;
};

type User = {
    city: string;
    country: string;
    createdAt: string; // ISO 8601 date string
    email: string;
    fullName: string;
    id: string;
    isAccountVerified: boolean;
    isEmailVerified: boolean;
    phoneNumber: string;
    updatedAt: string; // ISO 8601 date string
};

export type { Availability, Developer, DeveloperSkill, SocialLink, User };
