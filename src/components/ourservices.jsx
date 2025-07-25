export default function OurServices() {
  const services = [
    "Contract<br/>Manufacturing",
    "Private Labelling",
    "Corporate Gifting",
    "Product Sampling",
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        <h2 className="text-center text-gray-700 text-[32px] font-semibold mb-10 font-playfair">
          Our Services
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#7E9E86] text-[#7E9E86] rounded-[12px] px-6 py-5 text-[22px] font-semibold w-[290px] sm:w-[270px] leading-snug text-center"
              dangerouslySetInnerHTML={{ __html: service }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
