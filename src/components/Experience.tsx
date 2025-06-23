import { useState } from "react";
import { useInView } from 'react-intersection-observer';

const AnimatedExperienceCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const delay = index * 100;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "University development projects",
      company: "CESI EXIA",
      period: "09/2022 - 07/2026",
      description: "Developed full-featured web platforms, desktop applications, and various software solutions that significantly enhanced my technical skills and practical understanding of development.",
      achievements: [
        "Led the development of multiple full-stack applications, including web and desktop solutions for real-world use cases",
        "Collaborated in team-based projects, applying agile methodologies and Git for version control and workflow management",
        "Built responsive and accessible UIs using modern frontend frameworks like React and Vue.js",
        "Integrated secure authentication, CRUD operations, and role-based access control in various systems",
        "Gained hands-on experience with databases, RESTful APIs, and deployment processes using tools like MySQL and Docker"
      ]
    },
    {
      title: "Front-end web development internship",
      company: "SARL GS ICT",
      period: "08/2023 - 10/2023",
      description: "Contributed to the design and development of a fully responsive front-end website to showcase the company's services and profile.",
      achievements: [
        "A responsive and professional design",
        "Integrated animations and interactive components to enhance user experience",
        "Implemented a bilingual interface (French/English) with seamless language switching",
        "Integrated a contact form with mailing functionality using PHP",
        "Added dark and light mode toggle with user preference persistence"
      ]
    },
    {
      title: "Full-Stack web development internship",
      company: "SARL GS ICT",
      period: "03/2024 - 07/2024",
      description: "Developed a full-stack web application to help the company plan, schedule, and manage maintenance operations for its equipment.",
      achievements: [
        "Designed a responsive and modern user interface for optimal experience across devices",
        "Implemented features to plan and manage maintenance schedules for company equipment",
        "Built secure personal account settings for users to manage their profiles and passwords",
        "Developed an admin dashboard to monitor maintenance activity and view key statistics",
        "Applied role-based access control to separate admin and regular user permissions"
      ]
    },
    {
      title: "Website penetration testing internship",
      company: "Société Général",
      period: "01/2025 - 04/2025",
      description: "Conducted a thorough penetration test on the public-facing website, application's APIs and web servers, identifying vulnerabilities and reporting findings in a structured, professional pentest report.",
      achievements: [
        "Performed black-box penetration testing on the bank's web application, web server and API manager",
        "Identified and documented security vulnerabilities",
        "Created a detailed penetration testing report outlining risks, impact, and mitigation recommendations",
        "Developed an admin dashboard to monitor maintenance activity and view key statistics",
        "Helped strengthen the institution's overall security posture through actionable insights"
      ]
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedExperienceCard key={exp.title} index={index}>
              <div 
                className={`glass-effect dark:glass-effect rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${
                  activeIndex === index ? 'shadow-lg shadow-purple-500/20' : ''
                }`}
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-white/5 transition-colors duration-300"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-purple-500 dark:text-purple-300 mb-1">{exp.title}</h3>
                      <div className="text-lg text-foreground/60 mb-2">{exp.company}</div>
                    </div>
                    <span className="text-sm text-purple-800 bg-purple-600/30 px-3 py-1 rounded-full dark:text-purple-800 dark:bg-purple-300">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-purple-500 dark:text-purple-400">
                    <span>View achievements ({exp.achievements.length})</span>
                    <svg 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                <div 
                  className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li 
                          key={achievement} 
                          className="text-sm text-foreground/70 flex items-start transition-opacity duration-300"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedExperienceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;