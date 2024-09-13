"use client";
import { HamIcon, Menu, Phone } from "lucide-react";
import React, { useState } from "react";
import navigation from "./navigation";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
const iconSize = "25";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header border-b-4 border-primary">
      <div className="header--wrapper container">
        <div className="branding">
          <div className="logo">
            <Image
              src="/images/logo.png"
              width={170}
              height={100}
              className="logo"
              alt=""
            />
          </div>
        </div>
        <nav className="main-nav">
          <menu>
            {navigation.map((item, index) => (
              <li key={index} className="link-item">
                <Link href={item.path} className="link ">
                  {item.label}
                </Link>
              </li>
            ))}
          </menu>
        </nav>
        <div className="header--call-now">
          <Link
            href="tel:+911234567890"
            className="flex justify-between items-center text-xl font-semibold gap-2 hover:text-primary transition-colors"
          >
            <Phone size="30" className="text-primary " /> +91 12345-67890
          </Link>
        </div>
        <div onClick={toggleMenu} className="mobile-toggle">
          <button>
            <Menu className="toggle" size={43} />
          </button>
        </div>
        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
