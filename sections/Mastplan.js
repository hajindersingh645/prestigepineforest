import { Download, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const masterPlan = [
  {
    message: "master plan coming soon",
    image: "X-Whitefield-FP-6.jpg",
    file: "",
  },
  {
    message: "coming soon",
    image: "X-Whitefield-FP-1.jpg",
    file: "",
  },
  {
    message: "coming soon",
    image: "X-Whitefield-FP-1.jpg",
    file: "",
  },
];

const MasterPlan = () => {
  return (
    <section id="master-plans" className="bg-primary-bg">
      <div className="container">
        <div className="page-header">
          <h2 className="title">
            Master Plan and Floor Plan of Prestige Pine Forest
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {masterPlan.map((item, index) => (
            <div
              key={index}
              className="floor-plan--item flex flex-col justify-between rounded-3xl bg-white border border-primary shadow-[3px_3px_0_0_var(--color-primary)] p-8 text-center relative"
            >
              <Image
                src={`/images/floor-plans/${item.image}`}
                width={400}
                height={350}
                className="blur-sm"
                alt="Floor Plans"
              />
              {item.message ? (
                <div className="button-overlay absolute top-0 h-full  left-0 w-full flex justify-center items-center">
                  <div className="flex text-3xl font-bold text-black capitalize z-10">
                    {item.message}
                  </div>
                </div>
              ) : (
                <div className="button-overlay absolute bottom-5  left-0 w-full">
                  <Link
                    href="#uploadPDF"
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
        <p>{`The floor plan of Prestige Pine Forest is designed to offer spacious and luxurious living spaces for residents. With a variety of options available, you can choose from 1 BHK, 2 BHK, and 3 BHK apartments that cater to different lifestyles and preferences.`}</p>
        <p>{`Each apartment features high-quality fittings and finishes, ensuring a premium living experience. The kitchen is equipped with modern fixtures and ample storage space for all your culinary needs. Additionally, there are balconies or sit-outs attached to each apartment where you can enjoy panoramic views of the surrounding greenery.`}</p>
        <p>{`The floor plan also includes designated parking areas for residents' convenience. The meticulous design of Prestige Pine Forest's floor plan offers both functionality and aesthetics, making it an ideal choice for those seeking their dream home in Bangalore`}</p>
      </div>
    </section>
  );
};

export default MasterPlan;
