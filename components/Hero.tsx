"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  return (
   <section className="bg-gradient-to-r from-blue-900 to-black text-white py-32 px-6 md:px-10 text-center">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Nayl Trading
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
      >
        Global Import & Export • Technology Supply •
        Software Solutions in Dubai
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-10 flex justify-center gap-6"
      >
        <Link
          href="/services"
          className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Our Services
        </Link>

      <Link
       href="/contact"
      className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
>
  Contact Us
</Link>
      </motion.div>

    </section>
  )
}