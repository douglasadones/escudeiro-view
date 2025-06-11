"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("story")

  const navItems = [
    { id: "story", label: "A Saga", icon: "📜" },
    { id: "characters", label: "Heróis", icon: "⚔️" },
    { id: "journey", label: "Jornada", icon: "🗺️" },
    { id: "artifacts", label: "Relíquias", icon: "💎" },
    { id: "concept-art", label: "Arte", icon: "🎨" },
    { id: "music", label: "Músicas", icon: "🎵" },
    { id: "team", label: "Equipe", icon: "👥" },
    { id: "technology", label: "Tech", icon: "🔧" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <motion.nav
      className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-amber-900/80 to-orange-900/80 border-b border-amber-400/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex justify-center gap-1 md:gap-2 flex-wrap">
          {navItems.map((item) => (
            <motion.li key={item.id}>
              <motion.button
                onClick={() => scrollToSection(item.id)}
                className={`px-2 md:px-3 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-1 text-xs md:text-sm ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-lg"
                    : "text-amber-100 hover:bg-amber-800/50"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm md:text-lg">{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
