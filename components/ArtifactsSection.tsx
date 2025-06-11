"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const artifacts = [
  {
    name: "Taça de Rancor",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tar%C3%A7a%20do%20Rancor_moldura-V6JpF15hCxT1umx9bxu6xlPmXJHp9l.png",
    description:
      "Aglutinação de neblina que toma a forma de uma taça de nobre porcelana. Carrega a dor do Banquete da Traição e o poder de canalizar energias da guerra.",
    power: "Coleta energias da região e as lança contra inimigos",
    rarity: "Lendário",
    color: "from-red-900 to-orange-900",
  },
  {
    name: "Balde de Verdigris",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Balde-WouOqzM0PG6iHvER0v3HArR44XBGwk.png",
    description:
      "Relíquia dos antigos Jardineiros do Lago Podre. Feito de material indestrutível, emana um sentimento de amor pela existência.",
    power: "Proteção e conexão com as memórias do mundo",
    rarity: "Ancestral",
    color: "from-green-900 to-teal-900",
  },
  {
    name: "Promessa",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Promessa_moldura-gqB2vB2HzumIgO3sIKXUEg5XJotg7O.png",
    description:
      "Espada forjada em metal esquecido, outrora chamada 'Víbora devoradora de corações'. Rebatizada por uma filha tomada pela dor.",
    power: "A guerra cria monstros, por favor, não seja mais um",
    rarity: "Mítico",
    color: "from-purple-900 to-blue-900",
  },
  {
    name: "Vinho Adulterado",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vinho_Adulterado-fvTTI7O76pmbK9vRS11kNNjJMEBEez.png",
    description:
      "Vinho adulterado, mais alcoólico do que deveria. Use-o para evitar ser tomado pelo terror. Os recursos na guerra estão cada vez mais escassos e os pobres estão completamente esquecidos, mas há sempre aqueles que preferem juntar bebida para enfrentar o amargo da existência.",
    power: "Proteção contra o terror em tempos de guerra",
    rarity: "Comum",
    color: "from-purple-900 to-red-900",
  },
]

export default function ArtifactsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="artifacts" ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
            Relíquias Ancestrais
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={artifact.name}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ y: -15, rotateX: 5, scale: 1.02 }}
              className="group perspective-1000"
            >
              <div
                className={`relative bg-gradient-to-br ${artifact.color} backdrop-blur-sm border border-amber-400/20 rounded-3xl p-8 shadow-2xl transform-gpu transition-all duration-500 group-hover:shadow-amber-500/20 group-hover:shadow-2xl overflow-hidden`}
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-3xl"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Rarity Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  {artifact.rarity}
                </div>

                {/* Artifact Display */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-900/50 to-orange-900/50 rounded-full p-6 border-2 border-amber-400/30 relative overflow-hidden"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(245, 158, 11, 0.3)",
                        "0 0 40px rgba(245, 158, 11, 0.6)",
                        "0 0 20px rgba(245, 158, 11, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {/* Rotating Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    <img
                      src={artifact.image || "/placeholder.svg"}
                      alt={artifact.name}
                      className="w-full h-full object-contain filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-10"
                    />
                  </motion.div>
                </div>

                {/* Artifact Info */}
                <div className="text-center space-y-4 relative z-10">
                  <h3 className="text-2xl font-bold text-amber-300 group-hover:text-amber-200 transition-colors duration-300">
                    {artifact.name}
                  </h3>

                  <p className="text-amber-100 leading-relaxed text-sm">{artifact.description}</p>

                  <div className="bg-black/40 rounded-2xl p-4 border border-amber-400/20">
                    <div className="text-amber-400 font-semibold text-xs mb-2">PODER ANCESTRAL</div>
                    <p className="text-amber-200 text-sm leading-relaxed">{artifact.power}</p>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-amber-400 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
