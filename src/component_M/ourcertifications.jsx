import React from 'react';

const certifications = [
    { src: '/Assests/img1.png', alt: 'GMP Certified' },
    { src: '/Assests/img2.png', alt: 'ISO Certified' },
    { src: '/Assests/img3.png', alt: 'FDA Approved' },
    { src: '/Assests/img4.png', alt: 'Cruelty Free' },
];

const OurCertifications = () => {
    return (
        <div className="w-full py-10 bg-[#f9f9f9] text-center">
            {/* Title */}
            <p className="text-[28px] leading-[1.2em] tracking-[0em] font-medium text-black font-[Lora] mb-8">
                Our Certifications
            </p>

            {/* Certification Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="relative w-[250px] h-[170px] overflow-hidden rounded-[12px] group shadow-md bg-white"
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
