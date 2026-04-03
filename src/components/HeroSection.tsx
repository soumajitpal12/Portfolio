import { useState, useEffect } from "react";
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import profileImg from "../assets/profile1.png";

const roles = ["Full-Stack Developer", "Python Developer", "AI-ML Enthusiast"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 🔥 Smooth Typing
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 35 : 75;
    const pauseTime = 1200;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));

        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  // 🔥 Scroll
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* 🔥 3D BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-background/60 to-background pointer-events-none" />

      {/* 🔥 CONTENT */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
          className="mb-8 inline-block"
        >
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-primary animate-pulse-glow overflow-hidden mx-auto relative">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 animate-spin"
              style={{ animationDuration: "8s" }}
            />
            <img
              src={profileImg}
              alt="Soumajit Pal"
              className="w-full h-full object-cover object-top relative z-10"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Hi, I'm <span className="text-primary text-glow">Soumajit Pal</span>
        </motion.h1>

        {/* Typing */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-primary text-lg md:text-2xl font-accent font-semibold mb-6 h-8"
        >
          <motion.span
            key={text}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto"
        >
          A BCA graduate currently pursuing MCA with a keen interest in AI/ML,
          data analysis, and software development. Driven by curiosity and
          innovation, I thrive on building intelligent solutions, exploring
          emerging technologies, and creating meaningful digital experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg box-glow transition-all duration-300"
          >
            View My Work
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-6 py-3 border border-primary/50 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="mx-auto text-primary/60" size={24} />
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mt-6"
        >
          {[
            { href: "https://github.com/soumajitpal12", icon: Github },
            {
              href: "https://www.linkedin.com/in/soumajitpal12/",
              icon: Linkedin,
            },
            { href: "mailto:soumajitpal12@gmail.com", icon: Mail },
          ].map(({ href, icon: Icon }) => (
            <motion.a
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 text-muted-foreground"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
