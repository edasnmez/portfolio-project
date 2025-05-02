import React from 'react';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';

function Profile() {
    const {mode, t } = useLanguageTheme();
  return (
    <section className="profile-sec flex flex-col pb-10  px-4 sm:px-6 md:px-12 lg:px-[150px] ">
        <div className="w-full h-0 border-t border-[#BAB2E7] py-[15px] " />
        {/* Title */}
        <h1 className={`title text-[40px] leading-[48px] font-semibold font-inter  w-[150px] h-[48px] ${mode==="dark" ? "text-[#AEBCCF]" : "text-gray-800"}`}>{t.profile[0].title}</h1>
        
        <div className="main-div flex flex-col lg:flex-row gap-10 pt-10">
            {/* Profile Box */}
            <div className="profile-box w-full lg:w-[380px] lg:h-[229px]">
                <h3 className={`subtitle text-[24px] leading-[28px]  font-inter  pb-6 ${mode==="dark" ? "text-[#B7AAFF]" : "text-indigo-700"}`}>{t.profile[0].title}</h3>
                <div className="grid grid-cols-2  gap-y-2">
                        {t.profile[0].subhead.map((label, index) => (
                            <React.Fragment key={index}>
                            <h4 className={`text-[15px] font-semibold tracking-[0.01em]  font-inter ${mode==="dark" ? "text-white" : "text-black"}`}>{label}</h4>
                            <span className={`text-[15px] font-normal tracking-[0.01em]  font-inter ${mode==="dark" ? "text-white" : "text-black"}`}>{t.profile[0].desc[index]}</span>
                            </React.Fragment>
                        ))}
                </div>
            </div>
            {/* About Box */}
            <div className="about-box w-full lg:w-[576px] lg:h-[182px]">
                <h3 className={`subtitle text-[24px] leading-[28px]  font-inter pb-6 ${mode==="dark" ? "text-[#B7AAFF]" : "text-indigo-700"}`}>{t.profile[1].title}</h3>
                {t.profile[1].desc.split('\n').map((paragraph, index) => (
                    <span key={index} className={`block pb-2 text-[15px] leading-[27px] font-normal font-inter  ${mode==="dark" ? "text-white" : "text-gray-500"}`}>
                    {paragraph}
                    </span>
                ))}
                            
            </div>
        </div>
    </section>

  );
}

export default Profile;













