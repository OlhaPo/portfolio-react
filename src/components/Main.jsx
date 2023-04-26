import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left "
        src="./src/images/main-page.jpg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/50">
        <div className="max-width-[700px] m-auto h-full w-full flex flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-white">
            I'm Olya Ponomarova
          </h1>
          <h2 className="flex sm-text-3xl text-2xl p-4 text-white">
            I'm a
            <TypeAnimation
              sequence={[
                "junior web developer", // Types 'One'
                2000, // Waits 1s
                "nature and ukulele lover", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <BsTwitter className="cursor-pointer" size={20} />
            <BsFacebook size={20} />
            <BsInstagram size={20} />
            <BsLinkedin size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
