import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "react-i18next";
import { Languages, Moon, Sun } from "lucide-react";

const GlobalControls = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage, availableLanguages, isRTL } =
    useLanguage();
  const { t } = useTranslation();

  const currentLangData = availableLanguages.find(
    (lang) => lang.code === currentLanguage
  );

  return (
    <div
      className={`flex items-center space-x-2 ${
        isRTL ? "space-x-reverse" : ""
      } ${className}`}
    >
      {/* Language Selector */}
      <div className="relative group">
        <button className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-lg transition-all text-sm">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline text-xs">
            {currentLangData?.nativeName || currentLangData?.name}
          </span>
          <svg
            className="w-3 h-3 transform group-hover:rotate-180 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden z-50">
          {availableLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`block w-full text-left px-4 py-3 text-gray-800 dark:text-white hover:bg-green-50 dark:hover:bg-gray-700 transition-colors ${
                currentLanguage === language.code
                  ? "bg-green-100 dark:bg-gray-600"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm">{language.nativeName}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {language.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-2 rounded-lg transform hover:rotate-180 transition-all duration-500"
        aria-label={t("toggleTheme", "Toggle theme")}
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </div>
  );
};

export default GlobalControls;
