"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { cars } from "@/app/data/cars";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function CarDetailsPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  if (!car) return <div className="text-white p-10">Car not found.</div>;

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 pt-20">
      {/* IMAGE */}
      <Image
        src={car.img}
        alt={car.name}
        width={1200}
        height={600}
        className="w-full h-[350px] md:h-[500px] object-cover rounded-xl"
      />

      {/* INFO */}
      <div className="mt-10">
        <h1 className="text-4xl font-extrabold">{car.name}</h1>
        <p className="text-amber-400 text-xl mt-2">{car.price}</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400">Year</p>
            <h4 className="font-bold">{car.year}</h4>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400">Mileage</p>
            <h4 className="font-bold">{car.mileage}</h4>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400">Engine</p>
            <h4 className="font-bold">{car.engine}</h4>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
            <p className="text-gray-400">Horsepower</p>
            <h4 className="font-bold">{car.horsepower}</h4>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-lg mt-8 max-w-3xl">{car.description}</p>

        {/* CTA */}
        <a
          href={`whatsapp://send?phone=+2348065351087&text=I'm%20interested%20in%20the%20car:%20${car.name}`}
          className="inline-block mt-10 px-8 py-3 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400"
        >
          Contact Dealer
        </a>
      </div>
    </div>
  );
}

