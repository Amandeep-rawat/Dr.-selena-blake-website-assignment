"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Do you accept insurance?",
    answer:
      "No, I do not accept insurance directly. However, I provide a superbill that you can submit to your insurance company for potential reimbursement. Many clients find this process straightforward, and I'm happy to help guide you through it.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes, I offer virtual sessions via Zoom for clients throughout California. Online therapy can be just as effective as in-person sessions and offers greater flexibility and convenience for many clients.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I require 24-hour notice for cancellations. This allows me to potentially offer the time slot to another client who may need it. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Standard therapy sessions are 50 minutes long. This allows adequate time for meaningful therapeutic work while maintaining appropriate boundaries and scheduling.",
  },
  {
    question: "What can I expect in our first session?",
    answer:
      "Our first session will focus on getting to know you and understanding what brings you to therapy. We'll discuss your goals, concerns, and begin to develop a treatment plan that feels right for you.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-32 bg-gradient-to-br from-stone-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-serif text-stone-800 mb-8">Frequently Asked Questions</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Everything you need to know about therapy, sessions, and getting started
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 border border-stone-200/50 group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-stone-800 pr-4 group-hover:text-teal-700 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-teal-600" />
                  </motion.div>
                </div>
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: openIndex === index ? 0 : -10 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-r from-teal-50 to-stone-50 mx-4 rounded-xl p-6 mt-2 border-l-4 border-teal-500"
                >
                  <p className="text-stone-700 leading-relaxed text-lg">{faq.answer}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
