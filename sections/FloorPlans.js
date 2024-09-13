import { Download, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const floorPlans = [
  {
    image: "X-Whitefield-FP-6.jpg",
    file: "",
  },
  {
    image: "X-Whitefield-FP-1.jpg",
    file: "",
  },
  {
    image: "X-Whitefield-FP-2.jpg",
    file: "",
  },
  {
    image: "X-Whitefield-FP-3.jpg",
    file: "",
  },
  {
    image: "X-Whitefield-FP-4.jpg",
    file: "",
  },
  {
    image: "X-Whitefield-FP-5.jpg",
    file: "",
  },
];

const FloorPlans = () => {
  return (
    <section id="floor-plans" className="">
      <div className="container">
        <h2 className="title">floor plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {floorPlans.map((item, index) => (
            <div
              key={index}
              className="floor-plan--item flex flex-col justify-between h-full bg-white rounded-bl-[40px] p-12 text-center border-2  border-dotted border-primary"
            >
              <Image
                src={`/images/floor-plans/${item.image}`}
                width={400}
                height={350}
                className="blur-sm"
                alt="Floor Plans"
              />
              <Link
                href="/upload/Prestige Raintree Park Brochure.pdf"
                target="_blank"
                className="btn uppercase  transition-all  inline-block mt-5"
              >
                {" "}
                <span className="flex items-center gap-2">
                  <Download size={32} /> download brochure{" "}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
