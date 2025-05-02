import React from 'react';
import { useLanguageTheme } from '../contexts/LanguageThemeContext.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import MainImage from '../assets/main-image.png';


function Hero() {
    const {mode,t } = useLanguageTheme();
  return (
    <main className='lg:py-30 py-10 px-4 sm:px-6 md:px-12 lg:px-[150px] flex flex-col lg:flex-row justify-between items-start gap-10'>
  <div className='hero-left flex flex-col items-start w-full gap-6 lg:w-[596px] lg:h-[428px]'>
    
    {/* Name Box */}
    <div className='name-box flex items-center gap-2 w-fit h-[28px]'>
      <div className={`w-[80px] h-0 border-t ${mode === "dark" ? "border-[#BAB2E7]" : "border-[#3730A3]"}`}></div>
      <span className={`font-inter font-medium text-sm sm:text-base ${mode === "dark" ? "text-[#BAB2E7]" : "text-[#4338CA]"}`}>
        Almila Su
      </span>
    </div>

    {/* Title */}
    <div className={`font-inter font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl ${mode === "dark" ? "text-[#AEBCCF]" : "text-[#1F2937]"}`}>
      {t.hero.title}
    </div>

    {/* Description */}
    <div className={`font-inter font-normal text-sm sm:text-base md:text-lg leading-6 sm:leading-7 w-full lg:w-[553px] ${mode === "dark" ? "text-[#FFFFFF]" : "text-[#6B7280]"}`}>
      {t.hero.desc}
    </div>

    {/* Buttons */}
    <div className='buttons flex flex-wrap gap-3 w-full lg:w-[421px]'>
      {[
        { label: t.header[2], icon: null },
        { label: 'Github', icon: faGithub },
        { label: 'Linkedin', icon: faLinkedinIn },
      ].map(({ label, icon }, i) => (
        <button
          key={i}
          className={`flex items-center justify-center gap-2 px-4 h-[36px] sm:h-[38px] md:h-[40px] lg:h-[42px] text-xs sm:text-sm md:text-base rounded-[6px] transition-all cursor-pointer
            ${mode === "dark"
              ? i === 0
                ? "bg-[#E1E1FF] text-black hover:bg-[#BAB2E7] hover:text-[#4338CA]"
                : "bg-[#383838] text-[#E1E1FF] border border-[#E1E1FF] hover:bg-[#BAB2E7] hover:text-[#4338CA]"
              : i === 0
                ? "bg-[#4338CA] text-white hover:bg-[#3730A3]"
                : "bg-white text-[#4338CA] border border-[#4338CA] hover:bg-[#4338CA] hover:text-white"
            }`}
        >
          {icon && <FontAwesomeIcon icon={icon} size="sm" className="pr-1" />}
          {label}
        </button>
      ))}
    </div>
  </div>

  {/* Image */}
  <img
    src={MainImage}
    alt="Main Image"
    className="hidden lg:block w-[420px] h-[330px] rounded-[18px]"
  />
</main>

  );
}

export default Hero;










