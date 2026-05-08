import type { Locale } from './i18n';

export interface Dict {
  marquee: string;
  tagline: string; // home hero tagline under input
  toolHeroTagline: string; // tool page tagline under input
  ui: {
    allTools: string;
    whyUseThis: string;
    howItWorks: string;
    faq: string;
    otherTools: string;
    useFree: string;
  };
  footer: {
    privacy: string;
    terms: string;
    contact: string;
    disclaimer: string;
  };
}

// ── English (canonical / fallback) ───────────────────────────────────
const en: Dict = {
  marquee: '★ FREE  ★ NO LOGIN  ★ HIGH QUALITY  ★ NO WATERMARK  ★ FAST  ★ FREE  ★ NO LOGIN  ★ HIGH QUALITY  ★ NO WATERMARK  ★ FAST  ',
  tagline: 'STORIES · REELS · PHOTOS · HIGHLIGHTS · DP · AUDIO — ONE PASTE, NO LOGIN',
  toolHeroTagline: 'FREE · NO LOGIN · NO WATERMARK',
  ui: {
    allTools: '— ALL TOOLS',
    whyUseThis: '— WHY USE THIS',
    howItWorks: '— HOW IT WORKS',
    faq: '— FAQ',
    otherTools: '— OTHER TOOLS',
    useFree: 'USE FREE →',
  },
  footer: {
    privacy: 'PRIVACY',
    terms: 'TERMS',
    contact: 'CONTACT',
    disclaimer: 'Not affiliated with Meta or Instagram.',
  },
};

const ko: Dict = {
  marquee: '★ 무료  ★ 로그인 없음  ★ 고화질  ★ 워터마크 없음  ★ 빠름  ★ 무료  ★ 로그인 없음  ★ 고화질  ★ 워터마크 없음  ★ 빠름  ',
  tagline: '스토리 · 릴스 · 사진 · 하이라이트 · 프로필 · 오디오 — 한 번 붙여넣기, 로그인 없음',
  toolHeroTagline: '무료 · 로그인 없음 · 워터마크 없음',
  ui: {
    allTools: '— 모든 도구',
    whyUseThis: '— 사용 이유',
    howItWorks: '— 작동 방식',
    faq: '— 자주 묻는 질문',
    otherTools: '— 다른 도구',
    useFree: '무료 사용 →',
  },
  footer: {
    privacy: '개인정보',
    terms: '약관',
    contact: '문의',
    disclaimer: 'Meta 또는 Instagram과 제휴하지 않습니다.',
  },
};

const ja: Dict = {
  marquee: '★ 無料  ★ ログイン不要  ★ 高画質  ★ ウォーターマークなし  ★ 高速  ★ 無料  ★ ログイン不要  ★ 高画質  ★ ウォーターマークなし  ★ 高速  ',
  tagline: 'ストーリー · リール · 写真 · ハイライト · DP · 音声 — ペーストするだけ、ログイン不要',
  toolHeroTagline: '無料 · ログイン不要 · ウォーターマークなし',
  ui: {
    allTools: '— 全ツール',
    whyUseThis: '— 使う理由',
    howItWorks: '— 使い方',
    faq: '— よくある質問',
    otherTools: '— 他のツール',
    useFree: '無料で使う →',
  },
  footer: {
    privacy: 'プライバシー',
    terms: '規約',
    contact: '連絡先',
    disclaimer: 'Meta または Instagram と提携していません。',
  },
};

const zhCN: Dict = {
  marquee: '★ 免费  ★ 无需登录  ★ 高画质  ★ 无水印  ★ 快速  ★ 免费  ★ 无需登录  ★ 高画质  ★ 无水印  ★ 快速  ',
  tagline: '故事 · Reels · 照片 · 精选 · 头像 · 音频 — 一次粘贴,无需登录',
  toolHeroTagline: '免费 · 无需登录 · 无水印',
  ui: {
    allTools: '— 所有工具',
    whyUseThis: '— 为什么用',
    howItWorks: '— 工作原理',
    faq: '— 常见问题',
    otherTools: '— 其他工具',
    useFree: '免费使用 →',
  },
  footer: {
    privacy: '隐私',
    terms: '条款',
    contact: '联系',
    disclaimer: '与 Meta 或 Instagram 无关联。',
  },
};

