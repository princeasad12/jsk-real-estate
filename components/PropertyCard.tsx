"use client";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

interface PropertyProps {
  title: string;
  price: string;
  location: string;
  image: string;
  type: string;
  beds?: number;
  baths?: number;
  area?: string;
}

export default function PropertyCard({
  title,
  price,
  location,
  image,
  type,
  beds = 3,
  baths = 2,
  area = "120m²",
}: PropertyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl overflow-hidden border border-gray-border shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-olive/0 group-hover:bg-olive/10 transition-all duration-300" />
        {/* Badge */}
        <div className="absolute top-4 left-4 bg-olive text-white text-xs font-semibold px-3 py-1.5 rounded-full">
          For {type}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-lg font-bold text-charcoal group-hover:text-olive transition-colors leading-tight">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
          <FiMapPin size={13} className="text-olive" />
          <span>{location}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-4 pb-4 border-b border-gray-border">
          <span className="flex items-center gap-1.5">
            <FaBed className="text-olive" /> {beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <FaBath className="text-olive" /> {baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <FaRulerCombined className="text-olive" /> {area}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider mb-0.5">Price</p>
            <p className="text-xl font-bold text-olive">{price}</p>
          </div>
          <button className="bg-olive-muted text-olive hover:bg-olive hover:text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}