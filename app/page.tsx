"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import NavigationBar from "@/components/NavigationBar"
import StorySection from "@/components/StorySection"
import CharactersSection from "@/components/CharactersSection"
import JourneySection from "@/components/JourneySection"
import ArtifactsSection from "@/components/ArtifactsSection"
import ConceptArtSection from "@/components/ConceptArtSection"
import MusicSection from "@/components/MusicSection"
import TeamSection from "@/components/TeamSection"
import TechnologySection from "@/components/TechnologySection"
import FooterSection from "@/components/FooterSection"
import ParticleSystem from "@/components/ParticleSystem"
import BackgroundEffects from "@/components/BackgroundEffects"

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.6, 0.4])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <BackgroundEffects scrollY={backgroundY} opacity={backgroundOpacity} />

      {/* Particle System */}
      <ParticleSystem />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <NavigationBar />
        <StorySection />
        <CharactersSection />
        <JourneySection />
        <ArtifactsSection />
        <ConceptArtSection />
        <MusicSection />
        <TeamSection />
        <TechnologySection />
        <FooterSection />
      </div>
    </div>
  )
}
