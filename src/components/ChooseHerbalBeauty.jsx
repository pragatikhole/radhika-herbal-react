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
      image: Image4,
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
    <section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        {/* Heading */}
        <div className="text-center lg:mb-8">
          <h2
            className="text-[28px] text-gray-700 text-left pt-8"
            style={{ fontFamily: "Lora" }}
          >
            Why Choose Herbal Beauty
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className="w-[370px] h-[100%] bg-white rounded-[10px] px-[12px] py-[16px] flex flex-col justify-start gap-[10px] z-10 border border-gray-400 transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="w-full h-[160px] rounded-[10px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <p
                className="text-[24px] font-[Lora] text-black "
                style={{ fontFamily: "Lora" }}
              >
                {item.title}
              </p>

              {/* Description */}
              <p
                className="text-[16px] font-[Mulish] text-[#4d4d4d]"
                style={{ fontFamily: "mulish" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
