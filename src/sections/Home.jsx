import React from "react";
import NM from "../assets/Images/NM.png";
import DownloadIcon from "../assets/Images/Download.png";

function Home() {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center text-center min-h-screen px-4 py-10 bg-[linear-gradient(90deg,#000000_0%,#2b2929_50%,#000000_100%)]"
    >
      {/* Logo */}
      <img src={NM} alt="NM-LOGO" className="h-10 w-12 sm:h-12 sm:w-14" />

      {/* Main Heading */}
      <h1 className="text-3xl flex flex-col md:flex-row lg:flex-row lg:gap-[15px] md:gap-[15px] sm:text-4xl md:text-5xl krona mt-[50px]">
        <span className="text-[#D9D9D9]">Hi, I’m </span>
        <span className="text-[#D5CEA3]"> Mugunthan N</span>
      </h1>

      {/* Subtitle */}
      <h1 className="mt-[20px] text-xl sm:text-2xl md:text-3xl text-[#D9D9D9] montserrat">
      UI/UX Designer & Developer
      </h1>

      {/* Download Resume Button */}
      <a href="/Mugunthan-N-Resume.pdf" download className="mt-6 montserrat">
        <button className="flex items-center gap-4 px-6 py-3 text-lg sm:text-xl md:text-2xl text-[#D9D9D9] border border-[#D9D9D9] rounded-lg cursor-pointer ">
          Download Resume
          <img
            src={DownloadIcon}
            alt="DownloadIcon"
            className="h-[25px] md:h-[25px] sm:h-7 "
          />
        </button>
      </a>
    </div>
  );
}

export default Home;
