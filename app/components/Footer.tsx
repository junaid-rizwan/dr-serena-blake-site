import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react"

export default function Footer() {
    return (
        <footer className="py-16" style={{ backgroundColor: '#1E4145' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6" style={{ color: '#B5DBDF' }}>
                            Dr. Serena Blake, PsyD
                        </h3>
                        <p className="text-lg mb-4" style={{ color: '#B5DBDF' }}>
                            Clinical Psychologist
                        </p>
                        <p className="mb-6" style={{ color: '#B5DBDF' }}>
                            8 years of practice, 500+ sessions
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <MapPin className="mt-1 flex-shrink-0" size={20} style={{ color: '#B5DBDF' }} />
                                <div>
                                    <p className="font-semibold" style={{ color: '#B5DBDF' }}>Location</p>
                                    <p style={{ color: '#B5DBDF' }}>
                                        1287 Maplewood Drive<br />
                                        Los Angeles, CA 90026
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="flex-shrink-0" size={20} style={{ color: '#B5DBDF' }} />
                                <div>
                                    <p className="font-semibold" style={{ color: '#B5DBDF' }}>Phone</p>
                                    <p style={{ color: '#B5DBDF' }}>(323) 555-0192</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Mail className="flex-shrink-0" size={20} style={{ color: '#B5DBDF' }} />
                                <div>
                                    <p className="font-semibold" style={{ color: '#B5DBDF' }}>Email</p>
                                    <a
                                        href="mailto:serena@blakepsychology.com"
                                        className="hover:underline"
                                        style={{ color: '#B5DBDF' }}
                                    >
                                        serena@blakepsychology.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office Hours */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6" style={{ color: '#B5DBDF' }}>
                            Office Hours
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <Calendar className="mt-1 flex-shrink-0" size={20} style={{ color: '#B5DBDF' }} />
                                <div>
                                    <p className="font-semibold" style={{ color: '#B5DBDF' }}>In-person Sessions</p>
                                    <p style={{ color: '#B5DBDF' }}>Tuesday & Thursday</p>
                                    <p style={{ color: '#B5DBDF' }}>10 AM – 6 PM</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <Clock className="mt-1 flex-shrink-0" size={20} style={{ color: '#B5DBDF' }} />
                                <div>
                                    <p className="font-semibold" style={{ color: '#B5DBDF' }}>Virtual Sessions</p>
                                    <p style={{ color: '#B5DBDF' }}>Monday, Wednesday & Friday</p>
                                    <p style={{ color: '#B5DBDF' }}>1 PM – 5 PM</p>
                                    <p className="text-sm mt-1" style={{ color: '#B5DBDF' }}>via Zoom</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6" style={{ color: '#B5DBDF' }}>
                            Quick Links
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="#services"
                                className="block hover:underline transition-colors duration-200"
                                style={{ color: '#B5DBDF' }}
                            >
                                Services & Specialties
                            </a>
                            <a
                                href="#about"
                                className="block hover:underline transition-colors duration-200"
                                style={{ color: '#B5DBDF' }}
                            >
                                About Dr. Blake
                            </a>
                            <a
                                href="#faq"
                                className="block hover:underline transition-colors duration-200"
                                style={{ color: '#B5DBDF' }}
                            >
                                Frequently Asked Questions
                            </a>
                            <a
                                href="#contact"
                                className="block hover:underline transition-colors duration-200"
                                style={{ color: '#B5DBDF' }}
                            >
                                Contact & Consultation
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t mt-12 pt-8" style={{ borderColor: '#B5DBDF' }}>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-center md:text-left mb-4 md:mb-0" style={{ color: '#B5DBDF' }}>
                            © 2024 Dr. Serena Blake, PsyD. All rights reserved.
                        </p>
                        <p className="text-center md:text-right" style={{ color: '#B5DBDF' }}>
                            Licensed Clinical Psychologist | California License #PSY12345
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
} 