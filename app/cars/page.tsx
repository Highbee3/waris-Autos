"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { cars } from "../data/cars";

export default function CarsPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  const filteredCars = cars
    .filter((car) => (filter === "All" ? true : car.type === filter))
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()));
    

  return (
    <div className="bg-black min-h-screen text-white">
      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Cars</h1>
        <p className="text-gray-400 mt-3">Browse. Filter.</p>
      </section>

      {/* SEARCH BAR */}
      <div className="flex justify-center px-6">
        <input
          type="text"
          placeholder="Search for a car…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white outline-none"
        />
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 py-10">
        {["All", "Lexus", "Toyota", "Sports"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={`px-6 py-2 rounded-full border ${
              filter === btn
                ? "bg-amber-500 text-black border-amber-500"
                : "border-gray-700 hover:bg-gray-800"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* CARS GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 pb-20">
        {filteredCars.map((car) => (
          <motion.div
            key={car.id}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden"
          >
            <Image
              src={car.img}
              alt={car.name}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">{car.name}</h3>
              <p className="text-gray-400">{car.type}</p>
              <p className="text-amber-400 mt-3 text-lg">{car.price}</p>

              <div className="flex justify-between items-center mt-4">
                <a
                  href={`/cars/${car.id}`}
                  className="text-amber-500 hover:underline"
                >
                  View Details →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}



