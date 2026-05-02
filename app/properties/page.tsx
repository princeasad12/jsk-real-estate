"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiSearch } from "react-icons/fi";
import PropertyCard from "../../components/PropertyCard";
import { properties } from "../../lib/properties";

const countries = ["All", "Pakistan", "UAE", "Lebanon"];
const types = ["All", "Sale", "Rent"];

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");
  const [type, setType] = useState("All");

  const filtered = properties.filter((p) => {
    const matchSearch =
      search === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchCountry = country === "All" || p.country === country;
    const matchType = type === "All" || p.type === type;
    return matchSearch && matchCountry && matchType;
  });

  return (
    <main className="w-full bg-white pt-28">
      {/* ─── HEADER ─── */}
      <section className="bg-[#F7F8F6] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#4A7C59] text-sm font-semibold uppercase tracking-widest mb-2">Our Listings</p>
            <h1 className="font-serif text-5xl font-light text-[#1A1A1A] mb-8">
              All <span className="italic text-[#4A7C59]">Properties</span>
            </h1>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-3"
          >
            {/* Search */}
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-[#E5E7E3] flex-1">
              <FiSearch className="text-[#4A7C59] shrink-0" />
              <input
                type="text"
                placeholder="Search by name or location..."
                className="outline-none w-full bg-transparent text-sm text-[#1A1A1A] placeholder:text-gray-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Country filter */}
            <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-[#E5E7E3]">
              {countries.map((c) => (
                <button
                  key={c}
                  onClick={() => setCountry(c)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    country === c ? "bg-[#4A7C59] text-white" : "text-[#1A1A1A]/60 hover:text-[#4A7C59]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Type filter */}
            <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-[#E5E7E3]">
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    type === t ? "bg-[#4A7C59] text-white" : "text-[#1A1A1A]/60 hover:text-[#4A7C59]"
                  }`}
                >
                  {t === "All" ? "All Types" : `For ${t}`}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── GRID ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#1A1A1A]/50 text-sm mb-8">
            {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
          </p>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <a href={`/properties/${p.id}`} className="block h-full">
                    <PropertyCard {...p} />
                  </a>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">🏠</p>
              <p className="text-[#1A1A1A]/50 text-lg">No properties match your search.</p>
              <button
                onClick={() => { setSearch(""); setCountry("All"); setType("All"); }}
                className="mt-4 text-[#4A7C59] font-semibold underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}