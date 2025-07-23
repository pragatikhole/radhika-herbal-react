import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";

const certifications = [
  { src: img1, alt: "GMP Certified" },
  { src: img2, alt: "ISO Certified" },
  { src: img3, alt: "FDA Approved" },
  { src: img4, alt: "Cruelty Free" },
];

const OurCertifications = () => {
  return (
    <div className="w-full py-10 text-center">
      {/* Title */}
      <p className="text-[28px] leading-[1.2em] tracking-[0em] font-medium text-black font-[Lora] mb-8">
        Our Certifications
      </p>

      {/* Certification Grid */}
      <div className="flex flex-wrap justify-center gap-10">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative w-[300px] h-[200px] overflow-hidden rounded-[12px] group shadow-md bg-white"
          >
            {/* Image fully fits box */}
            <img
              src={cert.src}
              alt={cert.alt}
              className="w-full h-full object-cover rounded-[12px] transition-transform duration-300"
            />

            {/* Hover effect */}
            <div className="absolute inset-0 bg-[#cccccc]/25 opacity-0 group-hover:opacity-100 transition duration-300 rounded-[12px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCertifications;
