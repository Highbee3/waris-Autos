"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 md:px-16 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT — INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-300 text-lg">
            Have questions or need assistance? Reach out and we&apos;ll respond
            quickly.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-400 text-xl" />
              <span className="text-gray-300 text-lg">+234 812 345 6789</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-xl" />
              <span className="text-gray-300 text-lg">
                info@yourcompany.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MdLocationPin className="text-blue-400 text-2xl" />
              <span className="text-gray-300 text-lg">
                Lagos, Nigeria
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 border border-gray-700 p-8 rounded-xl space-y-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-2">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:border-blue-500 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:border-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:border-blue-500 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