const de: Dict = {
  marquee: '★ KOSTENLOS  ★ KEIN LOGIN  ★ HOHE QUALITÄT  ★ KEIN WASSERZEICHEN  ★ SCHNELL  ★ KOSTENLOS  ★ KEIN LOGIN  ★ HOHE QUALITÄT  ★ KEIN WASSERZEICHEN  ★ SCHNELL  ',
  tagline: 'STORIES · REELS · FOTOS · HIGHLIGHTS · DP · AUDIO — EINMAL EINFÜGEN, KEIN LOGIN',
  toolHeroTagline: 'KOSTENLOS · KEIN LOGIN · KEIN WASSERZEICHEN',
  ui: {
    allTools: '— ALLE TOOLS',
    whyUseThis: '— WARUM DIESES TOOL',
    howItWorks: '— SO FUNKTIONIERT ES',
    faq: '— HÄUFIGE FRAGEN',
    otherTools: '— ANDERE TOOLS',
    useFree: 'KOSTENLOS NUTZEN →',
  },
  footer: {
    privacy: 'DATENSCHUTZ',
    terms: 'AGB',
    contact: 'KONTAKT',
    disclaimer: 'Nicht mit Meta oder Instagram verbunden.',
  },
};

const fr: Dict = {
  marquee: '★ GRATUIT  ★ SANS LOGIN  ★ HAUTE QUALITÉ  ★ SANS FILIGRANE  ★ RAPIDE  ★ GRATUIT  ★ SANS LOGIN  ★ HAUTE QUALITÉ  ★ SANS FILIGRANE  ★ RAPIDE  ',
  tagline: 'STORIES · REELS · PHOTOS · À LA UNE · PHOTO DE PROFIL · AUDIO — UN COLLAGE, SANS LOGIN',
  toolHeroTagline: 'GRATUIT · SANS LOGIN · SANS FILIGRANE',
  ui: {
    allTools: '— TOUS LES OUTILS',
    whyUseThis: '— POURQUOI CECI',
    howItWorks: '— COMMENT ÇA MARCHE',
    faq: '— FAQ',
    otherTools: '— AUTRES OUTILS',
    useFree: "UTILISER GRATUITEMENT →",
  },
  footer: {
    privacy: 'CONFIDENTIALITÉ',
    terms: 'CONDITIONS',
    contact: 'CONTACT',
    disclaimer: 'Non affilié à Meta ou Instagram.',
  },
};

const es: Dict = {
  marquee: '★ GRATIS  ★ SIN LOGIN  ★ ALTA CALIDAD  ★ SIN MARCA DE AGUA  ★ RÁPIDO  ★ GRATIS  ★ SIN LOGIN  ★ ALTA CALIDAD  ★ SIN MARCA DE AGUA  ★ RÁPIDO  ',
  tagline: 'HISTORIAS · REELS · FOTOS · DESTACADOS · DP · AUDIO — UN PEGADO, SIN LOGIN',
  toolHeroTagline: 'GRATIS · SIN LOGIN · SIN MARCA DE AGUA',
  ui: {
    allTools: '— TODAS LAS HERRAMIENTAS',
    whyUseThis: '— POR QUÉ USARLO',
    howItWorks: '— CÓMO FUNCIONA',
    faq: '— PREGUNTAS',
    otherTools: '— OTRAS HERRAMIENTAS',
    useFree: 'USAR GRATIS →',
  },
  footer: {
    privacy: 'PRIVACIDAD',
    terms: 'TÉRMINOS',
    contact: 'CONTACTO',
    disclaimer: 'No afiliado con Meta o Instagram.',
  },
};

const pt: Dict = {
  marquee: '★ GRÁTIS  ★ SEM LOGIN  ★ ALTA QUALIDADE  ★ SEM MARCA D\'ÁGUA  ★ RÁPIDO  ★ GRÁTIS  ★ SEM LOGIN  ★ ALTA QUALIDADE  ★ SEM MARCA D\'ÁGUA  ★ RÁPIDO  ',
  tagline: 'STORIES · REELS · FOTOS · DESTAQUES · DP · ÁUDIO — UM COLAR, SEM LOGIN',
  toolHeroTagline: "GRÁTIS · SEM LOGIN · SEM MARCA D'ÁGUA",
  ui: {
    allTools: '— TODAS AS FERRAMENTAS',
    whyUseThis: '— POR QUE USAR',
    howItWorks: '— COMO FUNCIONA',
    faq: '— PERGUNTAS',
    otherTools: '— OUTRAS FERRAMENTAS',
    useFree: 'USAR GRÁTIS →',
  },
  footer: {
    privacy: 'PRIVACIDADE',
    terms: 'TERMOS',
    contact: 'CONTATO',
    disclaimer: 'Não afiliado à Meta ou Instagram.',
  },
};

