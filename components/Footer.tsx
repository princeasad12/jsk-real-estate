"use client";

import Link from "next/link";
import { FiInstagram, FiLinkedin, FiFacebook, FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Conversational Part */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
              Ready to find your <span className="italic text-olive">next chapter?</span>
            </h2>
            <p className="text-gray-500 text-lg">
              Whether you're looking for a home in Karachi or an investment in Dubai, we're here to guide you.
            </p>
          </div>
          
          <Link 
            href="/contact" 
            className="group flex items-center gap-2 bg-olive text-white px-8 py-4 rounded-full font-semibold hover:bg-olive-dark transition-all"
          >
            Start a Conversation
            <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <hr className="border-gray-100 mb-12" />

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-olive rounded flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">J</span>
              </div>
              <span className="text-lg font-bold text-charcoal">
                JSK<span className="text-olive font-light">Modern</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium Real Estate services across Pakistan, UAE, and Lebanon. Elevating the standard of living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-olive transition-colors">Home</Link></li>
              <li><Link href="/properties" className="hover:text-olive transition-colors">Properties</Link></li>
              <li><Link href="/about" className="hover:text-olive transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-olive transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs">Locations</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>Karachi, Pakistan</li>
              <li>Dubai, UAE</li>
              <li>Beirut, Lebanon</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-bold text-charcoal mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-gray-50 rounded-full text-olive hover:bg-olive hover:text-white transition-all"><FiFacebook size={18} /></a>
              <a href="#" className="p-3 bg-gray-50 rounded-full text-olive hover:bg-olive hover:text-white transition-all"><FiInstagram size={18} /></a>
              <a href="#" className="p-3 bg-gray-50 rounded-full text-olive hover:bg-olive hover:text-white transition-all"><FiLinkedin size={18} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} JSK Modern Real Estate. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-olive">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-olive">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;