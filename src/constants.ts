import { Question } from './types';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Apa ibu kota dari Indonesia?",
    options: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    correctAnswer: 2
  },
  {
    id: 2,
    text: "Planet mana yang dikenal sebagai 'Planet Merah'?",
    options: ["Mars", "Venus", "Jupiter", "Saturnus"],
    correctAnswer: 0
  },
  {
    id: 3,
    text: "Siapa penemu lampu pijar?",
    options: ["Nikola Tesla", "Thomas Alva Edison", "Isaac Newton", "Albert Einstein"],
    correctAnswer: 1
  },
  {
    id: 4,
    text: "Apa lambang kimia untuk emas?",
    options: ["Ag", "Fe", "Au", "Pb"],
    correctAnswer: 2
  },
  {
    id: 5,
    text: "Benua terkecil di dunia adalah?",
    options: ["Eropa", "Australia", "Antarktika", "Asia"],
    correctAnswer: 1
  }
];
