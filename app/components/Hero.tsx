"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const quotes = [
    "Healing begins with being heard.",
    "Professional counseling turns struggle into strength.",
    "A safe space can change a life."
  ]

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
        setIsAnimating(false)
      }, 300) // Half of the animation duration
    }, 1000)

    return () => clearInterval(interval)
  }, [quotes.length, isMounted])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50"
    >
      <div className="absolute inset-0 bg-[url('/img1.jpg')] bg-cover bg-center opacity-50"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Find Your Path to
          <span className="text-teal-700 block">Mental Wellness</span>
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Compassionate, evidence-based therapy to help you overcome challenges and thrive
        </h2>
        <div className="mb-8 h-8 flex items-center justify-center overflow-hidden">
          {isMounted && (
            <p
              className={`text-lg sm:text-xl text-teal-700 font-medium italic transition-all duration-600 ease-in-out ${isAnimating
                ? 'transform translate-y-8 opacity-0'
                : 'transform translate-y-0 opacity-100'
                }`}
            >
              "{quotes[currentQuoteIndex]}"
            </p>
          )}
        </div>
        <a
          href="#contact"
          className="inline-block bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          style={{ border: '2px solid #1E4145' }}
        >
          Book a Free Consultation
        </a>
      </div>
    </section>
  )
}