const it: Dict = {
  marquee: '★ GRATIS  ★ NIENTE LOGIN  ★ ALTA QUALITÀ  ★ NIENTE FILIGRANA  ★ VELOCE  ★ GRATIS  ★ NIENTE LOGIN  ★ ALTA QUALITÀ  ★ NIENTE FILIGRANA  ★ VELOCE  ',
  tagline: 'STORIE · REELS · FOTO · IN EVIDENZA · DP · AUDIO — UN INCOLLA, NIENTE LOGIN',
  toolHeroTagline: 'GRATIS · NIENTE LOGIN · NIENTE FILIGRANA',
  ui: {
    allTools: '— TUTTI GLI STRUMENTI',
    whyUseThis: '— PERCHÉ USARLO',
    howItWorks: '— COME FUNZIONA',
    faq: '— DOMANDE',
    otherTools: '— ALTRI STRUMENTI',
    useFree: 'USA GRATIS →',
  },
  footer: {
    privacy: 'PRIVACY',
    terms: 'TERMINI',
    contact: 'CONTATTO',
    disclaimer: 'Non affiliato a Meta o Instagram.',
  },
};

const ru: Dict = {
  marquee: '★ БЕСПЛАТНО  ★ БЕЗ ВХОДА  ★ ВЫСОКОЕ КАЧЕСТВО  ★ БЕЗ ВОДЯНОГО ЗНАКА  ★ БЫСТРО  ★ БЕСПЛАТНО  ★ БЕЗ ВХОДА  ★ ВЫСОКОЕ КАЧЕСТВО  ★ БЕЗ ВОДЯНОГО ЗНАКА  ★ БЫСТРО  ',
  tagline: 'ИСТОРИИ · REELS · ФОТО · АКТУАЛЬНОЕ · АВАТАР · АУДИО — ОДНА ВСТАВКА, БЕЗ ВХОДА',
  toolHeroTagline: 'БЕСПЛАТНО · БЕЗ ВХОДА · БЕЗ ВОДЯНОГО ЗНАКА',
  ui: {
    allTools: '— ВСЕ ИНСТРУМЕНТЫ',
    whyUseThis: '— ЗАЧЕМ',
    howItWorks: '— КАК ЭТО РАБОТАЕТ',
    faq: '— ВОПРОСЫ',
    otherTools: '— ДРУГИЕ ИНСТРУМЕНТЫ',
    useFree: 'БЕСПЛАТНО →',
  },
  footer: {
    privacy: 'ПРИВАТНОСТЬ',
    terms: 'УСЛОВИЯ',
    contact: 'КОНТАКТ',
    disclaimer: 'Не связано с Meta или Instagram.',
  },
};

const ar: Dict = {
  marquee: '★ مجاني  ★ بدون تسجيل  ★ جودة عالية  ★ بدون علامة مائية  ★ سريع  ★ مجاني  ★ بدون تسجيل  ★ جودة عالية  ★ بدون علامة مائية  ★ سريع  ',
  tagline: 'القصص · الريلز · الصور · الأبرز · صورة الملف · الصوت — لصقة واحدة، بدون تسجيل',
  toolHeroTagline: 'مجاني · بدون تسجيل · بدون علامة مائية',
  ui: {
    allTools: '— جميع الأدوات',
    whyUseThis: '— لماذا تستخدمها',
    howItWorks: '— كيف تعمل',
    faq: '— الأسئلة',
    otherTools: '— أدوات أخرى',
    useFree: 'استخدم مجاناً →',
  },
  footer: {
    privacy: 'الخصوصية',
    terms: 'الشروط',
    contact: 'اتصال',
    disclaimer: 'غير مرتبط بـ Meta أو Instagram.',
  },
};

