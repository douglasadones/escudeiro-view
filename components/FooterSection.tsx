"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const footerItems = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banco_casa_Viburno-fYjvMEnulDImdGDbAtqK1BvSitHC2W.png",
      alt: "Banco",
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RodadeFiar_casa_Viburno-KfWFeKXqWzYLP1SUfqIIyhTqYtlJQH.png",
      alt: "Roda de Fiar",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Banheiro-1IzO9JPqO8yPMjqS0wv9owAajoM4oV.png",
      alt: "Banheiro",
    },
  ]

  return (
    <footer ref={ref} className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-amber-900/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Final Prophecy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-900/80 to-orange-900/80 backdrop-blur-sm border border-amber-400/20 rounded-3xl p-12 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 to-orange-400/5 rounded-3xl" />
            <blockquote className="relative text-xl md:text-2xl text-amber-100 italic leading-relaxed mb-6">
              "E eis o começo da única história contada entre nós, Jardineiros… A única memória de uma outra Era,
              sobrevivendo ainda em memória e somente assim."
            </blockquote>
            <cite className="text-amber-400 text-lg font-semibold">— Jardineiro do Antigo Lago</cite>
          </div>
        </motion.div>

        {/* Footer Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center gap-8 mb-12 flex-wrap"
        >
          {footerItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                className="relative w-16 h-16 filter drop-shadow-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Game Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="bg-gradient-to-r from-amber-900/50 to-orange-900/50 backdrop-blur-sm border border-amber-400/20 rounded-2xl p-6 max-w-md mx-auto">
            <p className="text-amber-200 font-medium mb-2">Uma experiência única de RPG pixel art</p>
            <p className="text-amber-300 text-sm">Forjado com dedicação e paixão</p>
          </div>

          <div className="flex justify-center gap-4 text-amber-400/60 text-sm">
            <span>© 2025</span>
            <span>•</span>
            <span>O Escudeiro</span>
            <span>•</span>
            <span>Todos os direitos reservados</span>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-orange-500/10 rounded-full blur-xl" />
      </div>
    </footer>
  )
}
