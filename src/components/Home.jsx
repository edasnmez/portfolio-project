import React from 'react';
import Header from './Header';
import '../App.css';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';
import Hero from './Hero';
import Skills from './Skills';
import Profile from './Profile';
function Home() {
  const { mode } = useLanguageTheme();
  return (
    <div className={`w-full min-h-screen px-[150px] ${mode === "dark" ? "bg-[#252128]" : "bg-white"}`}>
      <Header />
      <Hero />
      <Skills />
      <Profile />
    </div>
  );
}

export default Home;
