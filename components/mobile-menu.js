import React from "react";
import navigation from "./navigation";
import Image from "next/image";
import Link from "next/link";
import { Phone, X } from "lucide-react";
const iconSize = "25";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? " open" : "closed"}`}>
      <div className="mobile-menu--header">
        <div className="logo">
          <Image
            src="/images/logo.png"
            width={170}
            height={100}
            className="logo"
            alt=""
          />
        </div>
        <div onClick={toggleMenu} className="close">
          <button>
            <X size={45} className="text-primary" />{" "}
          </button>
        </div>
      </div>
      <nav className="mobile-menu--nav">
        <menu className="">
          {navigation.map((item, index) => (
            <li key={index} className="link-item">
              <Link onClick={toggleMenu} href={item.path} className="link">
                {item.label}
              </Link>
            </li>
          ))}
        </menu>
      </nav>
      <div className="call-now text-center">
        <Link href="tel:+911234567890" className="btn inline-block mx-auto">
          <span className="flex items-center">
            <Phone size={iconSize} /> <span>+91 12345-67890</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
