export const locales = ["en", "zh"];

export const localeNames: Record<string, string> = {
  en: "🇺🇸 English",
  zh: "🇨🇳 中文",
};

export const defaultLocale = "en";

type Dictionaries = {
  [key: string]: () => Promise<any>;
};

const dictionaries: Dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  zh: () => import("@/dictionaries/zh.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  if (dictionaries[locale]) {
    return dictionaries[locale]();
  }

  return dictionaries[defaultLocale]();
};
