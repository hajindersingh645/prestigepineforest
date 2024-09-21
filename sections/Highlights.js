import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projectDetails = [
  { label: "Type", value: "Apartments" },
  { label: "Project Stage", value: "Prelaunch" },
  { label: "Location", value: "Whitefield, Bangalore" },
  { label: "Builder", value: "Prestige Group" },
  { label: "Floor Plans", value: "3, 3.5, 4 & 5 BHK" },
  { label: "Price Starting", value: "Rs. 3.50 Cr* onwards" },
  { label: "Total Land Area", value: "10 acres" },
  { label: "Total Units", value: "230" },
  { label: "No. of Floors & Towers", value: "4 Towers, G+16 Floors" },
  { label: "Size Range", value: "1500 - 3000 Sq Ft" },
  { label: "Approvals", value: "NA" },
  { label: "RERA No.", value: "In progress" },
  { label: "Launch Date", value: "On request" },
  { label: "Possession Date", value: "Dec 2028" },
];

const Highlights = () => {
  return (
    <section id="project-overview" className="bg-primary-bg">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Highlights of Prestige Pine Forest</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 capitalize">
          <div className="col flex items-center gap-3 justify-start">
            <CheckCircle size="32" className="text-primary" />
            <p className="text-xl font-medium text-black p-0">
              10.5 ceiling height
            </p>
          </div>
          <div className="col flex items-center gap-3 justify-start">
            <CheckCircle size="32" className="text-primary" />
            <p className="text-xl font-medium text-black p-0">Low density</p>
          </div>
          <div className="col flex items-center gap-3 justify-start">
            <CheckCircle size="32" className="text-primary" />
            <p className="text-xl font-medium text-black p-0">
              Porcelain marble
            </p>
          </div>
          <div className="col flex items-center gap-3 justify-start">
            <CheckCircle size="32" className="text-primary" />
            <p className="text-xl font-medium text-black p-0 ">
              1km from functional metro station
            </p>
          </div>
          <div className="col flex items-center gap-3 justify-start">
            <CheckCircle size="32" className="text-primary" />
            <p className="text-xl font-medium text-black p-0">
              Double door entrance
            </p>
          </div>
          <div className="col flex items-center gap-3 justify-start">
            <CheckCircle size="32" className="text-primary" />
            <p className="text-xl font-medium text-black p-0">
              60 acres of open views
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
          <div className="col">
            <p>
              {`Prestige Pine Forest offers a host of remarkable highlights that make it stand out from other residential projects in Whitefield, Bangalore.First and foremost, the location itself is a major highlight. Situated in the heart of Whitefield, this project provides easy access to all necessary amenities such as schools, hospitals, shopping malls, and entertainment centers. Plus, with its proximity to IT parks and corporate offices, residents can enjoy a short commute to work`}
            </p>
            <p>
              {`Another highlight of Prestige Pine Forest is the thoughtfully designed living spaces. The apartments are spacious and well-planned, ensuring maximum comfort for residents. there's something for everyone's needs.The project also boasts an extensive range of world-class amenities. From a clubhouse where you can socialize with your neighbors to a refreshing swimming pool where you can unwind after a long day at work - there is something for everyone here.`}
            </p>
            <p>
              {`For fitness enthusiasts, there are facilities like a rooftop garden and reflexology track where you can indulge in rejuvenating activities amidst lush greenery.Additionally, Prestige Pine Forest offers convenience at your doorstep with its own convenience store within the premises.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
