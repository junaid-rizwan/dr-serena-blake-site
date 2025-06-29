import Hero from "./components/Hero"
import About from "./components/About"
import ConsultationSection from "./components/ConsultationSection"
import Services from "./components/Services"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ConsultationSection />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
