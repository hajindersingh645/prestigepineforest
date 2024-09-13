import LeadForm from "@/components/client/LeadForm";
import React from "react";

const Form = () => {
  return (
    <section id="" className="">
      <div className="container max-w-[700px] mx-auto">
        <h2 className="title text-center">Speak To An Expert</h2>
        <div className="form">
          <LeadForm buttonLabel="SPEAK TO AN EXPERT" />
        </div>
      </div>
    </section>
  );
};

export default Form;
