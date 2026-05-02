"use client";
import { use } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiArrowLeft, FiPhone } from "react-icons/fi";
import { FaBed, FaBath, FaRulerCombined, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { properties } from "../../../lib/properties";
import Link from "next/link";

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-6xl mb-4">🏠</p>
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">Property Not Found</h1>
          <Link href="/properties" className="text-[#4A7C59] font-semibold underline">
            Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full bg-white pt-24">
      {/* Back button */}
      <div className="max-w-6xl mx-auto px-6 pt-6 pb-2">
        <Link
          href="/properties"
          className="inline-flex items-center gap-2 text-[#1A1A1A]/60 hover:text-[#4A7C59] transition-colors text-sm font-medium"
        >
          <FiArrowLeft /> Back to Properties
        </Link>
      </div>

      {/* ─── HERO IMAGE ─── */}
      <section className="max-w-6xl mx-auto px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[60vh] rounded-3xl overflow-hidden"
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
          <div className="absolute top-5 left-5">
            <span className="bg-[#4A7C59] text-white text-sm font-bold px-4 py-2 rounded-full">
              For {property.type}
            </span>
          </div>
          <div className="absolute bottom-6 left-6">
            <h1 className="text-white text-3xl md:text-4xl font-bold">{property.title}</h1>
            <div className="flex items-center gap-2 text-white/80 mt-1">
              <FiMapPin size={14} />
              <span className="text-sm">{property.location}</span>
            </div>
          </div>
          <div className="absolute bottom-6 right-6">
            <p className="text-3xl font-bold text-white">{property.price}</p>
          </div>
        </motion.div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left — Details */}
          <div className="lg:col-span-2">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-6 mb-8 p-6 bg-[#F7F8F6] rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8F0EA] rounded-xl flex items-center justify-center">
                  <FaBed className="text-[#4A7C59]" />
                </div>
                <div>
                  <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-wide">Bedrooms</p>
                  <p className="font-bold text-[#1A1A1A]">{property.beds}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8F0EA] rounded-xl flex items-center justify-center">
                  <FaBath className="text-[#4A7C59]" />
                </div>
                <div>
                  <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-wide">Bathrooms</p>
                  <p className="font-bold text-[#1A1A1A]">{property.baths}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E8F0EA] rounded-xl flex items-center justify-center">
                  <FaRulerCombined className="text-[#4A7C59]" />
                </div>
                <div>
                  <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-wide">Area</p>
                  <p className="font-bold text-[#1A1A1A]">{property.area}</p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-8"
            >
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">About This Property</h2>
              <p className="text-[#1A1A1A]/60 leading-relaxed text-[15px]">{property.description}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-[#1A1A1A]/70">
                    <FaCheckCircle className="text-[#4A7C59] shrink-0" size={14} />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Contact card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28 bg-white border border-[#E5E7E3] rounded-3xl p-6 shadow-sm">
              <p className="text-[#1A1A1A]/50 text-xs uppercase tracking-wider mb-1">Price</p>
              <p className="text-3xl font-bold text-[#4A7C59] mb-6">{property.price}</p>

              <div className="flex flex-col gap-3 mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-[#E5E7E3] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4A7C59] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-[#E5E7E3] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4A7C59] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-[#E5E7E3] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4A7C59] transition-colors"
                />
                <textarea
                  rows={3}
                  placeholder={`I'm interested in "${property.title}"...`}
                  className="w-full border border-[#E5E7E3] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#4A7C59] transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-[#4A7C59] text-white py-3.5 rounded-xl font-semibold hover:bg-[#2F5C3A] transition-all duration-200 mb-3">
                Request Info
              </button>

              <a
                href={`https://wa.me/+923281390542?text=Hi, I'm interested in ${property.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-semibold hover:bg-[#20b858] transition-all duration-200 mb-3"
              >
                <FaWhatsapp size={18} /> WhatsApp Us
              </a>

              <a
                href="tel:+923001234567"
                className="w-full flex items-center justify-center gap-2 border-2 border-[#4A7C59] text-[#4A7C59] py-3.5 rounded-xl font-semibold hover:bg-[#4A7C59] hover:text-white transition-all duration-200"
              >
                <FiPhone size={16} /> Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}