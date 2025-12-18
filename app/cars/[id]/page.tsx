"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { cars } from "@/app/data/cars";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function CarDetailsPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  if (!car) return <div className="text-white p-10">Car not found.</div>;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + car.images.length) % car.images.length
    );
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-16 pt-20">
      {/* IMAGE CAROUSEL */}
      <div className="relative w-full h-[550px] md:h-[500px] rounded-xl overflow-hidden">
        <Image
          src={car.images[currentImage]}
          alt={`${car.name} - ${currentImage + 1}`}
          fill
          className="object-contain"
        />

        {/* Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-3xl text-white/80 hover:text-white"
        >
          &#8592;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-3xl text-white/80 hover:text-white"
        >
          &#8594;
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-2 mt-4 overflow-x-auto">
        {car.images.map((img, idx) => (
          <div
            key={idx}
            className={`w-24 h-16 relative rounded-lg cursor-pointer border ${
              currentImage === idx ? "border-amber-500" : "border-gray-700"
            }`}
            onClick={() => setCurrentImage(idx)}
          >
            <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover rounded-lg"/>
          </div>
        ))}
      </div>

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
