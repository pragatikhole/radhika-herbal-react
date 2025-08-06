import Image1 from "../assests/whyChooseHerbalBeauty1.jpeg";
import Image2 from "../assests/whyChooseHerbalBeauty2.jpeg";
// import Image3 from "../assests/whyChooseHerbalBeauty3.jpeg";
import Image4 from "../assests/whyChooseHerbalBeauty4.jpeg";

export default function ChooseHerbalBeauty() {
  const steps = [
    {
      title: "Gentle on Skin",
      description:
        "Herbal formulations use plant-based ingredients that are less likely to irritate or cause allergies—perfect for sensitive skin.",
      image: Image4, // Your uploaded image
    },
    {
      title: "No Harsh Chemicals",
      description:
        "Embrace beauty free from parabens, sulfates, and synthetic fragrances commonly found in traditional cosmetics.",
      image: Image2,
    },
    {
      title: "Rich in Natural Nutrients",
      description:
        "Herbal products deliver vitamins, antioxidants, and essential oils—supporting healthy, radiant skin from within.",
      image: Image1,
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
