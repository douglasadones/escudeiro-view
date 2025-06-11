"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="story" ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6">
            A Saga Começa
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-amber-900/60 to-orange-900/60 backdrop-blur-sm border border-amber-400/20 rounded-3xl p-8 shadow-2xl">
              <div className="text-6xl font-bold text-amber-400 mb-4 float-left mr-4 leading-none">C</div>
              <p className="text-lg text-amber-100 leading-relaxed">
                apturados por um grupo de supostos bandidos,{" "}
                <strong className="text-amber-300">Bárbara, a guerreira</strong>, e{" "}
                <strong className="text-amber-300">Escudeiro</strong> são obrigados a cumprir uma missão ou serem
                enforcados.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="bg-gradient-to-br from-red-900/60 to-orange-900/60 backdrop-blur-sm border border-red-400/20 rounded-3xl p-8 shadow-2xl"
            >
              <p className="text-lg text-red-100 leading-relaxed">
                Nos instantes finais que a corda tomava a vida de Bárbara, ela promete cumprir uma missão que a tornará
                para sempre desgraçada. Para evitar a completa ruína de sua Senhora Guerreira, Escudeiro irá seguir por
                terras cobertas de guerra e com todos os seus terríveis efeitos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="bg-gradient-to-br from-amber-800/80 to-yellow-900/80 backdrop-blur-sm border-2 border-amber-400/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-yellow-400/10" />
              <blockquote className="relative text-xl text-amber-100 italic font-medium leading-relaxed">
                "No meio desse processo, encontrará um mundo em profunda mudança, a aurora de um novo crepúsculo… ou
                quiçá o crepúsculo para uma nova aurora."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="bg-gradient-to-br from-blue-900/60 to-indigo-900/60 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-8 shadow-2xl mt-6"
            >
              <h3 className="text-2xl font-bold text-blue-300 mb-4 font-cinzel">O Protagonista</h3>
              <p className="text-blue-100 leading-relaxed">
                <strong className="text-blue-300">Escudeiro</strong> é um garoto entre 10 e 11 anos de idade. Órfão
                desde o berço, nascido em família nobre, ainda que bastante desfavorecida de poder comparada a outras
                famílias. Não possui grandes capacidades de qualquer campo, mas é atento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.4 }}
              className="bg-gradient-to-br from-green-900/60 to-teal-900/60 backdrop-blur-sm border border-green-400/20 rounded-3xl p-8 shadow-2xl mt-6"
            >
              <h3 className="text-2xl font-bold text-green-300 mb-4 font-cinzel">O Mundo</h3>
              <p className="text-green-100 leading-relaxed">
                Em terras que parecem viver algo análogo ao que seria considerado a{" "}
                <strong className="text-green-300">Idade Média Europeia</strong>. O mundo possui certo aspecto
                fantástico, tal como magia e criaturas fantásticas, abrangendo áreas ricas em florestas, com casas de
                madeira simples e vestimentas inspiradas por arquétipos medievais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.6 }}
              className="bg-gradient-to-br from-amber-800/80 to-orange-900/80 backdrop-blur-sm border-2 border-amber-400/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden mt-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10" />
              <div className="relative text-center">
                <h3 className="text-xl font-bold text-amber-300 mb-3 font-cinzel">Versão Demonstrativa</h3>
                <p className="text-amber-100 leading-relaxed">
                  Esta versão do jogo representa um <strong>recorte da história completa</strong> que será concluída
                  futuramente. Uma prévia da jornada épica que está por vir.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-xl opacity-30 animate-pulse" />
              <div className="relative bg-gradient-to-br from-amber-900/80 to-red-900/80 backdrop-blur-sm border-2 border-amber-400/30 rounded-3xl p-8 shadow-2xl">
                <motion.img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Morrer_Escudeiro_NoArma-xUNf5a6SqbQQFF630kJCJWCcZ9ytOA.gif"
                  alt="Escudeiro em Perigo"
                  className="w-full max-w-xs mx-auto filter drop-shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
