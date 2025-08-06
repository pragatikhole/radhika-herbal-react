import ImageSteps1 from "../assests/manufacturing1.png";
import ImageSteps2 from "../assests/manufacturing2.png";
import ImageSteps3 from "../assests/manufacturing3.png";
import ImageSteps4 from "../assests/manufacturing4.png";
import "../index.css";

export default function ManufacturingProcess() {
  const steps = [
    {
      step: "Step 1",
      title: "Consultation & Requirements Gathering",
      description:
        "We understand your brand, product vision, target audience, and compliance needs.",
      image: ImageSteps1, // Your uploaded image
    },
    {
      step: "Step 2",
      title: "Custom Formulation & Sampling",
      description:
        "Our R&D team develops samples, refines based on your feedback, and ensures herbal actives meet your expectations.",
      image: ImageSteps2,
    },
    {
      step: "Step 3",
      title: "Ingredient Sourcing & Quality Control",
      description:
        "Sourcing ethically, testing raw materials for purity and efficacy, maintaining documentation.",
      image: ImageSteps3,
    },
    {
      step: "Step 4",
      title: "Final QC & Regulatory Compliance",
      description:
        "Final product analysis, certifications, third-party tests if needed, all documented for peace of mind.",
      image: ImageSteps4,
    },
  ];

  const loopSteps = [...steps, ...steps];

  return (
    <div className="flex justify-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32 lg:px-32">
        {/* Heading Section */}
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center pt-8">
            <div className="lg:mb-8">
              <h2
                className="text-[28px] text-gray-700 text-left"
                style={{ fontFamily: "Lora" }}
              >
                Our Manufacturing Process
              </h2>
              <p className="font-[Mulish] text-[16px] font-normal text-black leading-[1.2em] mt-2">
                Experience streamlined manufacturing with quality, speed, and
                precision at every step.
              </p>
            </div>
          </div>

          {/* Arrow Icon */}
          <div className="flex items-center h-[130px]">
            <img
              src="https://static.thenounproject.com/png/541089-200.png"
              alt="Right Arrow"
              className="w-[120px] h-[140px] object-contain mt-14"
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
            {loopSteps.map((item, index) => (
              <div
                key={index}
                className="w-[315px] h-[364px] bg-white rounded-[10px] px-[12px] py-[16px] flex-shrink-0 flex flex-col justify-start gap-[20px] z-10 border border-gray transform transition-transform duration-300 hover:scale-105 hover:border-[#7E9E86]"
              >
                {/* Image Box */}
                <div className="w-full h-[163px] rounded-[10px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Step Label */}
                <p className="text-[18px] font-[Lora] text-[#6C8F76] leading-[1.2em]">
                  {item.step}
                </p>

                <p className="text-[20px] font-[Lora] text-black leading-[1.3em] line-clamp-2">
                  {item.title}
                </p>

                {/* Step Description */}
                <p className="text-[16px] font-[Mulish] text-[#4d4d4d] leading-[1.2em] h-[44px] overflow-hidden">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
