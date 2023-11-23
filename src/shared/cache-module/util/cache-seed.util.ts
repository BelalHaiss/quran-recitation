import { Juz, Surah_Info } from 'src/shared/types/quran';
import { CacheKeys } from '../redisKeys.types';
import { CacheService } from '../cache-module.service';
import { RedisClientType } from 'redis';
import { Injectable, OnModuleInit } from '@nestjs/common';

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
    juz: [26],
  },
  {
    name: {
      ar: 'ٱلْقَمَر',
      en: 'Al-Qamar',
    },
    versesCount: 55,
    juz: [26],
  },
  {
    name: {
      ar: 'ٱلرَّحْمَٰن',
      en: 'Ar-Rahman',
    },
    versesCount: 78,
    juz: [26],
  },
  {
    name: {
      ar: 'ٱلْوَاقِعَة',
      en: "Al-Waqi'ah",
    },
    versesCount: 96,
    juz: [26],
  },
  {
    name: {
      ar: 'ٱلْحَدِيد',
      en: 'Al-Hadeed',
    },
    versesCount: 29,
    juz: [26],
  },
  {
    name: {
      ar: 'ٱلْمُجَادِلَة',
      en: 'Al-Mujadila',
    },
    versesCount: 22,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلْحَشْر',
      en: 'Al-Hashr',
    },
    versesCount: 24,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلْمُمْتَحَنَة',
      en: 'Al-Mumtahanah',
    },
    versesCount: 13,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلصَّفّ',
      en: 'As-Saff',
    },
    versesCount: 14,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلْجُمُعَة',
      en: "Al-Jumu'ah",
    },
    versesCount: 11,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلْمُنَافِقُون',
      en: 'Al-Munafiqoon',
    },
    versesCount: 11,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلتَّغَابُن',
      en: 'At-Taghabun',
    },
    versesCount: 18,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلطَّلَاق',
      en: 'At-Talaq',
    },
    versesCount: 12,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلتَّحْرِيم',
      en: 'At-Tahreem',
    },
    versesCount: 12,
    juz: [27],
  },
  {
    name: {
      ar: 'ٱلْمُلْك',
      en: 'Al-Mulk',
    },
    versesCount: 30,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْقَلَم',
      en: 'Al-Qalam',
    },
    versesCount: 52,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْحَاقَّة',
      en: 'Al-Haaqqa',
    },
    versesCount: 52,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْمَعَارِج',
      en: "Al-Ma'aarij",
    },
    versesCount: 44,
    juz: [28],
  },
  {
    name: {
      ar: 'نُوح',
      en: 'Nuh',
    },
    versesCount: 28,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْجِنّ',
      en: 'Al-Jinn',
    },
    versesCount: 28,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْمُزَّمِّل',
      en: 'Al-Muzzammil',
    },
    versesCount: 20,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْمُدَّثِّر',
      en: 'Al-Muddaththir',
    },
    versesCount: 56,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْقِيَامَة',
      en: 'Al-Qiyamah',
    },
    versesCount: 40,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْإِنْسَان',
      en: 'Al-Insaan|Ad-Dahr',
    },
    versesCount: 31,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلْمُرْسَلَات',
      en: 'Al-Mursalaat',
    },
    versesCount: 50,
    juz: [28],
  },
  {
    name: {
      ar: 'ٱلنَّبَأ',
      en: "An-Naba'",
    },
    versesCount: 40,
    juz: [29],
  },
  {
    name: {
      ar: 'ٱلنَّازِعَات',
      en: "An-Naazi'aat",
    },
    versesCount: 46,
    juz: [29],
  },
  {
    name: {
      ar: 'عَبَسَ',
      en: 'Abasa',
    },
    juz: [29],
    versesCount: 42,
  },
  {
    name: {
      ar: 'ٱلتَّكْوِير',
      en: 'At-Takweer',
    },
    juz: [29],
    versesCount: 29,
  },
  {
    name: {
      ar: 'ٱلْإِنْفِطَار',
      en: 'Al-Infitar',
    },
    juz: [29],
    versesCount: 19,
  },
  {
    name: {
      ar: 'ٱلْمُطَفِّفِين',
      en: 'Al-Mutaffifeen',
    },
    juz: [29],
    versesCount: 36,
  },
  {
    name: {
      ar: 'ٱلْإِنْشِقَاق',
      en: 'Al-Inshiqaaq',
    },
    juz: [29],
    versesCount: 25,
  },
  {
    name: {
      ar: 'ٱلْبُرُوج',
      en: 'Al-Burooj',
    },
    juz: [29],
    versesCount: 22,
  },
  {
    name: {
      ar: 'ٱلطَّارِق',
      en: 'At-Taariq',
    },
    juz: [29],
    versesCount: 17,
  },
  {
    name: {
      ar: 'ٱلْأَعْلَىٰ',
      en: "Al-A'la",
    },
    juz: [29],
    versesCount: 19,
  },
  {
    name: {
      ar: 'ٱلْغَاشِيَة',
      en: 'Al-Ghaashiyah',
    },
    juz: [29],
    versesCount: 26,
  },
  {
    name: {
      ar: 'ٱلْفَجْر',
      en: 'Al-Fajr',
    },
    juz: [29],
    versesCount: 30,
  },
  {
    name: {
      ar: 'ٱلْبَلَد',
      en: 'Al-Balad',
    },
    juz: [29],
    versesCount: 20,
  },
  {
    name: {
      ar: 'ٱلشَّمْس',
      en: 'Ash-Shams',
    },
    juz: [29],
    versesCount: 15,
  },
  {
    name: {
      ar: 'ٱللَّيْل',
      en: 'Al-Layl',
    },
    juz: [29],
    versesCount: 21,
  },
  {
    name: {
      ar: 'ٱلضُّحَىٰ',
      en: 'Ad-Dhuha',
    },
    juz: [29],
    versesCount: 11,
  },
  {
    name: {
      ar: 'ٱلشَّرْح',
      en: 'Ash-Sharh (Al-Inshirah)',
    },
    juz: [29],
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلتِّين',
      en: 'At-Tin',
    },
    juz: [29],
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلْعَلَق',
      en: 'Al-Alaq',
    },
    juz: [29],
    versesCount: 19,
  },
  {
    name: {
      ar: 'ٱلْقَدْر',
      en: 'Al-Qadr',
    },
    juz: [29],
    versesCount: 5,
  },
  {
    name: {
      ar: 'ٱلْبَيِّنَة',
      en: 'Al-Bayyinah',
    },
    juz: [29],
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلزَّلْزَلَة',
      en: 'Az-Zalzalah',
    },
    juz: [29],
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلْعَادِيَات',
      en: "Al-'Aadiyat",
    },
    juz: [29],
    versesCount: 11,
  },
  {
    name: {
      ar: 'ٱلْقَارِعَة',
      en: "Al-Qaari'ah",
    },
    juz: [29],
    versesCount: 11,
  },
  {
    name: {
      ar: 'ٱلتَّكَاثُر',
      en: 'At-Takaathur',
    },
    juz: [29],
    versesCount: 8,
  },
  {
    name: {
      ar: 'ٱلْعَصْر',
      en: "Al-'Asr",
    },
    juz: [29],
    versesCount: 3,
  },
  {
    name: {
      ar: 'ٱلْهُمَزَة',
      en: 'Al-Humazah',
    },
    juz: [29],
    versesCount: 9,
  },
  {
    name: {
      ar: 'ٱلْفِيل',
      en: 'Al-Feel',
    },
    juz: [29],
    versesCount: 5,
  },
  {
    name: {
      ar: 'قُرَيْش',
      en: 'Quraish',
    },
    juz: [29],
    versesCount: 4,
  },
  {
    name: {
      ar: 'ٱلْمَاعُون',
      en: "Al-Maa'oon",
    },
    juz: [29],
    versesCount: 7,
  },
  {
    name: {
      ar: 'ٱلْكَوْثَر',
      en: 'Al-Kawthar',
    },
    juz: [29],
    versesCount: 3,
  },
  {
    name: {
      ar: 'ٱلْكَافِرُون',
      en: 'Al-Kaafiroon',
    },
    juz: [29],
    versesCount: 6,
  },
  {
    name: {
      ar: 'ٱلنَّصْر',
      en: 'An-Nasr',
    },
    juz: [29],
    versesCount: 3,
  },
  {
    name: {
      ar: 'ٱلْمَسَد',
      en: 'Al-Masad',
    },
    juz: [29],
    versesCount: 5,
  },
  {
    name: {
      ar: 'ٱلْإِخْلَاص',
      en: 'Al-Ikhlas',
    },
    juz: [29],
    versesCount: 4,
  },
  {
    name: {
      ar: 'ٱلْفَلَق',
      en: 'Al-Falaq',
    },
    juz: [29],
    versesCount: 5,
  },
  {
    name: {
      ar: 'ٱلنَّاس',
      en: 'An-Naas',
    },
    juz: [29],
    versesCount: 6,
  },
];

