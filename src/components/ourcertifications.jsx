import { useState } from "react";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";
import "../index.css";

const certifications = [
  { src: img1, alt: "GMP Certified" },
  { src: img2, alt: "ISO Certified" },
  { src: img3, alt: "FDA Approved" },
  { src: img4, alt: "Cruelty Free" },
  { src: img5, alt: "Other Certification" },
  { src: img6, alt: "USDA" },
  { src: img7, alt: "Ethically sourced" },
];

const OurCertifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const loopImages = [...certifications, ...certifications.slice(0, 3)];

  return (
    <div className="w-full py-10 bg-white overflow-hidden">
      {/* Section Title */}
      <div className="w-full max-w-[1200px] px-4 mx-auto text-center">
        <p className="text-[28px] font-medium text-black font-[Lora] mb-8">
          Our Certifications
        </p>
      </div>

      {/* Scrolling Images */}
      <div className="w-full flex justify-center overflow-hidden">
        <div className="w-full max-w-[1200px] px-4 overflow-hidden">
          <div className="flex gap-6 justify-center animate-scroll">
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
