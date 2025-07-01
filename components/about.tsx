"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Sparkles, Heart, Brain, Shield } from "lucide-react"

export default function About() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const features = [
    { icon: Brain, title: "Evidence-Based", desc: "CBT & Mindfulness" },
    { icon: Heart, title: "Compassionate", desc: "Personalized Care" },
    { icon: Shield, title: "Safe Space", desc: "Confidential & Secure" },
    { icon: Sparkles, title: "Transformative", desc: "Lasting Change" },
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-br from-stone-50 via-white to-teal-50/30 relative overflow-hidden"
    >
      {/* Background Elements - Simplified on Mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 relative"
        >
          {!isMobile && (
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 border-2 border-teal-300/30 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-teal-500" />
              </div>
            </div>
          )}

          <motion.blockquote
            className="text-2xl md:text-3xl lg:text-4xl font-serif text-stone-700 max-w-5xl mx-auto leading-relaxed mb-6 md:mb-8 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-4xl md:text-6xl text-teal-300 absolute -top-2 md:-top-4 -left-2 md:-left-4">"</span>
            Therapy can be a space where you invest in yourself—one of the highest forms of self-care.
            <span className="text-4xl md:text-6xl text-teal-300 absolute -bottom-4 md:-bottom-8 -right-2 md:-right-4">
              "
            </span>
          </motion.blockquote>

          <motion.cite
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-stone-500 text-lg md:text-xl font-medium"
          >
            — Dr. Serena Blake
          </motion.cite>
        </motion.div>

        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="relative">
              <motion.h2
                className="text-3xl md:text-5xl lg:text-6xl font-serif text-stone-800 mb-6 md:mb-8 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                About Dr. Serena Blake
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.h2>
            </div>

            <div className="space-y-4 md:space-y-6 text-stone-600 leading-relaxed">
              {[
                "Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care.",
                "Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to overcome anxiety, strengthen relationships, and heal from trauma.",
                "You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don't have to face it alone.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="text-base md:text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Elements - Desktop Only */}
              {!isMobile && (
                <>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-100 rounded-full blur-xl opacity-50" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-stone-200 rounded-full blur-xl opacity-30" />
                </>
              )}

              <motion.div
                className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl"
                whileHover={isMobile ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent z-10" />
                <Image
                  src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?t=st=1751261636~exp=1751265236~hmac=aacc07ab8020042795a6804c7e1c9d60110ddd61fa3dccd32bbe3558883e8093&w=1380"
                  alt="Dr. Serena Blake, Clinical Psychologist"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={isMobile ? {} : { y: -5, scale: 1.02 }}
              className="text-center p-4 md:p-6 bg-white/80 rounded-xl md:rounded-2xl shadow-md md:shadow-lg border border-stone-200/50 group"
            >
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300"
                whileHover={isMobile ? {} : { rotate: 5 }}
              >
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h3 className="text-lg md:text-xl font-semibold text-stone-800 mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-sm md:text-base text-stone-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
