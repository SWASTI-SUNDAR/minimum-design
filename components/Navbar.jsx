"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["who-are-we", "our-ethos", "services", "contact"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // Hide navbar on admin pages
  if (pathname.startsWith("/admin") || pathname === "/login") {
    return null;
  }

  const navItems = [
    { title: "Our Story", path: "#who-are-we" },
    { title: "Our Ethos", path: "#our-ethos" },
    { title: "Service Offerings", path: "#services" },
    // { title: "Portfolio", path: "#portfolio" },
    // { title: "People", path: "#people" },
    // { title: "Careers", path: "#careers" },
    { title: "Contact US", path: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Group 1171275777.svg"
              alt="Logo"
              width={120}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`px-3 py-2 text-sm transition-colors ${
                  activeSection === item.path
                    ? "text-gray-900 lato-black"
                    : "text-gray-700 hover:text-gray-900 font-medium"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.path}
                className={`block px-4 py-3 text-base rounded-md transition-colors ${
                  activeSection === item.path
                    ? "text-gray-900 bg-gray-100 lato-black"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
