"use client";
import { Menu, Phone } from "lucide-react";
import React, { useState } from "react";
import navigation from "./navigation";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
// const iconSize = "25";

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
              src="/images/logo_pine_forest.png"
              width={200}
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
                <Link href={item.path} className="link">
                  {item.label}
                </Link>
              </li>
            ))}
          </menu>
        </nav>
        <div className="header--call-now">
          <Link
            href="tel:+916360949350"
            className="flex justify-between items-center text-xl font-semibold gap-2 bg-primary text-white px-4 py-2.5 rounded-full  transition-colors hover:bg-transparent hover:text-primary border-2 border-primary"
          >
            <Phone /> +91 6360949350
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
