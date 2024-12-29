"use client";

import Lottie from "lottie-react";
import animationData from "../animations/custom-animation.json";

export default function LottieAnimation() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className="w-full h-[550px]"
    />
  );
}
