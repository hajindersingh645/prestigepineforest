import LeadForm from "@/components/client/LeadForm";
import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div id="hero" className="relative h-[500px] lg:h-[800px] w-full">
      <Image
        src="/images/prestige-park-ridge.jpg"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="z-0"
      />

      <div className="absolute  inset-0 bg-black opacity-60 z-10"></div>

      <div className="absolute flex justify-center items-center inset-0 z-20 ">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="text lg:col-span-2 flex items-start flex-col justify-center  px-7 pt-20 lg:p-0">
            <h1 className="heading hero">Prestige Pine Forest </h1>
            <p className="subheading hero flex self-start justify-start items-center gap-3">
              <MapPin /> at, Whitefield Bangalore
            </p>
          </div>
          <div className="form items-end flex">
            <p className="form-heading text-black text-2xl mb-5 font-semibold">
              Enquire Now!
            </p>
            <LeadForm buttonLabel="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
