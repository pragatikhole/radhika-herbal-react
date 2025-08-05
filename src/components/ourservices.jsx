// src/components/OurServices.js

import React from "react";

const services = [
  {
    title: "Contract Manufacturing",
    image:
      "https://img.freepik.com/free-photo/workers-assembly-line-factory_23-2149343602.jpg",
  },
  {
    title: "Corporate Gifting",
    image:
      "https://img.freepik.com/free-photo/woman-looking-cosmetic-box_23-2149395257.jpg",
  },
  {
    title: "Private Labelling",
    image:
      "https://img.freepik.com/free-photo/cosmetic-packaging-set_23-2148430177.jpg",
  },
  {
    title: "Product Samples",
    image:
      "https://img.freepik.com/free-photo/dropper-bottle-cosmetic-mockup_23-2148824993.jpg",
  },
];

const OurServices = () => {
  return (
    <section className="py-4 ">
      <h2
        className="text-[28px] text-gray-700 text-center p-10"
        style={{ fontFamily: "Lora" }}
      >
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm text-center  transform transition-transform duration-300  hover:scale-105 hover:border-[#7E9E86]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-2xl p-2 h-48 object-cover"
            />
            <p className="py-4 text-gray-600 font-medium">{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
