import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDribbble,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Footer() {
  return (
    <div id="contact">
      <div className="bg-[#161616] px-6 py-20 sm:px-10 md:px-20 lg:px-32">
        <h1 className="montserrat text-center text-[#D5CEA3] text-2xl md:text-3xl lg:text-4xl">
          <span className="inline-block heartbeat">❤️</span> THANK YOU FOR YOUR
          TIME <span className="inline-block heartbeat">❤️</span>
        </h1>

        <div className="flex flex-col text-center items-center mt-[10px]">
          <div className="h-[150px] lg:h-[200px]">
            <DotLottieReact
              src="https://lottie.host/91008702-55a3-4146-8210-e36b630912d3/6Zp9rk5zp0.lottie"
              loop
              autoplay
            />
          </div>
          <h1 className="krona text-[#FFFFFF] mt-2 lg:text-2xl md:text-2xl text-xl">
            Let’s Connect!
          </h1>

          {/* Social Media Icons */}
          <div className="flex flex-row lg:space-x-10 space-x-6 mt-[50px]">
            <a
              href="mailto:mugunthannagalingam17@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-[#D5CEA3] lg:text-4xl text-3xl hover:text-[#FFFFFF] transition duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/mugunthann"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[#D5CEA3] lg:text-4xl text-3xl hover:text-[#FFFFFF] transition duration-300" />
            </a>

            <a
              href="https://github.com/mugunthan17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[#D5CEA3] lg:text-4xl text-3xl hover:text-[#FFFFFF] transition duration-300" />
            </a>

            <a
              href="https://dribbble.com/Mugunthan177"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble className="text-[#D5CEA3] lg:text-4xl text-3xl hover:text-[#FFFFFF] transition duration-300" />
            </a>

            <a
              href="https://www.instagram.com/_nm_editzz_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-[#D5CEA3] lg:text-4xl text-3xl hover:text-[#FFFFFF] transition duration-300" />
            </a>

            <a
              href="https://x.com/Mugunthan1771"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-[#D5CEA3] lg:text-4xl text-3xl hover:text-[#FFFFFF] transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="items-center text-center bg-[#000000] text-[#FFFFFF] lg:py-[5px] py-[10px]">
        <h1 className="lg:text-xl text-md montserrat font-light">
          © All Rights Reserved, Mugunthan N{" "}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
