import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "../../hooks/useActiveSection";
import { MenuIcon, XIcon } from "../ui/Icons";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const activeSection = useActiveSection();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (isNavigating.current) {
        setHidden(false);
      } else if (currentY > lastScrollY && currentY > 100) {
        setHidden(true);
        setMobileOpen(false);
      } else {
        setHidden(false);
      }
      setScrolled(currentY > 20);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isNavigating = useRef(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    isNavigating.current = true;
    // Small delay to let mobile menu close before scrolling
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      // Re-enable hide-on-scroll after navigation completes
      setTimeout(() => {
        isNavigating.current = false;
      }, 800);
    }, 100);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/90 backdrop-blur-xl border-b border-border-subtle" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="font-heading text-lg font-black text-accent cursor-pointer"
        >
          HK
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-2 text-sm font-mono rounded-lg transition-colors cursor-pointer relative ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-px bg-accent rounded-full"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    style={{ boxShadow: "0 0 6px rgba(191,255,0,0.4)" }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-text-primary cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-border-subtle bg-bg-primary/95 backdrop-blur-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-mono text-sm transition-colors cursor-pointer ${
                      activeSection === item.id
                        ? "text-accent bg-accent/5"
                        : "text-text-muted hover:text-text-primary hover:bg-white/3"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
