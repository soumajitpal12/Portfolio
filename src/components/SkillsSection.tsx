import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import TiltCard from "./TiltCard";
import { Code, Globe, Database, Wrench, Users, MessageSquare } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java (Basic)", "C", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Flask"],
  },
  {
    title: "Data & AI/ML",
    icon: Database,
    skills: ["TensorFlow", "Keras", "OpenCV", "Jupyter Notebook", "Data Science"],
  },
  {
    title: "Tools & Software",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "MS Word", "MS Excel"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Quick Learning", "Team Collaboration", "Critical Thinking", "Time Management"],
  },
  {
    title: "Languages",
    icon: MessageSquare,
    skills: ["Bengali (Native)", "English (Professional)", "Hindi (Conversational)"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            My Technical{" "}
            <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16">
            Technologies & skills I work with
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={0.1 * catIndex}>
              <TiltCard className="h-full">
                <div className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <category.icon className="text-primary" size={18} />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-primary">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.05 * skillIndex + 0.1 * catIndex,
                          duration: 0.3,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "hsl(187 100% 50% / 0.15)",
                          borderColor: "hsl(187 100% 50% / 0.5)",
                        }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-foreground border border-border/50 cursor-default transition-colors duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
