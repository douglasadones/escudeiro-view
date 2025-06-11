"use client"

import { motion } from "framer-motion"

interface BackgroundEffectsProps {
  scrollY: any
  opacity: any
}

export default function BackgroundEffects({ scrollY, opacity }: BackgroundEffectsProps) {
  return (
    <div className="fixed inset-0 z-0">
      {/* Forest Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BG_floresta-XMC5MvH9OgI6ayZ25D6R08dGxJb7I6.png')`,
          y: scrollY,
          opacity: opacity,
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-amber-900/80 to-stone-900/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-transparent to-red-900/30" />

      {/* Animated Fog */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 60%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
      />

      {/* Floating Game Elements */}
      <motion.img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Balde-WouOqzM0PG6iHvER0v3HArR44XBGwk.png"
        alt="Balde"
        className="absolute top-20 right-10 w-16 h-16 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />

      <motion.img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tar%C3%A7a%20do%20Rancor_moldura-V6JpF15hCxT1umx9bxu6xlPmXJHp9l.png"
        alt="Taça"
        className="absolute top-1/3 left-10 w-12 h-12 opacity-25"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -3, 3, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
      />

      <motion.img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Painel_ferramentas_CasaViburno-FtMYRdyxB3QfNoGDv2C8BCqRx0I25F.png"
        alt="Ferramentas"
        className="absolute bottom-1/3 right-20 w-20 h-20 opacity-15"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
      />
    </div>
  )
}
