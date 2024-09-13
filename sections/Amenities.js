import { CircleCheckBig, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const amenitiesList = [
  {
    title: "Community Amenities",
    amenities: ["Club House", "Outdoor Courts"],
  },
  {
    title: "Health and Fitness",
    amenities: ["Gymnasium", "Swimming Pool", "Jogging Track"],
  },
  {
    title: "Life style",
    amenities: [
      "Billiards & Games Room",
      "Table Tennis",
      "Party Area",
      "Landscaped Gardens",
      "Spa & Sauna",
      "Kids Play Area",
    ],
  },
];

const Amenities = () => {
  return (
    <section id="amenities" className="">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Amenities of Prestige Pine Forest</h2>
        </div>
        <div className="pb-7">
          <div className="content grid grid-cols-1 md:grid-cols-3 gap-20">
            {amenitiesList.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white border border-primary shadow-[3px_3px_0_0_var(--color-primary)] p-8 text-center"
              >
                <div className="icon flex justify-center items-center pb-5">
                  <Image
                    src="/assets/amenities_icon.svg"
                    width={80}
                    height={80}
                    alt=""
                  />
                </div>
                <div className="text">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <div className="text-lg space-y-2 divide-y-2 max-w-52 mx-auto">
                    {item.amenities.map((amenitiesItem, i) => (
                      <div key="i">{amenitiesItem}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p>{`Prestige Pine Forest offers a wide range of amenities that cater to the modern lifestyle of its residents. Let's take a closer look at what makes these amenities truly exceptional.First and foremost, the clubhouse is a hub of activity where residents can engage in various recreational activities. From indoor games like billiards and table tennis to fitness facilities such as a gymnasium and yoga studio, there's something for everyone here.`}</p>
        <p>{`If you're looking to beat the heat, the swimming pool is the perfect spot to relax and unwind. Take a refreshing dip or simply lounge by the poolside while soaking up some sun.For those who appreciate nature, the rooftop garden provides a serene escape amidst lush greenery. It's an ideal place to reconnect with nature or enjoy some quiet reading time.`}</p>
        <p>{`The lounge room offers an inviting space for social gatherings or casual hangouts with friends and neighbors. Whether it's hosting parties or catching up over coffee, this cozy setting ensures memorable moments.The pool deck is another highlight where you can bask in luxury while enjoying panoramic views of the surroundings. It's an excellent spot for lounging, sunbathing, or simply enjoying your favorite book under clear blue skies.`}</p>
      </div>
    </section>
  );
};

export default Amenities;
