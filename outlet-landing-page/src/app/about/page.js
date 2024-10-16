 import React from 'react'
 import Image from 'next/image';
 
 const About = () => {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Squad Innovators</h2>
              <p className="text-gray-600 mb-6">
                We are proud members of BASIS, bringing together our expertise in software development, video editing, and digital services. At Squad Innovators, we are passionate about leveraging technology to drive your business forward.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Why Our Service is the Best?</h3>
              <p className="text-gray-600 mb-6">
                Trust us as your dedicated partner, committed to delivering cutting-edge solutions tailored to your unique needs. With 100% client satisfaction and unwavering technical support, we ensure that your business thrives in the digital era.
              </p>
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-teal-400 hover:to-blue-500 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="hidden lg:block lg:w-1/2 h-[50%] mt-36 px-10">
                <Image 
                  src="/Final-logo.png" 
                  alt="About Us Image"  
                  objectFit="cover" 
                  className=""
                  height={200}
                  width={300}
                />
            </div>
          </div>
          <div className="bg-gray-100 p-6 text-center">
            <p className="text-lg font-semibold text-gray-800">100% Client Satisfaction | Dedicated Technical Support</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About