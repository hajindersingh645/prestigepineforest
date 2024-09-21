import LeadForm from "@/components/client/lead-form";
import About from "@/sections/About";
import Amenities from "@/sections/Amenities";
import CallToAction from "@/sections/CallToAction";
import Form from "@/sections/Form";
import Highlights from "@/sections/Highlights";
import ProjectGallery from "@/sections/gallery";
import HeroSection from "@/sections/HeroSection";
import Location from "@/sections/Location";
import Overview from "@/sections/Overview";
import Pricing from "@/sections/Pricing";
import Image from "next/image";
import MasterPlan from "@/sections/MasterPlan";
import FloorPlans from "@/sections/FloorPlans";
import VirtualTour from "@/sections/VirtualTour";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Overview />
      <Highlights />
      <Amenities />
      <MasterPlan />
      <FloorPlans />
      <VirtualTour />
      <Pricing />
      <CallToAction />
      <ProjectGallery />
      <Location />
      <Form />
    </main>
  );
}
