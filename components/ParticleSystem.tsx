"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ParticleSystem() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const particles = Array.from({ length: 50 }, (_, i) => i)

  // Não renderizar no servidor
  if (!isClient || windowSize.width === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-30"
          initial={{
            x: Math.random() * windowSize.width,
            y: windowSize.height + 10,
          }}
          animate={{
            y: -10,
            x: Math.random() * windowSize.width,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            boxShadow: "0 0 6px rgba(245, 158, 11, 0.8)",
          }}
        />
      ))}
    </div>
  )
}
