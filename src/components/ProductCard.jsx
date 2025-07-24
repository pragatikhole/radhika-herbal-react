import product1 from "../assests/product1.png"; // adjust path if needed

const ProductCard = ({ selected = false }) => {
  return (
    <div
      className={`border rounded-xl p-4 shadow-sm w-auto h-[450px] ${
        selected ? "" : "border-gray-300"
      }`}
    >
      <div className="relative flex justify-center w-full h-[240px]">
        <span className="absolute top-2 right-2 z-10 bg-[#cad2bd] text-xs text-white px-2 py-1 rounded-tl-md rounded-br-md">
          Minimum Order: 3 units
        </span>
        <img
          src={product1}
          alt="Facewash"
          className="w-full h-full object-contain z-0"
        />
      </div>

      <h3 className="text-green-900 font-semibold mt-4 text-sm">
        Sulphate Free Facewash
      </h3>
      <p className="text-gray-500 text-xs">
        Herbal anti-aging cream with aloe & saffron
      </p>

      <p className="mt-2 font-bold text-sm">
        ₹250 - <span className="font-medium">₹300</span>
      </p>

      <div className="flex gap-2 mt-2 text-xs">
        <button className="border border-gray-400 rounded-md px-2 py-1">
          50 ML
        </button>
        <button className="border border-gray-400 rounded-md px-2 py-1">
          100 ML
        </button>
        <button className="border border-gray-400 rounded-md px-2 py-1">
          200 ML
        </button>
      </div>

      <button className="bg-[#cad2bd] text-white rounded-full text-sm mt-4 px-3 py-2 w-full">
        Request Quote
      </button>
    </div>
  );
};

export default ProductCard;
