import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#B5DBDF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#1E4145' }}>About Dr. Serena Blake</h2>
            <div className="text-lg space-y-4 mb-8" style={{ color: '#1E4145' }}>
              <p>
                With over <strong>8 years of clinical experience</strong> and <strong>500+ successful therapy sessions</strong>, Dr. Serena Blake is a
                <strong> licensed Clinical Psychologist (PsyD)</strong> dedicated to helping individuals navigate life's challenges with
                compassion and expertise.
              </p>
              <p>
                Dr. Blake specializes in <strong>evidence-based therapeutic approaches</strong>, creating a <strong>safe and supportive
                  environment</strong> where clients can explore their thoughts, feelings, and behaviors to achieve <strong>lasting
                    positive change</strong>.
              </p>
              <p>
                Her <strong>warm, non-judgmental approach</strong> combined with <strong>proven therapeutic techniques</strong> helps clients develop the
                tools they need to <strong>overcome obstacles</strong> and <strong>build resilience</strong> for the future.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-xl border-8 border-[#fff]">
              <Image
                src="/img2.jpg"
                alt="Dr. Serena Blake - Clinical Psychologist"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-teal-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
              <p className="font-semibold text-sm sm:text-base">Dr. Serena Blake</p>
              <p className="text-xs sm:text-sm opacity-90">Clinical Psychologist, PsyD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
