import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="" className="bg-black text-white p-5">
      <div className="container">
        <p className="p-0 text-center">
          All Rights Reserved. &copy; 2017 - {new Date().getFullYear()}
        </p>
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
