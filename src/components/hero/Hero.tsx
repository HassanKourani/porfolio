import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HireBadge } from "../ui/HireBadge";
import { StaggeredText } from "../ui/StaggeredText";
import { ChevronDownIcon, MapPinIcon } from "../ui/Icons";
import { personal } from "../../data/personal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle gradient orbs */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(191,255,0,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,61,0,0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 max-w-5xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HireBadge />
        </motion.div>

        <motion.p
          className="font-mono text-text-muted text-sm tracking-wider uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I&apos;m
        </motion.p>

        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-[0.9] tracking-tight">
          <StaggeredText text={personal.name} baseDelay={0.4} />
        </h1>

        <motion.div
          className="text-xl md:text-2xl text-text-secondary mb-8 h-10 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-text-muted mr-2">{`>`}</span>
          <TypeAnimation
            sequence={personal.typingPhrases}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent"
          />
        </motion.div>

        <motion.div
          className="flex items-center gap-2 text-text-muted mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <MapPinIcon size={14} />
          <span className="text-sm font-mono">{personal.location}</span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-bg-primary font-heading font-bold text-sm rounded-lg cursor-pointer hover:shadow-[0_0_30px_rgba(191,255,0,0.3)] transition-shadow duration-300"
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-border-subtle text-text-primary font-heading font-medium text-sm rounded-lg cursor-pointer hover:border-accent/30 hover:text-accent transition-all duration-300"
            whileTap={{ scale: 0.97 }}
          >
            View GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        aria-label="Scroll down"
      >
        <ChevronDownIcon size={24} />
      </motion.button>
    </section>
  );
}
