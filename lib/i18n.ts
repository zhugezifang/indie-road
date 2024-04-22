import { useEffect, useState } from "react";

export const locales = ["en-US", "en", "zh-CN", "zh"];

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
  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    return dictionaries["zh"]();
  }

  if (dictionaries[locale]) {
    return dictionaries[locale]();
  }

  return dictionaries[defaultLocale]();
};
