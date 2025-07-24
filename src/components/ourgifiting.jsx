import { FiSearch } from "react-icons/fi";

const categories = [
  "Gels",
  "Face Creams",
  "Haircare Products",
  "Face Scrubs",
  "Toners",
  "Face Wash & Cleansers",
  "Face Moisturizers & Lotions",
  "Face Moisturizers & Lotions",
];

export default function OurProducts() {
  return (
    <div className="py-6 px-4 sm:px-6 md:px-10 font-playfair text-center">
      <div className="flex flex-col md:flex-wrap justify-center items-center">
        {/* Header and Search */}
        <div className="w-full relative mb-6 flex flex-col md:flex-row md:items-center">
          {/* Heading centered */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 w-full text-center md:absolute md:left-1/2 md:-translate-x-1/2">
            Our Gifting Range
          </h2>

          {/* Search on right */}
          <div className="mt-4 md:mt-0 md:ml-auto pr-4">
            <div className="flex items-center border border-[#7E9E86] bg-white rounded-md px-3 py-1.5">
              <FiSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none border-none text-gray-600 text-base bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((item, idx) => (
            <button
              key={idx}
              className="px-3 sm:px-4 py-1.5 text-sm rounded-full border border-[#7E9E86] text-gray-500 hover:bg-[#7E9E86] hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
