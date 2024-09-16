"use client";
import FormPopup from "@/components/client/Popup/FormPopup";
import { ThumbsUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const CallToAction = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <section className="call-to-action pt-20 bg-primary-bg text-center">
      <div className="max-w-5xl mx-auto">
        <div className="page-header">
          <h2 className="title">
            Schedule a Site-Visit to Prestige Pine Forest
          </h2>
        </div>
        <p className="text-2xl text-gray-700 font-medium capitalize mb-4">
          Hurry Up! Enquire Now
        </p>
        {/* <p className="text-lg text-black capitalize">
          Pre Launch Prices Applicable On 1st Few Units. Construction Linked
          Flexi Payment Plans.
        </p> */}
        <button
          onClick={openModal}
          className="btn uppercase hover:bg-primary hover:scale-110 transition-all hover:text-white inline-block mt-5"
        >
          {" "}
          <span className="flex items-center gap-2">
            <ThumbsUp size={32} /> i'm intrested{" "}
          </span>
        </button>
      </div>
      <FormPopup
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onClose={closeModal}
      />
    </section>
  );
};

export default CallToAction;
