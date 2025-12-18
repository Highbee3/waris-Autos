"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="w-full overflow-hidden">

      {/* ============================
          HERO SECTION
      ============================ */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="https://res.cloudinary.com/dlzjjxtsd/video/upload/JPMQ3446_dwpa5k.mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 -z-10" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-xl">
            PREMIUM • LUXURY • PERFORMANCE
          </h1>
          <p className="text-gray-200 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the world’s finest cars — tailored for class and excellence.
          </p>

          <div className="flex gap-6 mt-10 justify-center">
            <a
              href="/Cars"
              className="px-7 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition shadow-lg"
            >
              Explore Cars
            </a>
            <a
              href="/Contact"
              className="px-7 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* ============================
          WHY CHOOSE US
      ============================ */}
      <section className="py-24 bg-black text-white px-6 md:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-14">
          Why Choose <span className="text-amber-400">WarisAuto?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Trusted Dealers", desc: "Certified sales process with transparency and zero hidden fees." },
            { title: "Luxury Collection", desc: "Only premium, hand-selected cars from the best brands." },
            { title: "Fast Delivery", desc: "Quick, secure, and seamless car delivery to your doorstep." },
          ].map((item, i) => (
            <motion.div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="p-8 bg-gray-900 rounded-2xl border border-gray-700 shadow-xl hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-bold text-amber-400">{item.title}</h3>
              <p className="text-gray-300 mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================
          SERVICES
      ============================ */}
      <section className="py-24 bg-gray-100 px-6 md:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/image_ffbbeb0b53927d52559bee6aaa26f40c_b2ylg8.jpg",
              title: "Car Importation",
              desc: "We help you import your dream car from any country safely.",
            },
            {
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/Vehicle-Inspection_dmperf.jpg",
              title: "Car Inspection",
              desc: "Full vehicle background check, mileage verification and condition report.",
            },
            {
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/564_oey5sr.jpg",
              title: "Buying & Selling",
              desc: "We buy and sell top-grade luxury vehicles with unbeatable prices.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative w-full h-56">
                <Image src={s.img} fill alt={s.title} className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-gray-600 mt-3">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================
          HOW IT WORKS
      ============================ */}
      <section className="py-24 bg-black text-white px-6 md:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-14">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {[
            { step: "01", title: "Choose Car", desc: "Select your preferred car model." },
            { step: "02", title: "Inspection", desc: "We inspect and verify your vehicle." },
            { step: "03", title: "Payment", desc: "Secure payment process." },
            { step: "04", title: "Delivery", desc: "Get your car delivered to your location." },
          ].map((p, i) => (
            <motion.div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="text-center p-7 border border-gray-700 rounded-2xl hover:border-amber-400 transition"
            >
              <h3 className="text-amber-400 text-5xl font-extrabold">{p.step}</h3>
              <h4 className="text-xl font-bold mt-4">{p.title}</h4>
              <p className="text-gray-400 mt-3">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================
          BRANDS
      ============================ */}
      <section className="py-20 bg-gray-100 px-6 md:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-black">
          Brands We Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 justify-center items-center">
          {[
            { name: "BMW", logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/x93sq2yxu6eyly8pofzr.png" },
            { name: "Audi", logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/skcyaazlthzlqimtmoqg.png" },
            { name: "Mercedes", logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/xt7bw4af9womt0sv7m95.png" },
            { name: "Toyota", logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/jgmqngm9cr7hp50lkuio.png" },
            { name: "Honda", logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/q9yglkcbfir6v4v1lw5b.png" },
            { name: "Lexus", logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/wrhespfgiddlihbpkxey.png" },
          ].map((brand, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={80}
                height={80}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
              <p className="text-black mt-2 font-semibold">{brand.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================
          FAQ
      ============================ */}
      <section className="py-24 bg-white px-6 md:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-black">FAQ</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { q: "Do you import cars?", a: "Yes, we import cars from the US, Canada, Dubai, and Europe." },
            { q: "Do you offer inspection reports?", a: "Every car comes with a detailed inspection & background report." },
            { q: "Can I pre-order a car?", a: "Yes! We handle custom orders for any model." },
          ].map((faq, i) => (
            <motion.div
              key={i}
              data-aos="fade-up"
              className="p-6 border border-gray-300 rounded-2xl hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================
          CTA SECTION
      ============================ */}
      <section className="py-20 bg-amber-500 text-center text-black px-6">
        <h2 className="text-4xl font-extrabold mb-4">Ready for Your Dream Car?</h2>
        <p className="text-lg md:text-xl font-medium mb-6">
          Browse our premium collection or contact us today.
        </p>
        <a
          href="/Contact"
          className="px-10 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}
