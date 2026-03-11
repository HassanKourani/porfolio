import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { ScrollReveal } from "../ui/ScrollReveal";
import { EmailIcon, LinkedInIcon, GitHubIcon, PhoneIcon } from "../ui/Icons";
import { personal } from "../../data/personal";

const contactLinks = [
  {
    icon: EmailIcon,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "hassan-kourani",
    href: personal.socials.linkedin,
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "HassanKourani",
    href: personal.socials.github,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Contact"
        subtitle="Let's build something together"
      />

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {contactLinks.map((link, i) => (
          <ScrollReveal key={link.label} delay={i * 80}>
            <motion.a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-5 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent/20 transition-all duration-300 group card-glow cursor-pointer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-3 rounded-xl bg-accent/5 text-accent/70 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                <link.icon size={20} />
              </div>
              <div>
                <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-0.5">
                  {link.label}
                </p>
                <p className="text-text-primary font-medium text-sm">
                  {link.value}
                </p>
              </div>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
