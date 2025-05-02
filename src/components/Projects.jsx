import React from 'react'
import { useLanguageTheme } from '../contexts/LanguageThemeContext';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function Projects() {
    const {mode, t } = useLanguageTheme();
  return (
    <section className='flex flex-col  gap-10 pb-20 px-4 sm:px-6 md:px-12 lg:px-[150px]'>
        <div className="w-full h-0 border-t border-[#BAB2E7] " />
        {/* Title */}
        <h3 className={`font-inter font-semibold text-[40px] leading-none  ${mode === "dark" ? "text-[#AEBCCF]" : "text-[#1F2937]"}`}>{t.header[1]}</h3>
        {/* Projects List */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-8 w-full">
        {t.projects.map((x, index) => (
                 <div key={index} className="flex flex-col gap-4 min-h-[450px] w-full lg:w-[300px]">
                <img src={x.image}  alt={x.title} />
                <h4 className={`font-inter font-normal text-[30px]   ${mode === "dark" ? "text-[#B7AAFF]" : "text-[#4338CA]"}`}>{x.title}</h4>
                <p className={`w-full font-inter font-regular text-[14px] leading-4  ${mode === "dark" ? "text-white" : "text-[#6B7280]"}`}>{x.desc}</p>
                    <div className='flex gap-2 flex-wrap'>
                        <button className={`w-[68px] h-[27px] border rounded cursor-pointer ${mode === "dark" ? "text-[#8F88FF] border-[#8F88FF] bg-[#383838] hover:bg-[#8F88FF] hover:text-white" :"text-[#3730A3] border-[#3730A3] hover:bg-[#3730A3] hover:text-white"  } `}>react</button>
                        <button className={`w-[68px] h-[27px] border rounded cursor-pointer ${mode === "dark" ? "text-[#8F88FF] border-[#8F88FF] bg-[#383838] hover:bg-[#8F88FF] hover:text-white" :"text-[#3730A3] border-[#3730A3] hover:bg-[#3730A3] hover:text-white" } `}>redux</button>
                        <button className={`w-[68px] h-[27px] border rounded cursor-pointer ${mode === "dark" ? "text-[#8F88FF] border-[#8F88FF] bg-[#383838] hover:bg-[#8F88FF] hover:text-white" :"text-[#3730A3] border-[#3730A3] hover:bg-[#3730A3] hover:text-white" } `}>axios</button>
                    </div>
                <div className='flex justify-between w-full'>
                    <Link  className={`underline ${mode === "dark" ? "text-[#E1E1FF] hover:text-[#8F88FF]" : "text-[#3730A3] hover:text-[#AF0C48] "}`}>Github</Link>
                    <Link  className={`underline ${mode === "dark" ? "text-[#E1E1FF] hover:text-[#8F88FF]" : "text-[#3730A3] hover:text-[#AF0C48]"} `}>View Site</Link>
                </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Projects;
/* pill-react */


