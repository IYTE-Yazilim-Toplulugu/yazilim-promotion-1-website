"use client";
import React from "react";

const SplitComponent = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="h-20 w-1/2 bg-[#4650c1] transition duration-300 hover:bg-[#3d46a9] flex items-center justify-center">
        <a
          href="https://discord.com/invite/DZHsJYZGgs"
          className="text-white text-3xl flex items-center space-x-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg"
            alt="Discord Logo"
            className="ease-in-out duration-300 transition active:scale-95 hover:scale-110 h-12"
          />
        </a>
      </div>

      <div className="h-20 w-1/2 bg-gradient-to-tl from-[#ebad4e] to-[#ff534f] hover:brightness-90 flex items-center justify-center ease-in-out duration-300 transition-all">
        <a
          href="Membership_Link"
          className="ease-in-out duration-300 transition active:scale-95 hover:scale-110 text-black text-3xl flex items-center space-x-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.iyteyazilim.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fa.27734166.png&w=1920&q=75"
            alt="Logo"
            className="h-16"
          />
          <span className="text-white font-bold">Membership</span>
        </a>
      </div>
    </div>
  );
};

export default SplitComponent;
