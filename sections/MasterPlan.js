import { CheckCircle, Download, ThumbsUp } from "lucide-react";
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

const masterPlanFeatures = [
  "ENTRANCE PLAZA WITH PORTAL",
  "ACTIVITY LAWN",
  "VIEW DECK",
  "FIRE TENDER DRIVEWAY",
  "CAR PARKING",
  "BLOCK ENTRANCE DROP OFF AREA",
  "TRANSFORMER YARD",
  "MULTIPURPOSE COURT",
  "TENNIS COURT",
  "CRICKET NET PRACTICE",
  "FITNESS CORNER",
  "SENIOR CITIZEN CORNER",
  "REFLEXOLOGY WALK",
  "PARTY LAWN",
  "BBQ CORNER",
  "CLUB ENTRY",
  "LAP POOL",
  "POOL DECK",
  "KIDS POOL",
  "LAWN",
  "COURT YARD",
  "PET PARK",
  "KIDS PLAY AREA",
  "WELLNESS DECK",
  "FOREST TRAIL",
  "PATHWAY ENTRY",
  "FUTSAL PLAYCOURT",
  "AMPHITHEATER",
  "ENTRY RAMP",
  "EXIT RAMP",
];

const MasterPlan = () => {
  return (
    <section id="master-plan" className="bg-primary-bg">
      <div className="container">
        <div className="page-header">
          <h2 className="title">Master Plan of Prestige Pine Forest</h2>
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          <div className="col relative mx-auto">
            <img
              src="/images/floor-plans/master-plan-h.jpg"
              className="w-full h-full"
              alt="master plan"
            />
          </div>
          <div className="col grid md:grid-cols-5 gap-8">
            {masterPlanFeatures.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={30} className="text-primary" />
                <p className="capitalize text-base pb-0">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterPlan;
