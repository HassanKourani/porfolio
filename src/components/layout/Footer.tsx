import { GitHubIcon, LinkedInIcon } from "../ui/Icons";
import { personal } from "../../data/personal";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm font-mono">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-accent/70">Hassan Kourani</span>. Built with
          React & Bun.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors cursor-pointer"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
