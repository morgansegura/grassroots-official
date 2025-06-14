"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export function SuccessAnimation() {
  return <Lottie animationData={SuccessAnimation} loop={false} />;
}
