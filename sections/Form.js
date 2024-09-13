import LeadForm from "@/components/client/LeadForm";
import Image from "next/image";
import React from "react";

const Form = () => {
  return (
    <section id="" className="p-0 m-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-image relative h-[700px]">
          <Image
            src="/images/enquire-now-bg.jpg"
            layout="fill"
            className="object-cover"
            alt="enquire now"
          />
        </div>
        <div className="col-form p-16">
          <div className="page-header text-left">
            <p className="title text-4xl">Enquire Now</p>
          </div>
          <div className="form enquire-now ">
            <LeadForm buttonLabel="SPEAK TO AN EXPERT" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
