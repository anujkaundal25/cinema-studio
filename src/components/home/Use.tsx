'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const useCases = [
  {
    title: 'Vlogging',
    description: 'Turn everyday moments into stories worth sharing.',
    image: '/use/vlogging.webp',
    alt: 'Vlogging setup ready to capture a story',
  },
  {
    title: 'Student creators',
    description: 'Bring class projects, campus life, and new ideas to life.',
    image: '/use/student.webp',
    alt: 'Student creator making a video',
  },
  {
    title: 'Moto vloggers',
    description: 'Take your audience along for every mile and open road.',
    image: '/use/moto.webp',
    alt: 'Moto vlogger capturing a ride',
  },
  {
    title: 'Professionals',
    description: 'Create thoughtful work for productions, clients, and more.',
    image: '/use/professionals.webp',
    alt: 'Professional creator working with camera equipment',
  },
]

function Use() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeUse = useCases[activeIndex]

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + useCases.length) % useCases.length)
  }

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % useCases.length)
  }

  return (
    <section aria-labelledby="use-section-title" className="bg-[#f3f1ed] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-space text-xs uppercase tracking-[0.2em] text-black/55">
              Find your frame
            </p>
            <h2 id="use-section-title" className="text-3xl font-bold tracking-normal sm:text-5xl">
              Made for every way you create
            </h2>
          </div>
          <p className="font-space text-sm text-black/60">{`0${activeIndex + 1} / 0${useCases.length}`}</p>
        </div>

        <div className="relative isolate min-h-[520px] overflow-hidden bg-[#242424] text-white sm:min-h-[580px] lg:min-h-[650px]">
          <Image
            key={activeUse.image}
            src={activeUse.image}
            alt={activeUse.alt}
            fill
            priority={activeIndex === 0}
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="-z-20 object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/35 to-black/5" />

          <div className="flex min-h-[520px] flex-col justify-end p-6 sm:min-h-[580px] sm:p-10 md:p-14 lg:min-h-[650px] lg:p-16">
            <div key={activeUse.title} aria-live="polite" className="max-w-2xl">
              <p className="mb-3 font-space text-xs uppercase tracking-[0.2em] text-white/70">
                A setup for your story
              </p>
              <h3 className="text-4xl font-bold tracking-normal sm:text-6xl md:text-7xl">
                {activeUse.title}
              </h3>
              <p className="mt-4 max-w-lg font-space text-sm leading-7 text-white/85 sm:text-base">
                {activeUse.description}
              </p>
            </div>

            <div className="mt-9 flex items-center justify-between gap-4 border-t border-white/35 pt-5 sm:mt-12">
              <div className="flex items-center gap-2" aria-label="Choose a use case">
                {useCases.map((useCase, index) => (
                  <button
                    key={useCase.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Show ${useCase.title}`}
                    aria-current={activeIndex === index ? 'true' : undefined}
                    className={`h-2.5 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                      activeIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous use case"
                  className="flex size-11 items-center justify-center border border-white/55 transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronLeft aria-hidden="true" size={20} />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next use case"
                  className="flex size-11 items-center justify-center border border-white/55 transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <ChevronRight aria-hidden="true" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Use