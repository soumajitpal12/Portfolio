import { GraduationCap, Code, Database, MapPin, Globe, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import TiltCard from "./TiltCard";
import profileImg from "../assets/profile.jpg";

const highlights = [
  { icon: GraduationCap, label: "BCA Graduate", desc: "Midnapore College" },
  { icon: Code, label: "Full-Stack Dev", desc: "Python, Flask, JS" },
  { icon: Database, label: "Data Science", desc: "ML & Analytics" },
  { icon: Cpu, label: "AI/ML", desc: "TensorFlow, Keras" },
  { icon: Globe, label: "Web Dev", desc: "React, HTML/CSS" },
  { icon: MapPin, label: "West Bengal", desc: "India" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16">
            About <span className="text-primary text-glow">Me</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 box-glow relative group"
              >
                <img
                  src={profileImg}
                  alt="Soumajit Pal"
                  className="w-full h-full object-contain  transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.4}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              A BCA graduate from Midnapore College, currently pursuing MCA at
              Academy of Technology (AOT), with a strong passion for full-stack
              development and machine learning. I am eager to apply my academic
              knowledge and practical skills to real-world challenges, thrive in
              collaborative environments, and continuously enhance my expertise.
              Driven by curiosity and innovation, I strive to build impactful
              solutions and contribute effectively to dynamic, forward-thinking
              teams.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {highlights.map(({ icon: Icon, label, desc }, index) => (
                <TiltCard key={label}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 text-center"
                  >
                    <Icon className="text-primary" size={22} />
                    <span className="text-sm font-semibold text-foreground">
                      {label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {desc}
                    </span>
                  </motion.div>
                </TiltCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
