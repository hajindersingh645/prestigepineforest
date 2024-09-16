"use client";
import FormPopup from "@/components/client/Popup/FormPopup";
import Image from "next/image";
import { useState } from "react";

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

const Overview = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <section id="project-overview">
      <div className="container">
        <div className="page-header">
          <h2 className="title">project overview</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col col-span-2">
            <p>
              Nestled in the serene surroundings of Whitefield, Bangalore,
              Prestige Pine Forest offers a modern and luxurious living
              experience. This residential project by Prestige Group is designed
              to provide residents with a harmonious blend of nature and urban
              convenience.
            </p>
            <p>
              Spread across acres of verdant landscapes, Prestige Pine Forest
              boasts beautifully crafted apartments that exude elegance and
              style. With meticulously planned layouts and contemporary
              architecture, every home at Prestige Pine Forest is a testament to
              fine craftsmanship.
            </p>
            <p>
              The project offers a range of housing options to suit diverse
              needs and preferences. Whether you're looking for a cozy 1 BHK
              apartment or spacious 3 BHK residences, you'll find the perfect
              abode at Prestige Pine Forest. Each apartment is thoughtfully
              designed with ample natural light, ventilation, and privacy in
              mind.
            </p>
            <p>
              One of the standout features of this project is its emphasis on
              sustainable living. The developers have incorporated eco-friendly
              measures such as rainwater harvesting systems, energy-efficient
              lighting fixtures, and waste management systems to minimize
              environmental impact.
            </p>
            <p>
              In addition to its aesthetically pleasing homes, Prestige Pine
              Forest also provides an array of world-class amenities for its
              residents' enjoyment. From a state-of-the-art clubhouse where you
              can unwind after a long day's work to a refreshing swimming pool
              where you can take a dip on hot summer days - there's something
              for everyone here
            </p>
            <p>
              Furthermore, fitness enthusiasts will appreciate the well-equipped
              gymnasium that allows them to stay active without leaving the
              premises. For those seeking relaxation and tranquility, there are
              sprawling landscaped gardens dotted throughout the property where
              you can reconnect with nature
            </p>
          </div>
          <div className="col">
            <Image
              src="/images/portrait-image.jpeg"
              width={400}
              height={600}
              alt="Prestige Pine Forest"
            />
          </div>
        </div>
        <div className="overflow-x-auto p-4 px-0">
          <table className="min-w-full bg-white border border-primary rounded-lg">
            <tbody>
              {projectDetails.map((detail, index) => (
                <tr key={index} className="border-b border-primary">
                  <td className="px-4 py-2 font-semibold text-primary border-r border-primary">
                    {detail.label}
                  </td>
                  <td className="px-4 py-2 text-gray-600">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button onClick={openModal} className="btn mt-5 px-6 inline-block">
            Download Brochure
          </button>

          <FormPopup
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            onClose={closeModal}
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
