"use client";
import FormPopup from "@/components/client/Popup/FormPopup";
import { Download, House, IndianRupee, Ruler } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
const unitData = [
  // {
  //   price: "coming soon",
  //   unitType: "A1",
  //   saleArea: 546,
  //   carpetArea: 368,
  //   numberOfUnits: 31,
  // },
  // {
  //   price: "coming soon",
  //   unitType: "A2",
  //   saleArea: 582,
  //   carpetArea: 396,
  //   numberOfUnits: 32,
  // },
  {
    price: "coming soon",
    unitType: "B1A",
    saleArea: 2442,
    carpetArea: 1511,
    numberOfUnits: 3,
  },
  {
    price: "coming soon",
    unitType: "B1",
    saleArea: 2614,
    carpetArea: 1631,
    numberOfUnits: 28,
  },
  {
    price: "coming soon",
    unitType: "B2",
    saleArea: 2653,
    carpetArea: 1669,
    numberOfUnits: 32,
  },
  {
    price: "coming soon",
    unitType: "B4A",
    saleArea: 2621,
    carpetArea: 1604,
    numberOfUnits: 3,
  },
  {
    price: "coming soon",
    unitType: "B3",
    saleArea: 2757,
    carpetArea: 1690,
    numberOfUnits: 30,
  },
  {
    price: "coming soon",
    unitType: "B4",
    saleArea: 2796,
    carpetArea: 1725,
    numberOfUnits: 26,
  },
  {
    price: "coming soon",
    unitType: "C1A",
    saleArea: 3121,
    carpetArea: 1895,
    numberOfUnits: 6,
  },
  {
    price: "coming soon",
    unitType: "C1",
    saleArea: 3540,
    carpetArea: 2211,
    numberOfUnits: 56,
  },
  {
    price: "coming soon",
    unitType: "C2",
    saleArea: 3556,
    carpetArea: 2218,
    numberOfUnits: 66,
  },
  {
    price: "coming soon",
    unitType: "D1",
    saleArea: 6094,
    carpetArea: 3564,
    numberOfUnits: 1,
  },
  {
    price: "coming soon",
    unitType: "D2",
    saleArea: 6508,
    carpetArea: 3942,
    numberOfUnits: 1,
  },
  {
    price: "coming soon",
    unitType: "D3",
    saleArea: 7011,
    carpetArea: 4425,
    numberOfUnits: 1,
  },
];

const pricingPlans = [
  {
    type: "on request",
    price: "on request",
    features: ["Codename Raintree Park", "3 BHK Price"],
    area: "update soon",
  },
  {
    type: "on request",
    price: "on request",
    features: ["Codename Raintree Park", "3 BHK Price"],
    area: "update soon",
  },
  {
    type: "on request",
    price: "on request",
    features: ["Codename Raintree Park", "3 BHK Price"],
    area: "update soon",
  },
];

const textContent = [
  `The price of Prestige Pine Forest is one of the key factors that make it an attractive option for homebuyers in Bangalore. With a range of apartments available, there is something to suit every budget and lifestyle. The apartment in Prestige Pine Forest is competitive and offers great value for money. For those looking for more space, the prices increase accordingly but still remain affordable compared to other luxury projects in the area.`,
  `What sets Prestige Pine Forest apart is its exceptional quality and attention to detail, making it worth every penny. The project offers modern amenities, well-designed floor plans, and beautiful landscaped gardens that add value to your investment.It's important to note that prices are subject to change based on various factors such as location within the project, floor level, and additional features or upgrades chosen by the buyer.`,
  `Therefore, it's always recommended to check with the sales team or visit their website for the latest pricing information.Prestige Pine Forest offers a range of options at reasonable prices without compromising on quality or luxury. It presents an excellent opportunity for individuals seeking their dream home in Bangalore.`,
];

const Pricing = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <section id="pricing" className="">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Price of Prestige Pine Forest</h2>
        </div>
        <div className="pricing--col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {unitData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between h-full rounded-3xl bg-white border border-primary shadow-[3px_3px_0_0_var(--color-primary)] p-9 text-center relative transition-transform hover:scale-110 delay-100"
              >
                <p className="property-type capitalize text-2xl font-base mb-3">
                  <span className="font-semibold">Unit Type</span>
                  {`: `}
                  <span className="c">{item.unitType}</span>
                </p>
                <p className="property-area text-xl mb-5 flex justify-center items-center gap-3">
                  <span className="font-semibold"> Size (Carpet): </span>
                  <span className="capitalize">{item.saleArea} (SqFt)</span>
                </p>
                <p className="property-price capitalize flex items-center justify-center gap-2">
                  <span className="font-semibold text-3xl">Price:</span>{" "}
                  <span className="font-normal text-2xl"> {item.price}</span>{" "}
                  (CR*)
                </p>

                <button
                  onClick={openModal}
                  className="btn btn-outline  uppercase  transition-all  inline-block mt-5"
                >
                  {" "}
                  <span className="flex justify-center items-center gap-2">
                    enquiry now
                  </span>
                </button>
              </div>
            ))}
          </div>
          <div className="pt-4">
            {textContent.map((item, i) => (
              <p key={i} className="">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <FormPopup
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onClose={closeModal}
      />
    </section>
  );
};

export default Pricing;
