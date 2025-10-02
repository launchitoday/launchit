import React from "react";
import GradientBars from "@/components/GradientBars";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <GradientBars />
      <div className="h-[100vh] w-full flex items-center justify-center font-bold text-6xl">
 Launching Soon
      </div>
     
    </section>
  );
};

export default Hero;
