import { motion } from "framer-motion";

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function GlowButton({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: GlowButtonProps) {
  const baseStyles =
    "relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-accent text-white hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] hover:scale-105",
    outline:
      "border border-border-glow text-text-primary hover:border-accent-cyan hover:text-accent-cyan hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] hover:scale-105",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  const motionProps = {
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={styles}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={styles} {...motionProps}>
      {children}
    </motion.button>
  );
}
