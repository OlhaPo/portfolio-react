import React from "react";
import { GrLinkTop } from "react-icons/gr";

const ScrollTopNav = () => {
  return (
    <div className="absolute cursor-pointer hover:scale-150 ease-in duration-200 right-8 py-8">
      <a href="#main">
        <GrLinkTop size={25} />
      </a>
    </div>
  );
};

export default ScrollTopNav;
