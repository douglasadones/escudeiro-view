"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Music, Pen, Palette, Instagram } from "lucide-react"

const teamMembers = [
  {
    category: "Desenvolvimento",
    icon: <Code size={32} />,
    color: "from-blue-900 to-cyan-900",
    members: [
      { name: "Kauan Lucena", instagram: "https://www.instagram.com/k1lucena" },
      { name: "Gabriel Sá", instagram: "https://www.instagram.com/gabrielrmgs" },
    ],
  },
  {
    category: "Composição Musical",
    icon: <Music size={32} />,
    color: "from-purple-900 to-pink-900",
    members: [
      { name: "Douglas Adones", instagram: "https://www.instagram.com/douglasadones_" },
      { name: "Biaggio Cardoso", instagram: "https://www.instagram.com/_biaju_" },
    ],
  },
  {
    category: "Roteiro",
    icon: <Pen size={32} />,
    color: "from-green-900 to-teal-900",
    members: [{ name: "Verethragna", instagram: null }],
  },
  {
    category: "Arte",
    icon: <Palette size={32} />,
    color: "from-orange-900 to-red-900",
    members: [{ name: "Douglas Freitas", instagram: "https://www.instagram.com/douglas.frreitas" }],
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6 font-cinzel">
            Nossa Equipe
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />

          <p className="mt-6 text-amber-100 max-w-3xl mx-auto text-lg">
            Conheça os talentosos profissionais que deram vida ao mundo de O Escudeiro, cada um contribuindo com sua
            expertise única para criar esta experiência memorável.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((team, index) => (
            <motion.div
              key={team.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gradient-to-br ${team.color} backdrop-blur-sm border border-amber-400/20 rounded-xl p-8 shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-center mb-6">
                <div className="bg-black/30 w-16 h-16 rounded-full flex items-center justify-center mr-4 text-amber-400">
                  {team.icon}
                </div>
                <h3 className="text-2xl font-bold text-amber-300">{team.category}</h3>
              </div>

              <div className="space-y-3">
                {team.members.map((member, memberIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + memberIndex * 0.1 }}
                    className="bg-black/20 rounded-lg p-4 border border-amber-400/10"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-amber-100 font-medium text-lg">{member.name}</p>
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-400 hover:text-amber-300 transition-colors duration-300 hover:scale-110 transform"
                        >
                          <Instagram size={20} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-amber-900/60 to-orange-900/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg">
            <p className="text-amber-200 font-semibold mb-2">Trabalho em Equipe</p>
            <p className="text-amber-100/80">
              Cada membro da equipe trouxe sua paixão e dedicação para criar uma experiência única e envolvente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
