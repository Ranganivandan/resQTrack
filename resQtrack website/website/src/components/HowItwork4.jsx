import React from "react";

import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const HowIt4 = () => {
  return (
    <div className=" bg-[#eef6ff] flex flex-col items-center px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-6xl flex flex-col items-center">
        {/* Pricing  */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] leading-tight">
            Stay Safe With Joining Our Benifits
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mt-6 max-w-3xl mx-auto">
            Ensure peace of mind for you and your loved ones, no matter where the road takes you.
          </p>
        </div>

        {/* Pricing divs */}
        <div className="grid md:grid-cols-1 gap-12">
          {/* Individual Plan */}
          <div className="">
            <div className="pb-2 pl-10">
                <br />
              <h2 className="text-xl text-gray-600">For Individual</h2>
              <div className="mt-2">
                <span className="text-4xl font-bold text-[#1e3a5f]">₹199</span>
                <span className="text-lg text-gray-500">/Year</span>
              </div>
            </div>
            <div>
              <p className="text-gray-500 mb-6 h-20 ">
                Ensure peace of mind for you and your loved ones, no matter where the road takes you.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>24/7 emergency assistance</span>
                </li>
                <br />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>Real-time alerts and notifications</span>
                </li>
                <br />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>Privacy-first vehicle monitoring</span>
                </li>
                <br />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>Easy setup with any vehicle</span>
                </li>
                <br />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>Hassle-free communication with loved ones</span>
                </li>
              </ul>
            </div>
            <div>
                <br />
        
            </div>
          </div>

          {/* Business Plan */}
          <div className="">
            <div className="pb-2">
                <br />
              <h2 className="text-xl text-gray-600">
                Partner with Us
                <span className="text-sm text-gray-400 ml-1">(for Bulk Safety Solutions)</span>
              </h2>
              <div className="mt-2">
                <span className="text-3xl font-bold text-[#1e3a5f]">Request a quote</span>
              </div>
              <br />
            </div>
            <div>
              <p className="text-gray-500 mb-6">
                Empower your customers with reliable vehicle safety at scale.
              </p>
              <br />
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>All Individual services</span>
                </li>
                <br />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>Customizable plans for large fleets</span>
                </li>
                <br />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>Seamless integration with existing services</span>
                </li>
                <br />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>Enhanced safety features for all users</span>
                </li>
                <br />
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[#4285f4] mr-2 shrink-0" />
                  <span>Dedicated support for bulk orders</span>
                </li>
                <br />
              </ul>
            </div>
            <div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowIt4;
