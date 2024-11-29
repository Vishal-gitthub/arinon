import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMovement = (e) => {
      const { clientX: x, clientY: y } = e;
      // console.log(x + " i'm Client X");
      // console.log(y + " i'm Client Y");
      gsap.to(cursorRef.current, {
        x,
        y,
        duration: 0.3,
        ease: "ease",
      });
    };

    window.addEventListener("mousemove", onMouseMovement);

    return () => {
      window.removeEventListener("onmousemove", onMouseMovement);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="bg-[#ffffff44] w-6 h-6 rounded-[50%] border fixed pointer-events-none z-50 transform -translate-x-2/4 -translate-y-1/2 shadow-custom-shadow"
    ></div>
  );
};

export default CustomCursor;
