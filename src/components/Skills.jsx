import React from 'react';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';

function Skills() {
    const { t } = useLanguageTheme();
  return (
    <section className="flex flex-col items-start pt-4 py-15 gap-6">
        <h3 className="font-inter font-semibold text-[40px] leading-none text-[#1F2937]">{t.header[0]}</h3>
        <div className='flex justify-between w-full'>
            {t.skills.map((x, index) => (
                <div key={index} className="w-[300px] h-[104px]">
                <h4 className="font-inter font-medium text-[30px] text-[#4338CA]">{x.subhead}</h4>
                <p className="w-[280px] h-[48px] font-inter font-normal text-xs leading-4 text-[#6B7280] pt-4">{x.desc}</p>
                </div>
            ))}
        </div>    
    </section>

  );
}

export default Skills;






