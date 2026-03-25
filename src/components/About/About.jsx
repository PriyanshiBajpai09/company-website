import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/profile2.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-[7vw] md:px-[7vw] lg:px-[13vw] mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
        <div className="md:w-[60%] lg:w-[65%] flex-shrink-0 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            We Build
            <span className="text-[#8245ec]"> Digital Solutions</span> 🚀
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6 text-gray-300 whitespace-nowrap">
            <span className="text-white">We specialize in </span>
            <TypeAnimation
              sequence={[
                "Web Development",
                1500,
                "MERN Stack Applications",
                1500,
                "UI/UX Design",
                1500,
                "Scalable Systems",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Equilx is a modern IT solutions company focused on building
            scalable, web <br />applications. We help startups and
            businesses transform their ideas into powerful <br />digital products
            using the latest technologies.
          </p>

          <a
            href="#contact"
            className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Get Started
          </a>
        </div>

        <div className="md:w-[40%] lg:w-[35%] flex justify-center md:justify-end flex-shrink-0 pr-4 md:pr-8 lg:pr-12">
          <Tilt
            className="aspect-square w-60 sm:w-72 md:w-[28rem] flex-shrink-0 border-4 border-purple-700 rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Equilx Company"
              className="w-full h-full object-cover"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
