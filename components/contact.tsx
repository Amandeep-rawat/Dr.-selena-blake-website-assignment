"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Please tell us what brings you here"
    if (!formData.preferredTime.trim()) newErrors.preferredTime = "Preferred contact time is required"
    if (!formData.agreeToContact) newErrors.agreeToContact = "You must agree to be contacted"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      agreeToContact: false,
    })
    setIsSubmitting(false)

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      content: "1287 Maplewood Drive\nLos Angeles, CA 90026",
      color: "from-blue-500 to-teal-500",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(323) 555-0192",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: "serena@blakepsychology.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "In-person: Tue & Thu, 10 AM–6 PM\nVirtual: Mon, Wed & Fri, 1 PM–5 PM",
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-br from-stone-900 via-teal-900 to-stone-800 relative overflow-hidden"
    >
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-stone-500/20 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-teal-500/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Send className="w-4 h-4" />
            Ready to Begin?
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 md:mb-8">Get In Touch</h2>
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto">
            Ready to begin your journey? Reach out to schedule a free consultation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="grid gap-4 md:gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={isMobile ? {} : { scale: 1.02, x: 5 }}
                  className="bg-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20 group"
                >
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <motion.div
                      className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${info.color} rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow`}
                      whileHover={isMobile ? {} : { rotate: 5 }}
                    >
                      <info.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-white text-base md:text-lg mb-1 md:mb-2">{info.title}</h3>
                      <p className="text-stone-300 whitespace-pre-line text-sm md:text-base">{info.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 md:py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6"
                >
                  <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Message Sent!</h3>
                <p className="text-stone-300 text-sm md:text-base">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <Input
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-stone-400 focus:border-teal-400 ${errors.name ? "border-red-400" : ""}`}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Input
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`bg-white/10 border-white/20 text-white placeholder:text-stone-400 focus:border-teal-400 ${errors.phone ? "border-red-400" : ""}`}
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-stone-400 focus:border-teal-400 ${errors.email ? "border-red-400" : ""}`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Textarea
                    placeholder="What brings you here? *"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`min-h-[100px] md:min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-stone-400 focus:border-teal-400 ${errors.message ? "border-red-400" : ""}`}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <div>
                  <Input
                    placeholder="Preferred time to reach you *"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange("preferredTime", e.target.value)}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-stone-400 focus:border-teal-400 ${errors.preferredTime ? "border-red-400" : ""}`}
                  />
                  {errors.preferredTime && <p className="text-red-400 text-sm mt-1">{errors.preferredTime}</p>}
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agree"
                    checked={formData.agreeToContact}
                    onCheckedChange={(checked) => handleInputChange("agreeToContact", checked as boolean)}
                    className="border-white/20 data-[state=checked]:bg-teal-500 mt-1"
                  />
                  <label htmlFor="agree" className="text-sm text-stone-300 leading-relaxed">
                    I agree to be contacted by Dr. Serena Blake regarding my inquiry *
                  </label>
                </div>
                {errors.agreeToContact && <p className="text-red-400 text-sm">{errors.agreeToContact}</p>}

                <motion.div whileHover={isMobile ? {} : { scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white py-3 md:py-4 text-base md:text-lg rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 md:w-6 md:h-6 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
