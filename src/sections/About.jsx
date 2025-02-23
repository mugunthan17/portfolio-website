import React from "react";

function About() {
  const left = "<";
  const right = "/>";

  return (
    <div id="about" className="bg-[#161616] text-center px-6 py-20 sm:px-10 md:px-20 lg:px-32">
      {/* Heading */}
      <h1 className="montserrat text-[#D5CEA3] text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
        Hi, Nice to meet You! <span className="wave-hand">👋</span>
      </h1>

      {/* Description */}
      <h1 className="montserrat text-[#FFFFFF] text-lg sm:text-xl md:text-xl lg:text-2xl mt-6 sm:mt-8 md:mt-10 leading-relaxed sm:leading-loose">
        I’m N Mugunthan, a <span className="font-bold">Software Engineer</span> blending {left}Technology{right} && ✨Design✨ 
        to create seamless digital experiences. Skilled in <span className="font-bold">UI/UX</span> and 
        <span className="font-bold"> Web development</span>. I build <span className="font-bold">Intuitive</span> and <span className="font-bold">Scalable</span> solutions. 
        Passionate about <span className="font-bold">Problem-Solving</span>, I craft interfaces that drive <span className="font-bold">Impact</span>.
      </h1>
    </div>
  );
}

export default About;
