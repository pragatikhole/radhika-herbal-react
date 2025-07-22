import { FiSearch } from 'react-icons/fi';

const categories = [
  'Gels',
  'Face Creams',
  'Haircare Products',
  'Face Scrubs',
  'Toners',
  'Face Wash & Cleansers',
  'Face Moisturizers & Lotions',
  'Face Moisturizers & Lotions',
];

export default function OurProducts() {
  return (
    <div className="bg-gray-50 py-10 px-4 font-playfair text-center">
      <div className="flex flex-wrap justify-center items-center gap-3">
        <div className="flex justify-between items-center w-full mt-4">
          {/* Left: Heading */}
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Our Products</h2>

          {/* Right: Search Box */}
          <div className="flex items-center border border-[#7E9E86] bg-white rounded-md px-3 py-1.5 ml-auto">
            <FiSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none border-none text-gray-600 text-base font-playfair bg-transparent"
            />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {categories.map((item, idx) => (
            <button
              key={idx}
              className="px-4 py-1.5 text-sm rounded-full border border-[#7E9E86] text-gray-500  hover:bg-[#7E9E86] hover:text-white transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
