import React from 'react'
import { useLanguageTheme } from '../contexts/LanguageThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
    const {mode,t} = useLanguageTheme();
    const linkColors = ["text-[#E1E1FF]", "text-[#17D18B]", "text-[#0BA6F6]"];

  return (
    <footer className={`flex flex-col items-start justify-center gap-10 h-[400px] px-4 sm:px-6 md:px-12 lg:px-[150px] ${mode === "dark" ? "bg-[#141414]" : "bg-[#F9F9F9]"}`}>
         {/* Title */}
         <h1 className={`title text-[40px] leading-[48px] font-semibold font-inter  w-[500px] ${mode==="dark" ? "text-[#AEBCCF]" : "text-[#1F2937]"}`}>
         {t.footer.title}
        </h1>
        {/* Links */}
        <div className='links flex lg:flex-row flex-col gap-6 lg:justify-between w-full'>
          {/* Email */}
            <div className='flex gap-1 items-center'>
            <FontAwesomeIcon icon={faHandPointRight}  className='text-yellow-500'/>
                <Link className={`underline font-inter ${mode==="dark" ? "text-[#BAB2E7]" : "text-[#AF0C48]"}`}>almilasucode@gmail.com</Link>
            </div>
            {/* Websites Link */}
            <div className='websites flex gap-4'>
            {t.footer.links.map((x, index) => (
                <Link  key={index} className={`font-inter text-[16px]  ${mode === "dark" ? linkColors[index] : linkColors[index]===linkColors[0] ? "text-[#0A0A14]" : linkColors[index] }`}>{x}</Link>
             ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer;