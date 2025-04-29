import React from 'react';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';


function Header() {
  const { lang, mode, toggleLang, toggleMode, t } = useLanguageTheme();

  return (
    <header className="container">
      <div className="mode-switch justify-end h-[59px] flex gap-4 items-center">
        <div className="mode-box w-[167px] h-[24px] flex gap-2">
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
              ${mode === "dark" ? "bg-[#3A3A3A] border-[#4731D3]" : "bg-[#4731D3] border-[#4731D3]" }`} 
          >
            <span className="ball w-[15px] h-[16px] bg-[#FFE86E] absolute left-[10px] top-[5px] rounded-full transition-transform duration-200"></span>
          </label>




          <span
            className={`w-[103px] h-[18px] font-inter text-[14px] font-medium ${
              mode === "dark" ? "text-[#D9D9D9]" : "text-[#777777]"
            }`}
          >
            {mode === "dark" ? t.mode_switch[1] : t.mode_switch[0]}
          </span>
        </div>
        <span className={mode === "dark" ? "text-[#D9D9D9]" : "text-[#6B7280]"}>|</span>

        {lang === "en" ? (
          <button
            onClick={toggleLang}
            className={`w-[128px] h-[38px] text-[14px] font-inter font-medium ${
              mode === "dark" ? "text-[#D9D9D9]" : "text-[#6B7280]"
            }`}
          >
            <span className="text-[#3730A3]">{t.lang}</span> ’YE GEÇ
          </button>
        ) : (
          <button
            onClick={toggleLang}
            className={`w-[158px] h-[38px] text-[14px] font-inter font-medium ${
              mode === "dark" ? "text-[#D9D9D9]" : "text-[#6B7280]"
            }`}
          >
            TRANSLATE TO <span className="text-[#3730A3]">{t.lang}</span>
          </button>
        )}
      </div>

      <div className="header flex justify-between mt-4">
        <div className="logo w-[40px] h-[40px] bg-[#EEEBFF] rounded-full flex items-center justify-center">
          <span className="text-l text-[#7B61FF] font-inter transform rotate-45">A</span>
        </div>

        <nav
          className={`w-[392px] h-[52px] font-inter font-medium text-[18px] flex items-center justify-between ${
            mode === "dark" ? "text-[#D9D9D9]" : "text-[#6B7280]"
          }`}
        >
          <button className="h-[28px]">{t.header[0]}</button>
          <button className="h-[28px]">{t.header[1]}</button>
          <button className="w-[120px] h-[42px] bg-white border border-[#3730A3] rounded-[6px] text-[#3730A3] hover:bg-[#4338CA] hover:text-white transition-all">
            {t.header[2]}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
