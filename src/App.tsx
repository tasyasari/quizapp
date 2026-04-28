/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, LogOut, CheckCircle2, XCircle, ArrowRight, ArrowLeft, RotateCcw, Trophy } from 'lucide-react';
import { AppState, QuizResult } from './types';
import { QUESTIONS } from './constants';

// --- Components ---

/**
 * Main Menu Screen
 */
const MainMenu = ({ onStart }: { onStart: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex flex-col items-center justify-center min-h-[60vh] p-6"
  >
    <div className="bg-white neo-border neo-shadow-lg p-12 flex flex-col items-center max-w-md w-full text-center">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-20 h-20 bg-indigo-600 neo-border neo-shadow flex items-center justify-center mb-8 text-white font-black text-4xl"
      >
        Q
      </motion.div>
      
      <h1 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
        Quiz Sederhana
      </h1>
      <p className="text-slate-600 font-medium mb-12">
        Uji pengetahuan Anda dengan kuis pilihan ganda interaktif ini.
      </p>

      <div className="flex flex-col gap-4 w-full">
        <button
          id="btn-mulai"
          onClick={onStart}
          className="neo-btn neo-border neo-shadow bg-indigo-600 text-white font-black py-4 px-8 rounded-none hover:bg-indigo-700 uppercase tracking-widest flex items-center justify-center gap-3"
        >
          <Play size={20} fill="currentColor" />
          Mulai Quiz
        </button>
        <button
          id="btn-keluar"
          onClick={() => window.location.href = 'about:blank'}
          className="neo-btn neo-border neo-shadow bg-rose-100 text-rose-700 font-black py-4 px-8 rounded-none hover:bg-rose-200 uppercase tracking-widest flex items-center justify-center gap-3"
        >
          <LogOut size={20} />
          Keluar
        </button>
      </div>
    </div>
  </motion.div>
);

/**
 * Quiz Question Screen
 */
const QuizSession = ({ onComplete }: { onComplete: (result: QuizResult) => void }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  const question = QUESTIONS[currentIdx];
  const progress = Math.round(((currentIdx + 1) / QUESTIONS.length) * 100);

  const handleSelect = (optionIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const nextQuestion = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      let correct = 0;
      QUESTIONS.forEach((q, idx) => {
        if (answers[idx] === q.correctAnswer) correct++;
      });
      onComplete({
        correct,
        incorrect: QUESTIONS.length - correct,
        score: Math.round((correct / QUESTIONS.length) * 100),
        totalQuestions: QUESTIONS.length
      });
    }
  };

  const prevQuestion = () => {
    if (currentIdx > 0) setCurrentIdx(prev => prev - 1);
  };

  return (
    <div className="max-w-5xl mx-auto w-full p-4 flex flex-col min-h-[80vh]">
      {/* Header Bento Grid */}
      <div className="grid grid-cols-12 grid-rows-2 gap-4 mb-4">
        {/* Question Card */}
        <div className="col-span-12 md:col-span-8 row-span-2 bg-white neo-border neo-shadow p-8 flex flex-col justify-center">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2 font-display">
            Pertanyaan Ke-{currentIdx + 1}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-display leading-tight">
            {question.text}
          </h2>
        </div>

        {/* Progress Card */}
        <div className="col-span-12 md:col-span-4 row-span-1 bg-indigo-50 neo-border neo-shadow p-6 flex flex-col justify-between">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-black uppercase font-display">Progress</span>
            <span className="text-3xl font-black italic font-display">{progress}%</span>
          </div>
          <div className="w-full h-4 bg-white neo-border p-0.5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-indigo-600"
            />
          </div>
        </div>

        {/* Timer Card (Visual Placeholder) */}
        <div className="col-span-6 md:col-span-2 row-span-1 bg-amber-50 neo-border neo-shadow flex flex-col items-center justify-center p-4">
          <span className="text-[10px] font-black uppercase text-slate-400">Sisa Waktu</span>
          <span className="text-xl font-black font-display">15:00</span>
        </div>

        {/* Score Card */}
        <div className="col-span-6 md:col-span-2 row-span-1 bg-emerald-50 neo-border neo-shadow flex flex-col items-center justify-center p-4">
          <span className="text-[10px] font-black uppercase text-slate-400">Skor</span>
          <span className="text-xl font-black font-display">
            {Object.entries(answers).filter(([idx, ans]) => QUESTIONS[parseInt(idx)].correctAnswer === ans).length * 20}
          </span>
        </div>
      </div>

      {/* Options Bento Grid (Bottom) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2"
          >
            {question.options.map((option, idx) => {
              const labels = ['A', 'B', 'C', 'D'];
              const isSelected = answers[currentIdx] === idx;
              return (
                <button
                  key={idx}
                  id={`option-${idx}`}
                  onClick={() => handleSelect(idx)}
                  className={`neo-btn neo-border neo-shadow p-6 flex items-center text-left ${
                    isSelected
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white hover:bg-slate-50 text-slate-900 group'
                  }`}
                >
                  <span className={`w-10 h-10 neo-border flex items-center justify-center font-black mr-4 ${
                    isSelected ? 'border-white text-white' : 'border-black text-slate-900 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-white transition-colors'
                  }`}>
                    {labels[idx]}
                  </span>
                  <span className="text-lg font-black font-display">{option}</span>
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Bar */}
      <footer className="mt-8 flex justify-between items-center bg-white neo-border neo-shadow p-4">
        <button
          id="btn-prev"
          disabled={currentIdx === 0}
          onClick={prevQuestion}
          className="flex items-center gap-2 font-black px-4 py-2 disabled:opacity-30 uppercase tracking-widest text-slate-500 hover:text-black transition-colors"
        >
          <ArrowLeft size={20} strokeWidth={3} />
          Kembali
        </button>
        
        <button
          id="btn-next"
          disabled={answers[currentIdx] === undefined}
          onClick={nextQuestion}
          className={`neo-btn neo-border neo-shadow flex items-center gap-2 px-8 py-3 font-black uppercase tracking-widest ${
            answers[currentIdx] === undefined
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200 shadow-none'
            : 'bg-black text-white hover:bg-slate-900'
          }`}
        >
          {currentIdx === QUESTIONS.length - 1 ? 'Selesai' : 'Lanjut'}
          <ArrowRight size={20} strokeWidth={3} />
        </button>
      </footer>
    </div>
  );
};

