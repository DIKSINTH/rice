import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#6d2626] py-20 px-6 md:px-25 lg:px-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Us
          </h2>
          <p className="text-gray-100 leading-relaxed mb-4">
            We are a team of passionate creators dedicated to building digital
            experiences that matter. Our mission is to deliver meaningful and
            impactful solutions for businesses and individuals worldwide.
          </p>
          <p className="text-gray-100 leading-relaxed mb-4">
            With a focus on innovation, collaboration, and creativity, we strive
            to push the boundaries of what’s possible in technology and design.
          </p>
          <p className="text-gray-100 leading-relaxed">
            From small startups to large enterprises, we believe in creating
            value-driven solutions that inspire growth and success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
