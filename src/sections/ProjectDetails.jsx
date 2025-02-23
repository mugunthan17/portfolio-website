import React from "react";
import TiltedCard from "./../assets/TiltedCard.jsx";
import Parko from "./../assets/Images/ProjectCoverImages/Parko.png";
import SkyVault from "./../assets/Images/ProjectCoverImages/SkyVault.png";
import AmazonTesting from "./../assets/Images/ProjectCoverImages/AmazonTesting.png";
import ZomatoAnalysis from "./../assets/Images/ProjectCoverImages/ZomatoAnalysis.png";
import HandGesture from './../assets/Images/ProjectCoverImages/HandGesture.png';
import Thala4AReason from './../assets/Images/ProjectCoverImages/Thala4AReason.png';

function ProjectDetails() {
  return (
    <div className="bg-[#212121] px-6 py-20 sm:px-10 md:px-20 lg:px-32">
      <h1 className="montserrat text-center text-[#D5CEA3] text-3xl md:text-3xl lg:text-4xl">
        From Concept to Code 👨‍💻⚡
      </h1>
      <div className="flex flex-wrap gap-[80px] mt-[50px] justify-center">
        <TiltedCard
          imageSrc={Parko}
          altText="Parko"
          captionText="View In GitHub"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          displayOverlayContent={true}
          overlayContent={
            <button
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/mugunthan17/Parko",
                  "_blank"
                )
              }
            >
              View In GitHub
            </button>
          }
        />
        <TiltedCard
          imageSrc={SkyVault}
          altText="SkyVault"
          captionText="View In GitHub"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          displayOverlayContent={true}
          overlayContent={
            <button
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/mugunthan17/SkyVault",
                  "_blank"
                )
              }
            >
              View In GitHub
            </button>
          }
        />
        <TiltedCard
          imageSrc={AmazonTesting}
          altText="Amazon E-Commerce Website Testing"
          captionText="View In GitHub"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          displayOverlayContent={true}
          overlayContent={
            <button
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/mugunthan17/Amazor-ECommerce-Website-Testing-Selenium",
                  "_blank"
                )
              }
            >
              View In GitHub
            </button>
          }
        />
        <TiltedCard
          imageSrc={HandGesture}
          altText="Hand Gesture Recognition using AutoEncoder"
          captionText="View In GitHub"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          displayOverlayContent={true}
          overlayContent={
            <button
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/mugunthan17/Hand-Gesture-using-UnderComplete-AutoEncoder",
                  "_blank"
                )
              }
            >
              View In GitHub
            </button>
          }
        />
        <TiltedCard
          imageSrc={ZomatoAnalysis}
          altText="Zomato Restaurant Analysis"
          captionText="View In GitHub"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          displayOverlayContent={true}
          overlayContent={
            <button
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/mugunthan17/Zomato-Restaurant-Analysis",
                  "_blank"
                )
              }
            >
              View In GitHub
            </button>
          }
        />
        <TiltedCard
          imageSrc={Thala4AReason}
          altText="Check Thala for a Reason"
          captionText="View In GitHub"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          displayOverlayContent={true}
          overlayContent={
            <button
              className="cursor-pointer"
              onClick={() =>
                window.open(
                  "https://mugunthan17.github.io/thala-for-a-reason/",
                  "_blank"
                )
              }
            >
              Demo
            </button>
          }
        />
      </div>
    </div>
  );
}

export default ProjectDetails;
