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
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
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

        <Resume />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;