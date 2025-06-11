"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ConceptArtSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="concept-art" ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6 font-cinzel">
            Arte Conceitual
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />

          <p className="mt-6 text-amber-100 max-w-3xl mx-auto text-lg">
            Uma visão artística do mundo sombrio e melancólico de O Escudeiro, onde cada pixel conta uma história de
            desolação e esperança.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative max-w-4xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />

            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-amber-900/40 to-orange-900/40 backdrop-blur-sm border-2 border-amber-400/30 rounded-3xl p-8 shadow-2xl">
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Concept%20Art-aSrb5QXikX5fvsYLolMCbJrBzJWD0m.png"
                alt="Arte Conceitual - O Escudeiro na Floresta Sombria"
                className="w-full h-auto rounded-2xl filter drop-shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              {/* Image Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-6 bg-black/30 rounded-2xl p-6 border border-amber-400/20"
              >
                <h3 className="text-xl font-bold text-amber-300 mb-3">A Jornada Solitária</h3>
                <p className="text-amber-100 leading-relaxed">
                  Esta arte conceitual captura a essência melancólica da jornada do Escudeiro. Em uma floresta sombria e
                  desolada, nossa figura encapuzada. As árvores retorcidas ecoam os tormentos de um mundo em guerra.
                </p>

                <div className="mt-4 p-4 bg-black/40 rounded-xl border border-amber-400/10">
                  <h4 className="text-amber-300 font-semibold mb-2">Sinopse</h4>
                  <p className="text-amber-100/90 text-sm leading-relaxed">
                    Capturados por um grupo de supostos bandidos,{" "}
                    <strong className="text-amber-300">Bárbara, a guerreira</strong>, e{" "}
                    <strong className="text-amber-300">Escudeiro</strong> são obrigados a cumprir uma missão ou serem
                    enforcados. Nos instantes finais que a corda tomava a vida de Bárbara, ela promete cumprir uma
                    missão que a tornará para sempre desgraçada. Para evitar a completa ruína de sua Senhora Guerreira,
                    Escudeiro irá seguir por terras cobertas de guerra e com todos os seus terríveis efeitos.
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-amber-400 text-sm font-medium">Arte por Douglas Freitas</span>
                  <span className="text-amber-400/70 text-sm">Pixel Art • Aseprite</span>
                </div>
              </motion.div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-60"
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-60"
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-amber-900/60 to-orange-900/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg">
            <p className="text-amber-200 font-semibold mb-2">Estilo Visual Único</p>
            <p className="text-amber-100/80">
              Cada frame do jogo é cuidadosamente crafted em pixel art para transmitir emoção e atmosfera.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
