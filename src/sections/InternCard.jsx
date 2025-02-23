import React from "react";

function InternCard({ Logo, Title, Duration, Contribution, bgColor, textColor }) {
  return (
    <div
      id="overall-div"
      className="flex flex-col pt-[30px] rounded-[20px]"
      style={{ backgroundColor: bgColor }}
    >
      <div id="heading-div" className="flex lg:flex-row md:flex-row flex-col lg:py-[30px] py-[10px] lg:px-[80px] px-[35px]">
        <img src={Logo} alt="Company Logo" className="h-[100px] w-[100px]" />
        <div
          id="title-duration-div"
          className="flex flex-col text-left gap-[5px] lg:pl-[30px] md:pl-[30px] pl-[0px] lg:pt-[0px] md:pt-[0px] pt-[20px] justify-center"
        >
          <h1 className="krona text-[#DFC2FF] lg:text-3xl md:text-3xl text-2xl" style={{color: textColor}}>{Title}</h1>
          <h1 className="montserrat text-[#FFFFFF] text-2xl">{Duration}</h1>
        </div>
      </div>
      <h1 className="lg:px-[80px] lg:pt-[0px] pt-[20px] px-[35px] lg:pb-[50px] pb-[40px] montserrat text-lg text-[#FFFFFF]">
        {Contribution}
      </h1>
    </div>
  );
}

export default InternCard;
