'use client'
import Image from "next/image"
import { useState } from "react"

export default function Services() {
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set())

  const services = [
    {
      title: "Anxiety & Stress Management",
      description:
        "Learn effective coping strategies to manage anxiety and reduce stress in your daily life. Through evidence-based techniques like cognitive-behavioral therapy and mindfulness practices, we'll work together to help you regain control and find peace. You'll develop personalized tools to handle challenging situations with confidence and resilience.",
      image: "/img3.jpeg?height=400&width=600",
    },
    {
      title: "Relationship Counseling",
      description:
        "Strengthen your relationships through improved communication and deeper understanding. Whether you're working through conflicts, rebuilding trust, or simply wanting to enhance your connection, we'll explore healthy relationship patterns together. This supportive environment helps couples and individuals develop the skills needed for lasting, fulfilling relationships.",
      image: "/img4.jpeg?height=400&width=600",
    },
    {
      title: "Trauma Recovery",
      description:
        "Heal from past traumatic experiences in a safe, supportive therapeutic environment. Using trauma-informed approaches, we'll work at your pace to process difficult experiences and develop healthy coping mechanisms. The goal is to help you reclaim your sense of safety, rebuild trust, and move forward with renewed strength and hope.",
      image: "/img5.jpeg?height=400&width=600",
    },
  ]

  const toggleService = (serviceTitle: string) => {
    const newExpanded = new Set(expandedServices)
    if (newExpanded.has(serviceTitle)) {
      newExpanded.delete(serviceTitle)
    } else {
      newExpanded.add(serviceTitle)
    }
    setExpandedServices(newExpanded)
  }

  const truncateText = (text: string, maxLines: number = 3) => {
    const words = text.split(' ')
    const truncated = words.slice(0, 15).join(' ') + (words.length > 15 ? '...' : '')
    return truncated
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services & Specialties</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive therapeutic services tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isExpanded = expandedServices.has(service.title)
            return (
              <div
                key={service.title}
                className="bg-[#B5DBDF] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm mx-auto p-5"
              >
                <div className="relative h-52 ">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover rounded-sm" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <div className="text-gray-600 leading-relaxed mb-6">
                    {isExpanded ? (
                      <p>{service.description}</p>
                    ) : (
                      <p className="line-clamp-3">{truncateText(service.description)}</p>
                    )}
                  </div>
                  <button
                    onClick={() => toggleService(service.title)}
                    className="w-full bg-teal-700 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-800 transition-colors duration-200"
                    style={{ border: '2px solid #1E4145' }}
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

