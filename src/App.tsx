import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, LogOut, CheckCircle2, RotateCcw, Trophy, User, School, 
  GraduationCap, BookOpen, ChevronRight, ArrowLeft, ArrowRight, 
  Timer, Zap, Shield, HelpCircle, SkipForward, Clock, BarChart3,
  Award, Star, Flame, Volume2, VolumeX, Moon, Sun, Monitor
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  AppState, QuizResult, UserProfile, EducationLevel, Subject, 
  Difficulty, Question, Lifelines, QuizSessionState 
} from './types';
import { QUESTIONS } from './constants';

// --- Helpers ---
const INITIAL_STATS = {
  xp: 0,
  level: 1,
  totalCorrect: 0,
  bestStreak: 0,
  highestScore: 0,
  badges: [],
  history: []
};

// --- Animations ---
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0, y: -20 }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

// --- Sub-components ---

const Badge = ({ name, icon: Icon }: { name: string, icon: any }) => (
  <div className="flex flex-col items-center gap-2 p-4 bg-white neo-border neo-shadow group hover:-translate-y-1 transition-transform">
    <div className="w-12 h-12 bg-amber-100 flex items-center justify-center text-amber-600 neo-border neo-shadow">
      <Icon size={24} />
    </div>
    <span className="text-[10px] font-black uppercase text-center leading-tight">{name}</span>
  </div>
);

// --- Main Screens ---

const MainMenu = ({ profile, onStart, onMarathon, onLeaderboard, onReset }: { profile: UserProfile | null, onStart: () => void, onMarathon: () => void, onLeaderboard: () => void, onReset: () => void }) => (
  <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 p-4">
    <div className="md:col-span-8 bg-white neo-border neo-shadow-lg p-10 flex flex-col justify-between">
      <div>
        <div className="w-16 h-16 bg-indigo-600 neo-border neo-shadow flex items-center justify-center mb-6 text-white text-3xl font-black">Q</div>
        <h1 className="text-5xl md:text-6xl font-black font-display uppercase italic tracking-tighter mb-4">Quiz Master <span className="text-indigo-600 font-normal">Ultra</span></h1>
        <p className="text-slate-500 font-bold text-lg mb-10 max-w-md">Tingkatkan rank, dapatkan medali, dan kuasai materi sekolah dengan cara yang seru!</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button onClick={onStart} className="neo-btn neo-border neo-shadow bg-indigo-600 text-white font-black py-5 px-8 uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-700">
          <Play size={24} fill="currentColor" /> Mulai Belajar
        </button>
        <button onClick={onMarathon} className="neo-btn neo-border neo-shadow bg-amber-500 text-white font-black py-5 px-8 uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-amber-600">
          <Flame size={24} fill="currentColor" /> Mode Marathon
        </button>
        <button onClick={onLeaderboard} className="col-span-1 sm:col-span-2 neo-btn neo-border neo-shadow bg-white text-slate-900 font-black py-5 px-8 uppercase tracking-widest flex items-center justify-center gap-3">
          <BarChart3 size={24} /> Leaderboard
        </button>
      </div>
    </div>

    <div className="md:col-span-4 space-y-6">
      {profile ? (
        <div className="bg-white neo-border neo-shadow p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 neo-border neo-shadow flex items-center justify-center text-amber-600"><User /></div>
            <div>
              <p className="text-[10px] font-black uppercase text-slate-400">Pemain</p>
              <h2 className="text-xl font-black font-display uppercase italic leading-none">{profile.name}</h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <span className="text-xs font-black uppercase text-slate-400">Level {profile.stats.level}</span>
              <span className="text-xs font-black uppercase text-slate-400">{profile.stats.xp % 1000} / 1000 XP</span>
            </div>
            <div className="h-4 bg-slate-100 neo-border p-1">
              <div className="h-full bg-indigo-600" style={{ width: `${(profile.stats.xp % 1000) / 10}%` }} />
            </div>
          </div>
          <button onClick={onReset} className="mt-6 text-[10px] font-black uppercase text-rose-500 hover:underline">Ganti Akun</button>
        </div>
      ) : (
        <div className="bg-amber-50 neo-border neo-shadow p-6 text-center italic font-bold text-slate-600">
          Lengkapi profil untuk menyimpan progres belajarmu!
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white neo-border neo-shadow p-4 flex flex-col items-center">
          <Award size={20} className="text-amber-500 mb-2" />
          <span className="text-xl font-black">{profile?.stats.badges.length || 0}</span>
          <span className="text-[8px] font-black uppercase text-slate-400">Badges</span>
        </div>
        <div className="bg-white neo-border neo-shadow p-4 flex flex-col items-center">
          <Zap size={20} className="text-indigo-600 mb-2" />
          <span className="text-xl font-black">{profile?.stats.xp || 0}</span>
          <span className="text-[8px] font-black uppercase text-slate-400">XP</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const ProfileForm = ({ onNext }: { onNext: (profile: UserProfile) => void }) => {
  const [name, setName] = useState('');
  const [className, setClassName] = useState('');
  const [school, setSchool] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ name, className, school, stats: INITIAL_STATS });
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="max-w-md w-full bg-white neo-border neo-shadow-lg p-10">
      <h2 className="text-3xl font-black font-display uppercase italic mb-8">Siapa Kamu?</h2>
      <form onSubmit={submit} className="space-y-6">
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Nama Lengkap</label>
          <input required value={name} onChange={e => setName(e.target.value)} placeholder="Contoh: Sang Juara" className="w-full neo-border p-4 font-black focus:bg-slate-50 outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Kelas / Tingkat</label>
          <input required value={className} onChange={e => setClassName(e.target.value)} placeholder="Contoh: 12 IPA 1" className="w-full neo-border p-4 font-black focus:bg-slate-50 outline-none" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Asal Sekolah</label>
          <input required value={school} onChange={e => setSchool(e.target.value)} placeholder="Contoh: SMA Negeri 1" className="w-full neo-border p-4 font-black focus:bg-slate-50 outline-none" />
        </div>
        <button type="submit" className="w-full neo-btn neo-border neo-shadow bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-slate-900 flex items-center justify-center gap-2">
          Hajar Soal! <ChevronRight size={20} />
        </button>
      </form>
    </motion.div>
  );
};

