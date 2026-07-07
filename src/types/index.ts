export interface Task {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: "Базовый" | "Средний" | "Продвинутый";
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  projects: { title: string; description: string }[];
  quotes: { text: string; author: string }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
