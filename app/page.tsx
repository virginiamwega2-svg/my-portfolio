import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Experience from "./components/Experience";
import Projects   from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Skills     from "./components/Skills";
import Services from "./components/Services";
import Blog from "./components/Blog";
import GithubHeatmap from "./components/GithubHeatmap";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import BackToTop  from "./components/BackToTop";

const jsonLd = {
  "@context": "https://schema.org",
  "@type":    "Person",
  name:       "Virginia Mwega",
  url:        "https://virginiamwega.dev",
  jobTitle:   "Full Stack Developer",
  description:
    "Full-stack developer building fast, elegant web applications with React, Next.js, Python, and PostgreSQL.",
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
        <Experience />
        <Projects />
        <Testimonials />
        <Skills />
        <Services />
        <Blog />
        <GithubHeatmap />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
