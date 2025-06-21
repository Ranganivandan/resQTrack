import React from "react";

const HowIt3 = () => {
  return (
    <div className=" bg-[#eef6ff] py-16 px-4">
      <div className="container mx-auto flex flex-col items-center">
       
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center bg-white text-[#4285f4] font-medium rounded-full px-6 py-2 mb-6">
            HOW IT WORKS
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-4 leading-tight">
            Truly Simple and<br />
            Super Easy Process
          </h1>

          <p className="text-[#5a7184] text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Simple steps to activate your vehicle safety system.
          </p>

          {/* Get Free Trial Button */}
          
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm h-64 mb-6 border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-center h-full p-6 bg-[#f9fafc]">
                <img
                  src="src/assets/s1.jpg"
                  alt="QR Code"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#1e3a5f]">01 / Attach</h3>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm h-64 mb-6 border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-center h-full p-6 bg-[#f9fafc]">
                <img
                  src="src/assets/s2.png"
                  alt="Scanning QR code"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#1e3a5f]">02 / Scan</h3>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm h-64 mb-6 border border-gray-100 shadow-sm overflow-hidden">
              <div className="flex items-center justify-center h-full p-6 bg-[#f9fafc]">
                <img
                  src="src/assets/s3.jpg"
                  alt="Connected device"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium text-[#1e3a5f]">03 / Connect</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowIt3;
