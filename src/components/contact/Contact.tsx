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
        title="Let's Work Together"
        subtitle="Feel free to reach out through any of these channels"
      />

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {contactLinks.map((link, i) => (
          <ScrollReveal key={link.label} delay={i * 100}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 p-5 rounded-xl bg-bg-card border border-border-subtle hover:border-accent-cyan/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan/20 transition-colors">
                <link.icon size={22} />
              </div>
              <div>
                <p className="text-text-muted text-sm">{link.label}</p>
                <p className="text-text-primary font-medium text-sm">
                  {link.value}
                </p>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
