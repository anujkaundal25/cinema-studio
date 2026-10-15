import Image from 'next/image'

const categories = [
  {
    name: 'Cameras',
    images: ['/camera-icons/3..png', '/camera-icons/2..png', '/camera-icons/1.png', '/camera-icons/4.png'],
  },
  {
    name: 'Lenses',
    images: ['/lens-icons/1.png', '/lens-icons/2.png', '/lens-icons/3.png', '/lens-icons/4.png'],
  },
  {
    name: 'Accessories',
    images: ['/accessories-icons/5.png', '/accessories-icons/2.png', '/accessories-icons/3.png', '/accessories-icons/4.png'],
  },
]

function Products() {
  return (
    <section aria-labelledby="products-title" className="bg-[#f3f1ed] px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <p className="mb-2 font-space text-xs uppercase tracking-[0.2em] text-black/55">
            Shop by category
          </p>
          <h2 id="products-title" className="text-3xl font-bold tracking-normal sm:text-5xl">
            Find your gear
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {categories.map((category) => (
            <article key={category.name} className="group overflow-hidden border border-black/10 bg-white">
              <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 bg-[#171717]">
                {category.images.map((image, index) => (
                  <div
                    key={image}
                    className={`relative min-h-0 min-w-0 overflow-hidden ${
                      index % 2 === 0 ? 'border-r border-white/10' : ''
                    } ${index < 2 ? 'border-b border-white/10' : ''}`}
                  >
                    <Image
                      src={image}
                      alt={`${category.name} product ${index + 1}`}
                      fill
                      sizes="(min-width: 768px) 20vw, 90vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105 sm:p-6"
                    />
                  </div>
                ))}
              </div>
              <div className="flex min-h-20 items-center justify-between px-5 py-4 sm:px-6">
                <h3 className="text-xl font-bold tracking-normal sm:text-2xl">{category.name}</h3>
                <span aria-hidden="true" className="font-space text-xs uppercase tracking-[0.16em] text-black/50">
                  04 items
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products