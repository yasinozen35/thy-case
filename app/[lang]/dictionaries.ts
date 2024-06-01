import "server-only";

const dictionaries: Record<string, () => Promise<Record<string, string>>> = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  tr: () => import("@/dictionaries/tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
