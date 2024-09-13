import LeadForm from "@/components/client/lead-form";
import About from "@/sections/About";
import Amenities from "@/sections/Amenities";
import CallToAction from "@/sections/CallToAction";
import FloorPlans from "@/sections/FloorPlans";
import Form from "@/sections/Form";
import ProjectGallery from "@/sections/gallery";
import HeroSection from "@/sections/HeroSection";
import Location from "@/sections/Location";
import Overview from "@/sections/Overview";
import Pricing from "@/sections/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Overview />
      <Pricing />
      <CallToAction />
      <Amenities />
      <ProjectGallery />
      <FloorPlans />
      <Location />
      <About />
      <Form />
    </main>
  );
}
