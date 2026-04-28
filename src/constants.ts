import { Question } from './types';

export const QUESTIONS: Question[] = [
  // --- SD - Pengetahuan Umum ---
  { id: 1, text: "Apa ibu kota dari Indonesia?", options: ["Bandung", "Surabaya", "Jakarta", "Medan"], correctAnswer: 2, level: "SD", subject: "Pengetahuan Umum" },
  { id: 2, text: "Siapa Presiden pertama Republik Indonesia?", options: ["Soeharto", "B.J. Habibie", "Soekarno", "Abdurrahman Wahid"], correctAnswer: 2, level: "SD", subject: "Pengetahuan Umum" },
  { id: 15, text: "Berapakah jumlah provinsi di Indonesia saat ini?", options: ["34", "36", "38", "40"], correctAnswer: 2, level: "SD", subject: "Pengetahuan Umum" },
  { id: 27, text: "Lagu kebangsaan Indonesia adalah?", options: ["Indonesia Raya", "Garuda Pancasila", "Halo-Halo Bandung", "Maju Tak Gentar"], correctAnswer: 0, level: "SD", subject: "Pengetahuan Umum" },
  { id: 28, text: "Bendera Negara Indonesia berwarna?", options: ["Merah Kuning", "Merah Putih", "Biru Putih", "Merah Hijau"], correctAnswer: 1, level: "SD", subject: "Pengetahuan Umum" },

  // --- SD - Matematika ---
  { id: 9, text: "Berapakah hasil dari 15 x 4 + 10?", options: ["50", "60", "70", "80"], correctAnswer: 2, level: "SD", subject: "Matematika" },
  { id: 16, text: "Bangun datar yang memiliki 3 sisi disebut?", options: ["Persegi", "Segitiga", "Lingkaran", "Trapesium"], correctAnswer: 1, level: "SD", subject: "Matematika" },
  { id: 29, text: "Hasil dari 100 - 45 adalah?", options: ["45", "55", "65", "75"], correctAnswer: 1, level: "SD", subject: "Matematika" },
  { id: 30, text: "Bilangan ganjil setelah 7 adalah?", options: ["8", "9", "10", "11"], correctAnswer: 1, level: "SD", subject: "Matematika" },
  { id: 31, text: "1 jam sama dengan berapa menit?", options: ["30", "60", "90", "120"], correctAnswer: 1, level: "SD", subject: "Matematika" },

  // --- SD - IPA ---
  { id: 8, text: "Proses pembuatan makanan pada tumbuhan hijau disebut?", options: ["Respirasi", "Fotosintesis", "Oksidasi", "Fermentasi"], correctAnswer: 1, level: "SD", subject: "IPA" },
  { id: 17, text: "Hewan yang memakan tumbuhan disebut?", options: ["Karnivora", "Omnivora", "Herbivora", "Insektivora"], correctAnswer: 2, level: "SD", subject: "IPA" },
  { id: 32, text: "Benda yang dapat ditarik oleh magnet adalah?", options: ["Plastik", "Kayu", "Besi", "Kertas"], correctAnswer: 2, level: "SD", subject: "IPA" },
  { id: 33, text: "Manusia bernapas menghirup?", options: ["Nitrogen", "Oksigen", "Karbondioksida", "Hidrogen"], correctAnswer: 1, level: "SD", subject: "IPA" },
  { id: 34, text: "Planet yang kita tinggali adalah?", options: ["Mars", "Bumi", "Venus", "Jupiter"], correctAnswer: 1, level: "SD", subject: "IPA" },

  // --- SMP - Pengetahuan Umum ---
  { id: 3, text: "Lampu pijar ditemukan oleh?", options: ["Nikola Tesla", "Thomas Alva Edison", "Isaac Newton", "Albert Einstein"], correctAnswer: 1, level: "SMP", subject: "Pengetahuan Umum" },
  { id: 4, text: "Benua terkecil di dunia adalah?", options: ["Eropa", "Australia", "Antarktika", "Asia"], correctAnswer: 1, level: "SMP", subject: "Pengetahuan Umum" },
  { id: 35, text: "Organisasi kesehatan dunia adalah?", options: ["UNICEF", "UNESCO", "WHO", "FAO"], correctAnswer: 2, level: "SMP", subject: "Pengetahuan Umum" },
  { id: 36, text: "Mata uang negara Jepang adalah?", options: ["Yuan", "Ringgit", "Yen", "Won"], correctAnswer: 2, level: "SMP", subject: "Pengetahuan Umum" },
  { id: 37, text: "Candi Borobudur terletak di provinsi?", options: ["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Bali"], correctAnswer: 1, level: "SMP", subject: "Pengetahuan Umum" },

  // --- SMP - IPA ---
  { id: 7, text: "Bagian sel yang berfungsi sebagai pusat pengendali adalah?", options: ["Sitoplasma", "Membran Sel", "Nukleus", "Mitokondria"], correctAnswer: 2, level: "SMP", subject: "IPA" },
  { id: 18, text: "Zat yang menyebabkan warna hijau pada daun adalah?", options: ["Hemoglobin", "Klorofil", "Melanin", "Karoten"], correctAnswer: 1, level: "SMP", subject: "IPA" },
  { id: 38, text: "Gaya yang menyebabkan benda jatuh ke bawah adalah gaya?", options: ["Magnet", "Pegas", "Gravitasi", "Gesek"], correctAnswer: 2, level: "SMP", subject: "IPA" },
  { id: 39, text: "Satuan suhu dalam SI adalah?", options: ["Celcius", "Fahrenheit", "Kelvin", "Reamur"], correctAnswer: 2, level: "SMP", subject: "IPA" },
  { id: 40, text: "Makhluk hidup yang memerlukan bantuan oksigen untuk bernapas disebut?", options: ["Aerob", "Anaerob", "Autotrof", "Heterotrof"], correctAnswer: 0, level: "SMP", subject: "IPA" },

  // --- SMP - Matematika ---
  { id: 10, text: "Jika 2x + 5 = 15, maka nilai x adalah?", options: ["5", "10", "15", "20"], correctAnswer: 0, level: "SMP", subject: "Matematika" },
  { id: 19, text: "Berapakah nilai akar kuadrat dari 144?", options: ["10", "11", "12", "14"], correctAnswer: 2, level: "SMP", subject: "Matematika" },
  { id: 41, text: "Volume kubus dengan sisi 5 cm adalah?", options: ["25 cm3", "75 cm3", "125 cm3", "150 cm3"], correctAnswer: 2, level: "SMP", subject: "Matematika" },
  { id: 42, text: "Sudut siku-siku memiliki besar?", options: ["45 derajat", "90 derajat", "180 derajat", "360 derajat"], correctAnswer: 1, level: "SMP", subject: "Matematika" },
  { id: 43, text: "Himpunan bilangan prima yang kurang dari 10 adalah?", options: ["1, 2, 3, 5", "2, 3, 5, 7", "3, 5, 7, 9", "2, 4, 6, 8"], correctAnswer: 1, level: "SMP", subject: "Matematika" },

  // --- SMA IPA - Pengetahuan Umum ---
  { id: 51, text: "Siapa ilmuwan yang merumuskan hukum relativitas?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Niels Bohr"], correctAnswer: 1, level: "SMA", major: "IPA", subject: "Pengetahuan Umum" },
  { id: 52, text: "Unsur kimia paling melimpah di alam semesta adalah?", options: ["Oksigen", "Helium", "Hidrogen", "Karbon"], correctAnswer: 2, level: "SMA", major: "IPA", subject: "Pengetahuan Umum" },
  { id: 53, text: "Planet terbesar dalam tata surya kita adalah?", options: ["Bumi", "Jupiter", "Saturnus", "Neptunus"], correctAnswer: 1, level: "SMA", major: "IPA", subject: "Pengetahuan Umum" },

  // --- SMA IPA - Biologi ---
  { id: 11, text: "Organel sel yang dijuluki 'Powerhouse of Cell' adalah?", options: ["Ribosom", "Lisosom", "Mitokondria", "Badan Golgi"], correctAnswer: 2, level: "SMA", major: "IPA", subject: "Biologi" },
  { id: 20, text: "Hormon yang berfungsi mengatur kadar gula dalam darah adalah?", options: ["Adrenalin", "Tiroksin", "Insulin", "Estrogen"], correctAnswer: 2, level: "SMA", major: "IPA", subject: "Biologi" },
  { id: 46, text: "Proses pembelahan sel yang menghasilkan dua sel anakan identik disebut?", options: ["Meiosis", "Mitosis", "Amitosis", "Fertilisasi"], correctAnswer: 1, level: "SMA", major: "IPA", subject: "Biologi" },
  
  // --- SMA IPA - Fisika ---
  { id: 12, text: "Satuan SI untuk kuat arus listrik adalah?", options: ["Volt", "Ohm", "Ampere", "Watt"], correctAnswer: 2, level: "SMA", major: "IPA", subject: "Fisika" },
  { id: 21, text: "Kecepatan cahaya di ruang hampa adalah sekitar?", options: ["300.000 km/s", "150.000 km/s", "1.000.000 km/s", "300 km/s"], correctAnswer: 0, level: "SMA", major: "IPA", subject: "Fisika" },
  { id: 47, text: "Alat untuk mengukur tekanan udara adalah?", options: ["Termometer", "Barometer", "Higrometer", "Altimeter"], correctAnswer: 1, level: "SMA", major: "IPA", subject: "Fisika" },

  // --- SMA IPS - Pengetahuan Umum ---
  { id: 54, text: "Siapa tokoh yang dikenal sebagai pelopor sosiologi?", options: ["Auguste Comte", "Karl Marx", "Max Weber", "Emile Durkheim"], correctAnswer: 0, level: "SMA", major: "IPS", subject: "Pengetahuan Umum" },
  { id: 55, text: "Lembaga PBB yang menangani masalah pendidikan adalah?", options: ["WHO", "UNESCO", "ILO", "IMF"], correctAnswer: 1, level: "SMA", major: "IPS", subject: "Pengetahuan Umum" },
  { id: 56, text: "Negara manakah yang merupakan penghasil kopi terbesar di dunia?", options: ["Vietnam", "Kolombia", "Indonesia", "Brasil"], correctAnswer: 3, level: "SMA", major: "IPS", subject: "Pengetahuan Umum" },

  // --- SMA IPS - Ekonomi ---
  { id: 13, text: "Siapa yang dikenal sebagai Bapak Ekonomi Dunia?", options: ["Karl Marx", "Adam Smith", "John Maynard Keynes", "David Ricardo"], correctAnswer: 1, level: "SMA", major: "IPS", subject: "Ekonomi" },
  { id: 22, text: "Pasar yang hanya terdiri dari satu penjual disebut?", options: ["Oligopoli", "Monopoli", "Monopsoni", "Persaingan Sempurna"], correctAnswer: 1, level: "SMA", major: "IPS", subject: "Ekonomi" },
  { id: 48, text: "Inflasi yang terjadi karena kenaikan biaya produksi disebut?", options: ["Demand pull inflation", "Cost push inflation", "Hyperinflation", "Deflasi"], correctAnswer: 1, level: "SMA", major: "IPS", subject: "Ekonomi" },

  // --- SMA IPS - Geografi ---
  { id: 14, text: "Lapisan udara yang menyelimuti bumi disebut?", options: ["Litosfer", "Hidrosfer", "Atmosfer", "Biosfer"], correctAnswer: 2, level: "SMA", major: "IPS", subject: "Geografi" },
  { id: 23, text: "Garis khayal yang membagi bumi menjadi belahan Utara dan Selatan adalah?", options: ["Garis Bujur", "Garis Lintang", "Garis Khatulistiwa", "Garis Meridian"], correctAnswer: 2, level: "SMA", major: "IPS", subject: "Geografi" },
  { id: 49, text: "Batuan yang berasal dari pendinginan magma disebut batuan?", options: ["Sedimen", "Metamorf", "Beku", "Malihan"], correctAnswer: 2, level: "SMA", major: "IPS", subject: "Geografi" },

  // --- SMA Umum - Pengetahuan Umum ---
  { id: 5, text: "Apa lambang kimia untuk emas?", options: ["Ag", "Fe", "Au", "Pb"], correctAnswer: 2, level: "SMA", major: "Umum", subject: "Pengetahuan Umum" },
  { id: 6, text: "Planet mana yang dikenal sebagai 'Planet Merah'?", options: ["Mars", "Venus", "Jupiter", "Saturnus"], correctAnswer: 0, level: "SMA", major: "Umum", subject: "Pengetahuan Umum" },
  { id: 44, text: "Siapa penulis novel 'Laskar Pelangi'?", options: ["Andrea Hirata", "Pramoedya Ananta Toer", "Tere Liye", "Habiburrahman El Shirazy"], correctAnswer: 0, level: "SMA", major: "Umum", subject: "Pengetahuan Umum" },

  // --- Bahasa Indonesia ---
  { id: 24, text: "Ide pokok dalam sebuah paragraf disebut?", options: ["Kalimat Penjelas", "Pikiran Utama", "Kesimpulan", "Ringkasan"], correctAnswer: 1, level: "SMA", major: "Umum", subject: "Bahasa Indonesia" },
  { id: 26, text: "Majas yang membandingkan benda mati seolah hidup disebut?", options: ["Hiperbola", "Personifikasi", "Metafora", "Litotes"], correctAnswer: 1, level: "SMA", major: "Umum", subject: "Bahasa Indonesia" },
  { id: 50, text: "Antonim dari kata 'Pintar' adalah?", options: ["Cerdas", "Pandai", "Bodoh", "Mahir"], correctAnswer: 2, level: "SMA", major: "Umum", subject: "Bahasa Indonesia" }
];
