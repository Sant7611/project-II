import React from "react";
import heroImg from "../../assets/sneaker_main.png";

const Hero = () => {
  return (
    <section className="relative bg-[#da5d1b]  ">
      <div className="flex top-0 items-center justify-center">
        <img
          src={heroImg}
          alt="Sneakers"
          className="  md:h-[600px] object-cover h-[350px] lg:h-[750px] "
        />
        <div className="absolute inset-0 bg-black opacity-5 top-0  flex  items-center justify-center ">
          <div className="text-center text-white p-6 ">
            <h1 className="text-4xl   md:text-9xl font-bold tracking-tighter uppercase mb-4">
              Vacation
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
