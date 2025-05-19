import React from "react";
import heroImg from "../../assets/sneaker_main.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="relative bg-[#da5d1b]  ">
        <div className="flex top-0 items-center justify-center">
          <img
            src={heroImg}
            alt="Sneakers"
            className="  md:h-[600px] object-cover h-[350px] lg:h-[650px] "
          />
          <div className="absolute  inset-0  top-0  flex  items-center justify-center ">
            <div className="text-center text-white p-6 ">
              <h1 className="text-4xl   md:text-9xl font-bold tracking-tighter uppercase mb-4">
                Vacation <br /> Ready
              </h1>
              <p className="text-sm tracking-tighter md:text-lg mb-6 ">
                Explore our vacation-ready foot-fit shoes with fast nationwide shipping.
              </p>
              <Link
                to="#"
                className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
