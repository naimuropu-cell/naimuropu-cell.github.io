import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-scroll";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Resume",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <h1 className="text-xl font-bold tracking-wide text-blue-600 cursor-pointer">
          NAIMUR.
        </h1>

        <nav className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer text-slate-700 hover:text-blue-600 transition"
            >
              {item}
            </Link>
          ))}

        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <HiOutlineX size={28} />
          ) : (
            <HiOutlineMenu size={28} />
          )}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-white border-t">

          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b cursor-pointer hover:bg-slate-100"
            >
              {item}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
}