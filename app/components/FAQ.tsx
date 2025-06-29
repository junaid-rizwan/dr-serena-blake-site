"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, I do not accept insurance directly. However, I provide a superbill that you can submit to your insurance company for potential reimbursement. Many clients find that their out-of-network benefits help cover the cost of therapy sessions.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, I offer virtual therapy sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Online sessions provide the same quality of care as in-person sessions and offer greater flexibility for busy schedules.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I require 24-hour notice for cancellations or rescheduling. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-[#B5DBDF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-6xl font-bold text-[#07250f] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl sm:text-2xl text-gray-600">Common questions about therapy sessions and policies</p>
        </div>

        <div className="space-y-0">
          <div className="border-t border-[#07250f]"></div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#07250f]">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 text-left  transition-colors duration-200 flex justify-between items-center"
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-teal-700 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-teal-700 flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="pb-6">
                  <p className="text-xl text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
          <div className="border-b border-gray-200"></div>
        </div>
      </div>
    </section>
  )
}
