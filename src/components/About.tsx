import { FaPython, FaJs, FaArrowAltCircleRight } from 'react-icons/fa';
import { BiCodeBlock } from 'react-icons/bi';
import { PiFlowArrowBold } from 'react-icons/pi';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCard = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out transform
        ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
        cursor-default glass-effect dark:glass-effect p-6 rounded-xl bg-white/30 
        dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:scale-105
      `}
    >
      {children}
    </div>
  );
};


const About = () => {
  return (
    <section id="about" className="py-12 px-4 scroll-mt-20 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1 animate-on-scroll">
            <div className="sticky top-16">
              <div className="relative">
                <div className="w-full max-w-xs mx-auto h-64 rounded-2xl bg-gradient-to-br from-purple-100/50 to-blue-100/50 dark:from-purple-500/20 dark:to-blue-500/20 glass-effect dark:glass-effect flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-4xl font-bold text-white">
                    FB
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-pink-500/30 rounded-full animate-float"></div>
                <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { value: 25, label: 'Projects' },
                  { value: 7, label: 'Years Exp' },
                ].map((stat, index) => {
                  const [ref, inView] = useInView({ triggerOnce: false });
                
                  return (
                    <div
                      key={stat.label}
                      ref={ref}
                      className="glass-effect dark:glass-effect p-3 rounded-lg text-center bg-white/50 dark:bg-white/10 border border-gray-200 dark:border-white/20"
                    >
                      <div className="text-xl font-bold gradient-text">
                        {inView && <CountUp end={stat.value} duration={3} />}+
                      </div>
                      <div className="text-xs text-foreground/60">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Content Sections */}
          <div className="lg:col-span-2 animate-on-scroll space-y-8">
            {/* Introduction */}
            <AnimatedCard>
              <h3 className="text-2xl font-semibold mb-4">
                <span className="text-purple-600 dark:text-purple-400">Who am i?</span>
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed paragraph">
                A 23 years old Algerian youngman who enjoys learning new things and taking on challenges. When I'm not working, you'll often find me playing the guitar, gaming, or discovering new movies and TV shows. Im also obsessed with playing football and boxing. 
                I believe that curiosity, consistency, and a positive mindset are just as important as technical skills, and I strive to bring those qualities into everything I do.
              </p>
            </AnimatedCard>


            {/* Education */}
            <AnimatedCard>
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                Education & Background
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed paragraph">
                Currently a 5th-year student at CESI EXIA, a French engineering university,
                where I earned my diploma "IT developer" at the end of my second year, and I am now pursuing my final year to get my engineering diploma in cybersecurity. 
                <a 
                  href="https://www.francecompetences.fr/recherche/rncp/38779#anchor2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors duration-200 ml-1 underline"
                >
                  <span className="inline-flex items-center gap-1">
                  Learn more about my diploma <FaArrowAltCircleRight className="text-purple-600 dark:text-purple-400"/>
                  </span>
                </a>
              </p>
            </AnimatedCard>


            {/* Experience & Passion */}
            <AnimatedCard>
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400 ">
                Web Development
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed mb-3 paragraph">
                With over 5 years of experience in web development, I specialize in creating 
                robust backend systems and intuitive frontend interfaces. My journey began with a 
                curiosity for how things work behind the scenes, and it has grown into a passion 
                for building scalable, efficient solutions.
              </p>
            </AnimatedCard>

            {/* Beyond Web Development */}
            <AnimatedCard>
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">
                Cybersecurity
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed paragraph">
                I'm also deeply interested in <span className="font-medium text-purple-700 dark:text-purple-300">cybersecurity</span>,
                especially in <span className="font-medium text-purple-700 dark:text-purple-300">penetration testing</span>. I enjoy
                exploring system vulnerabilities and understanding how to secure digital environments, blending both curiosity and responsibility in the tech world.
              </p>
            </AnimatedCard>

            {/* Skills Preview */}
            <AnimatedCard>
              <h3 className="text-xl font-semibold mb-6 text-purple-600 dark:text-purple-400">
                Networking and system administration
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed paragraph">
               I have hands-on experience in networking and system administration, with a strong understanding of network design, routing and switching, Windows Server, Active Directory, virtualization, and Linux administration. Through academic projects and practical labs, I have built network infrastructures while applying industry best practices.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;