/**
 * Result Screen
 */
const ResultsView = ({ result, onRestart }: { result: QuizResult, onRestart: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="max-w-md mx-auto w-full bg-white neo-border neo-shadow-lg p-10 md:p-12 text-center"
  >
    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 neo-border neo-shadow text-green-700 rounded-none mb-8">
      <Trophy size={40} />
    </div>
    
    <h2 className="text-4xl font-black text-slate-900 font-display mb-2 uppercase tracking-tight">Quiz Selesai!</h2>
    <p className="text-slate-600 font-bold mb-10 text-sm uppercase tracking-widest">Rekap Hasil Anda</p>

    <div className="grid grid-cols-2 gap-4 mb-10">
      <div className="bg-slate-50 neo-border neo-shadow p-6 col-span-2">
        <span className="text-6xl font-black text-slate-900 block font-display italic">{result.score}</span>
        <span className="text-xs text-slate-400 uppercase font-black tracking-widest">Skor Akhir</span>
      </div>
      <div className="bg-green-50 neo-border neo-shadow p-4">
        <span className="text-3xl font-black text-green-700 block font-display">{result.correct}</span>
        <span className="text-[10px] text-green-600 uppercase font-bold tracking-widest">Benar</span>
      </div>
      <div className="bg-rose-50 neo-border neo-shadow p-4">
        <span className="text-3xl font-black text-rose-600 block font-display">{result.incorrect}</span>
        <span className="text-[10px] text-rose-500 uppercase font-bold tracking-widest">Salah</span>
      </div>
    </div>

    <div className="space-y-4">
      <button
        id="btn-ulang"
        onClick={onRestart}
        className="w-full neo-btn neo-border neo-shadow bg-indigo-600 text-white font-black py-4 rounded-none hover:bg-indigo-700 uppercase tracking-widest"
      >
        <RotateCcw size={20} className="inline mr-2" />
        Coba Lagi
      </button>
      <button
        id="btn-beranda"
        onClick={() => window.location.reload()}
        className="w-full text-slate-500 hover:text-black font-black py-2 text-xs uppercase tracking-widest transition-colors"
      >
        Kembali ke Beranda
      </button>
    </div>
  </motion.div>
);

// --- Main App Component ---

export default function App() {
  const [state, setState] = useState<AppState>('MENU');
  const [result, setResult] = useState<QuizResult | null>(null);

  const startQuiz = () => {
    setState('QUIZ');
    setResult(null);
  };

  const finishQuiz = (res: QuizResult) => {
    setResult(res);
    setState('RESULT');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-200">
      <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 neo-border neo-shadow flex items-center justify-center text-white font-black text-xl">
            Q
          </div>
          <h1 className="text-xl font-black uppercase tracking-tighter">
            QUIZ <span className="text-indigo-600">APP</span>
          </h1>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen pt-24 pb-12 px-4 relative z-0">
        <AnimatePresence mode="wait">
          {state === 'MENU' && (
            <motion.div key="menu-container" className="w-full h-full flex items-center justify-center">
              <MainMenu onStart={startQuiz} />
            </motion.div>
          )}
          {state === 'QUIZ' && (
            <motion.div key="quiz-container" className="w-full">
              <QuizSession onComplete={finishQuiz} />
            </motion.div>
          )}
          {state === 'RESULT' && result && (
            <motion.div key="result-container" className="w-full">
              <ResultsView result={result} onRestart={startQuiz} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Decorative background elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-50 rounded-full blur-3xl opacity-30" />
      </div>
    </div>
  );
}
