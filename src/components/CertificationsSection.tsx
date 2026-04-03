import { Award } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    title: "Workshop on Artificial Intelligence",
    issuer: "Technophilia in association with B-Club, IIT Kharagpur",
  },
  {
    title: "AI and Machine Learning Certificate Program cum Internship",
    issuer: "YBI Foundation",
  },
  {
    title: "Python for Data Science",
    issuer: "NPTEL",
  },
  {
    title: "Problem Solving Through Programming In C",
    issuer: "NPTEL",
  },
  {
    title: "DSA With Java",
    issuer: "Apna College",
  },
  {
    title: "Program In Professional Edge",
    issuer: "NIIT Foundation",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            <span className="text-primary text-glow">Certifications</span>
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={0.15 * index}>
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className="bg-card border border-border/50 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 h-full"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0 mt-0.5">
                    <Award className="text-primary" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