const tr: Dict = {
  marquee: '★ ÜCRETSİZ  ★ GİRİŞSİZ  ★ YÜKSEK KALİTE  ★ FİLİGRANSIZ  ★ HIZLI  ★ ÜCRETSİZ  ★ GİRİŞSİZ  ★ YÜKSEK KALİTE  ★ FİLİGRANSIZ  ★ HIZLI  ',
  tagline: 'HİKAYELER · REELS · FOTOĞRAFLAR · ÖNE ÇIKAN · DP · SES — TEK YAPIŞTIRMA, GİRİŞSİZ',
  toolHeroTagline: 'ÜCRETSİZ · GİRİŞSİZ · FİLİGRANSIZ',
  ui: {
    allTools: '— TÜM ARAÇLAR',
    whyUseThis: '— NEDEN BUNU',
    howItWorks: '— NASIL ÇALIŞIR',
    faq: '— SSS',
    otherTools: '— DİĞER ARAÇLAR',
    useFree: 'ÜCRETSİZ KULLAN →',
  },
  footer: {
    privacy: 'GİZLİLİK',
    terms: 'ŞARTLAR',
    contact: 'İLETİŞİM',
    disclaimer: 'Meta veya Instagram ile ilişkili değildir.',
  },
};

const id: Dict = {
  marquee: '★ GRATIS  ★ TANPA LOGIN  ★ KUALITAS TINGGI  ★ TANPA WATERMARK  ★ CEPAT  ★ GRATIS  ★ TANPA LOGIN  ★ KUALITAS TINGGI  ★ TANPA WATERMARK  ★ CEPAT  ',
  tagline: 'STORY · REELS · FOTO · SOROTAN · DP · AUDIO — SEKALI TEMPEL, TANPA LOGIN',
  toolHeroTagline: 'GRATIS · TANPA LOGIN · TANPA WATERMARK',
  ui: {
    allTools: '— SEMUA ALAT',
    whyUseThis: '— MENGAPA INI',
    howItWorks: '— CARA KERJA',
    faq: '— PERTANYAAN',
    otherTools: '— ALAT LAIN',
    useFree: 'GUNAKAN GRATIS →',
  },
  footer: {
    privacy: 'PRIVASI',
    terms: 'KETENTUAN',
    contact: 'KONTAK',
    disclaimer: 'Tidak berafiliasi dengan Meta atau Instagram.',
  },
};

const nl: Dict = {
  marquee: '★ GRATIS  ★ GEEN LOGIN  ★ HOGE KWALITEIT  ★ GEEN WATERMERK  ★ SNEL  ★ GRATIS  ★ GEEN LOGIN  ★ HOGE KWALITEIT  ★ GEEN WATERMERK  ★ SNEL  ',
  tagline: 'STORIES · REELS · FOTOS · HIGHLIGHTS · DP · AUDIO — EEN KEER PLAKKEN, GEEN LOGIN',
  toolHeroTagline: 'GRATIS · GEEN LOGIN · GEEN WATERMERK',
  ui: {
    allTools: '— ALLE TOOLS',
    whyUseThis: '— WAAROM DIT',
    howItWorks: '— HOE HET WERKT',
    faq: '— VRAGEN',
    otherTools: '— ANDERE TOOLS',
    useFree: 'GRATIS GEBRUIKEN →',
  },
  footer: {
    privacy: 'PRIVACY',
    terms: 'VOORWAARDEN',
    contact: 'CONTACT',
    disclaimer: 'Niet verbonden met Meta of Instagram.',
  },
};

const pl: Dict = {
  marquee: '★ ZA DARMO  ★ BEZ LOGOWANIA  ★ WYSOKA JAKOŚĆ  ★ BEZ ZNAKU WODNEGO  ★ SZYBKO  ★ ZA DARMO  ★ BEZ LOGOWANIA  ★ WYSOKA JAKOŚĆ  ★ BEZ ZNAKU WODNEGO  ★ SZYBKO  ',
  tagline: 'RELACJE · REELS · ZDJĘCIA · WYRÓŻNIONE · DP · AUDIO — JEDNO WKLEJENIE, BEZ LOGOWANIA',
  toolHeroTagline: 'ZA DARMO · BEZ LOGOWANIA · BEZ ZNAKU WODNEGO',
  ui: {
    allTools: '— WSZYSTKIE NARZĘDZIA',
    whyUseThis: '— DLACZEGO TO',
    howItWorks: '— JAK TO DZIAŁA',
    faq: '— PYTANIA',
    otherTools: '— INNE NARZĘDZIA',
    useFree: 'UŻYJ ZA DARMO →',
  },
  footer: {
    privacy: 'PRYWATNOŚĆ',
    terms: 'WARUNKI',
    contact: 'KONTAKT',
    disclaimer: 'Nie powiązane z Meta ani Instagramem.',
  },
};

