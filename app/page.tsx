import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import { SiteNavbar } from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";
import Projects from "@/components/landing/Projects";
import Reviews from "@/components/landing/Reviews";

export default function Page() {
  return (
    <div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-50 pointer-events-none"></div>
      <SiteNavbar />
      <Hero />
      <Projects />
      <Pricing />
      <Reviews />
      <Footer />
    </div>
  );
}
