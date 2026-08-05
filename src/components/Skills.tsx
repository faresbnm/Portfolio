import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Code2, Network, ShieldCheck } from "lucide-react";

type Skill = {
  name: string;
  level: number;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

type SkillTrack = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: typeof Code2;
  groups: SkillGroup[];
};

const skillTracks: SkillTrack[] = [
  {
    id: "web-development",
    label: "Web Development",
    shortLabel: "Web Dev",
    description: "Full-stack development skills for building modern, reliable web applications.",
    icon: Code2,
    groups: [
      {
        title: "Backend",
        skills: [
          { name: "Node.js", level: 80 },
          { name: "Python", level: 85 },
          { name: "PHP", level: 98 },
          { name: "C#", level: 60 },
          { name: "Databases", level: 70 },
          { name: "MongoDB", level: 75 },
        ],
      },
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 78 },
          { name: "TypeScript", level: 78 },
          { name: "Next.js", level: 80 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Vue.js", level: 60 },
          { name: "Angular.js", level: 65 },
        ],
      },
      {
        title: "Tools & Others",
        skills: [
          { name: "Git", level: 95 },
          { name: "Linux", level: 85 },
          { name: "Desktop apps", level: 60 },
          { name: "Mobile apps", level: 65 },
          { name: "Design", level: 82 },
          { name: "Web pentesting", level: 40 },
        ],
      },
    ],
  },
  {
    id: "networking",
    label: "System Administration & Networking",
    shortLabel: "Networking",
    description: "Infrastructure, operating systems, and network foundations for dependable environments.",
    icon: Network,
    groups: [
      {
        title: "System Administration",
        skills: [
          { name: "Linux administration", level: 85 },
          { name: "Windows Server", level: 75 },
          { name: "Active Directory", level: 72 },
          { name: "Virtualization", level: 78 },
          { name: "Backup & recovery", level: 70 },
          { name: "Shell scripting", level: 80 },
        ],
      },
      {
        title: "Networking",
        skills: [
          { name: "TCP/IP", level: 85 },
          { name: "Routing & switching", level: 78 },
          { name: "VLANs", level: 76 },
          { name: "DNS & DHCP", level: 82 },
          { name: "Firewalls", level: 74 },
          { name: "Network troubleshooting", level: 84 },
        ],
      },
      {
        title: "Operations",
        skills: [
          { name: "Monitoring", level: 72 },
          { name: "Documentation", level: 86 },
          { name: "Incident response", level: 68 },
          { name: "Cloud basics", level: 70 },
          { name: "IT support", level: 82 },
          { name: "Automation", level: 74 },
        ],
      },
    ],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    shortLabel: "Security",
    description: "Security-minded skills for testing, hardening, and protecting digital systems.",
    icon: ShieldCheck,
    groups: [
      {
        title: "Offensive Security",
        skills: [
          { name: "Web pentesting", level: 72 },
          { name: "OWASP Top 10", level: 78 },
          { name: "Reconnaissance", level: 75 },
          { name: "Vulnerability scanning", level: 76 },
          { name: "Burp Suite", level: 70 },
          { name: "Privilege escalation", level: 62 },
        ],
      },
      {
        title: "Defensive Security",
        skills: [
          { name: "Security hardening", level: 74 },
          { name: "Log analysis", level: 70 },
          { name: "Access control", level: 78 },
          { name: "Patch management", level: 76 },
          { name: "Endpoint security", level: 68 },
          { name: "Risk assessment", level: 72 },
        ],
      },
      {
        title: "Security Tools",
        skills: [
          { name: "Nmap", level: 82 },
          { name: "Wireshark", level: 76 },
          { name: "Metasploit", level: 65 },
          { name: "Kali Linux", level: 80 },
          { name: "SIEM basics", level: 62 },
          { name: "Password auditing", level: 70 },
        ],
      },
    ],
  },
];

const Skills = () => {
  const [activeTrackId, setActiveTrackId] = useState(skillTracks[0].id);
  const [animated, setAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  const activeTrack =
    skillTracks.find((track) => track.id === activeTrackId) ?? skillTracks[0];

  useEffect(() => {
    setAnimated(inView);
  }, [inView, activeTrackId]);

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Skills & Technologies
          </h2>
          <p className="paragraph mt-4 text-foreground/70 max-w-2xl mx-auto">
            Explore my skills across web development, infrastructure, and cybersecurity.
          </p>
        </div>

        <div
          className="glass-effect p-2 rounded-xl mb-10 grid gap-2 md:grid-cols-3"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillTracks.map((track) => {
            const Icon = track.icon;
            const isActive = track.id === activeTrackId;

            return (
              <button
                key={track.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${track.id}-panel`}
                id={`${track.id}-tab`}
                onClick={() => setActiveTrackId(track.id)}
                className={`group flex items-center justify-center gap-3 rounded-lg px-4 py-4 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/20"
                    : "text-foreground/70 hover:bg-white/10 hover:text-foreground"
                }`}
              >
                <Icon
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                  aria-hidden="true"
                />
                <span className="hidden lg:inline">{track.label}</span>
                <span className="lg:hidden">{track.shortLabel}</span>
              </button>
            );
          })}
        </div>

        <div
          ref={ref}
          key={activeTrack.id}
          id={`${activeTrack.id}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeTrack.id}-tab`}
          className="animate-fade-in"
        >
          <div className="mb-8 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-purple-400">
              {activeTrack.label}
            </h3>
            <p className="paragraph mt-3 text-foreground/70 max-w-2xl mx-auto">
              {activeTrack.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activeTrack.groups.map((group, groupIndex) => (
              <div
                key={group.title}
                className="glass-effect p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40"
              >
                <h4 className="text-xl font-semibold text-purple-400 mb-6 text-center">
                  {group.title}
                </h4>

                <div className="space-y-4">
                  {group.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between gap-4 text-sm">
                        <span className="text-foreground/80">{skill.name}</span>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: animated ? `${skill.level}%` : "0%",
                            transitionDelay: `${(groupIndex * 3 + skillIndex) * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
