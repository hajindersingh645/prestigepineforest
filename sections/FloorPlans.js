"use client";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    return () => {
      Fancybox.destroy();
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <section id="floor-plans" className="bg-slate-100">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Floor Plans of Prestige Pine Forest</h2>
        </div>

        <div className="slider-wrapper px-4 py-8 max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {floorPlans.map((item, index) => (
              <div key={index} className="px-2 outline-none">
                <div className="floor-plan--item flex flex-col justify-between rounded-3xl bg-white border border-primary shadow-[3px_3px_0_0_var(--color-primary)] p-4 text-center relative h-full">
                  <div className="gallery--item relative h-96 w-full">
                    <Link
                      className="gallery--image"
                      href={`/images/floor-plans/${item}`}
                      data-fancybox
                      data-caption={`Prestige Pine Forest - Floor Plan ${
                        index + 1
                      }`}
                    >
                      <Image
                        src={`/images/floor-plans/${item}`}
                        alt={`Floor Plan ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      Floor Plan {index + 1}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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
