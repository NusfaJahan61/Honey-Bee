import { assets } from "../../assets/assets"

const AboutPage = () => {
  return (
    <section class="bg-white py-28">
      <div class="max-w-7xl mx-auto px-6">

        {/* <!-- Our Story --> */}
        <div class="grid lg:grid-cols-2 gap-20 items-center mb-32">

          {/* <!-- Image --> */}
          <div class="relative">
            <div class="absolute inset-0 bg-[#F3F0E9] rounded-[2.5rem] -rotate-2"></div>

            <img
              src={assets.BeeKeepers}
              alt="Our beekeeping story"
              class="relative w-full h-130 object-cover rounded-[2.5rem] shadow-xl"
            />

            {/* <!-- Tag --> */}
            <span class="absolute bottom-6 left-6 bg-white px-5 py-2 text-sm tracking-wide text-amber-500 rounded-full shadow">
              Ethical Beekeeping
            </span>
          </div>

          {/* <!-- Text --> */}
          <div>
            <p class="text-amber-500 uppercase tracking-[0.25em] text-xs mb-5">
              Our Story
            </p>

            <h2 class="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-8">
              From Hive to Heart
            </h2>

            <p class="text-gray-700 leading-relaxed mb-6">
              We believe honey should remain untouched, honest, and alive —
              just as nature creates it. Our beekeeping practices are rooted
              in sustainability, patience, and deep respect for our bees.
            </p>

            <p class="text-gray-700 leading-relaxed mb-6">
              By avoiding over-processing, we preserve the honey’s natural
              enzymes, nutrients, and aroma — delivering purity you can
              taste in every spoonful.
            </p>

            <p class="text-gray-700 leading-relaxed">
              This is not mass production. This is craftsmanship —
              harvested gently and shared with intention.
            </p>
          </div>

        </div>

        {/* <!-- Values --> */}
        <div class="bg-[#F3F0E9] rounded-[3rem] px-10 py-20">
          <p class="text-center text-amber-500 uppercase tracking-[0.25em] text-xs mb-4">
            Our Values
          </p>

          <h3 class="text-center text-3xl font-serif text-gray-900 mb-16">
            Rooted in Care & Integrity
          </h3>

          <div class="grid md:grid-cols-3 gap-14">

            {/* <!-- Value --> */}
            <div class="bg-white rounded-3xl p-10 text-center shadow-sm">
              <div class="w-14 h-14 mx-auto mb-6 rounded-full bg-[#F3F0E9] flex items-center justify-center text-amber-500 text-xl">
                🌿
              </div>
              <h4 class="text-xl font-medium text-gray-900 mb-3">
                Sustainable Practices
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Our methods protect bees, support biodiversity,
                and respect the natural rhythm of the land.
              </p>
            </div>

            <div class="bg-white rounded-3xl p-10 text-center shadow-sm">
              <div class="w-14 h-14 mx-auto mb-6 rounded-full bg-[#F3F0E9] flex items-center justify-center text-amber-500 text-xl">
                🍯
              </div>
              <h4 class="text-xl font-medium text-gray-900 mb-3">
                Pure, Raw Honey
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Free from additives and heat processing —
                just honey in its most natural form.
              </p>
            </div>

            <div class="bg-white rounded-3xl p-10 text-center shadow-sm">
              <div class="w-14 h-14 mx-auto mb-6 rounded-full bg-[#F3F0E9] flex items-center justify-center text-amber-500 text-xl">
                🤍
              </div>
              <h4 class="text-xl font-medium text-gray-900 mb-3">
                Passion & Trust
              </h4>
              <p class="text-gray-600 leading-relaxed">
                We stand behind every jar, honoring our craft
                and the people who choose us.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>


  )
}

export default AboutPage