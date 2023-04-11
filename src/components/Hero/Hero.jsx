import React from "react";
import hero from "../../assets/All Images/man.png";
const Hero = () => {
  return (
    <div className="hero min-h-screen hero-section">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="hero-img">

        <img src={hero} className=" rounded-lg shadow-2xl" />
        </div>
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">
            One Step Closer To Your{" "}
            <span className="text-blue-500">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
