"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const characters = [
  {
    name: "Escudeiro",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Parado_Gif_Escudeiro-SRpbuqOH0HkdTW6txppESgZc1XozaU.gif",
    description:
      "Fiel servo de Bárbara, determinado a salvar sua Senhora Guerreira. Sua lealdade será testada em uma jornada através de terras devastadas pela guerra.",
    quote: "Senhora… Por favor, não faça isso. Mas se é esse o seu desejo… Meu dever de Escudeiro…",
    color: "from-blue-900 to-purple-900",
  },
  {
    name: "Viburno",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ferreiro_Parado-DZIjCJaY9XHZAzfJUP0GXC9L2td5YR.gif",
    description:
      "O ferreiro misterioso que guarda segredos antigos. Suas habilidades vão além da forja, controlando forças que poucos compreendem.",
    quote: "… [expira com força em acordo]",
    color: "from-orange-900 to-red-900",
  },
  {
    name: "Sikiana",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sikiana_emanando-HlrWcvFGd0j18m24XObOouUHu4CQOq.png",
    description:
      "A enigmática curandeira com poderes sobrenaturais. Sua música ressoa através das almas, capaz de curar ou destruir.",
    quote: "Posso te ouvir, Escudeiro. Seu coração ressoa de forma interessante.",
    color: "from-green-900 to-teal-900",
  },
]

export default function CharactersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="characters" ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
            Os Heróis da Saga
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <motion.div
              key={character.name}
              initial={{ opacity: 0, y: 100, rotateY: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group perspective-1000"
            >
              <div
                className={`relative bg-gradient-to-br ${character.color} backdrop-blur-sm border border-amber-400/20 rounded-3xl p-8 shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-amber-500/20 group-hover:shadow-2xl`}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Character Portrait */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-full p-4 border-2 border-amber-400/30">
                    <img
                      src={character.image || "/placeholder.svg"}
                      alt={character.name}
                      className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Character Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors duration-300">
                    {character.name}
                  </h3>

                  <p className="text-amber-100 leading-relaxed text-sm">{character.description}</p>

                  <div className="bg-black/30 rounded-2xl p-4 border border-amber-400/20">
                    <blockquote className="text-amber-200 italic text-sm leading-relaxed">
                      "{character.quote}"
                    </blockquote>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
