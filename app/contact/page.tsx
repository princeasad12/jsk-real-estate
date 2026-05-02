"use client";

import React from "react";
import { motion } from "framer-motion";
// React Icons imports (using Feather and IonIcons for a premium look)
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Header Section */}
      <section className="bg-[#4F7958] py-24 px-6 text-center text-white">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[3px] text-sm opacity-80 mb-4 block"
        >
          Contact Us
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif mb-6"
        >
          Let’s start a <span className="italic">conversation</span>
        </motion.h1>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Contact Details */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-10"
        >
          <div>
            <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Reach Out</h2>
            <p className="text-gray-500 leading-relaxed">
              Our team is available across multiple regions to answer your questions and guide you through every step of your property journey.
            </p>
          </div>

          <div className="space-y-8">
            {/* Phone */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 group">
              <div className="bg-[#F3F6F4] p-4 rounded-full text-[#4F7958] group-hover:bg-[#4F7958] group-hover:text-white transition-all">
                <FiPhone size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Call</p>
                <p className="text-lg font-medium text-gray-800">+92 300 1234567</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 group">
              <div className="bg-[#F3F6F4] p-4 rounded-full text-[#4F7958] group-hover:bg-[#4F7958] group-hover:text-white transition-all">
                <FiMail size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Email</p>
                <p className="text-lg font-medium text-gray-800">info@jskmodern.com</p>
              </div>
            </motion.div>

            {/* WhatsApp - As seen in your image */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 group cursor-pointer">
              <div className="bg-[#F3F6F4] p-4 rounded-full text-[#4F7958] group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <IoLogoWhatsapp size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">WhatsApp</p>
                <p className="text-lg font-medium text-gray-800">Chat with us</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Modern Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 bg-[#FBFBFB] p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-[#4F7958] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address"
                  className="bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-[#4F7958] transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <textarea 
                rows={4}
                placeholder="How can we help you?"
                className="bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-[#4F7958] transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-8 w-full md:w-max px-12 py-4 bg-[#4F7958] text-white font-semibold rounded-full hover:bg-[#3d5d44] hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;