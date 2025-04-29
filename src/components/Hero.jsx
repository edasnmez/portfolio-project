import React from 'react';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import MainImage from '../assets/main-image.png';


function Hero() {
    const { lang, mode, toggleLang, toggleMode, t } = useLanguageTheme();
  return (
    <main className='py-16 flex justify-between items-start '>
        <div className='hero-left flex flex-col items-start w-[596px] h-[428px] gap-8'>
            <div className='name-box w-[201px] h-[28px] flex items-center gap-2'>
                <div className="w-[80px] h-0 border-t border-[#3730A3] bg-[#4338CA]"></div>
                <span className="font-inter font-medium text-[16px] text-[#4338CA] ">Almila Su</span>
            </div>
            <div className="title h-[144px] font-inter font-bold text-7xl leading-none text-[#1F2937]">
                {t.hero.title}
            </div>
            <div className="desc w-[553px] h-[84px] font-inter font-normal text-lg leading-7 text-[#6B7280]">
                {t.hero.desc}
            </div>
            <div className='buttons flex flex-row items-start gap-3 w-[421px] h-[52px]'>
                <button className="w-[110px] h-[42px] bg-[#4338CA] text-white font-inter font-medium text-base rounded-[6px] hover:bg-[#3730A3] transition-all">
                    {t.header[2]}
                </button>
                <button className="w-[110px] h-[42px] bg-[#FFFFFF] border border-[#4338CA] text-[#4338CA] font-inter font-medium text-base rounded-[6px] hover:bg-[#4338CA] hover:text-white transition-all">
                <FontAwesomeIcon icon={faGithub} size="lg" className=" text-[#3730A3] pr-2" />
                Github
                </button>
                <button className="w-[110px] h-[42px] bg-[#FFFFFF] border border-[#4338CA] text-[#4338CA] font-inter font-medium text-base rounded-[6px] hover:bg-[#4338CA] hover:text-white transition-all">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" className=" text-[#3730A3] pr-2"/>
                    Linkedin
                </button>
            </div>
        </div>
        <img src={MainImage} alt="Main Image" 
        className="w-[420px] h-[330px]  rounded-[18px]"
        />

    </main>
  );
}

export default Hero;










