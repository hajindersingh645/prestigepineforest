import { ThumbsUp } from "lucide-react";
import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="call-to-action pt-20 bg-primary-bg text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="title">
          Schedule a Site-Visit to Codename Raintree Park Varthur
        </h2>
        <p className="text-2xl text-gray-700 font-medium capitalize mb-4">
          Hurry Up! Enquire Now
        </p>
        <p className="text-lg text-black capitalize">
          Pre Launch Prices Applicable On 1st Few Units. Construction Linked
          Flexi Payment Plans.
        </p>
        <Link
          href="#"
          className="btn uppercase hover:bg-primary hover:scale-110 transition-all hover:text-white inline-block mt-5"
        >
          {" "}
          <span className="flex items-center gap-2">
            <ThumbsUp size={32} /> i'm intrested{" "}
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
