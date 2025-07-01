"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-serif mb-3 md:mb-4">Dr. Serena Blake, PsyD</h3>
          <p className="text-stone-300 mb-2 text-sm md:text-base">Licensed Clinical Psychologist</p>

          <div className="space-y-1 md:space-y-2 mb-4 md:mb-6 text-sm md:text-base">
            <p className="text-stone-300">serena@blakepsychology.com</p>
            <p className="text-stone-300">Phone: (323) 555-0192</p>
            <p className="text-stone-300">1287 Maplewood Drive, Los Angeles, CA 90026</p>
          </div>

          <div className="border-t border-stone-600 pt-4 md:pt-6">
            <p className="text-stone-400 text-xs md:text-sm">
              © 2025 Dr. Serena Blake Psychological Services. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
