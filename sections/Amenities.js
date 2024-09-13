import { CircleCheckBig, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const amenitiesList = [
  {
    title:"Community Amenities",
    amenities:['Club House', 'Outdoor Courts'],

  },
  {
    title:"Health and Fitness",
    amenities:['Gymnasium', 'Swimming Pool', 'Jogging Track'],

  },
  {
    title:"Life style",
    amenities:['Billiards & Games Room', 'Table Tennis', 'Party Area', 'Landscaped Gardens', 'Spa & Sauna', 'Kids Play Area'],

  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="">
      <div className="container">
        <h2 className="title">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-1">
          <div className="content">
            {amenitiesList.map((item,index)=>(
              <div key={index} className="f">
                <div className="icon">ICON</div>
                <div className="text">
                  <p className="text-lg font-semibold">{item.title}</p>
                    <div>{item.amenities.map((amenitiesItem,i)=>(
                      <div key="i">{amenitiesItem}</div>
                    ))}</div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Amenities;
