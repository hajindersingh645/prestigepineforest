import { CircleCheckBig, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const amenities = [
  "Integrated Township Having Apartments / Tech Park.",
  "Huge Open / Green Spaces.",
  "Grand Clubhouse & World Class Amenities.",
  "Premium Fixtures & Glass Facade In Balconies.",
  "Spacious Rooms With Ample Natural Lighting & Ventilation.",
  "Near IT Parks & Reputed Schools.",
  "Excellent Location & Connectivity.",
];

const Amenities = () => {
  return (
    <section id="amenities" className="">
      <div className="container">
        <h2 className="title">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="content">
            <ul className="mt-10 space-y-2 max-w-[600px] mx-auto">
              {amenities.map((item, index) => (
                <li
                  key={index}
                  className="py-3 px-2 flex items-center gap-5 bg-slate-100 hover:bg-primary group hover:scale-110 hover:text-white transition-all"
                >
                  <CircleCheckBig
                    className="group-hover:text-white transition-colors text-primary"
                    size={28}
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="image">
            <Image
              src="/images/am-1.jpg"
              width={700}
              height={400}
              className="shadow-color"
              alt="amenities"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
