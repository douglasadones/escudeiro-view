"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

// Lista de músicas com compositores
const soundtracks = [
  {
    id: "city-theme",
    title: "City Theme",
    description: "Tema principal da cidade, transmitindo a atmosfera medieval e misteriosa.",
    fileName: "city-theme.mp3",
    duration: "0:38",
    composer: "Biaggio Cardoso",
  },
  {
    id: "city-theme-paused",
    title: "City Theme (Jogo Pausado)",
    description: "Versão mais suave e contemplativa do tema da cidade quando o jogo está pausado.",
    fileName: "city-theme-paused.mp3",
    duration: "0:38",
    composer: "Biaggio Cardoso",
  },
  {
    id: "cave-theme",
    title: "Cave Theme",
    description: "Música sombria e tensa que acompanha a exploração das cavernas.",
    fileName: "cave-theme.mp3",
    duration: "2:03",
    composer: "Douglas Adones",
  },
  {
    id: "cave-theme-paused",
    title: "Cave Theme (Jogo Pausado)",
    description: "Versão ambiente do tema da caverna durante a pausa do jogo.",
    fileName: "cave-theme-paused.mp3",
    duration: "2:03",
    composer: "Douglas Adones",
  },
  {
    id: "ending-theme",
    title: "Ending Theme",
    description: "Tema emocionante que marca o final da jornada do Escudeiro.",
    fileName: "ending-theme.mp3",
    duration: "4:31",
    composer: "Douglas Adones",
  },
  {
    id: "barbaras-theme",
    title: "Barbara's Theme",
    description: "Tema da guerreira Bárbara, refletindo sua nobreza e determinação.",
    fileName: "barbaras-theme.mp3",
    duration: "1:40",
    composer: "Douglas Adones",
  },
  {
    id: "game-over-theme",
    title: "Game Over Theme",
    description: "Música que toca quando o jogador falha em sua missão.",
    fileName: "game-over-theme.mp3",
    duration: "3:14",
    composer: "Biaggio Cardoso",
  },
  {
    id: "menu-theme",
    title: "Menu Theme",
    description: "Tema do menu principal, introduzindo o jogador ao mundo do jogo.",
    fileName: "menu-theme.mp3",
    duration: "2:23",
    composer: "Biaggio Cardoso",
  },
  {
    id: "capitulo-theme",
    title: "Capítulo Theme",
    description: "Música que marca o início de cada novo capítulo da história.",
    fileName: "capitulo-theme.mp3",
    duration: "0:18",
    composer: "Biaggio Cardoso",
  },
  {
    id: "battle-theme",
    title: "Battle Theme",
    description: "Tema intenso que acompanha os combates e momentos de ação.",
    fileName: "battle-theme.mp3",
    duration: "1:34",
    composer: "Biaggio Cardoso",
  }
]

// Componente de Player de Áudio
const AudioPlayer = ({ track }: { track: any }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const updateProgress = () => {
    if (audioRef.current) {
      const value = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(isNaN(value) ? 0 : value)
    }
  }

  const setAudioProgress = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget
    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
    const progressBarWidth = progressBar.offsetWidth
    const percentageClicked = (clickPosition / progressBarWidth) * 100

    if (audioRef.current) {
      audioRef.current.currentTime = (percentageClicked / 100) * audioRef.current.duration
    }
  }

  if (!isClient) {
    return (
      <div className="bg-gradient-to-br from-amber-900/60 to-orange-900/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-4 shadow-lg">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-amber-200 font-semibold">{track.title}</h4>
          <span className="text-amber-400/70 text-sm">{track.duration}</span>
        </div>
        <p className="text-amber-100/80 text-sm mb-2">{track.description}</p>
        <div className="text-amber-300 text-xs mb-4 font-medium">Composição: {track.composer}</div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-black">
            <Play size={18} />
          </div>
          <div className="flex-1 h-2 bg-black/30 rounded-full" />
          <div className="w-8 h-8 flex items-center justify-center text-amber-400">
            <Volume2 size={18} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-amber-900/60 to-orange-900/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-4 shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-amber-200 font-semibold">{track.title}</h4>
        <span className="text-amber-400/70 text-sm">{track.duration}</span>
      </div>

      <p className="text-amber-100/80 text-sm mb-2">{track.description}</p>

      <div className="text-amber-300 text-xs mb-4 font-medium">Composição: {track.composer}</div>

      <div className="flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-black hover:scale-105 transition-transform"
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>

        <div
          className="flex-1 h-2 bg-black/30 rounded-full cursor-pointer relative overflow-hidden"
          onClick={setAudioProgress}
        >
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          onClick={toggleMute}
          className="w-8 h-8 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={`/audio/${track.fileName}`}
        onTimeUpdate={updateProgress}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  )
}

export default function MusicSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="music" ref={ref} className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent mb-6 font-cinzel">
            Trilha Sonora Original
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />

          <p className="mt-6 text-amber-100 max-w-3xl mx-auto text-lg">
            Todas as músicas foram compostas exclusivamente para O Escudeiro por{" "}
            <strong className="text-amber-300">Douglas Adones</strong> e{" "}
            <strong className="text-amber-300">Biaggio Cardoso</strong>, criando uma atmosfera única que complementa
            perfeitamente a jornada épica do jogo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {soundtracks.map((track, index) => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <AudioPlayer track={track} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-amber-900/60 to-orange-900/60 backdrop-blur-sm border border-amber-400/20 rounded-xl p-6 shadow-lg">
            <p className="text-amber-200 font-semibold mb-2">Composição e Produção Musical Original</p>
            <p className="text-amber-100/80">Criada com Reaper e FL Studio para uma experiência sonora imersiva.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
