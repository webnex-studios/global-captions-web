export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=org.globalcaptions.app";

export const LANGUAGES = [
  { code: "EN", name: "English", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "ES", name: "Spanish", flag: "\u{1F1EA}\u{1F1F8}" },
  { code: "FR", name: "French", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "DE", name: "German", flag: "\u{1F1E9}\u{1F1EA}" },
  { code: "IT", name: "Italian", flag: "\u{1F1EE}\u{1F1F9}" },
  { code: "PT", name: "Portuguese", flag: "\u{1F1E7}\u{1F1F7}" },
  { code: "RU", name: "Russian", flag: "\u{1F1F7}\u{1F1FA}" },
  { code: "ZH", name: "Chinese", flag: "\u{1F1E8}\u{1F1F3}" },
  { code: "JA", name: "Japanese", flag: "\u{1F1EF}\u{1F1F5}" },
  { code: "KO", name: "Korean", flag: "\u{1F1F0}\u{1F1F7}" },
] as const;

export const CAPTION_DEMOS = [
  {
    source: "Hola, \u00bfc\u00f3mo est\u00e1s hoy?",
    translated: "Hello, how are you today?",
    langPair: "ES \u2192 EN",
  },
  {
    source: "Le monde est beau aujourd'hui.",
    translated: "The world is beautiful today.",
    langPair: "FR \u2192 EN",
  },
  {
    source: "\u4ECA\u65E5\u306F\u3044\u3044\u5929\u6C17\u3067\u3059\u306D\u3002",
    translated: "It's nice weather today, isn't it?",
    langPair: "JA \u2192 EN",
  },
  {
    source: "\uC624\uB298 \uBC14\uB78C\uC774 \uC2DC\uC6D0\uD574\uC694.",
    translated: "The breeze is refreshing today.",
    langPair: "KO \u2192 EN",
  },
] as const;

export const FEATURES = [
  {
    image: "/images/features/2.webp",
    label: "Social Media",
    span: "tall" as const,
  },
  {
    image: "/images/features/8.webp",
    label: "Live Sports",
    span: "square" as const,
  },
  {
    image: null,
    label: "10 Languages.\nZero Delay.",
    span: "text" as const,
  },
  {
    image: "/images/features/3.webp",
    label: "Video Translation",
    span: "square" as const,
  },
  {
    image: "/images/features/1.webp",
    label: "Real-Time Captions",
    span: "wide" as const,
  },
  {
    image: "/images/features/5.webp",
    label: "Easy Setup",
    span: "square" as const,
  },
  {
    image: "/images/features/6.webp",
    label: "Language Settings",
    span: "wide" as const,
  },
] as const;

export const USE_CASES = [
  {
    icon: "chat",
    title: "Social Media",
    description: "Watch TikTok, Reels, and YouTube in any language",
  },
  {
    icon: "sports",
    title: "Live Sports",
    description: "Understand any broadcast commentary instantly",
  },
  {
    icon: "work",
    title: "Work & Meetings",
    description: "Real-time translation for international calls",
  },
  {
    icon: "learn",
    title: "Language Learning",
    description: "Immerse yourself with live subtitle support",
  },
] as const;
