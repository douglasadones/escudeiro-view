"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Palette, Music, Code, Trello, Github } from "lucide-react"

const technologies = [
  {
    icon: <Palette size={32} />,
    title: "Arte e Animação",
    description:
      "Todas as artes e animações foram criadas com Aseprite, permitindo um estilo pixel art autêntico e detalhado.",
    color: "from-purple-900 to-indigo-900",
  },
  {
    icon: <Music size={32} />,
    title: "Composição Musical",
    description:
      "A trilha sonora original foi composta usando Reaper e FL Studio para criar uma atmosfera imersiva e única.",
    color: "from-red-900 to-orange-900",
  },
  {
    icon: <Code size={32} />,
    title: "Engine de Desenvolvimento",
    description:
      "O jogo foi desenvolvido utilizando a Godot Engine, uma engine open-source poderosa e versátil para criação de jogos 2D e 3D.",
    color: "from-blue-900 to-cyan-900",
  },
  {
    icon: <Github size={32} />,
    title: "Controle de Versão",
    description:
      "GitHub foi utilizado para gerenciar o código-fonte e facilitar a colaboração entre os desenvolvedores.",
    color: "from-gray-900 to-slate-900",
  },
  {
    icon: <Trello size={32} />,
    title: "Organização",
    description:
      "Trello foi a ferramenta escolhida para gerenciar tarefas, acompanhar o progresso e organizar o fluxo de trabalho.",
    color: "from-teal-900 to-emerald-900",
  },
]

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="technology" ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6 font-cinzel">
            Tecnologias Utilizadas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />

          <p className="mt-6 text-amber-100 max-w-3xl mx-auto text-lg">
            O Escudeiro foi desenvolvido com um conjunto de ferramentas cuidadosamente selecionadas para criar uma
            experiência de jogo única e imersiva.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${tech.color} backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="bg-black/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-amber-400">
                {tech.icon}
              </div>

              <h3 className="text-xl font-bold text-amber-300 mb-3">{tech.title}</h3>
              <p className="text-amber-100/80">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-amber-900/60 to-orange-900/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg">
            <p className="text-amber-200 font-semibold mb-2">Feito com Paixão e Dedicação</p>
            <p className="text-amber-100/80">
              Cada aspecto do jogo foi cuidadosamente desenvolvido para proporcionar uma experiência memorável.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
