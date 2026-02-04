import { assets } from "../../assets/assets"

const AboutPage = () => {
  return (
    <section className="bg-white py-28">
      <div className=" mx-auto px-6">

        {/* <!-- Our Story --> */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">

          {/* <!-- Image --> */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#F3F0E9] rounded-[2.5rem] -rotate-3"></div>

            <img
              src={assets.BeeKeepers}
              alt="Our beekeeping story"
              className="relative w-full h-130 object-cover rounded-[2.5rem] shadow-xl"
            />

            {/* <!-- Tag --> */}
            <span className="absolute bottom-6 left-6 bg-white px-5 py-2 text-sm tracking-wide text-amber-500 rounded-full shadow">
              Ethical Beekeeping
            </span>
          </div>

          {/* <!-- Text --> */}
          <div>
            <p className="text-amber-500 uppercase tracking-[0.25em] text-xs mb-5">
              Our Story
            </p>

            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-8">
              From Hive to Heart
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              We believe honey should remain untouched, honest, and alive —
              just as nature creates it. Our beekeeping practices are rooted
              in sustainability, patience, and deep respect for our bees.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              By avoiding over-processing, we preserve the honey’s natural
              enzymes, nutrients, and aroma — delivering purity you can
              taste in every spoonful.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This is not mass production. This is craftsmanship —
              harvested gently and shared with intention.
            </p>
          </div>

        </div>

        {/* <!-- Values --> */}
        {/* <!-- Values --> */}
        <div class="mt-40">

          {/* <!-- Section Header --> */}
          <div class="text-center max-w-3xl mx-auto mb-24">
            <p class="text-amber-500 uppercase tracking-[0.3em] text-xs mb-5">
              Our Values
            </p>

            <h3 class="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6">
              Guided by Nature,<br />
              Driven by Purpose
            </h3>

            <p class="text-lg text-gray-600 leading-relaxed">
              Everything we do is rooted in respect — for our bees, our land,
              and the people who welcome our honey into their homes.
            </p>
          </div>


          {/* <!-- Value Items --> */}
          <div class="space-y-28">

            {/* <!-- Value 1 --> */}
            <div class="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <span class="text-7xl font-serif text-[#FEAA29] block mb-6">01</span>

                <h4 class="text-3xl font-serif text-gray-900 mb-5">
                  Sustainability First
                </h4>
                <div className="max-w-xl text-lg text-gray-700 leading-relaxed ">
                  <p class=" ">
                    We work in harmony with nature, never exploiting our bees or
                    their environment. Our practices protect ecosystems and ensure
                    future generations can thrive.
                  </p>
                  <p>Every jar of our honey tells a story of patience and purity. We never rush the process, never dilute the richness, and never compromise the natural character of our harvest. What reaches you is untouched by unnecessary heat or chemicals.</p>
                </div>
              </div>

              <img className="h-100 w-178 rounded-3xl bg-[#F3F0E9] flex items-center justify-center" src={assets.beeKeeping} alt="beeKeeping" />


            </div>


            {/* <!-- Value 2 --> */}
            <div class="grid lg:grid-cols-2 gap-16 items-center">

              <div class="lg:order-2">
                <span class="text-7xl font-serif text-[#FEAA29] block mb-6">02</span>

                <h4 class="text-3xl font-serif text-gray-900 mb-5">
                  Pure in Every Drop
                </h4>

                <p class="text-lg text-gray-700 leading-relaxed max-w-xl">
                  Our honey is never diluted, overheated, or altered.
                  What you taste is exactly what our bees created —
                  rich, raw, and full of life.

                </p>
              </div>

              <img className="h-100 w-178 rounded-3xl bg-[#F3F0E9] flex items-center justify-center" src={assets.honeyDrop} alt="beeKeeping" />

            </div>


            {/* <!-- Value 3 --> */}
            <div class="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <span class="text-7xl font-serif text-[#FEAA29] block mb-6">03</span>

                <h4 class="text-3xl font-serif text-gray-900 mb-5">
                  Trust & Transparency
                </h4>

                <p class="text-lg text-gray-700 leading-relaxed max-w-xl">
                  From hive management to final packaging, we remain open,
                  honest, and accountable — building relationships based on
                  integrity and respect.
                </p>
              </div>

              <img className="h-100 w-178 rounded-3xl bg-[#F3F0E9] flex items-center justify-center" src={assets.honeyComb} alt="beeKeeping" />

            </div>

          </div>

        </div>

      </div>
    </section>


  )
}

export default AboutPage