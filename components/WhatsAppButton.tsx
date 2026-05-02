"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-border p-4 w-64"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-charcoal font-semibold text-sm">JSK Modern</p>
                  <p className="text-green-500 text-[11px]">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-charcoal/40 hover:text-charcoal transition-colors"
              >
                <FiX size={16} />
              </button>
            </div>
            <p className="text-charcoal/60 text-sm mb-3">
              Hi! 👋 Looking for a property? Chat with us on WhatsApp.
            </p>
            <a
              href="https://wa.me/923001234567?text=Hi%2C%20I%20am%20interested%20in%20a%20property"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] text-white text-center text-sm font-semibold py-2.5 rounded-xl hover:bg-[#20b858] transition-colors"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center relative"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <FaWhatsapp className="text-white text-2xl relative z-10" />
      </motion.button>
    </div>
  );
}