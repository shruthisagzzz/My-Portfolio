export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  items: string[];
}

export interface ExperienceItem {
  date: string;
  title: string;
  org: string;
  points: string[];
  tags: string[];
}

export interface ProjectItem {
  num: string;
  title: string;
  tech: string[];
  description: string;
  problem: string;
  solution: string;
  features: string;
  challenges: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface AchievementItem {
  icon: string;
  title: string;
  meta: string;
  description?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}
