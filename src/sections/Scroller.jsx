import React from 'react'
import Logo from './../assets/Images/NM.png';
import ScrollVelocity from "../assets/ScrollVelocity";

function Scroller() {

    const velocity = 100;

  return (
    <div className="bg-[#212121]">
            <ScrollVelocity
              texts={[
                <>
                  Design{" "}
                  <img src={Logo} alt="Logo" className="inline-block h-6 mx-2" />{" "}
                  Develop{" "}
                  <img src={Logo} alt="Logo" className="inline-block h-6 mx-2" />{" "}
                  Deliver{" "}
                  <img src={Logo} alt="Logo" className="inline-block h-6 mx-2" />
                </>,
              ]}
              velocity={-velocity}
              className="custom-scroll-text text-[#FFFFFF] pb-[35px] pt-[15px] bg-[#212121]"
            />
          </div>
  )
}

export default Scroller
