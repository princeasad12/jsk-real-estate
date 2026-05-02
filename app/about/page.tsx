"use client";
import { motion } from "framer-motion";
import { FiAward, FiGlobe, FiUsers, FiArrowRight } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const team = [
  {
    name: "Jade Zoghaib",
    role: "CEO & MRICS Certified",
    country: "Lebanon · Pakistan · UAE",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    bio: "With over 15 years of international real estate experience, Jade holds the prestigious MRICS certification from the Royal Institution of Chartered Surveyors — the highest global standard in property practice.",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ahmed Al Rashid",
    role: "Head of UAE Operations",
    country: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    bio: "Specialist in Dubai luxury residential and commercial properties with deep knowledge of UAE property law and investment structures.",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Sara Malik",
    role: "Senior Property Consultant",
    country: "Karachi, Pakistan",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80",
    bio: "Expert in Pakistan's premium residential market, particularly DHA developments across Karachi and Lahore.",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Omar Khoury",
    role: "Lebanon Market Director",
    country: "Beirut, Lebanon",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    bio: "Born and raised in Beirut, Omar brings unmatched local expertise in Lebanon's recovering luxury property market.",
    linkedin: "#",
    instagram: "#",
  },
];

const values = [
  { icon: FiAward, title: "Certified Excellence", desc: "MRICS-certified leadership ensures every transaction meets global standards." },
  { icon: FiGlobe, title: "Global Network", desc: "Active in 6 countries with a curated network of premium buyers and sellers." },
  { icon: FiUsers, title: "Client First", desc: "98% satisfaction rate built on transparency, honesty, and dedicated service." },
];

const milestones = [
  { year: "2009", event: "JSK Modern founded in Beirut" },
  { year: "2013", event: "Expanded to Dubai & UAE market" },
  { year: "2017", event: "Jade achieves MRICS certification" },
  { year: "2019", event: "Pakistan operations launched" },
  { year: "2023", event: "1,000+ properties milestone" },
  { year: "2025", event: "6-country network established" },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white pt-24">

      {/* ─── HERO ─── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E8F0EA] rounded-l-[80px] -z-0" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#4A7C59]/10 rounded-full blur-3xl -z-0" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#4A7C59] text-sm font-semibold uppercase tracking-widest mb-3"
              >
                About JSK Modern
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="font-serif text-5xl md:text-6xl font-light text-[#1A1A1A] leading-tight mb-6"
              >
                Real Estate <br />
                <span className="italic text-[#4A7C59]">Redefined.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#1A1A1A]/60 text-lg leading-relaxed mb-8"
              >
                Founded with a vision to bring international standards to emerging
                markets, JSK Modern has become the most trusted name in luxury
                real estate across Pakistan, UAE, and Lebanon.
              </motion.p>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                href="#team"
                className="inline-flex items-center gap-2 bg-[#4A7C59] text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-[#2F5C3A] transition-all duration-200"
              >
                Meet Our Team <FiArrowRight />
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                  alt="Jade Zoghaib"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="inline-block bg-[#4A7C59] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                    MRICS CERTIFIED
                  </div>
                  <h2 className="text-white text-2xl font-bold">Jade Zoghaib</h2>
                  <p className="text-white/70 text-sm">CEO & Founder</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-[#E5E7E3]">
                <p className="text-3xl font-bold text-[#4A7C59]">15+</p>
                <p className="text-[#1A1A1A]/60 text-sm">Years Experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-20 bg-white mt-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-7 rounded-3xl border border-[#E5E7E3] hover:border-[#4A7C59]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#E8F0EA] rounded-2xl flex items-center justify-center shrink-0">
                  <v.icon className="text-[#4A7C59] text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A1A] mb-2">{v.title}</h3>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-20 bg-[#F7F8F6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#4A7C59] text-sm font-semibold uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="font-serif text-4xl font-light text-[#1A1A1A]">
              Built Over <span className="italic text-[#4A7C59]">15 Years</span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#E5E7E3] -translate-x-1/2 hidden md:block" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className={`flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <div className="bg-white rounded-2xl p-5 border border-[#E5E7E3] inline-block shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-[#4A7C59] font-bold text-lg">{m.year}</p>
                      <p className="text-[#1A1A1A]/70 text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 bg-[#4A7C59] rounded-full border-4 border-white shadow-md shrink-0 z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#4A7C59] text-sm font-semibold uppercase tracking-widest mb-2">The People</p>
            <h2 className="font-serif text-4xl font-light text-[#1A1A1A]">
              Meet Our <span className="italic text-[#4A7C59]">Team</span>
            </h2>
          </div>

          {/* Jade featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-[#E8F0EA] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center mb-10"
          >
            <div className="w-48 h-48 rounded-3xl overflow-hidden shrink-0 shadow-lg">
              <img src={team[0].image} alt={team[0].name} className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1">
              <div className="inline-block bg-[#4A7C59] text-white text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                MRICS CERTIFIED · CEO
              </div>
              <h3 className="text-3xl font-bold text-[#1A1A1A] mb-1">{team[0].name}</h3>
              <p className="text-[#4A7C59] font-medium mb-4">{team[0].country}</p>
              <p className="text-[#1A1A1A]/60 leading-relaxed max-w-xl">{team[0].bio}</p>
              <div className="flex gap-3 mt-6">
                <a href={team[0].linkedin} className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-[#4A7C59] hover:bg-[#4A7C59] hover:text-white transition-all">
                  <FaLinkedinIn size={14} />
                </a>
                <a href={team[0].instagram} className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-[#4A7C59] hover:bg-[#4A7C59] hover:text-white transition-all">
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Rest of team */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.slice(1).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-white rounded-3xl border border-[#E5E7E3] overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1A1A1A]">{member.name}</h3>
                  <p className="text-[#4A7C59] text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-[#1A1A1A]/40 text-xs mb-3">{member.country}</p>
                  <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex gap-2 mt-4">
                    <a href={member.linkedin} className="w-8 h-8 bg-[#E8F0EA] rounded-lg flex items-center justify-center text-[#4A7C59] hover:bg-[#4A7C59] hover:text-white transition-all">
                      <FaLinkedinIn size={12} />
                    </a>
                    <a href={member.instagram} className="w-8 h-8 bg-[#E8F0EA] rounded-lg flex items-center justify-center text-[#4A7C59] hover:bg-[#4A7C59] hover:text-white transition-all">
                      <FaInstagram size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-[#4A7C59]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h2 className="font-serif text-4xl font-light text-white mb-4">
            Ready to work with <span className="italic">the best?</span>
          </h2>
          <p className="text-white/70 mb-8">Let our team help you find, buy, or sell your next property.</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-white text-[#4A7C59] px-8 py-4 rounded-xl font-semibold hover:bg-[#E8F0EA] transition-all duration-200"
          >
            View Properties <FiArrowRight />
          </a>
        </motion.div>
      </section>
    </main>
  );
}