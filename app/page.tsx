"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiSearch, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import PropertyCard from "../components/PropertyCard";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link"; 
// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({ // 'i' ko number type di
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.65, 
      delay: i * 0.12, 
      ease: "easeInOut" as const // 'as const' add kiya TypeScript ke liye
    },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({ // 'i' ko number type di
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};


const properties = [
  {
    id: 1, type: "Sale", title: "Olive Garden Villa", location: "Beirut, Lebanon",
    price: "$950,000", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    beds: 5, baths: 4, area: "420m²",
  },
  {
    id: 2, type: "Sale", title: "Karachi Luxury Estate", location: "DHA, Karachi",
    price: "$500,000", image: "https://images.unsplash.com/photo-1600607687940-4e5a994e5373?w=800&q=80",
    beds: 4, baths: 3, area: "280m²",
  },
  {
    id: 3, type: "Rent", title: "Downtown Dubai Penthouse", location: "Dubai, UAE",
    price: "$8,000/mo", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    beds: 3, baths: 3, area: "200m²",
  },
  {
    id: 4, type: "Sale", title: "Lahore Modern Bungalow", location: "DHA Phase 6, Lahore",
    price: "$320,000", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    beds: 5, baths: 4, area: "350m²",
  },
  {
    id: 5, type: "Rent", title: "Beirut Sea View Apartment", location: "Achrafieh, Beirut",
    price: "$3,500/mo", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    beds: 2, baths: 2, area: "110m²",
  },
  {
    id: 6, type: "Sale", title: "Abu Dhabi Compound Villa", location: "Khalifa City, Abu Dhabi",
    price: "$750,000", image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    beds: 6, baths: 5, area: "500m²",
  },
];

const stats = [
  { value: "1,200+", label: "Properties Sold" },
  { value: "6", label: "Countries" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const whyUs = [
  { icon: "🌍", title: "Global Reach", desc: "Operating across Pakistan, UAE, Lebanon and beyond with a network of verified premium properties." },
  { icon: "🏅", title: "MRICS Certified", desc: "Our CEO holds the prestigious MRICS certification — the gold standard in real estate practice." },
  { icon: "🤝", title: "End-to-End Service", desc: "From search to signing, we handle every step of your property journey with full transparency." },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = properties.filter((p) => {
    const matchType = filter === "All" || p.type === filter;
    const matchQuery =
      query === "" ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase());
    return matchType && matchQuery;
  });

  return (
    <main className="w-full bg-white">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
        </div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />

        <div className="relative z-10 w-full max-w-5xl px-6 text-center pt-28">
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 bg-olive/20 border border-olive/40 text-white text-sm px-4 py-2 rounded-full mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-olive rounded-full animate-pulse" />
            Pakistan · UAE · Lebanon
          </motion.div>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-serif text-5xl md:text-7xl font-light text-white mb-4 leading-tight"
          >
            Find Your{" "}
            <span className="italic text-olive-light font-normal">Dream</span>
            <br />Property
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-white/70 text-lg mb-10 max-w-xl mx-auto"
          >
            MRICS-certified expertise across 6 countries. We bring world-class
            real estate standards to every transaction.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col md:flex-row items-stretch gap-2 max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-3 px-5 py-3 flex-1 border-b md:border-b-0 md:border-r border-gray-border">
              <FiMapPin className="text-olive text-lg shrink-0" />
              <input
                type="text"
                placeholder="City, area, or property name..."
                className="outline-none w-full bg-transparent text-charcoal placeholder:text-gray-400 text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <select
              className="px-5 py-3 outline-none bg-transparent font-semibold text-olive cursor-pointer text-sm border-b md:border-b-0 md:border-r border-gray-border"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All Types</option>
              <option value="Sale">For Sale</option>
              <option value="Rent">For Rent</option>
            </select>
            <button className="bg-olive hover:bg-olive-dark text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2">
              <FiSearch size={16} /> Search
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeIn} initial="hidden" animate="visible" custom={5}
            className="flex flex-wrap justify-center gap-8 mt-14"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp} initial="hidden" animate="visible" custom={4 + i * 0.3}
                className="text-center"
              >
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-white/60 text-sm mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-white/20 relative overflow-hidden">
            <div className="w-full h-1/2 bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ─── RICS ─── */}
      <section className="py-16 bg-olive-muted overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="w-28 h-28 border-4 border-olive rounded-full flex flex-col items-center justify-center shrink-0 bg-white shadow-md"
          >
            <span className="text-xl font-black text-olive">RICS</span>
            <span className="text-[9px] text-olive font-semibold tracking-wider">CERTIFIED</span>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} custom={1}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-3">
              Our CEO is <span className="text-olive">MRICS Certified</span>
            </h2>
            <p className="text-charcoal/60 text-base max-w-xl">
              Jade Zoghaib brings Royal Institution of Chartered Surveyors (RICS)
              standards to Pakistan, UAE, and Lebanon — ensuring every transaction
              meets the highest global benchmarks.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="md:ml-auto shrink-0"
          >
            <a href="/about" className="flex items-center gap-2 text-olive font-semibold hover:gap-3 transition-all duration-200">
              Learn More <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ─── PROPERTIES ─── */}
      <section id="properties" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            >
              <p className="text-olive text-sm font-semibold uppercase tracking-widest mb-2">Our Listings</p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal">
                Featured <span className="italic text-olive">Properties</span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="flex gap-2 bg-gray-soft p-1.5 rounded-xl"
            >
              {["All", "Sale", "Rent"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    filter === f ? "bg-olive text-white shadow-sm" : "text-charcoal/60 hover:text-olive"
                  }`}
                >
                  {f === "All" ? "All" : `For ${f}`}
                </button>
              ))}
            </motion.div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  custom={i * 0.1}
                >
                  <PropertyCard {...p} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-charcoal/40">
              <p className="text-lg">No properties found.</p>
            </div>
          )}

          <motion.div
  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
  className="text-center mt-12"
>
  {/* Link component use karein jo /properties page par le jaye */}
  <Link href="/properties">
    <button className="border-2 border-olive text-olive hover:bg-olive hover:text-white px-10 py-4 rounded-xl font-semibold transition-all duration-200">
      View All Properties
    </button>
  </Link>
</motion.div>

        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="py-24 bg-gray-soft">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <p className="text-olive text-sm font-semibold uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="font-serif text-4xl font-light text-charcoal">
              The <span className="italic text-olive">JSK Difference</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i * 0.15}
                className="bg-white p-8 rounded-3xl border border-gray-border hover:border-olive/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* ─── TESTIMONIALS ─── */}
<section className="py-24 bg-olive-muted/30">
  <div className="max-w-6xl mx-auto px-6">
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-olive text-sm font-semibold uppercase tracking-widest mb-2">Success Stories</p>
      <h2 className="font-serif text-4xl font-light text-charcoal">
        What Our <span className="italic text-olive">Clients Say</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Ahmed Khan", role: "Villa Owner", text: "JSK Modern helped me find the perfect investment in DHA. Their transparency is unmatched." },
        { name: "Sarah Z.", role: "Expat Client", text: "Moving from Dubai to Beirut was stressful, but their team handled everything perfectly." },
        { name: "Hamza Malik", role: "Business Man", text: "The MRICS certification really shows in their professional approach. Best in the market." }
      ].map((t, i) => (
        <motion.div
          key={i}
          variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.1}
          className="bg-white p-8 rounded-3xl shadow-sm border border-gray-border"
        >
          <div className="text-olive text-2xl mb-4">"</div>
          <p className="text-charcoal/70 italic mb-6">{t.text}</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-olive/10 rounded-full flex items-center justify-center font-bold text-olive">
              {t.name[0]}
            </div>
            <div>
              <p className="font-bold text-charcoal text-sm">{t.name}</p>
              <p className="text-xs text-olive">{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
{/* ─── OUR PROCESS ─── */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center gap-16">
      <div className="flex-1">
        <motion.p 
          variants={fadeUp} initial="hidden" whileInView="visible"
          className="text-olive text-sm font-semibold uppercase tracking-widest mb-2"
        >
          Your Journey
        </motion.p>
        <motion.h2 
          variants={fadeUp} initial="hidden" whileInView="visible" custom={1}
          className="font-serif text-4xl md:text-5xl font-light text-charcoal mb-8"
        >
          How We Bring You The <br />
          <span className="italic text-olive">Best Experience</span>
        </motion.h2>
        
        <div className="space-y-8">
          {[
            { step: "01", title: "Personal Consultation", desc: "We listen to your needs and lifestyle requirements first." },
            { step: "02", title: "Curated Selection", desc: "We filter the best global properties that match your vision." },
            { step: "03", title: "Seamless Closing", desc: "Legal checks and paperwork handled with MRICS standards." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.2}
              className="flex gap-6"
            >
              <span className="text-4xl font-serif italic text-olive/30 font-light">{item.step}</span>
              <div>
                <h3 className="text-xl font-bold text-charcoal mb-1">{item.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        variants={fadeIn} initial="hidden" whileInView="visible"
        className="flex-1 relative"
      >
        <div className="aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
            alt="Process" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-olive text-white p-8 rounded-3xl hidden md:block shadow-xl">
          <p className="text-3xl font-bold">100%</p>
          <p className="text-xs uppercase tracking-widest opacity-80">Transparency</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="bg-olive rounded-4xl p-10 md:p-16 flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="flex-1">
              <p className="text-olive-light text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
              <h2 className="font-serif text-4xl font-light text-white mb-4">
                Ready to find your <span className="italic">perfect property?</span>
              </h2>
              <p className="text-white/70 mb-6">Our team is available to answer your questions and guide you through every step.</p>
              <div className="flex flex-col gap-3">
                <a href="tel:+923001234567" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <FiPhone className="text-olive-light" /> +92 300 1234567
                </a>
                <a href="mailto:info@jskmodern.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <FiMail className="text-olive-light" /> info@jskmodern.com
                </a>
                <a href="https://wa.me/923001234567" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <FaWhatsapp className="text-olive-light" /> WhatsApp Us
                </a>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-4">
                <input type="text" placeholder="Your Name"
                  className="w-full border border-gray-border rounded-xl px-4 py-3 text-sm outline-none focus:border-olive transition-colors" />
                <input type="email" placeholder="Email Address"
                  className="w-full border border-gray-border rounded-xl px-4 py-3 text-sm outline-none focus:border-olive transition-colors" />
                <input type="tel" placeholder="Phone Number"
                  className="w-full border border-gray-border rounded-xl px-4 py-3 text-sm outline-none focus:border-olive transition-colors" />
                <textarea placeholder="Tell us what you're looking for..." rows={3}
                  className="w-full border border-gray-border rounded-xl px-4 py-3 text-sm outline-none focus:border-olive transition-colors resize-none" />
                <button className="w-full bg-olive text-white py-3.5 rounded-xl font-semibold hover:bg-olive-dark transition-all duration-200">
                  Send Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     
      {/* ─── WHATSAPP FLOATING BUTTON ─── */}
      <WhatsAppButton />
    </main>
  );
}