import React from 'react';
import Header from './Header';
import '../App.css';
import { useLanguageTheme } from '../contexts/LanguageThemeContext';
import Hero from './Hero';
import Skills from './Skills';
import Profile from './Profile';
import Projects from './Projects';
import Footer from './Footer';
function Home() {
  const { mode } = useLanguageTheme();
  return (
    <div className={`w-full min-h-screen  ${mode === "dark" ? "bg-[#252128]" : "bg-white"}`}>
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
