import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Experience from "./components/Experience";
import Projects   from "./components/Projects";
import Skills     from "./components/Skills";
import Services from "./components/Services";
import Writing from "./components/Writing";
import GithubHeatmap from "./components/GithubHeatmap";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import BackToTop  from "./components/BackToTop";

const jsonLd = {
  "@context": "https://schema.org",
  "@type":    "Person",
  name:       "Virginia Mwega",
  url:        "https://virginia-mwega.vercel.app",
  jobTitle:   "Full-Stack and AI Engineer",
  description:
    "Full-Stack and AI Engineer shipping production AI products built on Claude tool use, Next.js, Django, and Stripe.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry:  "KE",
  },
  sameAs: [
    "https://github.com/virginiamwega2-svg",
    "https://linkedin.com/in/virginia-mwega",
    "https://twitter.com/veemwega2",
  ],
  knowsAbout: [
    "Claude API",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Django",
    "PostgreSQL",
    "Stripe",
    "Tailwind CSS",
    "n8n",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="page-enter">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Writing />
        <GithubHeatmap />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
