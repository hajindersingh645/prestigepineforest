"use client";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Download } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const floorPlans = [
  "floor-plan (1).png",
  "floor-plan (2).png",
  "floor-plan (3).png",
  "floor-plan (4).png",
  "floor-plan (5).png",
  "floor-plan (6).png",
  "floor-plan (7).png",
  "floor-plan (8).png",
  "floor-plan (9).png",
  "floor-plan (10).png",
  "floor-plan (11).png",
  "floor-plan (12).png",
  "floor-plan (13).png",
  "floor-plan (14).png",
  "floor-plan (15).png",
  "floor-plan (16).png",
  "floor-plan (17).png",
  "floor-plan (18).png",
  "floor-plan (19).png",
  "floor-plan (20).png",
  "floor-plan (21).png",
  "floor-plan (22).png",
  "floor-plan (23).png",
  "floor-plan (24).png",
  "floor-plan (25).png",
  "floor-plan (26).png",
];

const FloorPlans = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
  }, []);
  return (
    <section id="floor-plans" className="bg-slate-100">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Floor Plans of Prestige Pine Forest</h2>
        </div>
        <div className="gallery-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {floorPlans.map((item, index) => (
            <div
              key={index}
              className="floor-plan--item flex flex-col justify-between rounded-3xl bg-white border border-primary shadow-[3px_3px_0_0_var(--color-primary)] p-8 text-center relative"
            >
              <div className="gallery--item" key={index}>
                <Link
                  className="gallery--image"
                  href={`/images/floor-plans/${item}`}
                  data-fancybox
                  data-caption={`Codename Raintree Park - Gallery`}
                >
                  <Image
                    src={`/images/floor-plans/${item}`}
                    className="blur-sm"
                    alt={`Floor Plans`}
                    fill
                    sizes="(max-width: 768px) 100vw"
                  />
                </Link>
              </div>
              {/* <Image
                src={`/images/floor-plans/${item}`}
                width={400}
                height={350}
                className=""
                alt="Floor Plans"
              /> */}
              {item.message ? (
                <div className="button-overlay absolute top-0 h-full  left-0 w-full flex justify-center items-center">
                  <div className="flex text-3xl font-bold text-black capitalize z-10">
                    {item.message}
                  </div>
                </div>
              ) : (
                <div className="button-overlay absolute bottom-5  left-0 w-full hidden">
                  <Link
                    href="/upload/Prestige Pine Forest RERA Brochure LR.pdf"
                    target="_blank"
                    className="btn  uppercase  transition-all  inline-block mt-5"
                  >
                    {" "}
                    <span className="flex items-center gap-2">
                      <Download size={32} /> download brochure{" "}
                    </span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
        <p>{`Prestige Pine Forest is a meticulously planned residential project located in Whitefield, Bangalore. The master plan of this exquisite development has been designed to offer residents a harmonious living experience amidst lush greenery and modern amenities. Spread across acres of land, the master plan of Prestige Pine Forest encompasses thoughtfully designed towers that house spacious apartments with contemporary interiors.`}</p>
        <p>{`The project incorporates wide internal roads and well-lit pedestrian pathways, ensuring easy accessibility within the premises. Additionally, there are designated parking spaces for residents and visitors alike. The expansive clubhouse forms an integral part of the master plan, offering a plethora of recreational facilities such as a fully equipped gymnasium, indoor games room, yoga studio, and more`}</p>
        <p>{`The floor plan of Prestige Pine Forest is designed to offer spacious and luxurious living spaces for residents. With a variety of options available, you can choose apartments that cater to different lifestyles and preferences.`}</p>
        <p>{`Each apartment features high-quality fittings and finishes, ensuring a premium living experience. The kitchen is equipped with modern fixtures and ample storage space for all your culinary needs. Additionally, there are balconies or sit-outs attached to each apartment where you can enjoy panoramic views of the surrounding greenery.`}</p>
        <p>{`The floor plan also includes designated parking areas for residents' convenience. The meticulous design of Prestige Pine Forest's floor plan offers both functionality and aesthetics, making it an ideal choice for those seeking their dream home in Bangalore`}</p>
      </div>
    </section>
  );
};

export default FloorPlans;
