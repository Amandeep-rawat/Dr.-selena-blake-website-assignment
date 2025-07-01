"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Better Image Visibility */}
      <div className="absolute inset-0">
        {/* Main Background Image */}
        <motion.div
          className="absolute inset-0 opacity-70"
          animate={
            isMobile
              ? {}
              : {
                  x: mousePosition.x * 0.01,
                  y: mousePosition.y * 0.01,
                }
          }
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        >
          <div className="w-full h-full bg-[url('/check.jpg')] bg-cover bg-center" />
        </motion.div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-teal-900/30 to-slate-800/40" />

        {/* Floating Particles - Reduced on Mobile */}
        {[...Array(isMobile ? 5 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/40 rounded-full"
            animate={{
              x: [0, isMobile ? 40 : 80, 0],
              y: [0, isMobile ? -40 : -80, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: isMobile ? 12 + i * 0.8 : 8 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + ((i * 5) % 70)}%`,
              top: `${25 + ((i * 4) % 50)}%`,
            }}
          />
        ))}

        {/* Dynamic Light Overlay - Desktop Only */}
        {!isMobile && (
          <motion.div
            className="absolute inset-0 opacity-15"
            animate={{
              background: [
                "radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)",
                "radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)",
                "radial-gradient(circle at 50% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)",
              ],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          />
        )}

        {/* Bottom Gradient for Text Readability */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/60 to-transparent" />
      </div>

      {/* Content with Enhanced Readability */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 30 : 50, scale: isMobile ? 1 : 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: isMobile ? 0.8 : 1, ease: "easeOut" }}
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif mb-4 leading-tight bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Psychological Care
            </h1>
            <div className="relative">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-serif text-teal-200 relative z-10 drop-shadow-lg">
                for Change, Insight & Well-Being
              </h2>
              {!isMobile && (
                <motion.div
                  className="absolute -inset-2 bg-teal-400/20 blur-xl rounded-full"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 1, delay: 0.3 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white drop-shadow-md"
        >
          Offering individual psychotherapy for adults in Los Angeles and virtually across California
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 20 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 1, delay: 0.5 }}
          className="space-y-4 md:space-y-6 flex justify-center flex-col items-center"
        >
          <motion.div className="w-fit" whileHover={isMobile ? {} : { scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full shadow-2xl border-2 border-white/20 relative overflow-hidden group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {!isMobile && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <span className="relative z-10">Book a Free Consultation</span>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-white/90 text-sm bg-black/20 px-4 py-2 rounded-full"
          >
            ✨ 8+ years experience • 500+ successful sessions
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={isMobile ? {} : { y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: isMobile ? 0 : Number.POSITIVE_INFINITY }}
          className="w-6 md:w-8 h-10 md:h-12 border-2 border-teal-300 rounded-full flex justify-center cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            animate={isMobile ? { opacity: 1 } : { y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{ duration: isMobile ? 0.5 : 2, repeat: isMobile ? 0 : Number.POSITIVE_INFINITY }}
            className="w-1 h-3 md:h-4 bg-teal-300 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