const cs: Dict = {
  marquee: '★ ZDARMA  ★ BEZ PŘIHLÁŠENÍ  ★ VYSOKÁ KVALITA  ★ BEZ VODOZNAKU  ★ RYCHLE  ★ ZDARMA  ★ BEZ PŘIHLÁŠENÍ  ★ VYSOKÁ KVALITA  ★ BEZ VODOZNAKU  ★ RYCHLE  ',
  tagline: 'STORIES · REELS · FOTKY · HIGHLIGHTY · DP · AUDIO — JEDNO VLOŽENÍ, BEZ PŘIHLÁŠENÍ',
  toolHeroTagline: 'ZDARMA · BEZ PŘIHLÁŠENÍ · BEZ VODOZNAKU',
  ui: {
    allTools: '— VŠECHNY NÁSTROJE',
    whyUseThis: '— PROČ TENTO',
    howItWorks: '— JAK FUNGUJE',
    faq: '— OTÁZKY',
    otherTools: '— DALŠÍ NÁSTROJE',
    useFree: 'POUŽÍT ZDARMA →',
  },
  footer: {
    privacy: 'SOUKROMÍ',
    terms: 'PODMÍNKY',
    contact: 'KONTAKT',
    disclaimer: 'Není spojeno s Meta ani Instagramem.',
  },
};

const ro: Dict = {
  marquee: '★ GRATUIT  ★ FĂRĂ LOGIN  ★ CALITATE ÎNALTĂ  ★ FĂRĂ FILIGRAN  ★ RAPID  ★ GRATUIT  ★ FĂRĂ LOGIN  ★ CALITATE ÎNALTĂ  ★ FĂRĂ FILIGRAN  ★ RAPID  ',
  tagline: 'STORY · REELS · POZE · EVIDENȚIATE · DP · AUDIO — O LIPIRE, FĂRĂ LOGIN',
  toolHeroTagline: 'GRATUIT · FĂRĂ LOGIN · FĂRĂ FILIGRAN',
  ui: {
    allTools: '— TOATE INSTRUMENTELE',
    whyUseThis: '— DE CE',
    howItWorks: '— CUM FUNCȚIONEAZĂ',
    faq: '— ÎNTREBĂRI',
    otherTools: '— ALTE INSTRUMENTE',
    useFree: 'FOLOSEȘTE GRATUIT →',
  },
  footer: {
    privacy: 'CONFIDENȚIALITATE',
    terms: 'TERMENI',
    contact: 'CONTACT',
    disclaimer: 'Nu este afiliat cu Meta sau Instagram.',
  },
};

const el: Dict = {
  marquee: '★ ΔΩΡΕΑΝ  ★ ΧΩΡΙΣ ΣΥΝΔΕΣΗ  ★ ΥΨΗΛΗ ΠΟΙΟΤΗΤΑ  ★ ΧΩΡΙΣ ΥΔΑΤΟΓΡΑΦΗΜΑ  ★ ΓΡΗΓΟΡΟ  ★ ΔΩΡΕΑΝ  ★ ΧΩΡΙΣ ΣΥΝΔΕΣΗ  ★ ΥΨΗΛΗ ΠΟΙΟΤΗΤΑ  ★ ΧΩΡΙΣ ΥΔΑΤΟΓΡΑΦΗΜΑ  ★ ΓΡΗΓΟΡΟ  ',
  tagline: 'STORIES · REELS · ΦΩΤΟΓΡΑΦΙΕΣ · HIGHLIGHTS · DP · ΗΧΟΣ — ΜΙΑ ΕΠΙΚΟΛΛΗΣΗ, ΧΩΡΙΣ ΣΥΝΔΕΣΗ',
  toolHeroTagline: 'ΔΩΡΕΑΝ · ΧΩΡΙΣ ΣΥΝΔΕΣΗ · ΧΩΡΙΣ ΥΔΑΤΟΓΡΑΦΗΜΑ',
  ui: {
    allTools: '— ΟΛΑ ΤΑ ΕΡΓΑΛΕΙΑ',
    whyUseThis: '— ΓΙΑΤΙ ΑΥΤΟ',
    howItWorks: '— ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ',
    faq: '— ΕΡΩΤΗΣΕΙΣ',
    otherTools: '— ΑΛΛΑ ΕΡΓΑΛΕΙΑ',
    useFree: 'ΧΡΗΣΗ ΔΩΡΕΑΝ →',
  },
  footer: {
    privacy: 'ΑΠΟΡΡΗΤΟ',
    terms: 'ΟΡΟΙ',
    contact: 'ΕΠΙΚΟΙΝΩΝΙΑ',
    disclaimer: 'Δεν συνδέεται με τη Meta ή το Instagram.',
  },
};

