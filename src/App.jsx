import Nav from "./components/Nav";
import Hero from "./components/Hero";
import QuoteMarquee from "./components/QuoteMarquee";
import FilmStripDivider from "./components/FilmStripDivider";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import OtherProjects from "./components/OtherProjects";
import Influences from "./components/Influences";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <div className="film-grain" />
      <Nav />

      <main className="relative z-10">
        <Hero />
        <QuoteMarquee />

        <FilmStripDivider act="ACT I" title="About" />
        <About />

        <FilmStripDivider act="ACT II" title="Featured Work" />
        <FeaturedProjects />

        <FilmStripDivider act="ACT III" title="More Projects" />
        <OtherProjects />

        <FilmStripDivider act="ACT IV" title="Cast & Influences" />
        <Influences />

        <FilmStripDivider act="ACT V" title="Skills" />
        <Skills />

        <FilmStripDivider act="FIN" title="Contact" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
