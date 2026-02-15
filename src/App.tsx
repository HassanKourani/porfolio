import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CursorGlow } from "./components/ui/CursorGlow";
import { ScrollProgress } from "./components/ui/ScrollProgress";
import { GradientBlobs } from "./components/ui/GradientBlobs";
import { GrainOverlay } from "./components/ui/GrainOverlay";
import { SectionDivider } from "./components/ui/SectionDivider";
import { TechMarquee } from "./components/ui/TechMarquee";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";

export function App() {
  return (
    <>
      <GradientBlobs />
      <GrainOverlay />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
