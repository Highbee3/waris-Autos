"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="w-full">

      {/* ====================================================== */}
      {/* HERO SECTION */}
      {/* ====================================================== */}
      <div className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="https://res.cloudinary.com/dlzjjxtsd/video/upload/JPMQ3446_dwpa5k.mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6"
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wider">
            PREMIUM • LUXURY • PERFORMANCE
          </h1>

          <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-xl">
            Discover the world’s finest cars — tailored for class and excellence.
          </p>

          <div className="flex gap-5 mt-8">
            <a href="/Cars" className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition">
              Explore Cars
            </a>
            <a href="/Contact" className="px-6 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>


      {/* ====================================================== */}
      {/* WHY CHOOSE US */}
      {/* ====================================================== */}
      <section className="py-20 bg-black text-white px-6 md:px-16" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose <span className="text-amber-400">WarisAuto?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Trusted Dealers", desc: "Certified sales process with transparency and zero hidden fees." },
            { title: "Luxury Collection", desc: "Only premium, hand-selected cars from the best brands." },
            { title: "Fast Delivery", desc: "Quick, secure, and seamless car delivery to your doorstep." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 bg-gray-900 rounded-xl shadow-lg border border-gray-700 hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-bold text-amber-400">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="py-20 bg-gray-100 px-6 md:px-16">
        <h2 className="text-3xl text-black md:text-4xl font-bold text-center mb-10" data-aos="fade-up">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/image_ffbbeb0b53927d52559bee6aaa26f40c_b2ylg8.jpg",
              title: "Car Importation",
              desc: "We help you import your dream car from any country safely."
            },
            {
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/Vehicle-Inspection_dmperf.jpg",
              title: "Car Inspection",
              desc: "Full vehicle background check, mileage verification and condition report."
            },
            {
              img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/564_oey5sr.jpg",
              title: "Buying & Selling",
              desc: "We buy and sell top-grade luxury vehicles with unbeatable prices."
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative w-full h-52 bg-gray-200">
                <Image src={s.img} fill  alt={s.title} className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <section className="py-20 bg-black text-white px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12" data-aos="fade-up">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {[
            { step: "01", title: "Choose Car", desc: "Select your preferred car model." },
            { step: "02", title: "Inspection", desc: "We inspect and verify your vehicle." },
            { step: "03", title: "Payment", desc: "Secure payment process." },
            { step: "04", title: "Delivery", desc: "Get your car delivered to your location." },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="text-center p-6 border border-gray-700 rounded-xl hover:border-amber-400 transition"
            >
              <h3 className="text-amber-400 text-4xl font-extrabold">{p.step}</h3>
              <h4 className="text-xl font-bold mt-3">{p.title}</h4>
              <p className="text-gray-400 mt-2">{p.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>


     
    <section className="py-16 bg-gray-100 px-6 md:px-16">
  <h2 className="text-3xl text-black md:text-4xl font-bold text-center mb-8">
    Brands We Work With
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-6 gap-10 items-center justify-center">

    {[
      {
        name: "BMW",
        logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/x93sq2yxu6eyly8pofzr.png",
      },
      {
        name: "Audi",
        logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/skcyaazlthzlqimtmoqg.png",
      },
      {
        name: "Mercedes",
        logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/xt7bw4af9womt0sv7m95.png",
      },
      {
        name: "Toyota",
        logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/jgmqngm9cr7hp50lkuio.png",
      },
      {
        name: "Honda",
        logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/q9yglkcbfir6v4v1lw5b.png",
      },
      {
        name: "Lexus",
        logo: "https://res.cloudinary.com/dlzjjxtsd/image/upload/wrhespfgiddlihbpkxey.png",
      },
    ].map((brand, i) => (
      <div key={i} className="flex flex-col items-center">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={80}
          height={80}
          className="object-contain grayscale hover:grayscale-0 transition"
        />
        <p className="text-black text-sm font-semibold mt-2">{brand.name}</p>
      </div>
    ))}

  </div>
</section>


     
      <section className="py-20 bg-white px-6 md:px-16">
        <h2 className="text-3xl text-black md:text-4xl text-center font-bold mb-10">FAQ</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Do you import cars?",
              a: "Yes, we import cars from the US, Canada, Dubai, and Europe."
            },
            {
              q: "Do you offer inspection reports?",
              a: "Every car comes with a detailed inspection & background report."
            },
            {
              q: "Can I pre-order a car?",
              a: "Yes! We handle custom orders for any model."
            }
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-5 border border-gray-300 rounded-xl hover:shadow-xl transition"
            >
              <h3 className="font-bold text-lg">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-amber-500 text-center text-black px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready for Your Dream Car?</h2>
        <p className="text-lg md:text-xl font-medium mb-6">
          Browse our premium collection or contact us today.
        </p>
        <a href="/Contact" className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition">
          Contact Us
        </a>
      </section>

    </div>
  );
}
