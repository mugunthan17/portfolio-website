import React from "react";
import TiltedCard from "./../assets/TiltedCard.jsx";
import GreenOasisBG from "./../assets/Images/DesignCoverImages/1.GreenOasis.png";
import ExploreDubaiBG from "./../assets/Images/DesignCoverImages/2.ExploreDubai.png";
import AmbherBG from "./../assets/Images/DesignCoverImages/3.Ambher.png";
import SnackBoxBG from "./../assets/Images/DesignCoverImages/4.SnackBox.png";
import LeafReminderBG from "./../assets/Images/DesignCoverImages/5.LeafReminder.png";
import TheCakeClubBG from "./../assets/Images/DesignCoverImages/6.TheCakeClub.png";

function UIUXWorks() {
  return (
    <div className="bg-[#161616] px-6 py-20 sm:px-10 md:px-20 lg:px-32">
      <h1 className="montserrat text-center text-[#D5CEA3] text-3xl md:text-3xl lg:text-4xl">
        Sketch to Screen 🎨📱
      </h1>
      <div className="flex flex-wrap gap-[80px] mt-[50px] justify-center">
        <TiltedCard
          imageSrc={GreenOasisBG}
          altText="Green Oasis"
          captionText="View In Dribble"
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
                  "https://dribbble.com/shots/25670861-GREEN-OASIS-BRAND-IDENTITY?utm_source=Clipboard_Shot&utm_campaign=Mugunthan177&utm_content=GREEN%20OASIS%20-%20BRAND%20IDENTITY&utm_medium=Social_Share",
                  "_blank"
                )
              }
            >
              View In Dribble
            </button>
          }
        />
        <TiltedCard
          imageSrc={ExploreDubaiBG}
          altText="Explore Dubai"
          captionText="View In Dribble"
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
                  "https://dribbble.com/shots/21763032-Explore-Dubai-Tourism-Website-UI-Design?utm_source=Clipboard_Shot&utm_campaign=Mugunthan177&utm_content=Explore%20Dubai%20-%20Tourism%20Website%20UI%20Design&utm_medium=Social_Share",
                  "_blank"
                )
              }
            >
              View In Dribble
            </button>
          }
        />
        <TiltedCard
          imageSrc={AmbherBG}
          altText="Ambher"
          captionText="View In Dribble"
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
                  "https://dribbble.com/shots/25670905-AMBHER-Fashion-Rental-Store-Website-Design?utm_source=Clipboard_Shot&utm_campaign=Mugunthan177&utm_content=AMBHER%20-%20Fashion%20Rental%20Store%20Website%20Design&utm_medium=Social_Share",
                  "_blank"
                )
              }
            >
              View In Dribble
            </button>
          }
        />
        <TiltedCard
          imageSrc={SnackBoxBG}
          altText="Snack Box"
          captionText="View In Dribble"
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
                  "https://dribbble.com/shots/25670887-Snack-Box-Snack-Vending-Machine-UI-UX-Design?utm_source=Clipboard_Shot&utm_campaign=Mugunthan177&utm_content=Snack%20Box%20-%20Snack%20Vending%20Machine%20UI%2FUX%20Design&utm_medium=Social_Share",
                  "_blank"
                )
              }
            >
              View In Dribble
            </button>
          }
        />
        <TiltedCard
          imageSrc={LeafReminderBG}
          altText="Leaf Reminder"
          captionText="View In Dribble"
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
                  "https://dribbble.com/shots/25670878-LEAF-REMINDER-WebApp-UI-UX-Design?utm_source=Clipboard_Shot&utm_campaign=Mugunthan177&utm_content=LEAF%20REMINDER%20-%20WebApp%20UI%2FUX%20Design&utm_medium=Social_Share",
                  "_blank"
                )
              }
            >
              View In Dribble
            </button>
          }
        />
        <TiltedCard
          imageSrc={TheCakeClubBG}
          altText="The Cake Club"
          captionText="View In Dribble"
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
                  "https://dribbble.com/shots/21733963-Cup-Cake-Website-UI-Desgin?utm_source=Clipboard_Shot&utm_campaign=Mugunthan177&utm_content=Cup%20Cake%20Website%20UI%20Desgin&utm_medium=Social_Share",
                  "_blank"
                )
              }
            >
              View In Dribble
            </button>
          }
        />
      </div>
    </div>
  );
}

export default UIUXWorks;
