
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">Fares Benameur</div>
            <p className="text-foreground/60">Full-Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/faresbnm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-purple-400 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fares-ben-ameur-1aa41b300/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-purple-400 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:fbnm8829@gmail.com"
              className="text-foreground/60 hover:text-purple-400 transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-foreground/60">
          <p>&copy; {currentYear} Fares Benameur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
