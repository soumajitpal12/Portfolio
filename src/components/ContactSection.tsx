import { Github, Linkedin, Mail, ArrowUp, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-12">
            <MapPin size={14} className="text-primary" />
            <span>Midnapore, West Bengal, India</span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {[
              {
                href: "https://github.com/soumajitpal12",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/soumajitpal12/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "mailto:soumajitpal12@gmail.com",
                icon: Mail,
                label: "Email",
              },
              {
                href: "tel:+910000000000",
                icon: Phone,
                label: "+91 000000000",
              },
            ].map(({ href, icon: Icon, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:text-primary transition-all duration-300 text-foreground"
              >
                <Icon size={20} />
                <span className="font-medium">{label}</span>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection delay={0.1}>
          <div className="border-t border-border/30 pt-8 text-center">
            <p className="text-muted-foreground text-sm tracking-wide">
              © {new Date().getFullYear()} Soumajit Pal. All rights reserved.
            </p>

            <p className="text-muted-foreground text-sm mt-1">
              Designed & Developed by{" "}
              <a
                href="https://www.linkedin.com/in/soumajitpal12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-primary/80 transition"
              >
                Soumajit Pal
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>

      {/* Back to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground box-glow hover:box-glow-strong transition-all duration-300 z-40"
      >
        <ArrowUp size={20} />
      </motion.button>
    </section>
  );
};

export default ContactSection;
