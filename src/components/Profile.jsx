import React from 'react';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';

function Profile() {
    const { t } = useLanguageTheme();
  return (
    <section className="profile-sec flex flex-col">
        <div className="w-full h-0 border-t border-[#BAB2E7] py-[15px]" />
        <h1 className='title text-[40px] leading-[48px] font-semibold font-inter text-gray-800 w-[150px] h-[48px]'>{t.profile[0].title}</h1>
        <div className='main-div flex gap-15 pt-10'>
            <div className='profile-box w-[380px] h-[229px]'>
                <h3 className='subtitle text-[24px] leading-[28px] font-medium font-inter text-indigo-700 pb-6'>{t.profile[0].title}</h3>
                <div className="grid grid-cols-2  gap-y-2">
                        {t.profile[0].subhead.map((label, index) => (
                            <React.Fragment key={index}>
                            <h4 className="text-[15px] font-semibold tracking-[0.01em] text-black font-inter">{label}</h4>
                            <span className="text-[15px] font-normal tracking-[0.01em] text-black font-inter">{t.profile[0].desc[index]}</span>
                            </React.Fragment>
                        ))}
                </div>

            </div>
            <div className='about-box w-[576px] h-[182px]'>
                <h3 className='subtitle text-[24px] leading-[28px] font-medium font-inter text-indigo-700 pb-6'>{t.profile[1].title}</h3>
                {t.profile[1].desc.split('\n').map((paragraph, index) => (
                    <span key={index} className="block pb-2 text-[15px] leading-[27px] font-normal font-inter text-gray-500">
                    {paragraph}
                    </span>
                ))}
                            
            </div>
        </div>
    </section>

  );
}

export default Profile;













