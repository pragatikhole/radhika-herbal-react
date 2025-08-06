import ImageSteps1 from "../assests/manufacturing1.png";
import ImageSteps2 from "../assests/manufacturing2.png";
import ImageSteps3 from "../assests/manufacturing3.png";
import ImageSteps4 from "../assests/manufacturing4.png";

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
      title: "Formulation & Sampling",
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

  return (
    <div className="px-6 py-12 bg-[#f5f5f5] flex justify-center">
      <div className="w-[1416px]">
        {/* Heading */}
        {/* Heading Section */}
        <div className="flex justify-between items-center mb-10">
          {/* Left Side: Heading and Subtext */}
          <div className="flex flex-col justify-center">
            <h3 className="font-[Lora] text-[32px] font-normal text-black leading-[1.2em]">
              Our Manufacturing Process
            </h3>
            <p className="font-[Mulish] text-[16px] font-normal text-black leading-[1.2em] mt-2">
              Experience streamlined manufacturing with quality, speed, and
              precision at every step.
            </p>
          </div>

          {/* Right Side: Arrow Icon */}
          <div className="flex items-center h-[130px]">
            <img
              src="https://static.thenounproject.com/png/541089-200.png"
              alt="Right Arrow"
              className="w-[100px] h-[130px] object-contain"
            />
          </div>
        </div>

        {/* Cards Wrapper with MORE space on top */}
        <div className="relative overflow-hidden mt-6">
          <div className="flex gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="w-[384px] h-[364px] bg-white rounded-[10px] px-[12px] py-[16px] flex-shrink-0 flex flex-col justify-start gap-[20px] z-10"
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
                <p className="text-[18px] font-[Lora] text-black leading-[1.2em]">
                  {item.step}
                </p>

                {/* Step Title */}
                <p className="text-[24px] font-[Lora] text-black leading-[1.3em] line-clamp-2">
                  {item.title}
                </p>

                {/* Step Description */}
                <p className="text-[16px] font-[Mulish] text-black leading-[1.2em] h-[36px] overflow-hidden">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 h-full w-[48px] bg-[#f5f5f5] z-20" />
        </div>
      </div>
    </div>
  );
}
