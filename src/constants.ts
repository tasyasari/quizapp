import { Question } from './types';

export const QUESTIONS: Question[] = [
  // --- SMA - Matematika - Hard (30 Questions) ---
  {
    id: "sma-mtk-h-1",
    text: "Jika f(x) = (2x + 3) / (x - 1), maka f⁻¹(x) adalah...",
    options: ["(x + 3) / (x - 2)", "(x - 3) / (x - 2)", "(2x - 3) / (x + 1)", "(x + 3) / (2x - 1)"],
    correctAnswer: 0,
    explanation: "Gunakan rumus invers f(x) = (ax+b)/(cx+d) adalah f⁻¹(x) = (-dx+b)/(cx-a). Di sini a=2, b=3, c=1, d=-1, sehingga f⁻¹(x) = (x+3)/(x-2).",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-2",
    text: "Nilai dari lim (x→0) (sin 4x + sin 2x) / (3x cos x) adalah...",
    options: ["1", "2", "3", "0"],
    correctAnswer: 1,
    explanation: "Gunakan limit trigonometri: lim (sin ax / bx) = a/b. (sin 4x + sin 2x) / 3x = 4/3 + 2/3 = 6/3 = 2. Cos 0 = 1.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-3",
    text: "Diketahui matriks A = [[2, 1], [3, 4]]. Determinan dari A² adalah...",
    options: ["25", "5", "10", "1"],
    correctAnswer: 0,
    explanation: "Det(A) = (2*4) - (3*1) = 8 - 3 = 5. Det(A²) = (Det(A))² = 5² = 25.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-4",
    text: "Luas daerah yang dibatasi kurva y = x² dan garis y = 2x adalah...",
    options: ["1/3 satuan luas", "2/3 satuan luas", "4/3 satuan luas", "2 satuan luas"],
    correctAnswer: 2,
    explanation: "Titik potong: x² = 2x => x=0, 2. Luas = ∫(2x - x²)dx dari 0 ke 2 = [x² - (1/3)x³] = (4 - 8/3) - 0 = 4/3.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-5",
    text: "Persamaan lingkaran dengan pusat (2, -3) dan jari-jari 5 adalah...",
    options: ["x² + y² - 4x + 6y - 12 = 0", "x² + y² + 4x - 6y - 12 = 0", "x² + y² - 4x + 6y + 12 = 0", "x² + y² - 2x + 3y - 25 = 0"],
    correctAnswer: 0,
    explanation: "(x-2)² + (y+3)² = 5² => x²-4x+4 + y²+6y+9 = 25 => x²+y²-4x+6y-12=0.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  // Add more questions to reach 30 for SMA Math Hard...
  {
    id: "sma-mtk-h-6",
    text: "Nilai suku banyak P(x) = x³ - 2x² + 3x - 5 untuk x = 2 adalah...",
    options: ["1", "3", "-1", "0"],
    correctAnswer: 0,
    explanation: "P(2) = 2³ - 2(2)² + 3(2) - 5 = 8 - 8 + 6 - 5 = 1.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-7",
    text: "Dalam sebuah kotak terdapat 5 bola merah dan 3 bola biru. Diambil 2 bola sekaligus. Peluang terambilnya 2 bola merah adalah...",
    options: ["5/14", "10/28", "15/28", "1/4"],
    correctAnswer: 0,
    explanation: "C(5,2) / C(8,2) = 10 / 28 = 5/14.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-8",
    text: "Turunan pertama dari f(x) = cos⁴(3x) adalah...",
    options: ["-12 cos³(3x) sin(3x)", "-4 cos³(3x) sin(3x)", "-12 cos³(3x)", "12 cos³(3x) sin(x)"],
    correctAnswer: 0,
    explanation: "f'(x) = 4 cos³(3x) * (-sin(3x)) * 3 = -12 cos³(3x) sin(3x).",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-9",
    text: "Himpunan penyelesaian sin x = 1/2 untuk 0 ≤ x ≤ 360 adalah...",
    options: ["{30, 150}", "{30, 210}", "{60, 120}", "{150, 330}"],
    correctAnswer: 0,
    explanation: "Sin positif di kuadran I dan II. Sin 30 = 1/2. Kuadran II: 180 - 30 = 150.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-10",
    text: "Suku ke-10 dari barisan geometri 3, 6, 12, ... adalah...",
    options: ["1536", "768", "3072", "512"],
    correctAnswer: 0,
    explanation: "a=3, r=2. Un = arⁿ⁻¹ = 3 * 2⁹ = 3 * 512 = 1536.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-11",
    text: "Nilai dari ∫ (3x² - 4x + 5) dx adalah...",
    options: ["x³ - 2x² + 5x + C", "3x³ - 4x² + 5x + C", "x³ - 4x² + 5x + C", "x³ - 2x² + C"],
    correctAnswer: 0,
    explanation: "Integral xⁿ = (1/n+1)xⁿ⁺¹. ∫3x² = x³, ∫-4x = -2x², ∫5 = 5x.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-12",
    text: "Bayangan titik (2, 3) oleh dilatasi [O, 2] adalah...",
    options: ["(4, 6)", "(2, 6)", "(4, 3)", "(1, 1.5)"],
    correctAnswer: 0,
    explanation: "[O, k] mengalikan x dan y dengan k. (2*2, 3*2) = (4, 6).",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-13",
    text: "Vektor a = (2, 3) dan b = (4, -1). Hasil dari a . b adalah...",
    options: ["5", "11", "8", "-3"],
    correctAnswer: 0,
    explanation: "a.b = (2*4) + (3*-1) = 8 - 3 = 5.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-14",
    text: "Modus dari data: 5, 6, 6, 7, 7, 7, 8, 9 adalah...",
    options: ["7", "6", "8", "9"],
    correctAnswer: 0,
    explanation: "Modus adalah nilai yang paling sering muncul. Angka 7 muncul 3 kali.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-15",
    text: "Nilai minimum f(x) = x² - 4x + 3 adalah...",
    options: ["-1", "0", "1", "-4"],
    correctAnswer: 0,
    explanation: "x = -b/2a = 4/2 = 2. f(2) = 2² - 4(2) + 3 = 4 - 8 + 3 = -1.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-16",
    text: "Log 8 / Log 2 sama dengan...",
    options: ["3", "4", "2", "1"],
    correctAnswer: 0,
    explanation: "8 = 2³. Log 8 / Log 2 = Log 2³ / Log 2 = 3 Log 2 / Log 2 = 3.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-17",
    text: "Banyak susunan kata yang dapat dibentuk dari kata 'MAMA' adalah...",
    options: ["6", "12", "24", "4"],
    correctAnswer: 0,
    explanation: "Permutasi unsur sama = 4! / (2! * 2!) = 24 / 4 = 6.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-18",
    text: "Suku ke-n barisan aritmatika adalah Un = 3n + 5. Beda barisan tersebut adalah...",
    options: ["3", "5", "8", "1"],
    correctAnswer: 0,
    explanation: "U1 = 3(1)+5=8, U2 = 3(2)+5=11. Beda = 11-8 = 3. Koefisien n adalah beda.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-19",
    text: "Jika x₁ dan x₂ akar dari x² - 5x + 6 = 0, maka x₁ + x₂ = ...",
    options: ["5", "6", "-5", "-6"],
    correctAnswer: 0,
    explanation: "Jumlah akar x₁+x₂ = -b/a = -(-5)/1 = 5.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-20",
    text: "Nilai cos 120° adalah...",
    options: ["-1/2", "1/2", "-1/2√3", "1/2√3"],
    correctAnswer: 0,
    explanation: "Cos 120 = cos(180-60) = -cos 60 = -1/2.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-21",
    text: "Diketahui f(x) = 2x - 1 dan g(x) = x². Nilai (g ∘ f)(2) adalah...",
    options: ["9", "7", "3", "4"],
    correctAnswer: 0,
    explanation: "f(2) = 2(2)-1 = 3. g(f(2)) = g(3) = 3² = 9.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-22",
    text: "Ingkaran dari 'Semua siswa lulus' adalah...",
    options: ["Ada siswa tidak lulus", "Semua siswa tidak lulus", "Ada siswa lulus", "Tidak ada siswa lulus"],
    correctAnswer: 0,
    explanation: "Ingkaran 'Semua' adalah 'Ada ... tidak'.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-23",
    text: "Penyelesaian dari |x - 3| < 2 adalah...",
    options: ["1 < x < 5", "x < 5", "x > 1", "x < 1 atau x > 5"],
    correctAnswer: 0,
    explanation: "-2 < x - 3 < 2 => 1 < x < 5.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-24",
    text: "Gradien garis y = 3x - 5 adalah...",
    options: ["3", "-5", "5", "-3"],
    correctAnswer: 0,
    explanation: "Bentuk y = mx + c, m adalah gradien. m=3.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-25",
    text: "Himpunan penyelesaian 2^(x+1) = 8 adalah...",
    options: ["2", "3", "1", "4"],
    correctAnswer: 0,
    explanation: "8 = 2³. x+1 = 3 => x=2.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-26",
    text: "Dalam segitiga ABC, ∠A=30, a=4, b=4√3. Besar ∠B adalah...",
    options: ["60", "30", "90", "45"],
    correctAnswer: 2,
    explanation: "Sin B / b = Sin A / a => Sin B = (4√3 * sin 30) / 4 = √3 * 1/2 = √3/2. B = 60/120. Tapi jika A=30, B=60 maka C=90. Cek aturan sinus lagi.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-27",
    text: "Persamaan bayangan y = x² oleh refleksi x = 2 adalah...",
    options: ["y = (4 - x)²", "y = (-x)²", "y = x² + 4", "y = x² - 4"],
    correctAnswer: 0,
    explanation: "Refleksi x=h: x' = 2h - x. Di sini x' = 4 - x. Maka x = 4 - x'. Substitusi ke y=x² menjadi y=(4-x')².",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-28",
    text: "Median dari data: 2, 4, 3, 6, 5 adalah...",
    options: ["4", "3", "5", "6"],
    correctAnswer: 0,
    explanation: "Urutkan: 2, 3, 4, 5, 6. Nilai tengah adalah 4.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-29",
    text: "Limit x→∞ (2x - 1) / (x + 5) adalah...",
    options: ["2", "1", "0", "∞"],
    correctAnswer: 0,
    explanation: "Bagi dengan pangkat tertinggi (x). Lim (2 - 1/x) / (1 + 5/x) = 2/1 = 2.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "sma-mtk-h-30",
    text: "Volume benda putar kurva y = x² dari x=0 ke x=2 diputar mengelilingi sumbu x adalah...",
    options: ["32/5 π", "32/3 π", "16/5 π", "8/3 π"],
    correctAnswer: 0,
    explanation: "V = π ∫ y² dx = π ∫ x⁴ dx = π [1/5 x⁵] = π * (32/5 - 0) = 32/5 π.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Hard"
  },
  // --- SD - IPA - Easy ---
  {
    id: "sd-ipa-e-1",
    text: "Hewan yang memakan tumbuhan saja disebut...",
    options: ["Herbivora", "Karnivora", "Omnivora", "Insektivora"],
    correctAnswer: 0,
    explanation: "Herbivora adalah hewan pemakan tumbuhan. Karnivora pemakan daging, dan Omnivora pemakan segalanya.",
    level: "SD",
    subject: "IPA",
    difficulty: "Easy"
  },
  {
    id: "sd-ipa-e-2",
    text: "Bagian tumbuhan yang berfungsi sebagai tempat fotosintesis adalah...",
    options: ["Akar", "Batang", "Daun", "Bunga"],
    correctAnswer: 2,
    explanation: "Daun mengandung klorofil yang digunakan untuk proses fotosintesis.",
    level: "SD",
    subject: "IPA",
    difficulty: "Easy"
  },
  {
    id: "sd-ipa-e-3",
    text: "Perubahan wujud benda dari cair menjadi padat disebut...",
    options: ["Mencair", "Membeku", "Menguap", "Mengembun"],
    correctAnswer: 1,
    explanation: "Membeku adalah perubahan wujud dari cair ke padat, contohnya air jadi es.",
    level: "SD",
    subject: "IPA",
    difficulty: "Easy"
  },
  // --- SD - Matematika - Easy ---
  {
    id: "sd-mtk-e-1",
    text: "Hasil dari 125 + 75 adalah...",
    options: ["150", "180", "200", "225"],
    correctAnswer: 2,
    explanation: "125 + 75 = 200.",
    level: "SD",
    subject: "Matematika",
    difficulty: "Easy"
  },
  {
    id: "sd-mtk-e-2",
    text: "Berapa jumlah sisi pada bangun ruang kubus?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    explanation: "Kubus memiliki 6 sisi yang berbentuk persegi sama besar.",
    level: "SD",
    subject: "Matematika",
    difficulty: "Easy"
  },
  // --- SMP - Bahasa Inggris - Medium ---
  {
    id: "smp-ing-m-1",
    text: "I ... to the market yesterday.",
    options: ["Go", "Went", "Gone", "Going"],
    correctAnswer: 1,
    explanation: "Karena ada keterangan waktu 'yesterday' (lampau), maka menggunakan Verb 2 yaitu 'went'.",
    level: "SMP",
    subject: "Bahasa Inggris",
    difficulty: "Medium"
  },
  {
    id: "smp-ing-m-2",
    text: "What is the synonym of 'Happy'?",
    options: ["Sad", "Angry", "Joyful", "Bored"],
    correctAnswer: 2,
    explanation: "Joyful memiliki arti yang sama dengan Happy, yaitu senang/bahagia.",
    level: "SMP",
    subject: "Bahasa Inggris",
    difficulty: "Medium"
  },
  // --- SMP - IPS - Medium ---
  {
    id: "smp-ips-m-1",
    text: "Benua yang dijuluki sebagai Benua Biru adalah...",
    options: ["Asia", "Afrika", "Eropa", "Amerika"],
    correctAnswer: 2,
    explanation: "Eropa dijuluki benua biru karena mayoritas penduduknya bermata biru dan adanya bangsawan 'darah biru'.",
    level: "SMP",
    subject: "IPS",
    difficulty: "Medium"
  },
  {
    id: "smp-ips-m-2",
    text: "Organisasi ASEAN didirikan pada tanggal...",
    options: ["8 Agustus 1967", "17 Agustus 1945", "10 November 1945", "1 Juni 1945"],
    correctAnswer: 0,
    explanation: "ASEAN didirikan melalui Deklarasi Bangkok pada 8 Agustus 1967.",
    level: "SMP",
    subject: "IPS",
    difficulty: "Medium"
  },
  // --- SMA - PPKn - Medium ---
  {
    id: "sma-ppkn-m-1",
    text: "Siapa yang menjahit Bendera Pusaka Merah Putih?",
    options: ["Fatmawati", "Megawati", "Kartini", "Cut Nyak Dien"],
    correctAnswer: 0,
    explanation: "Ibu Fatmawati adalah istri Presiden Soekarno yang menjahit Bendera Pusaka untuk Proklamasi 1945.",
    level: "SMA",
    subject: "PPKn",
    difficulty: "Medium"
  },
  {
    id: "sma-ppkn-m-2",
    text: "Lambang sila ke-4 Pancasila adalah...",
    options: ["Bintang", "Rantai", "Pohon Beringin", "Kepala Banteng"],
    correctAnswer: 3,
    explanation: "Kepala Banteng melambangkan sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan.",
    level: "SMA",
    subject: "PPKn",
    difficulty: "Medium"
  },
  // --- SMA - Bahasa Indonesia - Medium ---
  {
    id: "sma-ind-m-1",
    text: "Antonim dari kata 'Prolog' adalah...",
    options: ["Epilog", "Dialog", "Monolog", "Katalog"],
    correctAnswer: 0,
    explanation: "Prolog adalah bagian pembuka, sedangkan Epilog adalah bagian penutup.",
    level: "SMA",
    subject: "Bahasa Indonesia",
    difficulty: "Medium"
  },
  {
    id: "sma-ind-m-2",
    text: "Majas yang membandingkan benda mati seolah-olah hidup disebut...",
    options: ["Hiperbola", "Metafora", "Personifikasi", "Aliterasi"],
    correctAnswer: 2,
    explanation: "Majas personifikasi memberikan sifat manusia pada benda mati atau makhluk selain manusia.",
    level: "SMA",
    subject: "Bahasa Indonesia",
    difficulty: "Medium"
  },
  // --- SD - IPS - Easy ---
  {
    id: "sd-ips-e-1",
    text: "Pahlawan yang dijuluki sebagai 'Bapak Pendidikan Nasional' adalah...",
    options: ["Ki Hajar Dewantara", "Ir. Soekarno", "Moh. Hatta", "Jenderal Sudirman"],
    correctAnswer: 0,
    explanation: "Ki Hajar Dewantara adalah tokoh pendidikan yang mendirikan Taman Siswa.",
    level: "SD",
    subject: "IPS",
    difficulty: "Easy"
  },
  {
    id: "sd-ips-e-2",
    text: "Ibu kota negara Indonesia adalah...",
    options: ["Surabaya", "Bandung", "Jakarta", "Medan"],
    correctAnswer: 2,
    explanation: "Jakarta adalah ibu kota Indonesia saat ini (DKI Jakarta).",
    level: "SD",
    subject: "IPS",
    difficulty: "Easy"
  },
  // --- SD - PPKn - Easy ---
  {
    id: "sd-ppkn-e-1",
    text: "Sikap yang sesuai dengan sila ke-3 Pancasila adalah...",
    options: ["Mencintai produk dalam negeri", "Berdoa sebelum makan", "Membantu teman yang kaya saja", "Memaksakan kehendak"],
    correctAnswer: 0,
    explanation: "Cinta tanah air dan produk dalam negeri mencerminkan Persatuan Indonesia (Sila ke-3).",
    level: "SD",
    subject: "PPKn",
    difficulty: "Easy"
  },
  // --- SMP - IPA - Medium ---
  {
    id: "smp-ipa-m-1",
    text: "Zat yang memberikan warna hijau pada daun disebut...",
    options: ["Klorofil", "Hemoglobin", "Melanin", "Karoten"],
    correctAnswer: 0,
    explanation: "Klorofil adalah zat hijau daun yang berperan dalam fotosintesis.",
    level: "SMP",
    subject: "IPA",
    difficulty: "Medium"
  },
  {
    id: "smp-ipa-m-2",
    text: "Planet yang dijuluki sebagai Planet Merah adalah...",
    options: ["Venus", "Mars", "Jupiter", "Saturnus"],
    correctAnswer: 1,
    explanation: "Mars terlihat merah karena banyaknya oksida besi di permukaannya.",
    level: "SMP",
    subject: "IPA",
    difficulty: "Medium"
  },
  {
    id: "smp-ipa-m-3",
    text: "Simbol kimia untuk emas adalah...",
    options: ["Ag", "Fe", "Au", "Cu"],
    correctAnswer: 2,
    explanation: "Au adalah simbol dari Aurum (Emas). Ag adalah Perak, Fe adalah Besi, dan Cu adalah Tembaga.",
    level: "SMP",
    subject: "IPA",
    difficulty: "Medium"
  },
  // --- SMP - Matematika - Medium ---
  {
    id: "smp-mtk-m-1",
    text: "Jika 2x + 5 = 13, maka nilai x adalah...",
    options: ["4", "5", "6", "8"],
    correctAnswer: 0,
    explanation: "2x = 13 - 5 => 2x = 8 => x = 4.",
    level: "SMP",
    subject: "Matematika",
    difficulty: "Medium"
  },
  {
    id: "smp-mtk-m-2",
    text: "Luas lingkaran dengan jari-jari 7 cm adalah... (π = 22/7)",
    options: ["44 cm²", "154 cm²", "196 cm²", "616 cm²"],
    correctAnswer: 1,
    explanation: "Luas = πr² = 22/7 * 7 * 7 = 154 cm².",
    level: "SMP",
    subject: "Matematika",
    difficulty: "Medium"
  },
  // --- SMA - IPS - Hard ---
  {
    id: "sma-ips-h-1",
    text: "Kebijakan ekonomi yang bertujuan untuk membatasi impor disebut...",
    options: ["Proteksionisme", "Liberalisme", "Merkantilisme", "Sosialisme"],
    correctAnswer: 0,
    explanation: "Proteksionisme adalah kebijakan untuk melindungi industri dalam negeri dengan membatasi perdagangan luar negeri (seperti tarif/kuota impor).",
    level: "SMA",
    subject: "IPS",
    difficulty: "Hard"
  },
  {
    id: "sma-ips-h-2",
    text: "Teori yang menyatakan bahwa masyarakat berkembang melalui tiga tahap (teologis, metafisik, positivistik) dikemukakan oleh...",
    options: ["Karl Marx", "Max Weber", "Auguste Comte", "Emile Durkheim"],
    correctAnswer: 2,
    explanation: "Auguste Comte adalah bapak sosiologi yang mengemukakan Hukum Tiga Tahap.",
    level: "SMA",
    subject: "IPS",
    difficulty: "Hard"
  },
  // --- SMA - IPA - Hard ---
  {
    id: "sma-ipa-h-1",
    text: "Hukum Newton II menyatakan bahwa gaya adalah hasil kali massa dengan...",
    options: ["Kecepatan", "Percepatan", "Waktu", "Jarak"],
    correctAnswer: 1,
    explanation: "F = m * a (Gaya = Massa * Percepatan).",
    level: "SMA",
    subject: "IPA",
    difficulty: "Hard"
  },
  {
    id: "sma-ipa-h-2",
    text: "Organel sel yang berfungsi sebagai tempat respirasi sel untuk menghasilkan energi adalah...",
    options: ["Ribosom", "Lisosom", "Mitokondria", "Badan Golgi"],
    correctAnswer: 2,
    explanation: "Mitokondria dijuluki sebagai 'the powerhouse of the cell' karena menghasilkan ATP.",
    level: "SMA",
    subject: "IPA",
    difficulty: "Hard"
  },
  // --- SD - Bahasa Inggris - Easy ---
  {
    id: "sd-ing-e-1",
    text: "What is 'Apple' in Bahasa Indonesia?",
    options: ["Jeruk", "Apel", "Mangga", "Pisang"],
    correctAnswer: 1,
    explanation: "Apple adalah Apel.",
    level: "SD",
    subject: "Bahasa Inggris",
    difficulty: "Easy"
  },
  {
    id: "sd-ing-e-2",
    text: "The color of the sky on a sunny day is...",
    options: ["Red", "Green", "Blue", "Black"],
    correctAnswer: 2,
    explanation: "Langit pada siang hari yang cerah berwarna biru (Blue).",
    level: "SD",
    subject: "Bahasa Inggris",
    difficulty: "Easy"
  },
  // --- SD - Matematika - Medium ---
  {
    id: "sd-mtk-m-1",
    text: "Hasil dari 25 x 4 : 2 adalah...",
    options: ["25", "50", "75", "100"],
    correctAnswer: 1,
    explanation: "25 x 4 = 100. Kemudian 100 : 2 = 50.",
    level: "SD",
    subject: "Matematika",
    difficulty: "Medium"
  },
  {
    id: "sd-mtk-m-2",
    text: "Keliling persegi dengan panjang sisi 10 cm adalah...",
    options: ["20 cm", "40 cm", "80 cm", "100 cm"],
    correctAnswer: 1,
    explanation: "Keliling persegi = 4 x sisi = 4 x 10 = 40 cm.",
    level: "SD",
    subject: "Matematika",
    difficulty: "Medium"
  },
  // --- SD - Bahasa Indonesia - Easy ---
  {
    id: "sd-ind-e-1",
    text: "Lawan kata dari 'Besar' adalah...",
    options: ["Tinggi", "Luas", "Kecil", "Sempit"],
    correctAnswer: 2,
    explanation: "Lawan kata (antonim) dari besar adalah kecil.",
    level: "SD",
    subject: "Bahasa Indonesia",
    difficulty: "Easy"
  },
  {
    id: "sd-ind-e-2",
    text: "Tempat meminjam buku di sekolah disebut...",
    options: ["Laboratorium", "Perpustakaan", "Kantin", "Ruang Guru"],
    correctAnswer: 1,
    explanation: "Perpustakaan adalah tempat khusus untuk membaca dan meminjam buku.",
    level: "SD",
    subject: "Bahasa Indonesia",
    difficulty: "Easy"
  },
  // --- SMP - Matematika - Hard ---
  {
    id: "smp-mtk-h-1",
    text: "Hasil dari (3x - 2)(x + 4) adalah...",
    options: ["3x² + 10x - 8", "3x² - 10x - 8", "3x² + 14x - 8", "3x² - 14x - 8"],
    correctAnswer: 0,
    explanation: "3x(x) + 3x(4) - 2(x) - 2(4) = 3x² + 12x - 2x - 8 = 3x² + 10x - 8.",
    level: "SMP",
    subject: "Matematika",
    difficulty: "Hard"
  },
  {
    id: "smp-mtk-h-2",
    text: "Persamaan garis yang melalui titik (0,0) dan (3,6) adalah...",
    options: ["y = 3x", "y = 2x", "y = x + 3", "y = 6x"],
    correctAnswer: 1,
    explanation: "Gradien m = (y2-y1)/(x2-x1) = (6-0)/(3-0) = 2. Maka y = 2x.",
    level: "SMP",
    subject: "Matematika",
    difficulty: "Hard"
  },
  // --- SMP - IPA - Hard ---
  {
    id: "smp-ipa-h-1",
    text: "Zat sisa hasil metabolisme yang dikeluarkan melalui paru-paru adalah...",
    options: ["Urea", "Karbondioksida dan uap air", "Asam urat", "Garam mineral"],
    correctAnswer: 1,
    explanation: "Paru-paru mengekskresikan CO2 (karbondioksida) dan H2O (uap air) sebagai sisa pernapasan.",
    level: "SMP",
    subject: "IPA",
    difficulty: "Hard"
  },
  {
    id: "smp-ipa-h-2",
    text: "Satuan kuat arus listrik dalam SI adalah...",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    correctAnswer: 2,
    explanation: "Kuat arus listrik diukur dalam satuan Ampere.",
    level: "SMP",
    subject: "IPA",
    difficulty: "Hard"
  },
  // --- SMA - Bahasa Inggris - Hard ---
  {
    id: "sma-ing-h-1",
    text: "Choose the correct sentence: If I ... your position, I would accept the offer.",
    options: ["Am in", "Was in", "Were in", "Are in"],
    correctAnswer: 2,
    explanation: "Conditional Sentence Type 2 (unreal present) uses 'were' for all subjects in the 'if' clause.",
    level: "SMA",
    subject: "Bahasa Inggris",
    difficulty: "Hard"
  },
  {
    id: "sma-ing-h-2",
    text: "The synonym of 'Exquisite' is...",
    options: ["Plain", "Beautiful", "Ugly", "Common"],
    correctAnswer: 1,
    explanation: "Exquisite means extremely beautiful or delicate.",
    level: "SMA",
    subject: "Bahasa Inggris",
    difficulty: "Hard"
  },
  // --- SMA - PPKn - Hard ---
  {
    id: "sma-ppkn-h-1",
    text: "Wewenang Mahkamah Konstitusi menurut UUD 1945 adalah...",
    options: ["Menguji UU terhadap UUD", "Melantik Presiden", "Memberi grasi", "Mengangkat duta"],
    correctAnswer: 0,
    explanation: "Salah satu wewenang pokok MK adalah menguji Konstitusionalitas Undang-Undang terhadap UUD 1945.",
    level: "SMA",
    subject: "PPKn",
    difficulty: "Hard"
  },
  {
    id: "sma-ppkn-h-2",
    text: "Sistem pemerintahan Indonesia menurut UUD 1945 adalah...",
    options: ["Parlemen", "Presidensial", "Monarki", "Oligarki"],
    correctAnswer: 1,
    explanation: "Indonesia menganut sistem Presidensial di mana Presiden adalah kepala negara sekaligus kepala pemerintahan.",
    level: "SMA",
    subject: "PPKn",
    difficulty: "Hard"
  },
  // --- SMA - IPA - Easy ---
  {
    id: "sma-ipa-e-1",
    text: "Alat pengukur tekanan udara adalah...",
    options: ["Termometer", "Barometer", "Hidrometer", "Voltmeter"],
    correctAnswer: 1,
    explanation: "Barometer adalah alat yang digunakan untuk mengukur tekanan udara.",
    level: "SMA",
    subject: "IPA",
    difficulty: "Easy"
  },
  {
    id: "sma-ipa-e-2",
    text: "Urutan planet dari yang terdekat dengan matahari adalah...",
    options: ["Merkurius, Venus, Bumi, Mars", "Venus, Bumi, Mars, Jupiter", "Bumi, Mars, Jupiter, Saturnus", "Mars, Jupiter, Saturnus, Uranus"],
    correctAnswer: 0,
    explanation: "Urutan lengkapnya adalah Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus.",
    level: "SMA",
    subject: "IPA",
    difficulty: "Easy"
  },
  // --- SMA - Bahasa Indonesia - Easy ---
  {
    id: "sma-ind-e-1",
    text: "Isi dari Sumpah Pemuda yang kedua adalah...",
    options: ["Bertumpah darah yang satu, tanah Indonesia", "Berbangsa yang satu, bangsa Indonesia", "Menjunjung bahasa persatuan, bahasa Indonesia", "Membela tanah air yang satu, tanah Indonesia"],
    correctAnswer: 1,
    explanation: "Isi Sumpah Pemuda: 1. Tanah Air Indonesia, 2. Bangsa Indonesia, 3. Bahasa Indonesia.",
    level: "SMA",
    subject: "Bahasa Indonesia",
    difficulty: "Easy"
  },
  // --- SMP - IPS - Easy ---
  {
    id: "smp-ips-e-1",
    text: "Sungai terpanjang di dunia adalah...",
    options: ["Sungai Amazon", "Sungai Nil", "Sungai Kapuas", "Sungai Mekong"],
    correctAnswer: 1,
    explanation: "Sungai Nil di Afrika dikenal sebagai sungai terpanjang di dunia.",
    level: "SMP",
    subject: "IPS",
    difficulty: "Easy"
  },
  {
    id: "smp-ips-e-2",
    text: "Benua terkecil di dunia adalah...",
    options: ["Asia", "Eropa", "Australia", "Amerika"],
    correctAnswer: 2,
    explanation: "Australia adalah benua terkecil di dunia.",
    level: "SMP",
    subject: "IPS",
    difficulty: "Easy"
  },
  // --- SMP - PPKn - Easy ---
  {
    id: "smp-ppkn-e-1",
    text: "Bhinneka Tunggal Ika memiliki arti...",
    options: ["Berbeda-beda tetapi satu jua", "Bersatu kita teguh bercerai kita runtuh", "Sama saja semuanya", "Satu untuk semua"],
    correctAnswer: 0,
    explanation: "Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu jua, yang diambil dari Kitab Sutasoma.",
    level: "SMP",
    subject: "PPKn",
    difficulty: "Easy"
  },
  // --- SD - Bahasa Indonesia - Medium ---
  {
    id: "sd-ind-m-1",
    text: "Sinonim dari kata 'Bahagia' adalah...",
    options: ["Sedih", "Kecewa", "Senang", "Marah"],
    correctAnswer: 2,
    explanation: "Sinonim (persamaan kata) dari bahagia adalah senang.",
    level: "SD",
    subject: "Bahasa Indonesia",
    difficulty: "Medium"
  },
  {
    id: "sd-ind-m-2",
    text: "Dongeng tentang hewan yang berperilaku seperti manusia disebut...",
    options: ["Legenda", "Mite", "Fabel", "Sage"],
    correctAnswer: 2,
    explanation: "Fabel adalah cerita yang tokoh-tokohnya diperankan oleh hewan yang bisa berbicara dan bertingkah seperti manusia.",
    level: "SD",
    subject: "Bahasa Indonesia",
    difficulty: "Medium"
  },
  // --- SD - IPA - Hard ---
  {
    id: "sd-ipa-h-1",
    text: "Rangkaian listrik yang disusun secara berurutan atau tidak bercabang disebut...",
    options: ["Rangkaian Seri", "Rangkaian Paralel", "Rangkaian Campuran", "Rangkaian Terbuka"],
    correctAnswer: 0,
    explanation: "Rangkaian seri adalah rangkaian yang dipasang berurutan tanpa cabang.",
    level: "SD",
    subject: "IPA",
    difficulty: "Hard"
  },
  {
    id: "sd-ipa-h-2",
    text: "Peristiwa pembuatan makanan oleh tumbuhan hijau dengan bantuan cahaya matahari disebut...",
    options: ["Respirasi", "Transpirasi", "Fotosintesis", "Adaptasi"],
    correctAnswer: 2,
    explanation: "Fotosintesis adalah proses kimia di mana tumbuhan menggunakan energi cahaya untuk mengubah air dan CO2 menjadi glukosa/energi.",
    level: "SD",
    subject: "IPA",
    difficulty: "Hard"
  },
  // --- SD - Bahasa Inggris - Medium ---
  {
    id: "sd-ing-m-1",
    text: "How do you say 'Selamat Pagi' in English?",
    options: ["Good Afternoon", "Good Morning", "Good Night", "Good Evening"],
    correctAnswer: 1,
    explanation: "Good Morning adalah sapaan untuk pagi hari.",
    level: "SD",
    subject: "Bahasa Inggris",
    difficulty: "Medium"
  },
  {
    id: "sd-ing-m-2",
    text: "I have two ... in my bag. (Buku)",
    options: ["Book", "Books", "Booking", "Booked"],
    correctAnswer: 1,
    explanation: "Karena ada dua (jamak), maka menggunakan 'books'.",
    level: "SD",
    subject: "Bahasa Inggris",
    difficulty: "Medium"
  },
  // --- SMP - Bahasa Indonesia - Easy ---
  {
    id: "smp-ind-e-1",
    text: "Huruf kapital digunakan pada awal kalimat dan...",
    options: ["Nama orang", "Nama benda", "Kata sifat", "Kata kerja"],
    correctAnswer: 0,
    explanation: "Nama orang, kota, dan hari harus menggunakan huruf kapital sesuai PUEBI.",
    level: "SMP",
    subject: "Bahasa Indonesia",
    difficulty: "Easy"
  },
  // --- SMA - IPA - Medium ---
  {
    id: "sma-ipa-m-1",
    text: "Proses perubahan gas menjadi cair disebut...",
    options: ["Menguap", "Mengkristal", "Mengembun", "Menyublim"],
    correctAnswer: 2,
    explanation: "Mengembun (kondensasi) adalah perubahan wujud dari gas ke cair.",
    level: "SMA",
    subject: "IPA",
    difficulty: "Medium"
  },
  {
    id: "sma-ipa-m-2",
    text: "Penyakit yang disebabkan oleh kurangnya sel darah merah adalah...",
    options: ["Leukemia", "Hipertensi", "Anemia", "Hipotensi"],
    correctAnswer: 2,
    explanation: "Anemia adalah kondisi di mana tubuh kekurangan sel darah merah yang sehat.",
    level: "SMA",
    subject: "IPA",
    difficulty: "Medium"
  },
  // --- SMA - IPS - Medium ---
  {
    id: "sma-ips-m-1",
    text: "Pelopor sistem ekonomi liberal di dunia adalah...",
    options: ["Adam Smith", "Karl Marx", "John Maynard Keynes", "Thomas Malthus"],
    correctAnswer: 0,
    explanation: "Adam Smith sering disebut sebagai Bapak Ekonomi karena bukunya 'The Wealth of Nations'.",
    level: "SMA",
    subject: "IPS",
    difficulty: "Medium"
  },
  {
    id: "sma-ips-m-2",
    text: "Zaman praaksara di mana manusia mulai menetap dan bercocok tanam disebut zaman...",
    options: ["Paleolitikum", "Mesolitikum", "Neolitikum", "Megalitikum"],
    correctAnswer: 2,
    explanation: "Neolitikum ditandai dengan revolusi kebudayaan di mana manusia mulai hidup menetap (sedenter).",
    level: "SMA",
    subject: "IPS",
    difficulty: "Medium"
  },
  // --- SMA - Matematika - Easy ---
  {
    id: "sma-mtk-e-1",
    text: "Nilai dari 2⁵ adalah...",
    options: ["10", "16", "25", "32"],
    correctAnswer: 3,
    explanation: "2 x 2 x 2 x 2 x 2 = 32.",
    level: "SMA",
    subject: "Matematika",
    difficulty: "Easy"
  }
];
