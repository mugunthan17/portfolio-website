import CircularGallery4Illus from "./../assets/CircularGallery4Illus.jsx";
import React, { useState, useEffect } from "react";

function IllusWorks() {
  const [bendValue, setBendValue] = useState(3);

  useEffect(() => {
    const updateBendValue = () => {
      if (window.innerWidth <= 820) {
        setBendValue(-0.2); // Small and medium screens
      } else {
        setBendValue(-3); // Large screens
      }
    };

    updateBendValue(); // Set initial value based on screen size
    window.addEventListener("resize", updateBendValue);

    return () => {
      window.removeEventListener("resize", updateBendValue);
    };
  }, []);
  return (
    <div className="bg-[#161616] px-6 py-20 sm:px-10 md:px-20 lg:px-32">
      <h1 className="montserrat text-center text-[#D5CEA3] text-3xl md:text-3xl lg:text-4xl">
        Illustrating Ideas 💡🖋️
      </h1>
      <div style={{ height: "600px", position: "relative" }}>
       <CircularGallery4Illus bend={bendValue} textColor="#ffffff" borderRadius={0.05} />
       </div>
    </div>
  );
}

export default IllusWorks;
