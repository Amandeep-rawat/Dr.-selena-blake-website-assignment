"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Set loaded state after a brief delay to ensure smooth initial render
    const timer = setTimeout(() => setIsLoaded(true), 100)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Better Image Visibility */}
      <div className="absolute inset-0">
        {/* Main Background Image */}
        <motion.div
          className="absolute inset-0 opacity-70"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.7,
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { type: "spring", stiffness: 50, damping: 30 },
            y: { type: "spring", stiffness: 50, damping: 30 },
          }}
        >
          <div className="w-full h-full bg-[url('/check.jpg')] bg-cover bg-center" />
        </motion.div>

        {/* Subtle Gradient Overlay - Much Lighter */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-teal-900/40 to-slate-800/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Floating Particles - More Subtle with Proper Initial State */}
        {isLoaded &&
          [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 max-sm:hidden h-2 bg-green-200 rounded-full"
              initial={{
                opacity: 0,
                x: 15 + ((i * 5) % 70) + "%",
                y: 25 + ((i * 4) % 50) + "%",
              }}
              animate={{
                x: [0, 80, 0],
                y: [0, -80, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1 + i * 0.4, // Start after content loads
              }}
              style={{
                left: `${15 + ((i * 5) % 70)}%`,
                top: `${25 + ((i * 4) % 50)}%`,
              }}
            />
          ))}

        {/* Dynamic Light Overlay - Very Subtle */}
        <motion.div
          className="absolute inset-0 opacity-15"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.15,
            background: [
              "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)",
            ],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.5 },
            background: { duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 1 },
          }}
        />

        {/* Bottom Gradient for Text Readability */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/60 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Content with Enhanced Readability */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="mb-6"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1.5, // Start floating after initial load
            }}
          >
            <h1 className="text-6xl md:text-8xl font-serif mb-4 leading-tight bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Psychological Care
            </h1>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-serif text-teal-200 relative z-10 drop-shadow-lg">
                for Change, Insight & Well-Being
              </h2>
              <motion.div
                className="absolute -inset-2 bg-teal-400/20 blur-xl rounded-full"
                initial={{ scale: 1, opacity: 0.2 }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.2, // Start after content is visible
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-white drop-shadow-md"
        >
          Offering individual psychotherapy for adults in Los Angeles and virtually across California
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-6 flex justify-center flex-col items-center"
        >
          <motion.div className="w-fit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm relative overflow-hidden group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">Book a Free Consultation</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/90 text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            ✨ 8+ years experience • 500+ successful sessions
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: 2, // Start bouncing after everything loads
          }}
          className="w-8 h-12 border-2 border-teal-300 rounded-full flex justify-center cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 2, // Start after scroll indicator appears
            }}
            className="w-1 h-4 bg-teal-300 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

