import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../data/profile";

const navItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "QA Projects", to: "projects" },
  { name: "Dev Projects", to: "development-projects" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
    setActiveSection("");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="cursor-pointer text-xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition flex items-center gap-1"
        >
          <span>NAIMUR</span>
          <span className="text-slate-900">.QA</span>
        </button>

        <nav className="hidden lg:flex items-center gap-1.5 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-75}
                onSetActive={() => setActiveSection(item.to)}
                className={`relative cursor-pointer px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 bg-blue-50/90 border border-blue-100/80 shadow-2xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:shadow transition-all transform hover:-translate-y-0.5"
          >
            Resume PDF
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 py-4 space-y-2 shadow-xl overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-75}
                  onClick={() => {
                    setActiveSection(item.to);
                    setOpen(false);
                  }}
                  className={`block py-2.5 px-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? "text-blue-600 bg-blue-50 border border-blue-100"
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-semibold text-white hover:from-blue-700 hover:to-indigo-700 shadow-sm"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}