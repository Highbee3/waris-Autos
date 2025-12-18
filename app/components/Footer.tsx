"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-gray-300 pt-16 pb-10 mt-20 relative overflow-hidden">

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,193,7,0.15),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">

        {/* LOGO + DESCRIPTION */}
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-wide">
            Waris<span className="text-amber-400">Auto</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Experience luxury, performance, and trust.  
            Your No.1 marketplace for premium and verified cars in Nigeria.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-500 hover:text-black transition-all cursor-pointer backdrop-blur-md"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-amber-400 transition">Home</Link></li>
            <li><Link href="/Cars" className="hover:text-amber-400 transition">Cars</Link></li>
            <li><Link href="/about" className="hover:text-amber-400 transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-amber-400 transition">
              <MdLocationOn size={18} className="text-amber-400" />
              Lagos, Nigeria
            </li>
            <li className="flex items-center gap-2 hover:text-amber-400 transition">
              <FaPhone size={16} className="text-amber-400" />
              +234 806 535 1087
            </li>
            <li className="flex items-center gap-2 hover:text-amber-400 transition">
              <FaEnvelope size={16} className="text-amber-400" />
            ibrahimademola145@gmail.com
            </li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm text-gray-400 mb-3">
            Stay updated on new car arrivals, deals & exclusive offers.
          </p>

        
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-12 pt-5 text-center text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()} WarisAuto. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
