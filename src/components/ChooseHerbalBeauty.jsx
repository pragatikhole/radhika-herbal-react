import ImageSteps from "../assests/slider2.png";

export default function ChooseHerbalBeauty() {
  const steps = [
    {
      step: "Step 1",
      title: "Consultation & Requirements Gathering",
      description:
        "We understand your brand, product vision, target audience, and compliance needs.",
      image: ImageSteps, // Your uploaded image
    },
    {
      step: "Step 2",
      title: "Formulation & Sampling",
      description:
        "Expert teams create precise herbal formulations and provide sample products for your feedback and approval.",
      image: ImageSteps,
    },
    {
      step: "Step 3",
      title: "Production & Packaging",
      description:
        "Once finalized, we move to streamlined production and careful packaging to ensure quality delivery.",
      image: ImageSteps,
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        <div className="text-left mb-12 lg:mb-16">
          <h2 className="text-[#32] md:text-3xl lg:text-4xl font-serif text-gray-800 mb-8">
            Why Choose Herbal Beauty
          </h2>
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
        </div>
      </div>
    </section>
  );
}