const QuizPicker = ({ onSelect }: { onSelect: (level: EducationLevel, subject: Subject, difficulty: Difficulty) => void }) => {
  const [level, setLevel] = useState<EducationLevel | null>(null);
  const [subject, setSubject] = useState<Subject | null>(null);

  const levels: EducationLevel[] = ['SD', 'SMP', 'SMA'];
  const subjects: Subject[] = ['Matematika', 'IPA', 'IPS', 'Bahasa Indonesia', 'Bahasa Inggris', 'PPKn'];
  const difficulties: Difficulty[] = ['Easy', 'Medium', 'Hard'];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="max-w-4xl w-full bg-white neo-border neo-shadow-lg p-10">
      {!level ? (
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-black font-display uppercase italic">Pilih Jenjang</h2>
            <p className="text-slate-500 font-bold">Materi disesuaikan dengan kurikulum nasional</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map(l => (
              <button key={l} onClick={() => setLevel(l)} className="neo-btn neo-border neo-shadow bg-white p-10 group hover:bg-indigo-600 hover:text-white transition-colors">
                <span className="block text-4xl font-black font-display italic mb-2">{l}</span>
                <span className="text-[10px] font-black uppercase opacity-60">Tingkat {l}</span>
              </button>
            ))}
          </div>
        </div>
      ) : !subject ? (
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setLevel(null)} className="text-[10px] font-black uppercase flex items-center gap-1 hover:text-indigo-600"><ArrowLeft size={14} /> Kembali</button>
            <h2 className="text-3xl font-black font-display uppercase italic">Pilih Mata Pelajaran</h2>
            <div className="w-12" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {subjects.map(s => (
              <button key={s} onClick={() => setSubject(s)} className="neo-btn neo-border neo-shadow bg-white p-6 group hover:bg-indigo-600 hover:text-white flex flex-col items-center">
                <BookOpen size={24} className="mb-2" />
                <span className="text-sm font-black uppercase text-center leading-tight">{s}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setSubject(null)} className="text-[10px] font-black uppercase flex items-center gap-1 hover:text-indigo-600"><ArrowLeft size={14} /> Kembali</button>
            <h2 className="text-3xl font-black font-display uppercase italic">Pilih Kesulitan</h2>
            <div className="w-12" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {difficulties.map(d => (
              <button key={d} onClick={() => onSelect(level, subject, d)} className="neo-btn neo-border neo-shadow bg-white p-10 group hover:bg-black hover:text-white">
                <span className={d === 'Hard' ? "text-rose-500 group-hover:text-white block text-2xl font-black italic mb-2" : "block text-2xl font-black italic mb-2"}>{d}</span>
                <span className="text-[10px] font-black uppercase opacity-60">Level {d}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const QuizSession = ({ level, subject, difficulty, profile, onComplete }: { level: EducationLevel, subject: Subject, difficulty: Difficulty, profile: UserProfile, onComplete: (res: QuizResult) => void }) => {
  const filteredQuestions = useMemo(() => {
    const q = QUESTIONS.filter(q => q.level === level && q.subject === subject && q.difficulty === difficulty);
    return q.sort(() => Math.random() - 0.5).slice(0, 30).map(question => {
      const options = [...question.options];
      const correctText = options[question.correctAnswer];
      // Shuffle options
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[options[j] ? j : i]] = [options[options[j] ? j : i], options[i]];
      }
      // Actually simpler shuffle
      const shuffled = [...question.options].sort(() => Math.random() - 0.5);
      const newCorrectIdx = shuffled.indexOf(correctText);
      return { ...question, options: shuffled, correctAnswer: newCorrectIdx };
    });
  }, [level, subject, difficulty]);

  const [state, setState] = useState<QuizSessionState>({
    currentQuestionIdx: 0,
    answers: {},
    timeSpent: 0,
    streak: 0,
    multiplier: 1,
    score: 0,
    lifelines: { fiftyFifty: true, skip: true, freeze: true },
    isFinished: false,
    startTime: Date.now(),
    questions: filteredQuestions
  });

  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isFrozen, setIsFrozen] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState<number[]>([]);

  useEffect(() => {
    if (state.isFinished || state.questions.length === 0) return;
    
    if (timeRemaining <= 0) {
      handleAnswer(-1); // Timeout as wrong
      return;
    }

    const timer = !isFrozen && setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, isFrozen, state.isFinished]);

  if (state.questions.length === 0) {
    return (
      <div className="bg-white neo-border neo-shadow p-12 text-center">
        <h2 className="text-2xl font-black mb-4">Waduh!</h2>
        <p className="font-bold text-slate-500 mb-8 text-sm">Belum ada soal untuk kategori {level} - {subject} ({difficulty})</p>
        <button onClick={() => window.location.reload()} className="neo-btn neo-border neo-shadow bg-black text-white px-8 py-3 font-black uppercase">Kembali</button>
      </div>
    );
  }

  const question = state.questions[state.currentQuestionIdx];

  const handleAnswer = (ansIdx: number) => {
    if (showExplanation) return;
    
    const isCorrect = ansIdx === question.correctAnswer;
    const speedBonus = timeRemaining > 20 ? 50 : 0;
    const points = isCorrect ? (100 * state.multiplier + speedBonus) : 0;
    
    if (isCorrect) {
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.8 }, colors: ['#4f46e5', '#818cf8', '#ffffff'] });
    }

    setState(prev => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      let newMultiplier = 1;
      if (newStreak >= 5) newMultiplier = 3;
      else if (newStreak >= 3) newMultiplier = 2;

      return {
        ...prev,
        answers: { ...prev.answers, [prev.currentQuestionIdx]: ansIdx },
        score: prev.score + points,
        streak: newStreak,
        multiplier: newMultiplier,
      };
    });

    setShowExplanation(true);
  };

  const next = () => {
    setShowExplanation(false);
    setDisabledOptions([]);
    setIsFrozen(false);
    if (state.currentQuestionIdx < state.questions.length - 1) {
      setState(prev => ({ ...prev, currentQuestionIdx: prev.currentQuestionIdx + 1 }));
      setTimeRemaining(30);
    } else {
      const totalTime = Math.floor((Date.now() - state.startTime) / 1000);
      const correctCount = Object.values(state.answers).filter((ans, idx) => state.questions[idx].correctAnswer === ans).length;
      onComplete({
        profile,
        score: state.score,
        accuracy: (correctCount / state.questions.length) * 100,
        topStreak: state.streak, // Simplified
        totalTime,
        badgesEarned: correctCount === state.questions.length ? ["Perfect Score"] : [],
        stats: {
          correct: correctCount,
          wrong: state.questions.length - correctCount,
          speedBonus: 0 // Track separately if needed
        }
      });
    }
  };

  const use5050 = () => {
    if (!state.lifelines.fiftyFifty || showExplanation) return;
    const correct = question.correctAnswer;
    const wrong = [0, 1, 2, 3].filter(i => i !== correct);
    const toDisable = wrong.sort(() => Math.random() - 0.5).slice(0, 2);
    setDisabledOptions(toDisable);
    setState(prev => ({ ...prev, lifelines: { ...prev.lifelines, fiftyFifty: false } }));
  };

  const useSkip = () => {
    if (!state.lifelines.skip || showExplanation) return;
    setState(prev => ({ ...prev, lifelines: { ...prev.lifelines, skip: false } }));
    next();
  };

  const useFreeze = () => {
    if (!state.lifelines.freeze || showExplanation) return;
    setIsFrozen(true);
    setState(prev => ({ ...prev, lifelines: { ...prev.lifelines, freeze: false } }));
    setTimeout(() => setIsFrozen(false), 10000);
  };

  return (
    <div className="max-w-6xl w-full flex flex-col gap-6 p-4">
      {/* Header Info */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 bg-white neo-border neo-shadow p-6 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-indigo-600 mb-2">
            <Award size={14} /> {level} • {subject} • {difficulty}
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-display leading-tight">{question.text}</h2>
        </div>
        
        <div className="md:col-span-4 grid grid-cols-2 gap-4">
          <div className="bg-white neo-border neo-shadow p-4 flex flex-col items-center justify-center relative overflow-hidden">
            <div className={`absolute bottom-0 left-0 h-1 bg-indigo-600 transition-all duration-300`} style={{ width: `${(timeRemaining/30)*100}%` }} />
            <Timer className={timeRemaining < 10 ? "text-rose-500 animate-pulse" : "text-indigo-600"} size={20} />
            <span className={`text-2xl font-black font-display italic ${timeRemaining < 10 ? "text-rose-500" : ""}`}>{timeRemaining}s</span>
          </div>
          <div className="bg-slate-900 neo-border neo-shadow p-4 flex flex-col items-center justify-center text-white">
            <span className="text-[10px] font-black uppercase opacity-50">Score</span>
            <span className="text-2xl font-black font-display italic">{state.score}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map((opt, i) => {
              const isCorrect = i === question.correctAnswer;
              const isSelected = state.answers[state.currentQuestionIdx] === i;
              const labels = ['A', 'B', 'C', 'D'];
              const isDisabled = disabledOptions.includes(i);

              let btnClass = "bg-white hover:bg-slate-50";
              if (showExplanation) {
                if (isCorrect) btnClass = "bg-green-500 text-white border-green-600";
                else if (isSelected) btnClass = "bg-rose-500 text-white border-rose-600";
                else btnClass = "opacity-50 grayscale pointer-events-none";
              } else if (isSelected) {
                btnClass = "bg-indigo-600 text-white border-indigo-700";
              } else if (isDisabled) {
                btnClass = "opacity-20 pointer-events-none";
              }

              return (
                <button
                  key={i}
                  disabled={showExplanation || isDisabled}
                  onClick={() => handleAnswer(i)}
                  className={`neo-btn neo-border neo-shadow p-6 text-left flex items-center transition-all ${btnClass}`}
                >
                  <span className={`w-10 h-10 neo-border flex items-center justify-center font-black mr-4 shrink-0 ${showExplanation && isCorrect ? 'bg-white text-green-500 border-white' : 'bg-slate-100 text-slate-800'}`}>
                    {labels[i]}
                  </span>
                  <span className="font-black text-lg font-display tracking-tight leading-tight">{opt}</span>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-indigo-50 neo-border neo-shadow p-6">
               <h4 className="text-xs font-black uppercase text-indigo-600 mb-2 flex items-center gap-1"><HelpCircle size={14} /> Pembahasan:</h4>
               <p className="font-bold text-slate-700 leading-relaxed">{question.explanation}</p>
               <button onClick={next} className="mt-6 neo-btn neo-border neo-shadow bg-black text-white w-full py-3 font-black uppercase tracking-widest hover:bg-slate-900">Lanjut <ArrowRight size={20} className="inline ml-2" /></button>
            </motion.div>
          )}
        </div>

        {/* Sidebar Status */}
        <div className="md:col-span-4 space-y-4">
          {/* Lifelines */}
          <div className="bg-white neo-border neo-shadow p-6">
            <h3 className="text-xs font-black uppercase text-slate-400 mb-4">Bantuan (Lifelines)</h3>
            <div className="grid grid-cols-3 gap-2">
              <button disabled={!state.lifelines.fiftyFifty || showExplanation} onClick={use5050} className={`p-4 neo-border neo-shadow flex flex-col items-center gap-1 ${state.lifelines.fiftyFifty ? "bg-amber-50 text-amber-700" : "bg-slate-50 text-slate-300 grayscale"}`}>
                <Shield size={18} /> <span className="text-[8px] font-black uppercase">50:50</span>
              </button>
              <button disabled={!state.lifelines.skip || showExplanation} onClick={useSkip} className={`p-4 neo-border neo-shadow flex flex-col items-center gap-1 ${state.lifelines.skip ? "bg-amber-50 text-amber-700" : "bg-slate-50 text-slate-300 grayscale"}`}>
                <SkipForward size={18} /> <span className="text-[8px] font-black uppercase">Skip</span>
              </button>
              <button disabled={!state.lifelines.freeze || showExplanation} onClick={useFreeze} className={`p-4 neo-border neo-shadow flex flex-col items-center gap-1 ${state.lifelines.freeze ? "bg-amber-50 text-amber-700" : "bg-slate-50 text-slate-300 grayscale"}`}>
                <Clock size={18} /> <span className="text-[8px] font-black uppercase">Freeze</span>
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bg-slate-50 neo-border neo-shadow p-6">
            <div className="flex justify-between items-center mb-6">
               <span className="text-xs font-black uppercase text-slate-400">Soal {state.currentQuestionIdx + 1} / {state.questions.length}</span>
               <div className="flex items-center gap-1 text-orange-500">
                  <Flame size={16} fill="currentColor" />
                  <span className="font-black">Combo x{state.multiplier}</span>
               </div>
            </div>
            <div className="h-6 bg-white neo-border p-1">
              <div className="h-full bg-indigo-600 transition-all" style={{ width: `${((state.currentQuestionIdx + 1) / state.questions.length) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResultsView = ({ result, profile, onRestart }: { result: QuizResult, profile: UserProfile, onRestart: () => void }) => {
  const getFeedback = () => {
    if (result.accuracy >= 90) return { title: "Dewa Pelajar!", sub: "IQ kamu pasti di atas rata-rata!", color: "text-amber-500" };
    if (result.accuracy >= 70) return { title: "Keren Banget!", sub: "Sedikit lagi jadi master!", color: "text-green-500" };
    if (result.accuracy >= 50) return { title: "Lumayan!", sub: "Terus asah skill belajarmu!", color: "text-indigo-600" };
    return { title: "Coba Lagi!", sub: "Belajar itu butuh proses, jangan menyerah!", color: "text-rose-500" };
  };

  const feedback = getFeedback();

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 p-4">
      <div className="md:col-span-7 bg-white neo-border neo-shadow-lg p-10 text-center flex flex-col justify-center">
        <h2 className={`text-6xl font-black font-display uppercase italic mb-2 ${feedback.color}`}>{feedback.title}</h2>
        <p className="text-slate-500 font-bold mb-10">{feedback.sub}</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-slate-50 neo-border neo-shadow p-4 col-span-2">
            <span className="block text-[10px] font-black uppercase text-slate-400">Total Score</span>
            <span className="text-4xl font-black font-display italic">{result.score}</span>
          </div>
          <div className="bg-slate-50 neo-border neo-shadow p-4">
            <span className="block text-[10px] font-black uppercase text-slate-400">Akurasi</span>
            <span className="text-2xl font-black font-display italic">{Math.round(result.accuracy)}%</span>
          </div>
          <div className="bg-slate-50 neo-border neo-shadow p-4">
            <span className="block text-[10px] font-black uppercase text-slate-400">Waktu</span>
            <span className="text-2xl font-black font-display italic">{result.totalTime}s</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={onRestart} className="flex-1 neo-btn neo-border neo-shadow bg-indigo-600 text-white font-black py-4 uppercase tracking-widest hover:bg-indigo-700">Mulai Lagi</button>
        </div>
      </div>

      <div className="md:col-span-5 space-y-6">
        <div className="bg-white neo-border neo-shadow p-6">
          <h3 className="text-xs font-black uppercase text-slate-400 mb-4 flex items-center gap-1"><Award size={14} /> Progres Akun</h3>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-amber-100 flex items-center justify-center text-amber-600 neo-border neo-shadow font-black text-xl italic">{profile.stats.level}</div>
            <div className="flex-1">
              <div className="flex justify-between items-end mb-1">
                <span className="text-[10px] font-black uppercase">XP GAIN</span>
                <span className="text-[10px] font-black uppercase text-indigo-600">+{result.stats.correct * 20} XP</span>
              </div>
              <div className="h-4 bg-slate-100 neo-border p-1">
                <div className="h-full bg-indigo-600" style={{ width: "65%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white neo-border neo-shadow p-6">
           <h3 className="text-xs font-black uppercase text-slate-400 mb-4">Badge Baru</h3>
           <div className="grid grid-cols-2 gap-4">
              <Badge name="Marathon 30 Soal" icon={Flame} />
              <div className="neo-border neo-shadow border-dashed p-4 flex items-center justify-center text-slate-300 text-xs font-black uppercase">???</div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

const LeaderboardView = ({ onBack }: { onBack: () => void }) => {
  const [entries, setEntries] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('quiz_leaderboard');
    if (saved) {
      setEntries(JSON.parse(saved));
    } else {
      const mock = [
        { name: "Andi Saputra", score: 2500, level: 12 },
        { name: "Budi Setiawan", score: 2100, level: 10 },
        { name: "Citra Lestari", score: 1800, level: 8 },
        { name: "Dina Permata", score: 1500, level: 7 },
        { name: "Eko Prasetyo", score: 1200, level: 5 }
      ];
      setEntries(mock);
      localStorage.setItem('quiz_leaderboard', JSON.stringify(mock));
    }
  }, []);

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="max-w-2xl w-full bg-white neo-border neo-shadow-lg p-10">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="text-[10px] font-black uppercase flex items-center gap-1 hover:text-indigo-600"><ArrowLeft size={14} /> Kembali</button>
        <h2 className="text-3xl font-black font-display uppercase italic">Leaderboard</h2>
        <div className="w-12" />
      </div>

      <div className="space-y-4">
        {entries.sort((a,b) => b.score - a.score).map((entry, i) => (
          <div key={i} className="flex items-center gap-4 p-4 neo-border neo-shadow bg-slate-50">
            <div className={`w-10 h-10 neo-border flex items-center justify-center font-black ${i === 0 ? 'bg-amber-400' : i === 1 ? 'bg-slate-300' : i === 2 ? 'bg-amber-600 text-white' : 'bg-white'}`}>
              {i + 1}
            </div>
            <div className="flex-1">
              <h4 className="font-black uppercase italic">{entry.name}</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase">Level {entry.level}</p>
            </div>
            <div className="text-right">
              <span className="text-xl font-black font-display italic text-indigo-600">{entry.score}</span>
              <span className="block text-[8px] font-black uppercase text-slate-400">Total XP</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// --- Main Root Component ---

export default function App() {
  const [state, setState] = useState<AppState>('MENU');
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('quiz_profile');
    return saved ? JSON.parse(saved) : null;
  });
  const [selection, setSelection] = useState<{ level: EducationLevel, subject: Subject, difficulty: Difficulty } | null>(null);
  const [result, setResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    if (profile) localStorage.setItem('quiz_profile', JSON.stringify(profile));
  }, [profile]);

  const handleLevelUp = (currentXp: number, currentLevel: number, gain: number) => {
    const totalXp = currentXp + gain;
    const newLevel = Math.floor(totalXp / 1000) + 1;
    return { xp: totalXp, level: newLevel };
  };

  const finishQuiz = (res: QuizResult) => {
    if (profile) {
      const { xp, level } = handleLevelUp(profile.stats.xp, profile.stats.level, res.stats.correct * 20);
      const isMarathon = selection && QUESTIONS.filter(q => q.level === selection.level && q.subject === selection.subject && q.difficulty === selection.difficulty).length >= 30;
      
      const newBadges = [...profile.stats.badges];
      if (isMarathon && res.stats.correct >= 20 && !newBadges.includes("Marathon 30 Soal")) {
        newBadges.push("Marathon 30 Soal");
      }

      const updatedProfile = {
        ...profile,
        stats: {
          ...profile.stats,
          xp,
          level,
          totalCorrect: profile.stats.totalCorrect + res.stats.correct,
          highestScore: Math.max(profile.stats.highestScore, res.score),
          bestStreak: Math.max(profile.stats.bestStreak, res.topStreak),
          badges: newBadges,
          history: [{ date: new Date().toISOString(), score: res.score, subject: selection!.subject, level: selection!.level }, ...profile.stats.history].slice(0, 5)
        }
      };
      setProfile(updatedProfile);
      
      // Update Leaderboard
      const savedLb = localStorage.getItem('quiz_leaderboard');
      let lb = savedLb ? JSON.parse(savedLb) : [];
      const userIdx = lb.findIndex((e: any) => e.name === profile.name);
      if (userIdx > -1) {
        lb[userIdx].score = xp;
        lb[userIdx].level = level;
      } else {
        lb.push({ name: profile.name, score: xp, level: level });
      }
      localStorage.setItem('quiz_leaderboard', JSON.stringify(lb));
    }
    setResult(res);
    setState('RESULT');
  };

  const startMarathon = () => {
    if (!profile) {
      setState('PROFILE');
      return;
    }
    // Pick a random level, subject, difficulty that has questions
    const levels: EducationLevel[] = ['SD', 'SMP', 'SMA'];
    const subjects: Subject[] = ['Matematika', 'IPA', 'IPS', 'Bahasa Indonesia', 'Bahasa Inggris', 'PPKn'];
    const diffs: Difficulty[] = ['Easy', 'Medium', 'Hard'];

    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomDiff = diffs[Math.floor(Math.random() * diffs.length)];

    setSelection({ level: randomLevel, subject: randomSubject, difficulty: randomDiff });
    setState('QUIZ');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-200">
      <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto cursor-pointer" onClick={() => setState('MENU')}>
             <div className="w-10 h-10 bg-indigo-600 neo-border neo-shadow flex items-center justify-center text-white font-black text-xl">M</div>
             <h1 className="text-xl font-black uppercase tracking-tighter">QM <span className="text-indigo-600">ULTRA</span></h1>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen pt-24 pb-12 px-4">
        <AnimatePresence mode="wait">
          {state === 'MENU' && (
            <MainMenu 
              profile={profile} 
              onStart={() => profile ? setState('PICKER') : setState('PROFILE')} 
              onMarathon={startMarathon}
              onLeaderboard={() => setState('LEADERBOARD')}
              onReset={() => { setProfile(null); localStorage.removeItem('quiz_profile'); }} 
            />
          )}
          {state === 'LEADERBOARD' && <LeaderboardView onBack={() => setState('MENU')} />}
          {state === 'PROFILE' && <ProfileForm onNext={p => { setProfile(p); setState('PICKER'); }} />}
          {state === 'PICKER' && <QuizPicker onSelect={(l, s, d) => { setSelection({ level: l, subject: s, difficulty: d }); setState('QUIZ'); }} />}
          {state === 'QUIZ' && selection && profile && <QuizSession level={selection.level} subject={selection.subject} difficulty={selection.difficulty} profile={profile} onComplete={finishQuiz} />}
          {state === 'RESULT' && result && profile && <ResultsView result={result} profile={profile} onRestart={() => setState('PICKER')} />}
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-0 left-0 w-full p-4 flex justify-center pointer-events-none">
         <p className="text-[10px] font-black uppercase text-slate-400 bg-white/80 neo-border px-4 py-1 pointer-events-auto">Quiz Master Ultra v2.0 • 2026</p>
      </footer>
    </div>
  );
}
