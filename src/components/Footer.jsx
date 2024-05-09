import React from "react";
import copyRight from "../assets/copyRight.png";

const Footer = () => {
  return (
    <div className="w-full p-5 ">
      <div
        className="rounded-3xl p-10 flex justify-between items-center"
        style={{ background: "rgba(245, 245, 245, 1)" }}
      >
        <div className="flex items-center">
          <img className="w-4 h-4 m-2" src={copyRight} alt="" />
          <h1>Talup 2023. All rights reserved</h1>
        </div>
        <div className="flex gap-5">
            <h1 className="underline">Terms & Conditions</h1>
            <h1 className="underline">Privacy Policy</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
