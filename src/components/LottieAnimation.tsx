"use client";

import Lottie from "lottie-react";
import animationData from "../animations/custom-animation.json";

const LottieAnimation = () => {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full h-[550px]"
    />
  );
};

export default LottieAnimation;
