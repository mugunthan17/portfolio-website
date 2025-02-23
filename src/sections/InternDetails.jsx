import React from "react";
import FittlyfLogo from "./../assets/Images/fittlyf.png";
import LiveasyLogo from './../assets/Images/liveasy.png';
import InternCard from "./InternCard.jsx";
import SpotlightCard from '../assets/SpotlightCard';

function InternDetails() {
  return (
    <div
      id="works"
      className="flex flex-col bg-[#212121] px-6 py-20 sm:px-10 md:px-20 lg:px-32"
    >
      <h1 className="montserrat text-center text-[#D5CEA3] text-3xl md:text-3xl lg:text-4xl">
        Internship Chronicles 🎯✨
      </h1>

      <SpotlightCard className="mt-[50px]" spotlightColor="rgba(186, 89, 255, 1)">
      <InternCard
        Logo={FittlyfLogo}
        bgColor = "#6D4A95"
        textColor = "#FFFFFF"
        Title="UI/UX Designer"
        Duration="May - August 2024"
        Contribution="At Fittlyf, I crafted a clean UI for an AA Testing Platform, designed A/B testing with stratification, and developed a comprehensive dashboard for anomaly detection—elevating usability and data-driven insights."
      />
      </SpotlightCard>

      <SpotlightCard className="mt-[50px]" spotlightColor="rgba(0, 61, 255, 0.5)">
      <InternCard
        Logo={LiveasyLogo}
        bgColor = "#152968"
        textColor = "#82A0FF"
        Title="UI/UX Designer"
        Duration="June - September 2023"
        Contribution="At Liveasy Logistics, I designed intuitive UIs for their WebApp, improved Mobile App usability, and revamped their website for a seamless experience—enhancing user engagement across diverse personas."
      />
      </SpotlightCard>

    </div>
  );
}

export default InternDetails;
