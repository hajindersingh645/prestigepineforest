import { House, IndianRupee, Ruler } from "lucide-react";
import React from "react";

const pricingPlans = [
  {
    type: "3bhk",
    price: 2.95,
    features: ["Codename Raintree Park", "3 BHK Price"],
    area: "2005 SqFt",
  },
  {
    type: "3bhk",
    price: 3.25,
    features: ["Codename Raintree Park", "3 BHK + Maid's Room Price"],
    area: "2187 - 2400 SqFt",
  },
  {
    type: "3.5bhk",
    price: 3.65,
    features: ["Codename Raintree Park", "3 BHK + Study Room + Maid's"],
    area: "2451 - 2588 SqFt",
  },
  {
    type: "4bhk",
    price: 4,
    features: ["Codename Raintree Park", "4 BHK + Maid's Room Price"],
    area: "2900 - 2956 SqFt",
  },
  {
    type: "5bhk",
    price: 5,
    features: ["Codename Raintree Park", "4 BHK + Studio Price"],
    area: "3500 - 3700 SqFt",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-slate-100">
      <div className="container">
        <h2 className="title">pricing</h2>
        <div className="pricing--col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {pricingPlans.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between h-full bg-white rounded-bl-[40px] p-12 shadow-lg text-center transition-transform hover:scale-110 delay-100"
              >
                <div className="property-icon flex justify-center mb-5">
                  <House size={59} className="text-primary" />
                </div>
                <p className="property-type uppercase font-base font-semibold text-4xl mb-3">
                  {item.type}
                </p>
                <p className="property-area text-lg mb-5 flex justify-center items-center gap-3">
                  <Ruler size={20} className="text-gray-400" /> {item.area}
                </p>
                <ul className="features space-y-2 divide-y mb-6">
                  {item.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="property-price uppercase font-medium text-3xl flex items-center justify-center">
                  <IndianRupee className="text-primary_" size={26} />{" "}
                  {item.price} CR*
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
