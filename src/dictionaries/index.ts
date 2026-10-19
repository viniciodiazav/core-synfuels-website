import { Locale, Dictionary } from "./types";
import { enDictionary } from "./en";
import { esDictionary } from "./es";

export const dictionaries: Record<Locale, Dictionary> = {
  en: enDictionary,
  es: esDictionary,
};

export const getDictionary = (locale: string): Dictionary => {
  if (locale === "es") {
    return esDictionary;
  }
  return enDictionary;
};

export * from "./types";
