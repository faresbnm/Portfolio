
import { useState, useEffect } from 'react';
import { IoCodeDownload } from "react-icons/io5";

const Hero = () => {

  function downloadCV() {
    // Assuming your CV file is named "your-cv.pdf" in the public folder
    const cvUrl = "/cv.pdf";
    
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Benameur-Fares.pdf'; // This will be the filename when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const [text, setText] = useState('');
  const fullText = 'Full-Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-blue-100/20 to-pink-100/20 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20 animate-gradient"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 dark:bg-purple-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 dark:bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 dark:bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>
      
      <div style={{ fontFamily: 'Savior, sans-serif' }} className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Fares</span>
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 h-12">
            <span className="text-purple-600 dark:text-purple-400">{text}</span>
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Specialized in backend architecture and beautiful frontend interfaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={downloadCV}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-purple-500 rounded-lg font-semibold text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-200"            >
              <IoCodeDownload className="text-3xl" /> Download my CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
