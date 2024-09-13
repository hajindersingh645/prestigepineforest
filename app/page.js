import LeadForm from "@/components/client/lead-form";
import About from "@/sections/About";
import Amenities from "@/sections/Amenities";
import CallToAction from "@/sections/CallToAction";
import FloorPlans from "@/sections/FloorPlans";
import Form from "@/sections/Form";
import Highlights from "@/sections/Highlights";
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
      <Highlights />
      <section id="amenities" className="">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Amenities of Prestige Pine Forest</h2>
        </div>
        <p>{`Prestige Pine Forest offers a wide range of amenities that cater to the modern lifestyle of its residents. Let's take a closer look at what makes these amenities truly exceptional.First and foremost, the clubhouse is a hub of activity where residents can engage in various recreational activities. From indoor games like billiards and table tennis to fitness facilities such as a gymnasium and yoga studio, there's something for everyone here.`}</p>
        <p>{`If you're looking to beat the heat, the swimming pool is the perfect spot to relax and unwind. Take a refreshing dip or simply lounge by the poolside while soaking up some sun.For those who appreciate nature, the rooftop garden provides a serene escape amidst lush greenery. It's an ideal place to reconnect with nature or enjoy some quiet reading time.`}</p>
        <p>{`The lounge room offers an inviting space for social gatherings or casual hangouts with friends and neighbors. Whether it's hosting parties or catching up over coffee, this cozy setting ensures memorable moments.The pool deck is another highlight where you can bask in luxury while enjoying panoramic views of the surroundings. It's an excellent spot for lounging, sunbathing, or simply enjoying your favorite book under clear blue skies.`}</p>
        </div>
      </section>
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
