import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Virtual Science Centrum - Step Into the Future of Science",
  description:
    "Explore virtual laboratories, conduct experiments, and discover the mysteries of the universe in our immersive digital science center.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={orbitron.variable}>
      <body>{children}</body>
    </html>
  )
}
