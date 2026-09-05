import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./components/Dashboard";
import FeaturedProject from "./components/FeaturedProject";

import About from "./sections/About";
import Skills from "./sections/Skills";
import QAProjects from "./sections/QAProjects";
import DevelopmentProjects from "./sections/DevelopmentProjects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <Dashboard />

      <main className="mx-auto max-w-7xl px-6">
        <About />

        <FeaturedProject />

        <Skills />

        <QAProjects />

        <DevelopmentProjects />

        <Experience />

        <Education />

        <Certifications />

        <Resume />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;