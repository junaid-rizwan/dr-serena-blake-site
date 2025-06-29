import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Dr. Serena Blake, PsyD - Clinical Psychologist | Los Angeles Therapy",
  description:
    "Compassionate, evidence-based therapy in Los Angeles. Dr. Serena Blake specializes in anxiety, relationship counseling, and trauma recovery. Book your free consultation today.",
  keywords: "therapy, psychologist, Los Angeles, anxiety, relationships, trauma, mental health",
  authors: [{ name: "Dr. Serena Blake" }],
  openGraph: {
    title: "Dr. Serena Blake, PsyD - Clinical Psychologist",
    description: "Compassionate, evidence-based therapy in Los Angeles",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
