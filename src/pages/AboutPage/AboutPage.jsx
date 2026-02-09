import { assets } from "../../assets/assets"

const AboutPage = () => {
  return (
    <div className="bg-white py-28 mt-20">
      <div className=" mx-auto px-6">

        {/* <!-- Our Story --> */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">

          <div className="relative">
            <div className="absolute inset-0 bg-[#F3F0E9] rounded-[2.5rem] -rotate-3"></div>

            <img
              src={assets.BeeKeepers}
              alt="Our beekeeping story"
              className="relative w-full h-130 object-cover rounded-[2.5rem] shadow-xl"
            />

            <span className="absolute bottom-6 left-6 bg-white px-5 py-2 text-sm tracking-wide text-amber-500 rounded-full shadow">
              Ethical Beekeeping
            </span>
          </div>

          <div>
            <p className="text-amber-500 uppercase tracking-[0.25em] text-[18px] mb-3">
              Our Story
            </p>

            <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-8">
              From Hive to Heart
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We believe honey should remain untouched, honest, and alive —
              just as nature creates it. Our beekeeping practices are rooted
              in sustainability, patience, and deep respect for our bees.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              By avoiding over-processing, we preserve the honey’s natural
              enzymes, nutrients, and aroma — delivering purity you can
              taste in every spoonful.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              This is not mass production. This is craftsmanship —
              harvested gently and shared with intention.
            </p>
          </div>

        </div>

        {/* <!-- Values --> */}
        <div className="mt-40">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <p className="text-amber-500 uppercase tracking-[0.3em] text-[18px] mb-3">
              Our Values
            </p>
            <h3 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6">
              Guided by Nature,<br />
              Driven by Purpose
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Everything we do is rooted in respect — for our bees, our land,
              and the people who welcome our honey into their homes.
            </p>
          </div>

          <div className="space-y-28">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-7xl font-serif text-[#FEAA29] block mb-6">01</span>
                <h4 className="text-3xl font-serif text-gray-900 mb-5">
                  Sustainability First
                </h4>
                <div className="max-w-xl text-lg text-gray-700 leading-relaxed ">
                  <p className="mb-3 ">
                    We work in harmony with nature, never exploiting our bees or
                    their environment. Our practices protect ecosystems and ensure
                    future generations can thrive.
                  </p>
                  <p>
                    We believe true sustainability goes beyond certifications and labels. It lives in our daily choices — from protecting natural habitats to allowing our bees to thrive without stress or interference. By respecting seasonal cycles and local ecosystems, we ensure that our work today does not harm tomorrow.
                  </p>
                </div>
              </div>

              <img className="h-100 w-178 rounded-3xl bg-[#F3F0E9] flex items-center justify-center" src={assets.beeKeeping} alt="beeKeeping" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <span className="text-7xl font-serif text-[#FEAA29] block mb-6">02</span>
                <h4 className="text-3xl font-serif text-gray-900 mb-5">
                  Pure in Every Drop
                </h4>
                <div className="max-w-xl text-lg text-gray-700 leading-relaxed ">
                  <p className="mb-3 ">
                    Our honey is never diluted, overheated, or altered.
                    What you taste is exactly what our bees created —
                    rich, raw, and full of life.
                  </p>
                  <p>
                    Every jar of our honey tells a story of patience and purity. We never rush the process, never dilute the richness, and never compromise the natural character of our harvest. What reaches you is untouched by unnecessary heat or chemicals.
                  </p>
                </div>
              </div>
              <img className="h-100 w-178 rounded-3xl bg-[#F3F0E9] flex items-center justify-center" src={assets.honeyDrop} alt="beeKeeping" />
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-7xl font-serif text-[#FEAA29] block mb-6">03</span>
                <h4 className="text-3xl font-serif text-gray-900 mb-5">
                  Trust & Transparency
                </h4>
                <div className="max-w-xl text-lg text-gray-700 leading-relaxed ">
                  <p className="mb-3 ">
                    From hive management to final packaging, we remain open,
                    honest, and accountable — building relationships based on
                    integrity and respect.
                  </p>
                  <p>
                    We invite you into our world with complete transparency. From sharing our beekeeping practices to providing insights into our sourcing and production, we want you to feel connected to the journey of your honey. Our commitment to honesty means you can trust that what’s on the label is exactly what’s in the jar.
                  </p>
                </div>
              </div>
              <img className="h-100 w-178 rounded-3xl bg-[#F3F0E9] flex items-center justify-center" src={assets.honeyComb} alt="beeKeeping" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage