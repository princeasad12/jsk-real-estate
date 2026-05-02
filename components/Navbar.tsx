"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import Link from 'next/link'; // 1. Link import karein
import { usePathname } from 'next/navigation'; // Active link highlight karne ke liye

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Current page check karne ke liye

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links array with actual paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About Us", path: "/about" }, // ensure folder name is 'about'
    { name: "Contact", path: "/contact" }, // ensure folder name is 'contact'
  ];

  return (
    <nav className="fixed w-full z-50 top-0 left-0">
      <div
        className={`mx-4 md:mx-8 mt-4 rounded-2xl px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border border-gray-border"
            : "bg-white/90 backdrop-blur-md border border-white/40 shadow-sm"
        }`}
      >
        {/* Logo - Wrap in Link to go home */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-olive rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">J</span>
          </div>
          <span className="text-xl font-bold text-charcoal">
            JSK<span className="text-olive font-light">Modern</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-[15px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`transition-colors duration-200 relative group ${
                pathname === link.path ? "text-olive" : "text-charcoal/70 hover:text-olive"
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-olive transition-all duration-300 ${
                pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              }`} />
            </Link>
          ))}
        </div>

        {/* Socials + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex gap-3 text-olive/60">
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <Icon key={i} className="cursor-pointer hover:text-olive transition-colors text-sm" />
            ))}
          </div>
          <button className="bg-olive text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-olive-dark transition-all duration-200 shadow-sm hover:shadow-md">
            List Property
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-olive p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 bg-white rounded-2xl p-6 shadow-xl border border-gray-border flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`font-medium transition-colors ${
                  pathname === link.path ? "text-olive" : "text-charcoal/80 hover:text-olive"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-olive text-white py-3 rounded-xl font-semibold mt-2">
              List Property
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}