export const juz_info_seed = (): Juz[] => [
  {
    end: { surahIndex: 1, ayah: 141 },
    surahs: [0, 1],
  },
  {
    surahs: [1],
    end: { surahIndex: 1, ayah: 252 },
  },
  {
    surahs: [1, 2],
    end: { surahIndex: 2, ayah: 92 },
  },
  {
    surahs: [2, 3],
    end: { surahIndex: 3, ayah: 23 },
  },
  {
    surahs: [3],
    end: { surahIndex: 3, ayah: 147 },
  },
  {
    surahs: [3, 4],
    end: { surahIndex: 4, ayah: 81 },
  },
  {
    surahs: [4, 5],
    end: { surahIndex: 5, ayah: 110 },
  },
  {
    surahs: [5, 6],
    end: { surahIndex: 6, ayah: 87 },
  },
  {
    surahs: [6, 7],
    end: { surahIndex: 7, ayah: 40 },
  },
  {
    surahs: [7, 8],
    end: { surahIndex: 8, ayah: 92 },
  },
  {
    surahs: [8, 9, 10],
    end: { surahIndex: 10, ayah: 5 },
  },
  {
    surahs: [10, 11],
    end: { surahIndex: 11, ayah: 52 },
  },
  {
    surahs: [11, 12, 13],
    end: { surahIndex: 13, ayah: 52 },
  },
  {
    surahs: [14, 15],
    end: { surahIndex: 15, ayah: 128 },
  },
  {
    surahs: [16, 17],
    end: { surahIndex: 17, ayah: 74 },
  },
  {
    surahs: [17, 18, 19],
    end: { surahIndex: 19, ayah: 135 },
  },
  {
    surahs: [20, 21],
    end: { surahIndex: 21, ayah: 78 },
  },
  {
    surahs: [22, 23, 24],
    end: { surahIndex: 24, ayah: 20 },
  },
  {
    surahs: [24, 25, 26],
    end: { surahIndex: 26, ayah: 55 },
  },
  {
    surahs: [26, 27, 28],
    end: { surahIndex: 28, ayah: 45 },
  },
  {
    surahs: [28, 29, 30, 31, 32],
    end: { surahIndex: 32, ayah: 30 },
  },
  {
    surahs: [32, 33, 34, 35],
    end: { surahIndex: 35, ayah: 27 },
  },
  {
    surahs: [35, 36, 37, 38],
    end: { surahIndex: 38, ayah: 31 },
  },
  {
    surahs: [38, 39, 40],
    end: { surahIndex: 40, ayah: 46 },
  },
  {
    surahs: [40, 41, 42, 43, 44],
    end: { surahIndex: 44, ayah: 37 },
  },
  {
    surahs: [45, 46, 47, 48, 49, 50],
    end: { surahIndex: 50, ayah: 30 },
  },
  {
    surahs: [50, 51, 52, 53, 54, 55, 56],
    end: { surahIndex: 56, ayah: 29 },
  },
  {
    surahs: [57, 58, 59, 60, 61, 62, 63, 64, 65],
    end: { surahIndex: 65, ayah: 12 },
  },
  {
    surahs: [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76],
    end: { surahIndex: 76, ayah: 50 },
  },
  {
    surahs: [
      77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94,
      95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110,
      111, 112, 113,
    ],
    end: { surahIndex: 113, ayah: 6 },
  },
];

@Injectable()
export class CacheSeeder implements OnModuleInit {
  constructor(private cacheService: CacheService) {}
  onModuleInit() {
    this.seeder().catch((e) => {
      console.log(e, 'redis seed failed');
    });
  }

  private isStored(
    getMethod: keyof RedisClientType,
    redisKey: keyof CacheKeys,
  ) {
    return this.cacheService.getItem(getMethod, redisKey);
  }

  private async storeArr(arr: any[], redisKey: keyof CacheKeys) {
    const seededData: number = await this.isStored('lLen', redisKey);
    if (!seededData)
      return arr.map((objectVal) =>
        this.cacheService.setItem('rPush', redisKey, JSON.stringify(objectVal)),
      );
  }

  private async seeder() {
    await this.storeArr(surahs_info_seed(), 'surahs_info');
    await this.storeArr(juz_info_seed(), 'juz_info');
  }
}
