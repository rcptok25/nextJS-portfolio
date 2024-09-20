import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "@/locales/en";
import tr from "@/locales/tr";
import de from "@/locales/de";

// Define the structure of the translations
type Translations = { [key: string]: string };

// Create an interface for the context
interface LanguageContextProps {
  t: (key: string) => string;
  changeLanguage: (lang: string) => void;
  locale: string;
}

const translations: { [key: string]: Translations } = { en, tr, de };

// Create context with proper typing
const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>("en");

  const t = (key: string): string => {
    return translations[locale][key] || key;
  };

  const changeLanguage = (lang: string): void => {
    setLocale(lang);
  };

  return (
    <LanguageContext.Provider value={{ t, changeLanguage, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
