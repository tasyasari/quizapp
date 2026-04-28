/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, LogOut, CheckCircle2, RotateCcw, Trophy, User, School, GraduationCap, BookOpen, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { AppState, QuizResult, UserProfile, EducationLevel, Subject, QuizSelection, SMAMajor } from './types';
import { QUESTIONS } from './constants';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4, 
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -30,
    transition: { duration: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

// --- Components ---

const MainMenu = ({ onStart }: { onStart: () => void }) => (
  <motion.div 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    className="flex flex-col items-center justify-center min-h-[60vh] p-6"
  >
    <div className="bg-white neo-border neo-shadow-lg p-12 flex flex-col items-center max-w-md w-full text-center">
      <motion.div
        variants={itemVariants}
        className="w-20 h-20 bg-indigo-600 neo-border neo-shadow flex items-center justify-center mb-8 text-white font-black text-4xl"
      >
        Q
      </motion.div>
      
      <motion.h1 
        variants={itemVariants}
        className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter"
      >
        Quiz Sederhana
      </motion.h1>
      <motion.p 
        variants={itemVariants}
        className="text-slate-600 font-medium mb-12"
      >
        Uji pengetahuan Anda dengan kuis pilihan ganda interaktif ini.
      </motion.p>

      <div className="flex flex-col gap-4 w-full">
        <motion.button
          variants={itemVariants}
          id="btn-mulai"
          onClick={onStart}
          className="neo-btn neo-border neo-shadow bg-indigo-600 text-white font-black py-4 px-8 rounded-none hover:bg-indigo-700 uppercase tracking-widest flex items-center justify-center gap-3"
        >
          <Play size={20} fill="currentColor" />
          Mulai Quiz
        </motion.button>
        <motion.button
          variants={itemVariants}
          id="btn-keluar"
          onClick={() => window.location.href = 'about:blank'}
          className="neo-btn neo-border neo-shadow bg-rose-100 text-rose-700 font-black py-4 px-8 rounded-none hover:bg-rose-200 uppercase tracking-widest flex items-center justify-center gap-3"
        >
          <LogOut size={20} />
          Keluar
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const ProfileForm = ({ onNext }: { onNext: (profile: UserProfile) => void }) => {
  const [profile, setProfile] = useState<UserProfile>({ name: '', className: '', school: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.name && profile.className && profile.school) {
      onNext(profile);
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-md mx-auto w-full"
    >
      <form onSubmit={handleSubmit} className="bg-white neo-border neo-shadow-lg p-10 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-amber-100 neo-border neo-shadow flex items-center justify-center text-amber-600">
            <User size={24} />
          </div>
          <h2 className="text-2xl font-black uppercase font-display italic">Data Diri</h2>
        </div>

        <div className="space-y-6 mb-10">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Nama Lengkap</label>
            <div className="relative">
              <input 
                required
                value={profile.name}
                onChange={e => setProfile({...profile, name: e.target.value})}
                className="w-full neo-border p-4 pl-12 focus:bg-slate-50 outline-none font-bold"
                placeholder="Masukkan nama..."
              />
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Kelas</label>
            <div className="relative">
              <input 
                required
                value={profile.className}
                onChange={e => setProfile({...profile, className: e.target.value})}
                className="w-full neo-border p-4 pl-12 focus:bg-slate-50 outline-none font-bold"
                placeholder="Contoh: 10 IPA 1"
              />
              <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Asal Sekolah</label>
            <div className="relative">
              <input 
                required
                value={profile.school}
                onChange={e => setProfile({...profile, school: e.target.value})}
                className="w-full neo-border p-4 pl-12 focus:bg-slate-50 outline-none font-bold"
                placeholder="Nama sekolah..."
              />
              <School className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
            </div>
          </div>
        </div>

        <button 
          type="submit"
          className="neo-btn neo-border neo-shadow bg-black text-white font-black py-4 uppercase tracking-widest flex items-center justify-center gap-2"
        >
          Lanjutkan
          <ChevronRight size={20} />
        </button>
      </form>
    </motion.div>
  );
};

const LevelSelect = ({ onSelect }: { onSelect: (level: EducationLevel) => void }) => {
  const levels: EducationLevel[] = ['SD', 'SMP', 'SMA'];
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-3xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      <div className="col-span-1 md:col-span-3 text-center mb-4">
        <h2 className="text-3xl font-black uppercase italic font-display">Pilih Jenjang</h2>
        <p className="text-slate-500 font-bold">Sesuaikan tingkat kesulitan soal</p>
      </div>
      {levels.map(level => (
        <button
          key={level}
          onClick={() => onSelect(level)}
          className="neo-btn neo-border neo-shadow bg-white p-8 group hover:bg-black hover:text-white flex flex-col items-center justify-center gap-4 aspect-square"
        >
          <div className="w-16 h-16 neo-border neo-shadow bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-white group-hover:border-white">
            <span className="text-2xl font-black">{level}</span>
          </div>
          <span className="font-black text-xl uppercase italic">Tingkat {level}</span>
        </button>
      ))}
    </motion.div>
  );
};

const SMAMajorSelect = ({ onSelect }: { onSelect: (major: SMAMajor) => void }) => {
  const majors: { id: SMAMajor; label: string; desc: string; icon: any }[] = [
    { id: 'IPA', label: 'IPA', desc: 'Sains & Teknologi', icon: Trophy },
    { id: 'IPS', label: 'IPS', desc: 'Sosial & Ekonomi', icon: BookOpen },
    { id: 'Umum', label: 'Umum', desc: 'Pengetahuan Umum', icon: Play },
  ];
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-2xl mx-auto w-full grid grid-cols-1 gap-6"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl font-black uppercase italic font-display">Pilih Jurusan SMA</h2>
        <p className="text-slate-500 font-bold">Tentukan fokus bidang studi Anda</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {majors.map(major => (
          <button
            key={major.id}
            onClick={() => onSelect(major.id)}
            className="neo-btn neo-border neo-shadow bg-white p-8 group hover:bg-indigo-600 hover:text-white flex flex-col items-center gap-4"
          >
            <div className="w-14 h-14 neo-border neo-shadow bg-slate-50 text-slate-600 flex items-center justify-center group-hover:bg-white group-hover:border-white shrink-0">
              <major.icon size={24} />
            </div>
            <div className="text-center">
              <span className="font-black text-2xl uppercase font-display block">{major.label}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{major.desc}</span>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

const SubjectSelect = ({ selection, onSelect }: { selection: QuizSelection, onSelect: (subject: Subject) => void }) => {
  const subjects: Subject[] = useMemo(() => {
    if (selection.level === 'SMA') {
      if (selection.major === 'IPA') return ['Biologi', 'Fisika', 'Pengetahuan Umum'];
      if (selection.major === 'IPS') return ['Ekonomi', 'Geografi', 'Pengetahuan Umum'];
      return ['Pengetahuan Umum', 'Bahasa Indonesia'];
    }
    return ['Pengetahuan Umum', 'Matematika', 'IPA', 'Bahasa Indonesia'];
  }, [selection]);

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="col-span-1 md:col-span-2 text-center mb-4">
        <h2 className="text-3xl font-black uppercase italic font-display">Pilih Mata Pelajaran</h2>
        <p className="text-slate-500 font-bold">Fokus belajar pada satu topik</p>
      </div>
      {subjects.map(subject => (
        <button
          key={subject}
          onClick={() => onSelect(subject)}
          className="neo-btn neo-border neo-shadow bg-white p-8 group hover:bg-black hover:text-white flex items-center gap-6"
        >
          <div className="w-14 h-14 neo-border neo-shadow bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-white group-hover:border-white shrink-0">
            <BookOpen size={24} />
          </div>
          <span className="font-black text-xl text-left uppercase tracking-tighter leading-tight">{subject}</span>
        </button>
      ))}
    </motion.div>
  );
};

const QuizSession = ({ selection, profile, onComplete }: { selection: QuizSelection, profile: UserProfile, onComplete: (result: QuizResult) => void }) => {
  const filteredQuestions = useMemo(() => {
    return QUESTIONS.filter(q => {
      const matchLevel = q.level === selection.level;
      const matchSubject = q.subject === selection.subject;
      const matchMajor = selection.level === 'SMA' ? q.major === selection.major : true;
      return matchLevel && matchSubject && matchMajor;
    });
  }, [selection]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  
  if (filteredQuestions.length === 0) {
    return (
      <div className="neo-border neo-shadow bg-white p-12 text-center max-w-md mx-auto">
        <h2 className="text-2xl font-black mb-4">Yah, Maaf!</h2>
        <p className="text-slate-500 font-bold mb-8">Belum ada pertanyaan untuk kategori ini.</p>
        <button onClick={() => window.location.reload()} className="neo-btn neo-border neo-shadow bg-black text-white px-8 py-3 font-black uppercase">Kembali</button>
      </div>
    );
  }

  const question = filteredQuestions[currentIdx];
  const progress = Math.round(((currentIdx + 1) / filteredQuestions.length) * 100);

  const handleSelect = (optionIdx: number) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
  };

  const nextQuestion = () => {
    if (currentIdx < filteredQuestions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      let correct = 0;
      filteredQuestions.forEach((q, idx) => {
        if (answers[idx] === q.correctAnswer) correct++;
      });
      onComplete({
        profile,
        selection,
        correct,
        incorrect: filteredQuestions.length - correct,
        score: Math.round((correct / filteredQuestions.length) * 100),
        totalQuestions: filteredQuestions.length
      });
    }
  };

  const prevQuestion = () => {
    if (currentIdx > 0) setCurrentIdx(prev => prev - 1);
  };

  return (
    <div className="max-w-5xl mx-auto w-full p-4 flex flex-col min-h-[80vh]">
      <div className="grid grid-cols-12 grid-rows-2 gap-4 mb-4">
        <div className="col-span-12 md:col-span-8 row-span-2 bg-white neo-border neo-shadow p-8 flex flex-col justify-center">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2 font-display">
            Pertanyaan Ke-{currentIdx + 1}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-display leading-tight">
            {question.text}
          </h2>
        </div>

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

        <div className="col-span-6 md:col-span-2 row-span-1 bg-amber-50 neo-border neo-shadow flex flex-col items-center justify-center p-4">
          <span className="text-[10px] font-black uppercase text-slate-400">Sisa Waktu</span>
          <span className="text-xl font-black font-display">15:00</span>
        </div>

        <div className="col-span-6 md:col-span-2 row-span-1 bg-emerald-50 neo-border neo-shadow flex flex-col items-center justify-center p-4">
          <span className="text-[10px] font-black uppercase text-slate-400">Skor</span>
          <span className="text-xl font-black font-display">
            {Object.entries(answers).filter(([idx, ans]) => filteredQuestions[parseInt(idx)].correctAnswer === ans).length * 10}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-2"
          >
            {question.options.map((option, idx) => {
              const labels = ['A', 'B', 'C', 'D'];
              const isSelected = answers[currentIdx] === idx;
              return (
                <button
                  key={idx}
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

      <footer className="mt-8 flex justify-between items-center bg-white neo-border neo-shadow p-4">
        <button
          disabled={currentIdx === 0}
          onClick={prevQuestion}
          className="flex items-center gap-2 font-black px-4 py-2 disabled:opacity-30 uppercase tracking-widest text-slate-500 hover:text-black transition-colors"
        >
          <ArrowLeft size={20} strokeWidth={3} />
          Kembali
        </button>
        
        <button
          disabled={answers[currentIdx] === undefined}
          onClick={nextQuestion}
          className={`neo-btn neo-border neo-shadow flex items-center gap-2 px-8 py-3 font-black uppercase tracking-widest ${
            answers[currentIdx] === undefined
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200 shadow-none'
            : 'bg-black text-white hover:bg-slate-900'
          }`}
        >
          {currentIdx === filteredQuestions.length - 1 ? 'Selesai' : 'Lanjut'}
          <ArrowRight size={20} strokeWidth={3} />
        </button>
      </footer>
    </div>
  );
};

const ResultsView = ({ result, onRestart }: { result: QuizResult, onRestart: () => void }) => {
  const getMotivationalMessage = () => {
    if (result.score === 100) return { title: "Luar Biasa!", desc: "Kamu benar-benar jenius!", icon: <Trophy className="text-amber-500" size={48} /> };
    if (result.score >= 80) return { title: "Hebat!", desc: "Pengetahuanmu sangat luas!", icon: <CheckCircle2 className="text-green-500" size={48} /> };
    if (result.score >= 60) return { title: "Bagus!", desc: "Terus tingkatkan belajarmu!", icon: <BookOpen className="text-indigo-500" size={48} /> };
    return { title: "Semangat!", desc: "Jangan menyerah, coba lagi yuk!", icon: <RotateCcw className="text-rose-500" size={48} /> };
  };

  const message = getMotivationalMessage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto w-full bg-white neo-border neo-shadow-lg p-10 md:p-12 text-center"
    >
      <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-50 neo-border neo-shadow mb-8 scale-110">
        {message.icon}
      </div>
      
      <h2 className="text-5xl font-black text-slate-900 font-display mb-2 uppercase tracking-tighter italic">{message.title}</h2>
      <p className="text-slate-600 font-bold mb-10 text-lg uppercase tracking-widest leading-none">{message.desc}</p>

      <div className="bg-slate-50 neo-border neo-shadow p-6 mb-8 text-left relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/5 rotate-12 translate-x-8 -translate-y-8" />
        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <User size={12} /> Kartu Peserta
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          <div>
            <span className="block text-[10px] uppercase font-black text-slate-400 mb-1">Nama</span>
            <span className="font-black text-xl font-display uppercase italic text-slate-800">{result.profile.name}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase font-black text-slate-400 mb-1">Kelas</span>
            <span className="font-black text-xl font-display uppercase italic text-slate-800">{result.profile.className}</span>
          </div>
           <div>
            <span className="block text-[10px] uppercase font-black text-slate-400 mb-1">Kategori</span>
            <span className="font-black text-sm font-display uppercase italic text-indigo-600 leading-tight block">{result.selection.subject}<br/>({result.selection.level})</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-white neo-border neo-shadow p-6 col-span-2 md:col-span-2 flex flex-col justify-center items-center group hover:bg-slate-900 transition-colors">
          <span className="text-7xl font-black text-slate-900 group-hover:text-white block font-display italic leading-none">{result.score}</span>
          <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-2">Skor Akhir</span>
        </div>
        <div className="bg-green-50 neo-border neo-shadow p-4 flex flex-col justify-center border-green-200">
          <span className="text-4xl font-black text-green-700 block font-display italic">{result.correct}</span>
          <span className="text-[10px] text-green-600 uppercase font-bold tracking-widest">Berhasil</span>
        </div>
        <div className="bg-rose-50 neo-border neo-shadow p-4 flex flex-col justify-center border-rose-200">
          <span className="text-4xl font-black text-rose-600 block font-display italic">{result.incorrect}</span>
          <span className="text-[10px] text-rose-500 uppercase font-bold tracking-widest">Gagal</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={onRestart}
          className="neo-btn neo-border neo-shadow bg-indigo-600 text-white font-black py-5 rounded-none hover:bg-indigo-700 uppercase tracking-widest flex items-center justify-center gap-3"
        >
          <RotateCcw size={20} strokeWidth={3} />
          Ulangi Quiz
        </button>
        <button
          onClick={() => window.location.reload()}
          className="neo-btn neo-border neo-shadow bg-white text-slate-900 font-black py-5 rounded-none hover:bg-slate-50 uppercase tracking-widest border-2"
        >
          Ke Beranda
        </button>
      </div>
    </motion.div>
  );
};

// --- Main App Component ---

export default function App() {
  const [state, setState] = useState<AppState>('MENU');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [selection, setSelection] = useState<QuizSelection | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  const startQuizFlow = () => setState('PROFILE');
  
  const handleProfileComplete = (p: UserProfile) => {
    setProfile(p);
    setState('LEVEL_SELECT');
  };

  const handleLevelSelect = (level: EducationLevel) => {
    if (level === 'SMA') {
      setSelection({ level, subject: 'Pengetahuan Umum', major: 'Umum' });
      setState('SMA_MAJOR_SELECT');
    } else {
      setSelection({ level, subject: 'Pengetahuan Umum' });
      setState('SUBJECT_SELECT');
    }
  };

  const handleMajorSelect = (major: SMAMajor) => {
    if (selection) {
      setSelection({ ...selection, major });
      setState('SUBJECT_SELECT');
    }
  };

  const handleSubjectSelect = (subject: Subject) => {
    if (selection) {
      setSelection({ ...selection, subject });
      setState('QUIZ');
    }
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
            <motion.div key="menu" className="w-full flex items-center justify-center">
              <MainMenu onStart={startQuizFlow} />
            </motion.div>
          )}
          {state === 'PROFILE' && (
            <motion.div key="profile" className="w-full">
              <ProfileForm onNext={handleProfileComplete} />
            </motion.div>
          )}
          {state === 'LEVEL_SELECT' && (
            <motion.div key="level" className="w-full">
              <LevelSelect onSelect={handleLevelSelect} />
            </motion.div>
          )}
          {state === 'SMA_MAJOR_SELECT' && (
            <motion.div key="sma-major" className="w-full">
              <SMAMajorSelect onSelect={handleMajorSelect} />
            </motion.div>
          )}
          {state === 'SUBJECT_SELECT' && selection && (
            <motion.div key="subject" className="w-full">
              <SubjectSelect selection={selection} onSelect={handleSubjectSelect} />
            </motion.div>
          )}
          {state === 'QUIZ' && selection && profile && (
            <motion.div key="quiz" className="w-full">
              <QuizSession selection={selection} profile={profile} onComplete={res => { 
                setResult(res); 
                setState('RESULT'); 
              }} />
            </motion.div>
          )}
          {state === 'RESULT' && result && (
            <motion.div key="result" className="w-full">
              <ResultsView result={result} onRestart={() => setState('LEVEL_SELECT')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
