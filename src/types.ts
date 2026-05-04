export type EducationLevel = 'SD' | 'SMP' | 'SMA';
export type Subject = 'Matematika' | 'IPA' | 'IPS' | 'Bahasa Indonesia' | 'Bahasa Inggris' | 'PPKn';
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  level: EducationLevel;
  subject: Subject;
  difficulty: Difficulty;
}

export type AppState = 'MENU' | 'PROFILE' | 'PICKER' | 'QUIZ' | 'RESULT' | 'LEADERBOARD' | 'ACHIEVEMENTS';

export interface UserStats {
  xp: number;
  level: number;
  totalCorrect: number;
  bestStreak: number;
  highestScore: number;
  badges: string[];
  history: {
    date: string;
    score: number;
    subject: Subject;
    level: EducationLevel;
  }[];
}

export interface UserProfile {
  name: string;
  className: string;
  school: string;
  stats: UserStats;
}

export interface Lifelines {
  fiftyFifty: boolean;
  skip: boolean;
  freeze: boolean;
}

export interface QuizSessionState {
  currentQuestionIdx: number;
  answers: Record<number, number>;
  timeSpent: number; // total time in seconds
  streak: number;
  multiplier: number;
  score: number;
  lifelines: Lifelines;
  isFinished: boolean;
  startTime: number;
  questions: Question[];
}

export interface QuizResult {
  profile: UserProfile;
  score: number;
  accuracy: number;
  topStreak: number;
  totalTime: number;
  badgesEarned: string[];
  stats: {
    correct: number;
    wrong: number;
    speedBonus: number;
  };
}
