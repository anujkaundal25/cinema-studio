import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    // <section className="home-hero min-h-svh bg-[#f1f0ed] px-6 pb-16 pt-28 md:px-10 lg:px-16">
    //   <div className="mx-auto grid min-h-[calc(100svh-11rem)] max-w-375 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">
    //     <div className="relative mx-auto flex aspect-square w-full max-w-170 items-center justify-center">
    //       <div className="absolute left-1/2 top-1/2 aspect-square w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#18aeef]" />
    //       <Image
    //         src="/home/1.png"
    //         alt="Black camera with a green eye in its lens"
    //         width={1024}
    //         height={450}
    //         priority
    //         className="relative z-20 -top-8 -right-8 h-96 hover:-rotate-30 transition-all duration-500 -rotate-35 w-full object-contain drop-shadow-[0_22px_24px_rgba(0,0,0,0.16)]"
    //       />
    //     </div>

    //     <div className="mx-auto max-w-162.5">
    //       <span className="font-space text-xs font-medium uppercase tracking-[0.28em] text-[#243342] sm:text-sm">
    //         Shop to get what you love
    //       </span>
    //       <h1
    //         className="mt-6 text-5xl leading-[1.04] text-[#242424] sm:text-6xl xl:text-7xl"
    //         style={{ fontFamily: 'var(--font-space), sans-serif', letterSpacing: 0 }}
    //       >
    //         Ready to Spoil Every Moment
    //       </h1>
    //       <p className="mt-6 max-w-147.5 text-base leading-7 text-[#777b80] sm:text-lg sm:leading-8">
    //         Capture the moments you love with gear made for every story worth telling.
    //       </p>
    //       <Link
    //         href="/collections"
    //         className="mt-10 inline-flex min-h-14 items-center justify-center border border-[#aeb0b0] px-8 font-space text-xs font-medium uppercase tracking-[0.22em] text-[#243342] transition-colors hover:border-[#18aeef] hover:bg-[#FF0000] hover:text-white"
    //       >
    //         Get started
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <section className='pt-20'>
      <img src="/home/hero.webp" alt="" />
    </section>
  )
}