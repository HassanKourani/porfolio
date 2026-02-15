import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ParticleBackground } from "./ParticleBackground";
import { GlowButton } from "../ui/GlowButton";
import { StaggeredText } from "../ui/StaggeredText";
import { HireBadge } from "../ui/HireBadge";
import { ChevronDownIcon, MapPinIcon } from "../ui/Icons";
import { personal } from "../../data/personal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <HireBadge />
        </motion.div>

        <motion.p
          className="text-text-secondary text-lg md:text-xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi, I'm
        </motion.p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-gradient">
          <StaggeredText text={personal.name} baseDelay={0.4} />
        </h1>

        <motion.div
          className="text-xl md:text-2xl text-text-secondary mb-8 h-8 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <TypeAnimation
            sequence={personal.typingPhrases}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent-cyan"
          />
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-2 text-text-muted mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <MapPinIcon size={16} />
          <span className="text-sm">{personal.location}</span>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <GlowButton href="#contact" variant="primary">
            Get In Touch
          </GlowButton>
          <GlowButton href={personal.socials.github} variant="outline">
            View GitHub
          </GlowButton>
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
        <ChevronDownIcon size={28} />
      </motion.button>
    </section>
  );
}
