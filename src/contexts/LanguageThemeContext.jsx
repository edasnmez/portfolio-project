import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LanguageThemeContext = createContext();

export const LanguageThemeProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [mode, setMode] = useState("dark");
  const [loading, setLoading] = useState(false);
  const [t, setT] = useState(null); 
  const [firstLoad, setFirstLoad] = useState(true);


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
  useEffect(() => {
    const fetchLangData = async () => {
      setLoading(true); 
      try {
        const response = await axios.get("/data.json");
        setT(response.data.languages[lang]);
        
        if (!firstLoad) {
          toast.success(
            lang === "tr" ? "Dil Türkçe olarak değiştirildi" : "Language changed to English"
          );
        }
      } catch (err) {
        toast.error("Dil verisi alınamadı.");
        console.error("Hata: ", err); 
      } finally {
        setLoading(false); 
      }
    };
  
    fetchLangData();
  }, [lang, firstLoad]); 
  
  const toggleLang = () => {
    const newLang = lang === "en" ? "tr" : "en";
    setLang(newLang);
    setFirstLoad(false); 
  };
  

  

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    toast.info(newMode === "dark" ? "Koyu tema aktif" : "Açık tema aktif");
  };

 
  if (!t) return <div>Yükleniyor...</div>;

  return (
    <LanguageThemeContext.Provider value={{ lang, mode, toggleLang, toggleMode, t, loading }}>
      {children}
    </LanguageThemeContext.Provider>
  );
};

export const useLanguageTheme = () => useContext(LanguageThemeContext);
