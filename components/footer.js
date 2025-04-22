import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="" className="bg-black text-white p-5">
      <div className="container max-w-6xl mx-auto">
        <p className=" text-left text-sm">
          <span className="inline-block pb-1.5 text-center w-full">{`Authorised Affiliate Channel Partner (RERA Approved Agent Registration Number - PRM/KA/RERA/1251/309/AG/210415/002404)`}</span>
          <span className="inline-block pb-1.5 text-center w-full font-semibold">{`Digital Marketing Partner - Webfluence Marketing`}</span>
          <hr className="my-4 bg-white/10" />
          <span className="inline-block pb-1.5">
            <strong>{`Disclaimer:`} </strong>
            {`The Information Provided On This Website Is Intended Exclusively For Informational Purposes And Should Not Be Construed As An Offer Of Services. This Site Is Managed By A RERA Authorized Real Estate Agent Namely - NEXT FOOTSTEP PRIVATE LIMITED. The Pricing Information Presented On This Website Is Subject To Alteration Without Advance Notification, And The Assurance Of Property Availability Cannot Be Guaranteed. The Images Showcased On This Website Are For Representational Purposes Only And May Not Accurately Reflect The Actual Properties. We May Share Your Data With Real Estate Regulatory Authority (RERA) Registered Developers For Further Processing As Necessary. Additionally, We May Send Updates And Information To The Mobile Number Or Email Address Registered With Us. All Rights Reserved. The Content, Design, And Information On This Website Are Protected By Copyright And Other Intellectual Property Rights. Any Unauthorized Use Or Reproduction Of The Content May Violate Applicable Laws.`}
          </span>
          <span>{`For Accurate And Up-To-Date Information Regarding Services, Pricing, Availability, And Any Other Details, It Is Recommended To Contact Us Directly Through The Provided Contact Information On This Website. Thank You For Visiting Our Website!`}</span>
        </p>
        {/* <p className="p-0 text-sm text-center">
          All Rights Reserved. &copy; {new Date().getFullYear()}
        </p> */}
      </div>
      <div className="wa-button">
        <Link
          href={`https://wa.me/+916360949350`}
          className="btn wa-button--icon"
        >
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
