import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <section className="container pt-52 pb-60 flex flex-col items-center justify-center text-center gap-8">
      <h2 className="title ">
        Thank you for contacting us. One of our representative will shortly
        contact you.
      </h2>
      <Link href="/" className="btn bg-transparent border-primary text-primary">
        <ArrowLeft /> Back to home page
      </Link>
    </section>
  );
};

export default ThankYou;
