"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import ReCAPTCHA from "react-google-recaptcha"

interface FormData {
  name: string
  phone: string
  email: string
  message: string
  preferredTime: string
  agreeToContact: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
  preferredTime?: string
  agreeToContact?: string
  recaptcha?: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agreeToContact: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('contact')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell us what brings you here"
    }

    if (!formData.preferredTime.trim()) {
      newErrors.preferredTime = "Preferred contact time is required"
    }

    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted"
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = "Please complete the reCAPTCHA verification"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    if (errors.recaptcha) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: undefined,
      }))
    }
  }

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null)
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 animate-in slide-in-from-bottom-8 duration-1000" style={{ backgroundColor: '#B5DBDF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg animate-in zoom-in-95 duration-700">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-in slide-in-from-top-4 duration-1000 delay-200">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
              Your message has been received. Dr. Blake will get back to you within 24 hours.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  message: "",
                  preferredTime: "",
                  agreeToContact: false,
                })
              }}
              className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-800 transition-all duration-300 hover:scale-105 animate-in slide-in-from-bottom-4 duration-1000 delay-400"
              style={{ border: '2px solid #1E4145' }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className={`py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ backgroundColor: '#B5DBDF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 animate-in slide-in-from-left-4 duration-1000 delay-300">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 animate-in slide-in-from-left-4 duration-700 delay-400">
                <Phone className="text-teal-700 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" size={28} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-lg text-gray-600">(323) 555-0192</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-in slide-in-from-left-4 duration-700 delay-500">
                <Mail className="text-teal-700 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" size={28} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-lg text-gray-600">serena@blakepsychology.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-in slide-in-from-left-4 duration-700 delay-600">
                <MapPin className="text-teal-700 mt-1 flex-shrink-0 hover:scale-110 transition-transform duration-300" size={28} />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-lg text-gray-600">
                    1287 Maplewood Drive
                    <br />
                    Los Angeles, CA 90026
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-in slide-in-from-left-4 duration-700 delay-700">
                <div className="w-7 h-7 mt-1 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-700 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Office Hours</h4>
                  <p className="text-lg text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ border: '2px solid #1E4145' }}>
            <div className="text-center mb-8 animate-in slide-in-from-top-4 duration-1000 delay-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Ready to start your journey? Reach out to schedule your free consultation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-in slide-in-from-bottom-4 duration-700 delay-600">
                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all duration-300 hover:shadow-md ${errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  style={{ borderColor: errors.name ? undefined : '#1E4145' }}
                />
                {errors.name && <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-2 duration-300">{errors.name}</p>}
              </div>

              <div className="animate-in slide-in-from-bottom-4 duration-700 delay-700">
                <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all duration-300 hover:shadow-md ${errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  style={{ borderColor: errors.phone ? undefined : '#1E4145' }}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-2 duration-300">{errors.phone}</p>}
              </div>

              <div className="animate-in slide-in-from-bottom-4 duration-700 delay-800">
                <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all duration-300 hover:shadow-md ${errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  style={{ borderColor: errors.email ? undefined : '#1E4145' }}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-2 duration-300">{errors.email}</p>}
              </div>

              <div className="animate-in slide-in-from-bottom-4 duration-700 delay-900">
                <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                  What brings you here? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all duration-300 hover:shadow-md ${errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                  style={{ borderColor: errors.message ? undefined : '#1E4145' }}
                />
                {errors.message && <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-2 duration-300">{errors.message}</p>}
              </div>

              <div className="animate-in slide-in-from-bottom-4 duration-700 delay-1000">
                <label htmlFor="preferredTime" className="block text-base font-medium text-gray-700 mb-2">
                  Preferred time to reach you *
                </label>
                <input
                  type="text"
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  placeholder="e.g., Weekday mornings, Tuesday afternoons"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-base transition-all duration-300 hover:shadow-md ${errors.preferredTime ? "border-red-500" : "border-gray-300"
                    }`}
                  style={{ borderColor: errors.preferredTime ? undefined : '#1E4145' }}
                />
                {errors.preferredTime && <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-2 duration-300">{errors.preferredTime}</p>}
              </div>

              <div className="animate-in slide-in-from-bottom-4 duration-700 delay-1100">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeToContact"
                    checked={formData.agreeToContact}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded transition-all duration-300 hover:scale-110"
                    style={{ borderColor: '#1E4145' }}
                  />
                  <span className="text-base text-gray-700">
                    I agree to be contacted by Dr. Serena Blake regarding my inquiry *
                  </span>
                </label>
                {errors.agreeToContact && <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-2 duration-300">{errors.agreeToContact}</p>}
              </div>

              <div className="animate-in slide-in-from-bottom-4 duration-700 delay-1200">
                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // This is a test key - replace with your actual key
                    onChange={handleRecaptchaChange}
                    onExpired={handleRecaptchaExpired}
                    theme="light"
                    size="normal"
                  />
                </div>
                {errors.recaptcha && <p className="mt-1 text-sm text-red-600 animate-in slide-in-from-top-2 duration-300 text-center">{errors.recaptcha}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-700 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed animate-in slide-in-from-bottom-4 duration-700 delay-1300"
                style={{ border: '2px solid #1E4145' }}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
