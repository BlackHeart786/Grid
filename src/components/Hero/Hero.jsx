import React from "react";
import BgImage from "../../assets/bg_2.jpg";
import home from "../../assets/home_hero_img.png";
import Navbar from "../Navbar/Navbar";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  // backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage}>
        <div>
          <Navbar />
        </div>
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <h1
                  data-aos="fade-up"
                  data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                  We deliver the best{" "}
                  <span
                    data-aos="zoom-out"
                    data-aos-delay="300"
                    class="bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/90 font-cursive"
                  >
                    property
                  </span>{" "}
                  in the city
                </h1>
                <div data-aos="fade-up" data-aos-delay="400">
                  <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                    Explore now{" "}
                  </button>
                </div>
              </div>
              {/* Image section */}
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
              >
                <img
                  data-aos-once="true"
                  src={home}
                  alt="home img"
                  className="max-w-[530px] w-full mx-auto drop-shadow-[11px_-11px_12px_rgba(0,0,0,1)]"
                />
                <div
                  data-aos="fade-left"
                  className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute top-10 left-10"
                >
                  <h1 className="text-white">Rent Home</h1>
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="0"
                  className="bg-gradient-to-r from-primary to-secondary p-3 rounded-xl absolute bottom-10 right-10"
                >
                  <h1 className="text-white">Find parking</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
