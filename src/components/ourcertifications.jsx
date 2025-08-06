import { useState } from "react";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";

import img6 from "../assests/img6.png";

import "../index.css";

const certifications = [
  { src: img1, alt: "GMP Certified" },
  { src: img2, alt: "ISO Certified" },
  { src: img3, alt: "FDA Approved" },
  { src: img4, alt: "Cruelty Free" },

  { src: img6, alt: "USDA" },
];

const OurCertifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Duplicate the array for seamless looping
  const loopImages = [...certifications, ...certifications];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Section Container */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        {/* Title */}
        <div className="lg:mb-8">
          <h2
            className="text-[28px] text-gray-700 text-left pt-8"
            style={{ fontFamily: "Lora" }}
          >
            Our Certification
          </h2>
        </div>

        {/* Scrolling Container */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {loopImages.map((cert, index) => (
              <img
                key={index}
                src={cert.src}
                alt={cert.alt}
                className="w-[200px] h-[120px] object-cover rounded-[10px] opacity-60 hover:opacity-100 transition duration-300 cursor-pointer"
                onClick={() => setSelectedImage(cert)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white p-6 rounded-lg max-w-[90%] max-h-[90%]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain"
            />
            <p className="mt-4 text-black font-[Lora] text-lg text-center">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurCertifications;
