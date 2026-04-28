export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
}

export type AppState = 'MENU' | 'QUIZ' | 'RESULT';

export interface QuizResult {
  correct: number;
  incorrect: number;
  score: number;
  totalQuestions: number;
}
