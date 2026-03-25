import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Skills   from "./components/Skills";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type":    "Person",
  name:       "Virginia Mwega",
  url:        "https://virginiamwega.dev",
  jobTitle:   "Software Engineer",
  description:
    "Full-stack software engineer building fast, elegant web applications with React, Next.js, Python, and PostgreSQL.",
  address: {
    "@type":         "PostalAddress",
    addressLocality: "New York",
    addressCountry:  "US",
  },
  sameAs: [
    "https://github.com/virginiamwega2-svg",
    "https://linkedin.com/in/virginia-mwega",
    "https://twitter.com/virginiamwega",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Django",
    "PostgreSQL",
    "Node.js",
    "AWS",
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
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
