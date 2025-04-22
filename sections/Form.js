import LeadForm from "@/components/client/LeadForm";
import Image from "next/image";
import React from "react";

const Form = () => {
  return (
    <section id="" className="p-0 m-0">
      <div className="grid grid-cols-1">
        <div className="max-w-3xl mx-auto col-form p-16">
          <div className="page-header text-center">
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
