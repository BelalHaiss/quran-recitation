import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { Surah_Info } from '../../shared/types/quran';

@Injectable({ scope: Scope.DEFAULT })
export class QuranValidator {
  private readonly surahs_info: Surah_Info[] = [
    {
      name: {
        ar: 'ٱلْفَاتِحَة',
        en: 'Al-Fatihah',
      },
      versesCount: 7,
    },
    {
      name: {
        ar: 'ٱلْبَقَرَة',
        en: 'Al-Baqarah',
      },
      versesCount: 286,
    },
    {
      name: {
        ar: 'آلِ عِمْرَان',
        en: "Aali 'Imran",
      },
      versesCount: 200,
    },
    {
      name: {
        ar: 'ٱلنِّسَاء',
        en: 'An-Nisa',
      },
      versesCount: 176,
    },
    {
      name: {
        ar: 'ٱلْمَائِدَة',
        en: "Al-Ma'idah",
      },
      versesCount: 120,
    },
    {
      name: {
        ar: 'ٱلْأَنْعَام',
        en: "Al-An'am",
      },
      versesCount: 165,
    },
    {
      name: {
        ar: 'ٱلْأَعْرَاف',
        en: "Al-A'raf",
      },
      versesCount: 206,
    },
    {
      name: {
        ar: 'ٱلْأَنْفَال',
        en: 'Al-Anfal',
      },
      versesCount: 75,
    },
    {
      name: {
        ar: 'ٱلتَّوْبَة',
        en: 'At-Tawbah',
      },
      versesCount: 129,
    },
    {
      name: {
        ar: 'يُونُس',
        en: 'Yunus',
      },
      versesCount: 109,
    },
    {
      name: {
        ar: 'هُود',
        en: 'Hud',
      },
      versesCount: 123,
    },
    {
      name: {
        ar: 'يُوسُف',
        en: 'Yusuf',
      },
      versesCount: 111,
    },
    {
      name: {
        ar: 'ٱلرَّعْد',
        en: "Ar-Ra'd",
      },
      versesCount: 43,
    },
    {
      name: {
        ar: 'إِبْرَاهِيم',
        en: 'Ibrahim',
      },
      versesCount: 52,
    },
    {
      name: {
        ar: 'ٱلْحِجْر',
        en: 'Al-Hijr',
      },
      versesCount: 99,
    },
    {
      name: {
        ar: 'ٱلنَّحْل',
        en: 'An-Nahl',
      },
      versesCount: 128,
    },
    {
      name: {
        ar: 'ٱلْإِسْرَاء',
        en: 'Al-Isra',
      },
      versesCount: 111,
    },
    {
      name: {
        ar: 'ٱلْكَهْف',
        en: 'Al-Kahf',
      },
      versesCount: 110,
    },
    {
      name: {
        ar: 'مَرْيَم',
        en: 'Maryam',
      },
      versesCount: 98,
    },
    {
      name: {
        ar: 'طه',
        en: 'Ta-Ha',
      },
      versesCount: 135,
    },
    {
      name: {
        ar: 'ٱلْأَنْبِيَاء',
        en: 'Al-Anbiya',
      },
      versesCount: 112,
    },
    {
      name: {
        ar: 'ٱلْحَجّ',
        en: 'Al-Hajj',
      },
      versesCount: 78,
    },
    {
      name: {
        ar: 'ٱلْمُؤْمِنُون',
        en: "Al-Mu'minun",
      },
      versesCount: 118,
    },
    {
      name: {
        ar: 'ٱلنُّور',
        en: 'An-Nur',
      },
      versesCount: 64,
    },
    {
      name: {
        ar: 'ٱلْفُرْقَان',
        en: 'Al-Furqan',
      },
      versesCount: 77,
    },
    {
      name: {
        ar: 'ٱلشُّعَرَاء',
        en: "Ash-Shu'ara",
      },
      versesCount: 227,
    },
    {
      name: {
        ar: 'ٱلنَّمْل',
        en: 'An-Naml',
      },
      versesCount: 93,
    },
    {
      name: {
        ar: 'ٱلْقَصَص',
        en: 'Al-Qasas',
      },
      versesCount: 88,
    },
    {
      name: {
        ar: 'ٱلْعَنْكَبُوت',
        en: 'Al-Ankabut',
      },
      versesCount: 69,
    },
    {
      name: {
        ar: 'ٱلرُّوم',
        en: 'Ar-Rum',
      },
      versesCount: 60,
    },
    {
      name: {
        ar: 'لُقْمَان',
        en: 'Luqmaan',
      },
      versesCount: 34,
    },
    {
      name: {
        ar: 'ٱلسَّجْدَة',
        en: 'As-Sajdah',
      },
      versesCount: 30,
    },
    {
      name: {
        ar: 'ٱلْأَحْزَاب',
        en: 'Al-Ahzaab',
      },
      versesCount: 73,
    },
    {
      name: {
        ar: 'سَبَأ',
        en: 'Saba',
      },
      versesCount: 54,
    },
    {
      name: {
        ar: 'فَاطِر',
        en: 'Faatir',
      },
      versesCount: 45,
    },
    {
      name: {
        ar: 'يس ',
        en: 'Ya-Sin',
      },
      versesCount: 83,
    },
    {
      name: {
        ar: 'ٱلصَّافَّات',
        en: 'As-Saaffaat',
      },
      versesCount: 182,
    },
    {
      name: {
        ar: 'ص',
        en: 'Saad',
      },
      versesCount: 88,
    },
    {
      name: {
        ar: 'ٱلزُّمَر',
        en: 'Az-Zumar',
      },
      versesCount: 75,
    },
    {
      name: {
        ar: 'غَافِر',
        en: 'Ghafir',
      },
      versesCount: 85,
    },
    {
      name: {
        ar: 'فُصِّلَت',
        en: 'Fussilat',
      },
      versesCount: 54,
    },
    {
      name: {
        ar: 'ٱلشُّورىٰ',
        en: 'Ash-Shura',
      },
      versesCount: 53,
    },
    {
      name: {
        ar: 'ٱلْزُّخْرُف',
        en: 'Az-Zukhruf',
      },
      versesCount: 89,
    },
    {
      name: {
        ar: 'ٱلدُّخَان',
        en: 'Ad-Dukhaan',
      },
      versesCount: 59,
    },
    {
      name: {
        ar: 'ٱلْجَاثِيَة',
        en: 'Al-Jaathiyah',
      },
      versesCount: 37,
    },
    {
      name: {
        ar: 'ٱلْأَحْقَاف',
        en: 'Al-Ahqaaf',
      },
      versesCount: 35,
    },
    {
      name: {
        ar: 'مُحَمَّد',
        en: 'Muhammad',
      },
      versesCount: 38,
    },
    {
      name: {
        ar: 'ٱلْفَتْح',
        en: 'Al-Fath',
      },
      versesCount: 29,
    },
    {
      name: {
        ar: 'ٱلْحُجُرَات',
        en: 'Al-Hujuraat',
      },
      versesCount: 18,
    },
    {
      name: {
        ar: 'ق',
        en: 'Qaaf',
      },
      versesCount: 45,
    },
    {
      name: {
        ar: 'ٱلذَّارِيَات',
        en: 'Adh-Dhaariyaat',
      },
      versesCount: 60,
    },
    {
      name: {
        ar: 'ٱلطُّور',
        en: 'At-Toor',
      },
      versesCount: 49,
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

  validate(surahIndex: number, verses: [number, number]) {
    if (verses[0] > verses[1] || verses[0] === verses[1])
      throw new HttpException(
        'ayah from shoud be smaller that ayah to',
        HttpStatus.FORBIDDEN,
      );

    if (surahIndex < 0 || surahIndex < 113)
      throw new HttpException('surah index wrong', HttpStatus.FORBIDDEN);

    const maxVersesCount = this.surahs_info[surahIndex].versesCount;
    if (verses.some((ayah) => ayah < 0 || ayah > maxVersesCount))
      throw new HttpException('verses numbers are wrong', HttpStatus.FORBIDDEN);
  }
}

import { PipeTransform } from '@nestjs/common';

@Injectable()
export class QuranValidatorPipe implements PipeTransform {
  private readonly surahs_info: Surah_Info[] = [
    { name: { ar: 'ar', en: 'en' }, versesCount: 2 },
  ];

  transform(value: any) {
    const { surahIndex, verses } = value;

    if (verses[0] > verses[1] || verses[0] === verses[1]) {
      throw new HttpException(
        'ayah from should be smaller than ayah to',
        HttpStatus.FORBIDDEN,
      );
    }

    if (surahIndex < 0 || surahIndex >= 113) {
      throw new HttpException('surah index is wrong', HttpStatus.FORBIDDEN);
    }

    const maxVersesCount = this.surahs_info[surahIndex].versesCount;
    if (verses.some((ayah) => ayah < 0 || ayah > maxVersesCount)) {
      throw new HttpException('verse numbers are wrong', HttpStatus.FORBIDDEN);
    }

    return value;
  }
}
