import React from 'react';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';

function Skills() {
    const {mode, t } = useLanguageTheme();
  return (
    <section className="flex flex-col pt-4 py-15 gap-6 px-4 sm:px-6 md:px-12 lg:px-[150px] ">
      {/* Title */}
    <h3 className={`font-inter font-semibold text-[40px] leading-none ${mode === "dark" ? "text-[#AEBCCF]" : "text-[#1F2937]"}`}>
      {t.header[0]}
    </h3>

  {/* Skills list */}
  <div className="flex flex-col lg:flex-row justify-between gap-6">
    {t.skills.map((x, index) => (
      <div key={index} className=" lg:w-[300px] lg:h-[104px]">
        <h4 className={`font-inter font-normal text-[30px] ${mode === "dark" ? "text-[#B7AAFF]" : "text-[#4338CA]"}`}>
          {x.title}
        </h4>
        <p className={` lg:w-[280px] lg:h-[48px] font-inter font-normal text-xs leading-4 pt-4 ${mode === "dark" ? "text-white" : "text-[#6B7280]"}`}>
          {x.desc}
        </p>
      </div>
    ))}
  </div>
</section>

  );
}

export default Skills;






