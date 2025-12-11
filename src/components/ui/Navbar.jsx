import { NavItem } from "./NavItem";
import { useTheme } from "../../context/useTheme";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const menu = [
    { label: "Layanan Kami", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Tim", href: "#team" },
    { label: "Tentang", href: "#about" },
    { label: "Hubungi Kami", href: "#contact" },
  ];

  const { darkMode, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
        w-full fixed top-0 left-0 z-50 transition-all duration-300 
        shadow-sm backdrop-blur-md
        ${scrolled ? "py-2" : "py-4"}
        ${
          darkMode
            ? scrolled
              ? "bg-black/70 text-white"
              : "bg-black text-white"
            : scrolled
            ? "bg-black/70 text-white"
            : "bg-orange-500 text-white"
        }
      `}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <div
            className={`text-2xl font-bold transition-all duration-300 ${
              scrolled ? "scale-95" : "scale-100"
            }`}
          >
            <a href="#hero">
              <img className="w-40" src="/Logo (2).png" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {menu.map((item, i) => (
              <NavItem key={i} label={item.label} href={item.href} />
            ))}
          </div>

          {/* RIGHT SIDE — TOGGLE + HAMBURGER */}
          <div className="flex items-center gap-3">
            {/* Toggle Theme */}
            <button
              onClick={toggleTheme}
              className={`
        p-2 rounded-full transition-all duration-300
        ${
          darkMode
            ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
            : "bg-white text-orange-500 hover:bg-gray-100"
        }
        ${scrolled ? "scale-90" : "scale-100"}
      `}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Hamburger (Mobile Only) */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-md z-40
          transition-all duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className={`
            absolute top-20 left-1/2 -translate-x-1/2 w-[90%]
            p-6 rounded-xl shadow-xl transition-all duration-300
            ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}
          `}
        >
          <div className="flex flex-col gap-6 text-lg">
            {menu.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b pb-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
