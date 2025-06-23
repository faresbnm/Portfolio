import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 98 },
        { name: "C#", level: 60 },
        { name: "Databases", level: 70 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 78 },
        { name: "TypeScript", level: 78 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vue.js", level: 60 },
        { name: "Angular.js", level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Linux", level: 85 },
        { name: "Desktop apps", level: 60 },
        { name: "Mobile apps", level: 65 },
        { name: "Design", level: 82 },
        { name: "Web pentesting", level: 40 }
      ]
    }
  ];

  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    } else {
      setAnimated(false); // Optional: reset when out of view
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Technologies
        </h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-on-scroll glass-effect p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: animated ? `${skill.level}%` : `0%`,
                          transitionDelay: `${(categoryIndex * 3 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
