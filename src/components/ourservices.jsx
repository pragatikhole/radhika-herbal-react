export default function OurServices() {
  const services = [
    "Contract<br/>Manufacturing", // with line break
    "Private Labelling",
    "Corporate Gifting",
    "Product Sampling",
  ];

  return (
    <div className="text-[#7E9E86] py-10 text-center text-[24px] font-playfair">
      <h2 className="text-gray-700 text-[24px] font-medium mb-6">Our Services</h2>

      <div className="flex flex-wrap justify-center gap-4 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-[#7E9E86] text-[#7E9E86] rounded-[8px] px-4 py-3 text-[20px] font-medium w-[250px] sm:w-[200px] leading-snug"
            dangerouslySetInnerHTML={{ __html: service }}
          />
        ))}
      </div>
    </div>
  );
}
