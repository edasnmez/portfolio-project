import React from 'react';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';


function Header() {
  const { lang, mode, toggleLang, toggleMode, t, loading,} = useLanguageTheme();

  return (
    <header className="w-full px-6 md:px-12 lg:px-[150px]">
      {/*  Tema  + Dil  */}
  <div className="mode-switch flex h-[59px] justify-end">
    
    <div className="flex items-center gap-4">
      <div className="mode-box flex items-center gap-2 relative">
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox opacity-0 absolute peer"
          onChange={toggleMode}
          checked={mode === "dark"}
        />
        <label
          htmlFor="checkbox"
          className={`checkbox-label w-[55px] h-[26px] border rounded-full relative p-[5px] cursor-pointer flex justify-between items-center
            ${mode === "dark" ? "bg-[#3A3A3A] border-[#4731D3]" : "bg-[#4731D3] border-[#4731D3]"}`}
        >
          <span className="ball w-[15px] h-[16px] bg-[#FFE86E] absolute left-[10px] top-[4px] rounded-full transition-transform duration-200"></span>
        </label>
        <span
          className={`font-inter text-[14px] font-medium ${
            mode === "dark" ? "text-[#D9D9D9]" : "text-[#777777]"
          }`}
        >
          {mode === "dark" ? t.mode_switch[1] : t.mode_switch[0]}
        </span>
      </div>

      <span className={mode === "dark" ? "text-[#D9D9D9]" : "text-[#6B7280]"}>|</span>
      {loading ? (
        <span>Yükleniyor...</span> 
      ) : (
        <>
      {lang === "en" ? (
        <button
          onClick={toggleLang}
          disabled={loading} 
          className={`text-[14px] font-inter font-medium ${
            mode === "dark" ? "text-[#D9D9D9]" : "text-[#6B7280]"
          }`}
        >
          
          <span className="text-[#3730A3]">{t.lang}</span> ’YE GEÇ
        </button>
      ) : (
        <button
          onClick={toggleLang}
          className={`text-[14px] font-inter font-medium ${
            mode === "dark" ? "text-[#D9D9D9]" : "text-[#6B7280]"
          }`}
        >
          TRANSLATE TO <span className="text-[#3730A3]">{t.lang}</span>
        </button>
      )} 
      </>
      )}
    </div>

  </div>

  {/* Nav */}
  <div className="header flex justify-between items-center pt-4">
     {/* Logo */}
     <div className="logo w-[40px] h-[40px] bg-[#EEEBFF] rounded-full items-center justify-center hidden lg:flex">
      <span className="text-l text-[#7B61FF] font-inter transform rotate-45">A</span>
    </div>

    <nav
      className={`flex gap-10 font-inter font-medium text-[18px] ${
        mode === "dark" ? "text-[#D9D9D9]" : "text-[#6B7280]"
      }`}
    >
      <button className="h-[28px] cursor-pointer hover:text-[#8F88FF]">{t.header[0]}</button>
      <button className="h-[28px] cursor-pointer hover:text-[#8F88FF]">{t.header[1]}</button>
      <button className="px-4 h-[38px] bg-white border border-[#3730A3] rounded-[6px] cursor-pointer text-[#3730A3] hover:bg-[#4338CA] hover:text-white transition-all">
        {t.header[2]}
      </button>
    </nav>

  </div>
</header>
  );
}

export default Header;
