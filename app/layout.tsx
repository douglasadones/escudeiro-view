import type React from "react"
import type { Metadata } from "next"
import { Inter, Cinzel, Crimson_Text } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
})
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
})

export const metadata: Metadata = {
  title: "O Escudeiro - Uma Jornada de Honra e Redenção",
  description:
    "Uma experiência única de RPG pixel art. Acompanhe a jornada épica do Escudeiro através de terras devastadas pela guerra.",
  keywords: "RPG, pixel art, jogo, aventura, medieval, fantasia",
  authors: [{ name: "Equipe O Escudeiro" }],
  openGraph: {
    title: "O Escudeiro - Uma Jornada de Honra e Redenção",
    description: "Uma experiência única de RPG pixel art",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${cinzel.variable} ${crimsonText.variable}`}>
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>{children}</body>
    </html>
  )
}
