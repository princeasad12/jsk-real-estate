"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaTimes } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

export default function FloatingContact() {
  const [showAlert, setShowAlert] = useState(false);
  
  // Aapke links
  const instagramUrl = "https://www.instagram.com/asxd.errxr/"; 
  const whatsappUrl = "https://wa.me/923281390542?text=Hi Asad, I want to buy this website..";

  useEffect(() => {
    // Page load   6 seconds    
    const initialTimeout = setTimeout(() => setShowAlert(true), 3000);

    //   45 seconds  repeat 
    const interval = setInterval(() => {
      setShowAlert(true);
      // 10 seconds tak screen par rahega phir gayab
      setTimeout(() => setShowAlert(false), 10000);
    }, 45000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[9999] flex flex-col items-start gap-4">
      
      {/* Alert Popup */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.9 }}
            className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100 p-5 rounded-3xl max-w-[280px] relative mb-2"
          >
            {/* Close Button */}
            <button 
              onClick={() => setShowAlert(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors"
            >
              <FaTimes size={14} />
            </button>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-olive uppercase tracking-[2px]">Online Now</span>
              </div>
              
              <p className="text-[15px] text-charcoal leading-relaxed font-medium">
                Hi, I'm <span className="text-olive font-bold">Asad</span>. Wanna buy this website? Just contact me for the best website deals! yuhooo;0
              </p>
              
              <div className="flex gap-4 items-center pt-1">
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  className="text-xs font-bold bg-olive text-white px-4 py-2 rounded-full hover:bg-olive-dark transition-all"
                >
                  Message Me
                </a>
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  className="text-gray-400 hover:text-[#ee2a7b] transition-colors"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Instagram Button */}
      <motion.a
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        href={instagramUrl}
        target="_blank"
        className="bg-white text-charcoal p-4 rounded-full shadow-xl flex items-center justify-center border border-gray-100 group relative overflow-hidden"
      >
        {/* Gradient Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <FaInstagram size={22} className="relative z-10 group-hover:text-white transition-colors duration-300" />
        
        {/* Tooltip */}
        <span className="absolute left-16 bg-charcoal text-white text-[10px] font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap tracking-wider">
          FOLLOW ASAD
        </span>
      </motion.a>
    </div>
  );
}