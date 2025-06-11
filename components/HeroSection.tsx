"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Character Display */}
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1.5, delay: 0.3, type: "spring", bounce: 0.4 }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parado_Gif_Escudeiro-SRpbuqOH0HkdTW6txppESgZc1XozaU.gif"
              alt="Escudeiro"
              className="relative w-32 h-32 mx-auto filter drop-shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent font-cinzel"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          O Escudeiro
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-amber-100 mb-8 font-light tracking-wide font-crimson"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Uma Jornada de Honra e Redenção
        </motion.p>

        {/* Promise Quote */}
        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-amber-900/80 to-orange-900/80 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-2xl" />
            <blockquote className="relative text-2xl md:text-3xl font-semibold text-amber-100 italic mb-4 font-crimson">
              "Eu prometo!"
            </blockquote>
            <cite className="text-amber-300 text-lg font-crimson">— Bárbara, a Guerreira</cite>
          </div>
        </motion.div>

        {/* Village Scene */}
        <motion.div
          className="mt-12 flex justify-center items-end gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Casa_floresta-S4VIUcri0bw67Zc0EDzWf3ak6jB0ou.png"
            alt="Casa da Floresta"
            className="w-20 h-20 filter drop-shadow-lg"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Poste_floresta-yCvCt9jr7Lvu5olUMJvIHH8k76dLNx.png"
            alt="Poste"
            className="w-12 h-16 filter drop-shadow-lg"
            whileHover={{ scale: 1.1, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-1 h-3 bg-amber-400 rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
