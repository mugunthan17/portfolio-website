import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springConfig = {
  damping: 20,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "View In Dribble",
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  displayOverlayContent = true,
  overlayContent = null, // Default to null if not provided
}) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const scale = useSpring(1, springConfig);
  const textTranslateZ = useSpring(30, springConfig); // Makes text float above

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
    textTranslateZ.set(50); // Increase floating effect on hover
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    textTranslateZ.set(30); // Reset text floating effect
  }

  return (
    <figure
      ref={ref}
      className="relative flex flex-col items-center justify-center"
      style={{ height: containerHeight, width: containerWidth, perspective: "1000px" }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Image */}
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] shadow-2xl"
          style={{ width: imageWidth, height: imageHeight }}
        />

        {/* Floating Overlay (Button and Caption) */}
        {displayOverlayContent && (
          <motion.div
            className="absolute top-5 left-5 px-6 py-3 text-white text-sm rounded-lg"
            style={{
              translateZ: textTranslateZ, // Floating effect
              backgroundColor: "rgba(0, 0, 0, 0.49)", // Lower opacity
              boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.49)", // Stronger shadow for more depth
              backdropFilter: "blur(20px)", // More blur
            }}
          >
            {overlayContent ? overlayContent : captionText}
          </motion.div>
        )}
      </motion.div>
    </figure>
  );
}
