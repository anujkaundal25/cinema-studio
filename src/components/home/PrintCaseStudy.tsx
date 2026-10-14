'use client'

import Image from 'next/image'
import { useState } from 'react'

const print = [
  {
    label: 'Premium Color Printing',
    img: '/case-study/1.webp',
    Num: "01"
  },
  {
    label: 'Photo Enlargements',
    img: '/case-study/2.webp',
    Num: "02"
  },
  {
    label: 'Canvas Printing',
    img: '/case-study/3.webp',
    Num: "03"
  },
  {
    label: 'Customised Photo Printing',
    img: '/case-study/4.webp',
    Num: "04"
  },
]

export default function PrintCaseStudy() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="w-full overflow-hidden bg-white py-9">
      <div className="flex h-[420px] w-full gap-3 px-3 sm:h-[500px] sm:gap-4 sm:px-5 md:h-[560px]">

        {print.map((item, index) => {
          const isActive = activeIndex === index

          return (
            <button
              key={item.img}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              aria-label={item.label}
              aria-pressed={isActive}
              className={`group relative h-full min-w-0 overflow-hidden rounded-none text-left transition-[flex] duration-700 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ${
                isActive
                  ? 'flex-[2] sm:flex-[1.5]'
                  : 'flex-[1]'
              }`}
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                priority={index === 0}
                sizes="(max-width: 639px) 70vw, 75vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Red gradient and overlay */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  isActive
                    ? 'bg-gradient-to-t from-[#FF0000] via-[#FF0000]/20 to-transparent'
                    : 'bg-black/10'
                }`}
              />

              {/* Number badge at top-left corner (shows only when active) */}
              <div
                className={`absolute left-4 top-4 transition-all duration-500 sm:left-6 sm:top-6 ${
                  isActive
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-5 opacity-0'
                }`}
              >
                <span className="rounded-sm bg-white p-2 text-xs font-bold text-[#FF0000] sm:text-sm">
                  {item.Num}
                </span>
              </div>

              {/* Title at bottom */}
              <div
                className={`absolute inset-x-0 bottom-0 p-4 text-center transition-all duration-500 sm:p-6 ${
                  isActive
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-5 opacity-0'
                }`}
              >
                <h3 className="text-sm font-bold leading-tight text-white sm:text-2xl md:text-4xl">
                  {item.label}
                </h3>
              </div>
            </button>
          )
        })}

      </div>
    </section>
  )
}