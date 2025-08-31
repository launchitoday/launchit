import Hero from "@/components/landing/Hero";
import { SiteNavbar } from "@/components/landing/Navbar";

export default function Page() {
  return (
    <div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-50 pointer-events-none"></div>
      <SiteNavbar />
      <Hero />
    </div>
  );
}
