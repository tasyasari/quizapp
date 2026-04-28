export type EducationLevel = 'SD' | 'SMP' | 'SMA';
export type SMAMajor = 'IPA' | 'IPS' | 'Umum';
export type Subject = 'Pengetahuan Umum' | 'Matematika' | 'IPA' | 'IPS' | 'Bahasa Indonesia' | 'Biologi' | 'Fisika' | 'Ekonomi' | 'Geografi';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  level: EducationLevel;
  major?: SMAMajor;
  subject: Subject;
}

export type AppState = 'MENU' | 'PROFILE' | 'LEVEL_SELECT' | 'SMA_MAJOR_SELECT' | 'SUBJECT_SELECT' | 'QUIZ' | 'RESULT';

export interface UserProfile {
  name: string;
  className: string;
  school: string;
}

export interface QuizSelection {
  level: EducationLevel;
  major?: SMAMajor;
  subject: Subject;
}

export interface QuizResult {
  profile: UserProfile;
  selection: QuizSelection;
  correct: number;
  incorrect: number;
  score: number;
  totalQuestions: number;
}
