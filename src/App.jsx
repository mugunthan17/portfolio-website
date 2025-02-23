import React from "react";
import { VscHome, VscAccount, VscBriefcase, VscMail } from "react-icons/vsc";
import Dock from "./assets/Dock";
import Home from "./sections/Home.jsx";
import Scroller from "./sections/Scroller.jsx";
import About from "./sections/About.jsx";
import InternDetails from "./sections/InternDetails.jsx";
import PSWorks from "./sections/PSWorks.jsx";
import IllusWorks from "./sections/IllusWorks.jsx";
import Footer from "./sections/Footer.jsx";
import UIUXWorks from "./sections/UIUXWorks.jsx";
import ProjectDetails from "./sections/ProjectDetails.jsx";

const App = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const items = [
    {
      icon: <VscHome size={30} className="cursor-pointer" />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <VscAccount size={30} className="cursor-pointer" />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <VscBriefcase size={30} className="cursor-pointer" />,
      label: "Works",
      onClick: () => scrollToSection("works"),
    },
    {
      icon: <VscMail size={30} className="cursor-pointer" />,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#1E1E1E] gap-[20px]">
      {/* Home */}
      <Home />

      {/* Scroller */}
      <Scroller />

      {/* About */}
      <About />

      {/* Intern Details */}
      <InternDetails />

      {/* UI?UX Details */}
      <UIUXWorks />

      {/* Photoshop Works */}
      <PSWorks />

      {/* Photoshop Works */}
      <IllusWorks />

      {/* Project Works */}
      <ProjectDetails />

      {/* Photoshop Works */}
      <Footer />

      <div className="fixed bottom-5 w-full flex justify-center pb-6">
        <Dock
          className="text-[#F0F0F0] gap-[25px]"
          items={items}
          panelHeight={70}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  );
};

export default App;
