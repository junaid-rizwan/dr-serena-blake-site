export default function ConsultationSection() {
    return (
        <section className="py-16" style={{ backgroundColor: '#1E4145' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Schedule A Consultation */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-4" style={{ color: '#B5DBDF' }}>
                            Schedule A Consultation
                        </h2>
                    </div>

                    {/* Ellie Shumaker Info */}
                    <div className="text-center md:text-left">
                        <p className="text-lg sm:text-xl" style={{ color: '#B5DBDF' }}>
                            Ellie Shumaker is currently accepting new clients. Available for online and in-person sessions.
                        </p>
                    </div>

                    {/* Start Healing Button */}
                    <div className="text-center md:text-left">
                        <a
                            href="#contact"
                            className="inline-block bg-teal-700 text-[#B5DBDF] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-teal-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 whitespace-nowrap"
                            style={{ border: '2px solid #fff' }}
                        >
                            Start Healing
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
} 