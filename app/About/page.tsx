"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      
      {/* HERO */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/Lexus-IS500-hero-mobile-960x1109-LEX-ISG-MY25-0067_k3xmse.jpg"
          alt="hero"
          fill
          className="object-cover opacity-30"
        />

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl font-extrabold tracking-wide"
          >
            About <span className="text-amber-500">WarisAuto</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg"
          >
            Excellence • Luxury • Trust — The pillars that drive us.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            WarisAuto was founded with one mission — to redefine what a modern
            car dealership looks like. We provide curated, top-quality vehicles,
            transparent pricing, and an unmatched customer experience.
            <br /><br />
            Our passion for excellence drives us to ensure every customer finds
            not just a car — but the perfect match that fits their lifestyle,
            ambition, and personality.
          </p>
        </div>
      </section>

      {/* LUXURY DIVIDER */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>

      {/* WHAT DRIVES US */}
      <section className="py-20 bg-gray-900 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          What Drives Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {[
            {
              title: "Our Mission",
              text: "Deliver premium automobiles with transparency and world-class experience."
            },
            {
              title: "Our Vision",
              text: "To become Africa's most trusted and innovative luxury car dealer."
            },
            {
              title: "Our Values",
              text: "Integrity, professionalism, quality, transparency & excellence."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-black p-8 rounded-xl shadow-lg border border-gray-700 hover:border-amber-500 transition"
              data-aos={i === 0 ? "fade-right" : i === 2 ? "fade-left" : "fade-up"}
            >
              <h3 className="text-amber-500 text-2xl font-bold">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-black px-6 md:px-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {[
            { num: "250+", label: "Cars Sold" },
            { num: "180+", label: "Happy Clients" },
            { num: "35+", label: "Premium Models" },
            { num: "10+ Years", label: "Experience" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-4xl font-extrabold text-amber-500">{stat.num}</h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-6 md:px-16 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" data-aos="fade-up">
          Meet The Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {[
            {
              name: "Waris A.",
              role: "Founder & CEO",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/WhatsApp_Image_2025-12-09_at_07.45.47_8fc3769c_tolfba.jpg"
            },
            {
              name: "Mr Sefiu",
              role: "Sales Lead",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/WhatsApp_Image_2025-12-09_at_07.46.28_d6db2860_g9xbey.jpg"
            },
            {
              name: "Mr saheed",
              role: "Secretary",
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/WhatsApp_Image_2025-12-09_at_07.46.53_d23358a5_zekbzl.jpg"
            }
          ].map((member, i) => (
            <div key={i} className="text-center" data-aos={i === 0 ? "fade-right" : i === 2 ? "fade-left" : "fade-up"}>
              <div className="relative w-40 h-40 mx-auto">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-4 border-amber-500"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500 text-black text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Experience Premium Cars?
        </h2>
        <p className="text-lg md:text-xl font-medium mb-6">
          Visit our cars page or contact us directly for your perfect match.
        </p>
        <a
          href="/Cars"
          className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition"
        >
          Browse Cars
        </a>
      </section>

    </div>
  );
}
