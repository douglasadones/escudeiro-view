"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const chapters = [
  {
    title: "Capítulo 1 - Na Caverna",
    epigraph:
      "O medo é muito útil. Tal como a escuridão; tal como as sombras. É estranho que a luz do dia não seja suficiente. Precisamos de sombras para caminhar",
    author: "Ursula K. Le Guin",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fornalha_SpriteSheet-zjPE1F7HUClenLJXveNXVpY4lm8Yvn.png",
    description:
      "Escudeiro desperta em uma caverna misteriosa, onde encontra a Taça de Rancor - um artefato poderoso que carrega a dor e a vingança de gerações passadas.",
    dialogue: "Foi isso que usaram para nos capturar. Há poder aqui. Se necessário, tentarei usar.",
  },
  {
    title: "Capítulo 3 - Na Vila",
    epigraph: "As intermitências da Morte",
    author: "",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B%C3%AAbado_SpriteSheet-pAFjIdExDtRmUmGDPMN0ahmFIxDcZE.png",
    description:
      "A vila devastada pela guerra revela fragmentos de histórias perdidas. Cada casa conta uma tragédia, cada sobrevivente carrega uma cicatriz.",
    dialogue: "Há horas de lutar e há horas de evitar a luta. — Bárbara",
  },
]

export default function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="journey" ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
            A Jornada
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-16">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.3 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Chapter Image */}
              <div className="flex-1 flex justify-center">
                <motion.div whileHover={{ scale: 1.05, rotateY: 5 }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-xl opacity-30" />
                  <div className="relative bg-gradient-to-br from-amber-900/60 to-orange-900/60 backdrop-blur-sm border-2 border-amber-400/30 rounded-3xl p-8 shadow-2xl">
                    <img
                      src={chapter.image || "/placeholder.svg"}
                      alt={chapter.title}
                      className="w-full max-w-xs filter drop-shadow-2xl"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Chapter Content */}
              <div className="flex-1 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.3 + 0.2 }}
                  className="bg-gradient-to-br from-amber-900/80 to-orange-900/80 backdrop-blur-sm border border-amber-400/20 rounded-3xl p-8 shadow-2xl"
                >
                  <h3 className="text-3xl font-bold text-amber-300 mb-4">{chapter.title}</h3>

                  <div className="bg-black/30 rounded-2xl p-6 mb-6 border border-amber-400/20">
                    <blockquote className="text-amber-200 italic leading-relaxed">"{chapter.epigraph}"</blockquote>
                    {chapter.author && (
                      <cite className="block text-amber-400 text-sm mt-2 text-right">— {chapter.author}</cite>
                    )}
                  </div>

                  <p className="text-amber-100 leading-relaxed mb-6">{chapter.description}</p>

                  <div className="bg-gradient-to-r from-amber-800/50 to-orange-800/50 rounded-2xl p-4 border-l-4 border-amber-400">
                    <p className="text-amber-200 italic">"{chapter.dialogue}"</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