const th: Dict = {
  marquee: '★ ฟรี  ★ ไม่ต้องล็อกอิน  ★ คุณภาพสูง  ★ ไม่มีลายน้ำ  ★ เร็ว  ★ ฟรี  ★ ไม่ต้องล็อกอิน  ★ คุณภาพสูง  ★ ไม่มีลายน้ำ  ★ เร็ว  ',
  tagline: 'สตอรี่ · รีลส์ · ภาพ · ไฮไลต์ · DP · เสียง — วางครั้งเดียว ไม่ต้องล็อกอิน',
  toolHeroTagline: 'ฟรี · ไม่ต้องล็อกอิน · ไม่มีลายน้ำ',
  ui: {
    allTools: '— ทุกเครื่องมือ',
    whyUseThis: '— ทำไมใช้',
    howItWorks: '— วิธีทำงาน',
    faq: '— คำถาม',
    otherTools: '— เครื่องมืออื่น',
    useFree: 'ใช้ฟรี →',
  },
  footer: {
    privacy: 'ความเป็นส่วนตัว',
    terms: 'ข้อตกลง',
    contact: 'ติดต่อ',
    disclaimer: 'ไม่เกี่ยวข้องกับ Meta หรือ Instagram',
  },
};

const bn: Dict = {
  marquee: '★ ফ্রি  ★ লগইন ছাড়া  ★ উচ্চ মানের  ★ ওয়াটারমার্ক ছাড়া  ★ দ্রুত  ★ ফ্রি  ★ লগইন ছাড়া  ★ উচ্চ মানের  ★ ওয়াটারমার্ক ছাড়া  ★ দ্রুত  ',
  tagline: 'স্টোরি · রিলস · ছবি · হাইলাইট · ডিপি · অডিও — এক পেস্টে, লগইন ছাড়া',
  toolHeroTagline: 'ফ্রি · লগইন ছাড়া · ওয়াটারমার্ক ছাড়া',
  ui: {
    allTools: '— সব টুল',
    whyUseThis: '— কেন এটা',
    howItWorks: '— কীভাবে কাজ করে',
    faq: '— প্রশ্ন',
    otherTools: '— অন্য টুল',
    useFree: 'ফ্রি ব্যবহার →',
  },
  footer: {
    privacy: 'প্রাইভেসি',
    terms: 'শর্তাবলী',
    contact: 'যোগাযোগ',
    disclaimer: 'Meta বা Instagram-এর সাথে কোনো সম্পর্ক নেই।',
  },
};

const sr: Dict = {
  marquee: '★ BESPLATNO  ★ BEZ PRIJAVE  ★ VISOK KVALITET  ★ BEZ VODENOG ŽIGA  ★ BRZO  ★ BESPLATNO  ★ BEZ PRIJAVE  ★ VISOK KVALITET  ★ BEZ VODENOG ŽIGA  ★ BRZO  ',
  tagline: 'PRIČE · REELS · SLIKE · ISTAKNUTO · DP · ZVUK — JEDNO LEPLJENJE, BEZ PRIJAVE',
  toolHeroTagline: 'BESPLATNO · BEZ PRIJAVE · BEZ VODENOG ŽIGA',
  ui: {
    allTools: '— SVI ALATI',
    whyUseThis: '— ZAŠTO OVO',
    howItWorks: '— KAKO RADI',
    faq: '— PITANJA',
    otherTools: '— DRUGI ALATI',
    useFree: 'KORISTI BESPLATNO →',
  },
  footer: {
    privacy: 'PRIVATNOST',
    terms: 'USLOVI',
    contact: 'KONTAKT',
    disclaimer: 'Nije povezano sa Meta ili Instagram.',
  },
};

export const DICTS: Record<Locale, Dict> = {
  en, ko, ja, 'zh-CN': zhCN, de, fr, es, pt, it, ru, ar, tr,
  id, nl, pl, cs, ro, el, th, bn, sr,
};

export function getDict(locale: Locale): Dict {
  return DICTS[locale] ?? en;
}
