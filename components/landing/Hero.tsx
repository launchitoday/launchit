import GradientBars from "@/components/GradientBars";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold">Building the Future</h1>
        <p className="mt-4 text-lg sm:text-2xl font-light italic">
          One Startup at a Time
        </p>
      </div>
      <GradientBars />
    </section>
  );
};

export default Hero;
