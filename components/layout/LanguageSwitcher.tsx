"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

declare global {
  interface Window {
    google: any;
  }
}

const languages = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
];

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("vi");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect current language from Google Translate cookie
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const googtrans = getCookie('googtrans');
    if (googtrans) {
      const lang = googtrans.split('/').pop();
      if (lang && languages.some(l => l.code === lang)) {
        setCurrentLang(lang);
      }
    }
  }, []);

  const changeLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    setIsOpen(false);

    // Set cookie for Google Translate
    const domain = window.location.hostname;
    document.cookie = `googtrans=/vi/${langCode}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/vi/${langCode}; path=/`;

    // Try to trigger via select element
    const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = langCode;
      selectElement.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      // If select not found, reload to apply cookie
      window.location.reload();
    }
  };

  const currentLanguage = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
        aria-label="Chọn ngôn ngữ"
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLanguage.flag}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-background border rounded-lg shadow-lg py-1 min-w-[140px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-secondary ${
                currentLang === lang.code ? "text-primary bg-secondary/50" : "text-muted-foreground"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
