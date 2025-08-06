import video1 from "../assests/video.mp4";

const SustainabilityGoals = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 xl:px-24 2xl:px-32">
        <div className="text-left lg:mb-8">
          <h2
            className="text-[28px] text-gray-700 text-left pt-8"
            style={{ fontFamily: "Lora" }}
          >
            Our goals towards Sustainability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* 1. Video Card */}
          <div className="relative group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <video
                  src={video1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium text-sm shadow-lg">
                    Vegan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Static Text Card */}
          <div className="relative group">
            <div className="bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 lg:h-56 flex items-center justify-center">
                <div className="text-center">
                  <span className="bg-white text-black px-6 py-3 rounded-full font-medium text-lg shadow-lg">
                    Sustainable
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Static Text Card */}
          <div className="relative group">
            <div className="bg-black rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 lg:h-56 flex items-center justify-center">
                <div className="text-center">
                  <span className="bg-white text-black px-6 py-3 rounded-full font-medium text-lg shadow-lg">
                    Sourcing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Video Card */}
          <div className="relative group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <video
                  src={video1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-medium text-sm shadow-lg">
                    Cruelty Free
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityGoals;
