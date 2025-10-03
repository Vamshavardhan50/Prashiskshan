import React, { createContext, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem("prashikshan-language");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("prashikshan-language", language);
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  const getAvailableLanguages = () => {
    return [
      { code: "en", name: "English", nativeName: "English" },
      { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
      { code: "te", name: "Telugu", nativeName: "తెలుగు" },
      { code: "ur", name: "Urdu", nativeName: "اردو" },
    ];
  };

  const value = {
    currentLanguage: getCurrentLanguage(),
    changeLanguage,
    availableLanguages: getAvailableLanguages(),
    isRTL: getCurrentLanguage() === "ur", // Urdu is RTL
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
