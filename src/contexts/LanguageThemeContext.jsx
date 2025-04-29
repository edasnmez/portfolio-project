import { createContext, useContext, useState, useEffect } from "react";
import data from "../data.json"; 

const LanguageThemeContext = createContext();

export const LanguageThemeProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const storedMode = localStorage.getItem("mode");

    if (storedLang) setLang(storedLang);
    if (storedMode) setMode(storedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    localStorage.setItem("mode", mode);
  }, [lang, mode]);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "tr" : "en"));
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const t = data.languages[lang];

  return (
    <LanguageThemeContext.Provider value={{ lang, mode, toggleLang, toggleMode, t }}>
      {children}
    </LanguageThemeContext.Provider>
  );
};


export const useLanguageTheme = () => useContext(LanguageThemeContext);
