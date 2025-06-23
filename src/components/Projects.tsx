
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // <-- This is important
    threshold: 0.1,      // Adjust if needed
  });
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A comprehensive full-stack e-commerce platform built with Laravel, designed to provide a seamless online shopping experience. The application includes robust features such as secure user authentication and registration, product browsing with dynamic filtering and search.",
      tech: ["Laravel", "PHP", "Mysql", "Blade"],
      image: "images/ecommerce.jpg",
      HasLivePreview: 0,
      link: "",
      github: "https://github.com/faresbnm/E-commerce"
    },
    {
      title: "Internship offers Platform",
      description: "A full-stack web application designed to help students easily find and apply for internship opportunities. The platform provides a user-friendly interface where students can browse internships by category, location, or company, and submit applications directly through the site.",
      tech: ["Laravel", "PHP", "Mysql", "Blade", "PWA"],
      image: "images/CESI.jpg",
      HasLivePreview: 0,
      link: "#",
      github: "https://github.com/faresbnm/Internship-offers"
    },
    {
      title: "Showcase website for GS ICT",
      description: "A static, responsive website developed to professionally represent GS ICT, a tech-driven company. The website serves as a digital storefront, highlighting the company’s services, values and team. This website represents my first end-to-end web development project, built entirely from scratch.",
      tech: ["HTML", "CSS", "javascript", "PHP", "Bootstrap"],
      image: "images/gsict.jpg",
      link: "https://gs-ict.vercel.app/",
      github: "https://github.com/faresbnm/GS_ICT"
    },
    {
      title: "Showcase website for BOS",
      description: "A responsive and informative website developed to represent Benameur Oil Services, a company operating in the oil and energy sector. The platform presents the company’s expertise, services, and industry presence in a clear and impactful way.",
      tech: ["React.js", "Vite", "Bootstrap"],
      image: "images/bos.jpg",
      link: "https://benameur-oil-services.vercel.app",
      github: "https://github.com/faresbnm/BOS_showcase"
    },
    {
      title: "EasySave Backup app",
      description: "EasySave is a desktop application designed to simplify and secure the backup process for users and businesses. It allows users to create and manage backups with additional features to ensure data safety and integrity.",
      tech: [".Net Core", "C#", "WPF"],
      image: "images/EasySave.jpg",
      HasLivePreview: 0,
      link: "#",
      github: "https://github.com/faresbnm/EasySave"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className=" relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.title} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group h-full select-none">
                    <div className="animate-fade-in glass-effect p-4 rounded-xl hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full flex flex-col transform hover:-translate-y-2">
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground/80 mb-4 flex-grow transition-colors duration-300 group-hover:text-foreground/90">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 bg-purple-500/20 text-purple-500 dark:text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors duration-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4">
                      {project.HasLivePreview !== 0 && (
                        <a 
                          href={project.link}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          Live Demo
                        </a>
                      )}
                        <a 
                          href={project.github}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 text-center py-2 border border-purple-500 rounded-lg text-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 hover:border-purple-400"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-20 w-12 -left-6 md:-left-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-blue-600/40 text-purple-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-md" />
            <CarouselNext className="h-20 w-12 -right-6 md:-right-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30 hover:bg-gradient-to-r hover:from-purple-600/40 hover:to-blue-600/40 text-purple-300 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-md" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
