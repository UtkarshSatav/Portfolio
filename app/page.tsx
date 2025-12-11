import Hero from "../components/Hero";
import Services from "../components/Services";
import AboutMe from "../components/AboutMe";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <Work />
      <Projects />
      <Contact />
    </main>
  );
}
