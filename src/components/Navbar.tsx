import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link, animateScroll as scroll } from "react-scroll";
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

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="text-xl font-bold tracking-tight text-blue-600 hover:text-blue-700 transition"
        >
          NAIMUR<span className="text-slate-900">.QA</span>
        </button>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-slate-600 hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}

          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition shadow-xs"
          >
            Resume PDF
          </a>
        </nav>

        <button
          className="lg:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block py-2 text-base font-medium text-slate-700 hover:text-blue-600 border-b border-slate-100 last:border-none cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          <div className="pt-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}