import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import TiltCard from "./TiltCard";

const educationData = [
  {
    year: "2025–2027",
    degree: "Master of Computer Application (MCA)",
    school: "Academy of Technology",
    score: "Pursuing",
  },
  {
    year: "2022–2025",
    degree: "Bachelor's of Computer Application (BCA)",
    school: "Midnapore College (Autonomous)",
    score: "74.64%",
  },
  {
    year: "2022",
    degree: "Higher Secondary (W.B.C.H.S.E)",
    school: "Rangamati Kironmoyee High School",
    score: "84.2%",
  },
  {
    year: "2020",
    degree: "Secondary (W.B.B.S.E)",
    school: "Panchagrami Saradamoni Vidyapith (H.S.)",
    score: "78.3%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            My <span className="text-primary text-glow">Education</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <AnimatedSection key={index} delay={0.2 * index}>
                <div className="relative pl-16 md:pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 * index }}
                    className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-primary box-glow z-10"
                  />

                  <TiltCard>
                    <div className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                        <div className="flex items-center gap-2 text-primary text-sm font-accent font-semibold">
                          <GraduationCap size={16} />
                          <span>{item.year}</span>
                        </div>
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-semibold">
                          {item.score}
                        </span>
                      </div>
                      <h3 className="font-heading text-base md:text-lg font-bold text-foreground mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.school}</p>
                    </div>
                  </TiltCard>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
