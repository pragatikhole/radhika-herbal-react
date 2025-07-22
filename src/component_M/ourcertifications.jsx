import React from 'react';

const certifications = [
    {
        src: '/assests/Certification11.png',
        alt: 'GMP Certified',
    },
    {
        src: '/images/iso.png',
        alt: 'ISO Certified',
    },
    {
        src: '/images/fda.png',
        alt: 'FDA Approved',
    },
    {
        src: '/images/crueltyfree.png',
        alt: 'Cruelty Free',
    },
];

const OurCertifications = () => {
    return (
        <div className="w-full py-10 bg-[#f9f9f9] text-center">
            <p className="text-[28px] leading-[1.2em] tracking-[0em] font-medium text-black font-[Lora] mb-8">
                Our Certifications
            </p>
            <div className="flex flex-wrap justify-center gap-6">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="w-[304px] h-[232px] bg-white rounded-md shadow-md flex items-center justify-center hover:bg-[#cccccc]/50 transition duration-300"
                    >
                        <img src={cert.src} alt={cert.alt} className="max-h-full max-w-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurCertifications;
