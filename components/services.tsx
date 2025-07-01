"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, Star } from "lucide-react"

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn effective coping strategies and evidence-based techniques to manage anxiety, reduce stress, and regain control over your daily life through personalized therapeutic approaches.",
    image: "/stress.png?height=400&width=400",
    color: "from-blue-500 to-teal-500",
    stats: "85% improvement rate",
  },
  {
    title: "Relationship Counseling",
    description:
      "Strengthen your connections and improve communication patterns in your relationships. Work through conflicts, build intimacy, and develop healthier relationship dynamics.",
    image: "/relationship.png?height=400&width=400",
    color: "from-rose-500 to-pink-500",
    stats: "90% satisfaction rate",
  },
  {
    title: "Trauma Recovery",
    description:
      "Process traumatic experiences in a safe, supportive environment. Develop resilience and healing strategies to move forward with renewed strength and emotional well-being.",
    image: "/troma.png?height=400&width=400",
    color: "from-purple-500 to-indigo-500",
    stats: "Specialized EMDR certified",
  },
]

export default function Services() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-stone-50 to-teal-50/20 relative overflow-hidden">
      {/* Animated Background - Simplified */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-stone-300 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="w-4 h-4" />
            Specialized Therapeutic Services
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-stone-800 mb-6 md:mb-8 relative">
            Areas of Focus
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>

          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Specialized therapeutic services tailored to your unique needs and journey toward healing
          </p>
        </motion.div>

        <div className="space-y-16 md:space-y-32 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <motion.div
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""} space-y-6 md:space-y-8`}
                whileHover={isMobile ? {} : { x: index % 2 === 1 ? -5 : 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4 md:space-y-6">
                  <motion.div
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-3 md:px-4 py-2 rounded-full text-sm font-medium`}
                    whileHover={isMobile ? {} : { scale: 1.05 }}
                  >
                    {service.stats}
                  </motion.div>

                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-stone-800 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-base md:text-lg text-stone-600 leading-relaxed">{service.description}</p>

                  <motion.button
                    className="inline-flex items-center gap-2 text-teal-600 font-semibold text-base md:text-lg group"
                    whileHover={isMobile ? {} : { x: 5 }}
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                className={`${index % 2 === 1 ? "lg:col-start-1" : ""} relative group`}
                whileHover={isMobile ? {} : { scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Floating Elements - Desktop Only */}
                  {!isMobile && (
                    <div
                      className={`absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r ${service.color} rounded-full blur-xl opacity-60`}
                    />
                  )}

                  <div className="relative w-full h-64 md:h-96 lg:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl">
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 z-10`} />
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Overlay Content */}
                    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-20">
                      <motion.div
                        className="bg-white/90 rounded-xl md:rounded-2xl p-3 md:p-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        <p className="text-stone-700 font-medium text-sm md:text-base">{service.stats}</p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Session Fees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-32"
        >
          <div className="bg-gradient-to-br from-stone-900 to-teal-900 rounded-2xl md:rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]" />
            </div>

            <div className="relative z-10 text-center text-white">
              <motion.h3
                className="text-2xl md:text-4xl font-serif mb-8 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Investment in Your Well-Being
              </motion.h3>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {[
                  { type: "Individual Session", price: "$200", desc: "50-minute focused session" },
                  { type: "Couples Session", price: "$240", desc: "75-minute relationship work" },
                ].map((item, index) => (
                  <motion.div
                    key={item.type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={isMobile ? {} : { scale: 1.05 }}
                    className="bg-white/10 rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/20"
                  >
                    <h4 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">{item.type}</h4>
                    <p className="text-3xl md:text-4xl font-bold text-teal-300 mb-2">{item.price}</p>
                    <p className="text-stone-300 text-sm md:text-base">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="mt-6 md:mt-8 text-stone-300 text-sm md:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Superbill provided for insurance reimbursement
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
