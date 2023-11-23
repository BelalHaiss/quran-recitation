import { Juz, Surah_Info } from 'src/shared/types/quran';

export const surahs_info_seed = (): Surah_Info[] => [
  {
    name: {
      ar: 'ٱلْفَاتِحَة',
      en: 'Al-Fatihah',
    },
    versesCount: 7,
    juz: [0],
  },
  {
    name: {
      ar: 'ٱلْبَقَرَة',
      en: 'Al-Baqarah',
    },
    versesCount: 286,
    juz: [0, 1, 2],
    juz_points: [
      { juz_index: 0, starting: 1, ending: 141 },
      {
        juz_index: 1,
        starting: 142,
        ending: 252,
      },
      {
        juz_index: 2,
        starting: 253,
      },
    ],
  },
  {
    name: {
      ar: 'آلِ عِمْرَان',
      en: "Aali 'Imran",
    },
    versesCount: 200,
    juz: [2, 3],
    juz_points: [
      { juz_index: 2, starting: 1, ending: 92 },

      {
        juz_index: 3,
        starting: 93,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلنِّسَاء',
      en: 'An-Nisa',
    },
    versesCount: 176,
    juz: [3, 4, 5],
    juz_points: [
      { juz_index: 3, starting: 1, ending: 23 },
      {
        juz_index: 4,
        starting: 24,
        ending: 147,
      },
      {
        juz_index: 5,
        starting: 148,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلْمَائِدَة',
      en: "Al-Ma'idah",
    },
    versesCount: 120,
    juz: [5, 6],
    juz_points: [
      { juz_index: 5, starting: 1, ending: 81 },
      {
        juz_index: 6,
        starting: 82,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلْأَنْعَام',
      en: "Al-An'am",
    },
    versesCount: 165,
    juz: [6, 7],
    juz_points: [
      { juz_index: 6, starting: 1, ending: 110 },
      {
        juz_index: 7,
        starting: 111,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلْأَعْرَاف',
      en: "Al-A'raf",
    },
    versesCount: 206,
    juz: [7, 8],
    juz_points: [
      { juz_index: 7, starting: 1, ending: 87 },
      {
        juz_index: 8,
        starting: 88,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلْأَنْفَال',
      en: 'Al-Anfal',
    },
    versesCount: 75,
    juz: [8, 9],
    juz_points: [
      { juz_index: 8, starting: 1, ending: 40 },
      {
        juz_index: 9,
        starting: 41,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلتَّوْبَة',
      en: 'At-Tawbah',
    },
    versesCount: 129,
    juz: [9, 10],
    juz_points: [
      { juz_index: 9, starting: 1, ending: 92 },
      {
        juz_index: 10,
        starting: 93,
      },
    ],
  },
  {
    name: {
      ar: 'يُونُس',
      en: 'Yunus',
    },
    versesCount: 109,
    juz: [10],
  },
  {
    name: {
      ar: 'هُود',
      en: 'Hud',
    },
    versesCount: 123,
    juz: [10, 11],
    juz_points: [
      { juz_index: 10, starting: 1, ending: 5 },
      {
        juz_index: 11,
        starting: 6,
      },
    ],
  },
  {
    name: {
      ar: 'يُوسُف',
      en: 'Yusuf',
    },
    versesCount: 111,
    juz: [11, 12],
    juz_points: [
      { juz_index: 11, starting: 1, ending: 52 },
      {
        juz_index: 12,
        starting: 53,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلرَّعْد',
      en: "Ar-Ra'd",
    },
    versesCount: 43,
    juz: [12],
  },
  {
    name: {
      ar: 'إِبْرَاهِيم',
      en: 'Ibrahim',
    },
    versesCount: 52,
    juz: [12],
  },
  {
    name: {
      ar: 'ٱلْحِجْر',
      en: 'Al-Hijr',
    },
    versesCount: 99,
    juz: [13],
  },
  {
    name: {
      ar: 'ٱلنَّحْل',
      en: 'An-Nahl',
    },
    versesCount: 128,
    juz: [13],
  },
  {
    name: {
      ar: 'ٱلْإِسْرَاء',
      en: 'Al-Isra',
    },
    versesCount: 111,
    juz: [14],
  },
  {
    name: {
      ar: 'ٱلْكَهْف',
      en: 'Al-Kahf',
    },
    versesCount: 110,
    juz: [14, 15],
    juz_points: [
      {
        juz_index: 14,
        starting: 1,
        ending: 74,
      },
      {
        juz_index: 15,
        starting: 75,
      },
    ],
  },
  {
    name: {
      ar: 'مَرْيَم',
      en: 'Maryam',
    },
    versesCount: 98,
    juz: [15],
  },
  {
    name: {
      ar: 'طه',
      en: 'Ta-Ha',
    },
    versesCount: 135,
    juz: [15],
  },
  {
    name: {
      ar: 'ٱلْأَنْبِيَاء',
      en: 'Al-Anbiya',
    },
    versesCount: 112,
    juz: [16],
  },
  {
    name: {
      ar: 'ٱلْحَجّ',
      en: 'Al-Hajj',
    },
    versesCount: 78,
    juz: [16],
  },
  {
    name: {
      ar: 'ٱلْمُؤْمِنُون',
      en: "Al-Mu'minun",
    },
    versesCount: 118,
    juz: [17],
  },
  {
    name: {
      ar: 'ٱلنُّور',
      en: 'An-Nur',
    },
    versesCount: 64,
    juz: [17],
  },
  {
    name: {
      ar: 'ٱلْفُرْقَان',
      en: 'Al-Furqan',
    },
    versesCount: 77,
    juz: [17, 18],
    juz_points: [
      {
        juz_index: 17,
        starting: 1,
        ending: 20,
      },
      {
        juz_index: 18,
        starting: 21,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلشُّعَرَاء',
      en: "Ash-Shu'ara",
    },
    versesCount: 227,
    juz: [18],
  },
  {
    name: {
      ar: 'ٱلنَّمْل',
      en: 'An-Naml',
    },
    versesCount: 93,
    juz: [18, 19],
    juz_points: [
      {
        juz_index: 18,
        starting: 1,
        ending: 55,
      },
      {
        juz_index: 18,
        starting: 56,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلْقَصَص',
      en: 'Al-Qasas',
    },
    versesCount: 88,
    juz: [19],
  },
  {
    name: {
      ar: 'ٱلْعَنْكَبُوت',
      en: 'Al-Ankabut',
    },
    versesCount: 69,
    juz: [19, 20],
    juz_points: [
      {
        juz_index: 19,
        starting: 1,
        ending: 45,
      },
      {
        juz_index: 20,
        starting: 46,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلرُّوم',
      en: 'Ar-Rum',
    },
    versesCount: 60,
    juz: [20],
  },
  {
    name: {
      ar: 'لُقْمَان',
      en: 'Luqmaan',
    },
    versesCount: 34,
    juz: [20],
  },
  {
    name: {
      ar: 'ٱلسَّجْدَة',
      en: 'As-Sajdah',
    },
    versesCount: 30,
    juz: [20],
  },
  {
    name: {
      ar: 'ٱلْأَحْزَاب',
      en: 'Al-Ahzaab',
    },
    versesCount: 73,
    juz: [20, 21],
    juz_points: [
      { juz_index: 20, starting: 1, ending: 30 },
      {
        juz_index: 21,
        starting: 31,
      },
    ],
  },
  {
    name: {
      ar: 'سَبَأ',
      en: 'Saba',
    },
    versesCount: 54,
    juz: [21],
  },
  {
    name: {
      ar: 'فَاطِر',
      en: 'Faatir',
    },
    versesCount: 45,
    juz: [21],
  },
  {
    name: {
      ar: 'يس ',
      en: 'Ya-Sin',
    },
    versesCount: 83,
    juz: [21, 22],
    juz_points: [
      {
        juz_index: 21,
        starting: 1,
        ending: 27,
      },
      {
        juz_index: 22,
        starting: 28,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلصَّافَّات',
      en: 'As-Saaffaat',
    },
    versesCount: 182,
    juz: [22],
  },
  {
    name: {
      ar: 'ص',
      en: 'Saad',
    },
    versesCount: 88,
    juz: [22],
  },
  {
    name: {
      ar: 'ٱلزُّمَر',
      en: 'Az-Zumar',
    },
    versesCount: 75,
    juz: [22, 23],
    juz_points: [
      {
        juz_index: 22,
        starting: 1,
        ending: 31,
      },
      {
        juz_index: 23,
        starting: 32,
      },
    ],
  },
  {
    name: {
      ar: 'غَافِر',
      en: 'Ghafir',
    },
    versesCount: 85,
    juz: [23],
  },
  {
    name: {
      ar: 'فُصِّلَت',
      en: 'Fussilat',
    },
    versesCount: 54,
    juz: [23, 24],
    juz_points: [
      {
        juz_index: 23,
        starting: 1,
        ending: 46,
      },
      {
        juz_index: 24,
        starting: 47,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلشُّورىٰ',
      en: 'Ash-Shura',
    },
    versesCount: 53,
    juz: [24],
  },
  {
    name: {
      ar: 'ٱلْزُّخْرُف',
      en: 'Az-Zukhruf',
    },
    versesCount: 89,
    juz: [24],
  },
  {
    name: {
      ar: 'ٱلدُّخَان',
      en: 'Ad-Dukhaan',
    },
    versesCount: 59,
    juz: [24],
  },
  {
    name: {
      ar: 'ٱلْجَاثِيَة',
      en: 'Al-Jaathiyah',
    },
    versesCount: 37,
    juz: [24],
  },
  {
    name: {
      ar: 'ٱلْأَحْقَاف',
      en: 'Al-Ahqaaf',
    },
    versesCount: 35,
    juz: [25],
  },
  {
    name: {
      ar: 'مُحَمَّد',
      en: 'Muhammad',
    },
    versesCount: 38,
    juz: [25],
  },
  {
    name: {
      ar: 'ٱلْفَتْح',
      en: 'Al-Fath',
    },
    versesCount: 29,
    juz: [25],
  },
  {
    name: {
      ar: 'ٱلْحُجُرَات',
      en: 'Al-Hujuraat',
    },
    versesCount: 18,
    juz: [25],
  },
  {
    name: {
      ar: 'ق',
      en: 'Qaaf',
    },
    versesCount: 45,
    juz: [25],
  },
  {
    name: {
      ar: 'ٱلذَّارِيَات',
      en: 'Adh-Dhaariyaat',
    },
    versesCount: 60,
    juz: [25, 26],
    juz_points: [
      {
        juz_index: 25,
        starting: 1,
        ending: 30,
      },
      {
        juz_index: 26,
        starting: 31,
      },
    ],
  },
  {
    name: {
      ar: 'ٱلطُّور',
      en: 'At-Toor',
    },
    versesCount: 49,
    juz: [26],
  },
  {
    name: {
      ar: 'ٱلنَّجْم',
      en: 'An-Najm',
    },
    versesCount: 62,
  },
  {
    name: {
      ar: 'ٱلْقَمَر',
      en: 'Al-Qamar',
    },
    versesCount: 55,
  },
  {
    name: {
      ar: 'ٱلرَّحْمَٰن',
      en: 'Ar-Rahman',
    },
    versesCount: 78,
  },
  {
    name: {
      ar: 'ٱلْوَاقِعَة',
      en: "Al-Waqi'ah",
    },
    versesCount: 96,
  },
  {
    name: {
      ar: 'ٱلْحَدِيد',
      en: 'Al-Hadeed',
    },
    versesCount: 29,
  },
  {
    name: {
      ar: 'ٱلْمُجَادِلَة',
      en: 'Al-Mujadila',
    },
    versesCount: 22,
  },
  {
    name: {
      ar: 'ٱلْحَشْر',
      en: 'Al-Hashr',
    },
    versesCount: 24,
  },
  {
    name: {
      ar: 'ٱلْمُمْتَحَنَة',
      en: 'Al-Mumtahanah',
    },
    versesCount: 13,
  },
  {
    name: {
      ar: 'ٱلصَّفّ',
      en: 'As-Saff',
    },
    versesCount: 14,
  },
  {
    name: {
      ar: 'ٱلْجُمُعَة',
      en: "Al-Jumu'ah",
    },
    versesCount: 11,
  },
  {
    name: {
      ar: 'ٱلْمُنَافِقُون',
      en: 'Al-Munafiqoon',
    },
    versesCount: 11,
  },
  {
    name: {
      ar: 'ٱلتَّغَابُن',
      en: 'At-Taghabun',
    },
    versesCount: 18,
  },
  {
    name: {
      ar: 'ٱلطَّلَاق',
      en: 'At-Talaq',
    },
    versesCount: 12,
  },
  {
    name: {
      ar: 'ٱلتَّحْرِيم',
      en: 'At-Tahreem',
    },
    versesCount: 12,
  },
  {
    name: {
      ar: 'ٱلْمُلْك',
      en: 'Al-Mulk',
    },
    versesCount: 30,
  },
  {
    name: {
      ar: 'ٱلْقَلَم',
      en: 'Al-Qalam',
    },
    versesCount: 52,
  },
  {
    name: {
      ar: 'ٱلْحَاقَّة',
      en: 'Al-Haaqqa',
    },
    versesCount: 52,
  },
  {
    name: {
      ar: 'ٱلْمَعَارِج',
      en: "Al-Ma'aarij",
    },
    versesCount: 44,
  },
  {
    name: {
      ar: 'نُوح',
      en: 'Nuh',
    },
    versesCount: 28,
  },
  {
    name: {
      ar: 'ٱلْجِنّ',
      en: 'Al-Jinn',
    },
    versesCount: 28,
  },
  {
    name: {
      ar: 'ٱلْمُزَّمِّل',
      en: 'Al-Muzzammil',
    },
    versesCount: 20,
  },
  {
    name: {
      ar: 'ٱلْمُدَّثِّر',
      en: 'Al-Muddaththir',
    },
    versesCount: 56,
  },
  {
    name: {
      ar: 'ٱلْقِيَامَة',
      en: 'Al-Qiyamah',
    },
    versesCount: 40,
  },
  {
    name: {
      ar: 'ٱلْإِنْسَان',
      en: 'Al-Insaan|Ad-Dahr',
    },
    versesCount: 31,
  },
  {
    name: {
      ar: 'ٱلْمُرْسَلَات',
      en: 'Al-Mursalaat',
    },
    versesCount: 50,
  },
  {
    name: {
      ar: 'ٱلنَّبَأ',
      en: "An-Naba'",
    },
    versesCount: 40,
  },
  {
    name: {
      ar: 'ٱلنَّازِعَات',
      en: "An-Naazi'aat",
    },
    versesCount: 46,
  },
  {
    name: {
      ar: 'عَبَسَ',
      en: 'Abasa',
    },
    versesCount: 42,
  },
  {
    name: {
      ar: 'ٱلتَّكْوِير',
      en: 'At-Takweer',
    },
    versesCount: 29,
  },
  {
    name: {
      ar: 'ٱلْإِنْفِطَار',
      en: 'Al-Infitar',
    },
    versesCount: 19,
  },
  {
    name: {
      ar: 'ٱلْمُطَفِّفِين',
      en: 'Al-Mutaffifeen',
    },
    versesCount: 36,
  },
  {
    name: {
      ar: 'ٱلْإِنْشِقَاق',
      en: 'Al-Inshiqaaq',
    },
    versesCount: 25,
  },
  {
    name: {
      ar: 'ٱلْبُرُوج',
      en: 'Al-Burooj',
    },
    versesCount: 22,
  },
  {
    name: {
      ar: 'ٱلطَّارِق',
      en: 'At-Taariq',
    },
    versesCount: 17,
  },
  {
    name: {
      ar: 'ٱلْأَعْلَىٰ',
      en: "Al-A'la",
    },
    versesCount: 19,
  },
  {
    name: {
      ar: 'ٱلْغَاشِيَة',
      en: 'Al-Ghaashiyah',
    },
    versesCount: 26,
  },
  {
    name: {
      ar: 'ٱلْفَجْر',
      en: 'Al-Fajr',
    },
    versesCount: 30,
  },
  {
    name: {
      ar: 'ٱلْبَلَد',
      en: 'Al-Balad',
    },
    versesCount: 20,
  },
  {
    name: {
      ar: 'ٱلشَّمْس',
      en: 'Ash-Shams',
    },
    versesCount: 15,
  },
  {
    name: {
      ar: 'ٱللَّيْل',
      en: 'Al-Layl',
    },
    versesCount: 21,
  },
  {
    name: {
      ar: 'ٱلضُّحَىٰ',
      en: 'Ad-Dhuha',
    },
    versesCount: 11,
  },
  {
    name: {
      ar: 'ٱلشَّرْح',
      en: 'Ash-Sharh (Al-Inshirah)',
    },
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلتِّين',
      en: 'At-Tin',
    },
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلْعَلَق',
      en: 'Al-Alaq',
    },
    versesCount: 19,
  },
  {
    name: {
      ar: 'ٱلْقَدْر',
      en: 'Al-Qadr',
    },
    versesCount: 5,
  },
  {
    name: {
      ar: 'ٱلْبَيِّنَة',
      en: 'Al-Bayyinah',
    },
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلزَّلْزَلَة',
      en: 'Az-Zalzalah',
    },
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلْعَادِيَات',
      en: "Al-'Aadiyat",
    },
    versesCount: 11,
  },
  {
    name: {
      ar: 'ٱلْقَارِعَة',
      en: "Al-Qaari'ah",
    },
    versesCount: 11,
  },
  {
    name: {
      ar: 'ٱلتَّكَاثُر',
      en: 'At-Takaathur',
    },
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلْعَصْر',
      en: "Al-'Asr",
    },
    versesCount: 3,
  },
  {
    name: {
      ar: 'ٱلْهُمَزَة',
      en: 'Al-Humazah',
    },
    versesCount: 9,
  },
  {
    name: {
      ar: 'ٱلْفِيل',
      en: 'Al-Feel',
    },
    versesCount: 5,
  },
  {
    name: {
      ar: 'قُرَيْش',
      en: 'Quraish',
    },
    versesCount: 4,
  },
  {
    name: {
      ar: 'ٱلْمَاعُون',
      en: "Al-Maa'oon",
    },
    versesCount: 7,
  },
  {
    name: {
      ar: 'ٱلْكَوْثَر',
      en: 'Al-Kawthar',
    },
    versesCount: 3,
  },
  {
    name: {
      ar: 'ٱلْكَافِرُون',
      en: 'Al-Kaafiroon',
    },
    versesCount: 6,
  },
  {
    name: {
      ar: 'ٱلنَّصْر',
      en: 'An-Nasr',
    },
    versesCount: 3,
  },
  {
    name: {
      ar: 'ٱلْمَسَد',
      en: 'Al-Masad',
    },
    versesCount: 5,
  },
  {
    name: {
      ar: 'ٱلْإِخْلَاص',
      en: 'Al-Ikhlas',
    },
    versesCount: 4,
  },
  {
    name: {
      ar: 'ٱلْفَلَق',
      en: 'Al-Falaq',
    },
    versesCount: 5,
  },
  {
    name: {
      ar: 'ٱلنَّاس',
      en: 'An-Naas',
    },
    versesCount: 6,
  },
];

const juz_info: Juz[] = [
  {
    surahs: [0, 1],
  },
  {
    surahs: [1],
  },
  {
    surahs: [1, 2],
  },
];
