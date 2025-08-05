// src/components/CustomerTestimonials.js

import React from "react";

// Dummy data for testimonials
const testimonials = [
    {
        name: "Devon Lane",
        username: "@its_devon",
        rating: 5.0,
        image: "/assets/FirstCard.jpg",
        message:
            "Radhika Herbals helped us launch our private label herbal skincare range seamlessly. Their team was responsive, transparent, and delivered on every promise.",
    },
    {
        name: "Satish Mishra",
        username: "@its_satish",
        rating: 4.9,
        image: "/assets/SecondCard.jpg",
        message:
            "Radhika Herbals helped us launch our private label herbal skincare range seamlessly. Their team was responsive, transparent, and delivered on every promise.",
    },
    {
        name: "Priya Rao",
        username: "@priya_rao",
        rating: 5.0,
        image: "/assets/ThirdCard.jpg",
        message:
            "Radhika Herbals helped us launch our private label herbal skincare range seamlessly. Their team was responsive, transparent, and delivered on every promise.",
    },
];

const CustomerTestimonials = () => {
    return (
        <div className=" font-sans px-44">
            <h2
                className="text-[28px] text-gray-700 text-left py-10"
                style={{ fontFamily: "Lora" }}
            >
                What Our Customers Say..
            </h2>

            <div className="flex flex-wrap gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 w-full md:w-[30%]"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-14 h-14 rounded-full mr-4 object-cover"
                            />
                            <div>
                                <h2 className="text-lg font-serif font-bold text-gray-800">
                                    {testimonial.name}
                                </h2>
                                <p className="text-sm italic text-gray-500">
                                    {testimonial.username}
                                </p>
                            </div>
                            <div className="ml-auto flex items-center space-x-1">
                                <svg
                                    className="w-4 h-4 text-red-500 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l2.9 8.7H24l-7.4 5.4L19.8 24 12 18.9 4.2 24l2.2-7.9L0 10.7h9.1z" />
                                </svg>
                                <span className="font-bold text-gray-800">
                                    {testimonial.rating}
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            “{testimonial.message}”
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerTestimonials;
