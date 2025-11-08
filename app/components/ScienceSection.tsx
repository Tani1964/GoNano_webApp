import Science1 from "@/public/images/science1.png";
import Science2 from "@/public/images/science2.png";
import { Check, Droplet, Sun } from "lucide-react";
import Image from "next/image";
import React from "react";

// Science Benefit Card Component
export const ScienceBenefitCard = ({ icon, title, description }:{ icon: React.ReactNode, title:string, description:string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Main Science Section Component
const ScienceSection = () => {
  return (
    <section id="science" className="bg-[#1D1E40] py-12 md:py-20 px-4 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#675CE7] mb-6">
            THE SCIENCE BEHIND THE SHIELD
          </h2>
          <p className="text-base md:text-lg text-white max-w-5xl mx-auto leading-relaxed mb-4">
            PF-NANO treatments work at the molecular level to create an invisible
            shield that protects your surfaces from water, UV rays, and decay.
            Instead of forming a coating on top, our hydrophobic solution
            penetrates and bonds with the material itself—so you get
            long-lasting durability without any change in appearance.
          </p>
          <p className="text-base md:text-lg text-white max-w-5xl mx-auto leading-relaxed">
            It&apos;s been certified in the lab, proven in the field, and trusted by
            thousands of homeowners and property pros across the country.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 max-w-full">
          {/* Left Side - Text Content */}
          <div className=" text-white space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Smaller Particles - Deeper Protection
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              Traditional sealants use large particles that sit on the surface,
              forming a visible film that wears off over time. PF-NANO&apos;s
              nano-scale particles penetrate deep into material pores—sealing
              from the inside out.
            </p>
            <p className="text-sm md:text-base leading-relaxed font-semibold">
              PF-NANO uses true nanotechnology to bond within surface pores.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Other sealers (acrylics, silicone, blends) create bulky surface
              layers.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              This internal bonding delivers longer-lasting, invisible
              performance that doesn&apos;t peel, yellow, or trap moisture.
            </p>

            {/* Checklist */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">
                  Nano-sized penetration
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">
                  Breathable, non-slippery finish
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">
                  No visible coating or change in texture
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Particle Comparison Image */}
          <div className="bg-white rounded-lg p-6 md:p-8">
            <Image
                src={Science1}
                alt="Water beading on treated surface"
                className="w-full h-full rounded-lg shadow-lg"
                // width={}
                // height={500}
                priority
              />
              </div>
        </div>

        {/* Permanent Structure Modification Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Left Side - Before/During/After Images */}
          <div className="bg-white rounded-lg p-6 md:p-8">
             <Image
                src={Science2}
                alt="Water beading on treated surface"
                className="w-full h-full rounded-lg shadow-lg"
                // width={}
                // height={500}
                priority
              />
          </div>

          {/* Right Side - Microscopic Proof */}
          <div className="text-white space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Microscopic Proof - Molecular Transformation
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              At the microscopic level, PF-NANO doesn&apos;t just coat the surface—it
              permanently modifies it.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              In the <span className="font-bold">before</span> image, untreated
              shingles have exposed pores and irregular texture.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              In the <span className="font-bold">during</span> phase, the PF-NANO
              nanotechnology reacts inside the material.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-bold">After</span> curing, the result is a
              smoother, water-resistant structure that visibly seals out
              moisture without leaving a surface film.
            </p>

            {/* Checklist */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">
                  Bonds below the surface
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">
                  Creates long-lasting hydrophobic protection
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-sm md:text-base">
                  Preserves look, increases durability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Science Benefits Bar */}
      <div className=" py-6 mb-12  w-full">
        <div className="flex items-center bg-[#7b6dff] px-12  py-6 justify-center gap-3">
          <Check className="text-white" size={32} />
          <h3 className="text-2xl md:text- 3xl font-bold text-white">
            Science Benefits
          </h3>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <ScienceBenefitCard
            icon={<span className="text-5xl">🔬</span>}
            title="Molecular Bonding"
            description="Tiny silica-based nanoparticles embed into the surface structure, creating a permanent barrier that water can't penetrate."
          />
          <ScienceBenefitCard
            icon={<Droplet className="text-blue-400" size={48} />}
            title="Breathable but Waterproof"
            description="The barrier blocks liquid water while allowing moisture vapor to escape—so surfaces stay dry without trapping humidity."
          />
          <ScienceBenefitCard
            icon={<Sun className="text-yellow-400" size={48} />}
            title="UV-Stable & Non-Yellowing"
            description="Our formula stays invisible and stable under Texas sun—no peeling, no discoloration, no slippery finish."
          />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="#testimonials"  className="bg-[#7b6dff] hover:bg-[#6b5dff] text-white font-bold px-8 md:px-12 py-4 rounded text-base md:text-lg transition-colors">
            SEE IT IN ACTION
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
