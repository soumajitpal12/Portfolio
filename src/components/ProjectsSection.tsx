import { Github } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import TiltCard from "./TiltCard";

const projects = [
  {
    title: "EmotiverseAI - (Multi-Modal Emotion Recognition System)",
    description:
      "A mental health support chatbot providing emotional support and empathetic conversations. Uses multi-modal emotion recognition through text, voice, and facial expressions.",
    tech: [
      "Python",
      "Flask",
      "TensorFlow",
      "OpenCV",
      "SpeechRecognition",
      "gTTS",
      "PostgreSQL",
      "Groq API Integration",
    ],
    github:
      "https://github.com/soumajitpal12/MultiModal_Emotion_Recognition_Chatbot",
    highlight: "Final Year Project",
  },
  {
    title: "AI Integrated BI Dashboard",
    description:
      "Developed a BI dashboard with AI-driven insights for data visualization and predictive analytics, enhancing decision-making processes.",
    tech: [
      "Streamlit",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "API Integration",
      "SQLLite",
    ],
    github: "https://github.com/soumajitpal12/AI_Integrated_BI_Dashboard",
  },
  {
    title: "Bank Customer Churn Model",
    description:
      "Developed a predictive model to identify bank customers at risk of churning, enabling proactive customer retention strategies.",
    tech: ["Python", "Jupyter Notebook", "Machine Learning"],
    github: "https://github.com/soumajitpal12/Python-Project",
  },
  {
    title: "Facial Emotion Recognition",
    description:
      "Real-time emotion detection using webcam. Built with deep learning models for accurate facial expression classification.",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
    github: "https://github.com/soumajitpal12",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive personal portfolio showcasing frontend development skills with project showcases and contact integration.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/soumajitpal12/Personal_Portfolio_Soumajit_Pal",
  },
  {
    title: "Shared Expense Tracker",
    description:
      "Designed and developed a responsive shared expense tracker for managing couple expenses.",
    tech: ["Flask", "Python","PostgreSQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/soumajitpal12/Shared_expense_Tracker",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16">Things I've built</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.15 * index}>
              <TiltCard className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
                >
                  {project.highlight && (
                    <span className="inline-block w-fit text-xs px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 font-semibold mb-3">
                      ⭐ {project.highlight}
                    </span>
                  )}
                  <h3 className="font-heading text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                  >
                    <Github size={16} />
                    <span className="group-hover/link:underline">Source Code</span>
                  </a>
                </motion.div>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
