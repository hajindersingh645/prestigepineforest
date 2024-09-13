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
    <header className="header">
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
                <Link href={item.path} className="link">
                  {item.label}
                </Link>
              </li>
            ))}
          </menu>
        </nav>
        <div className="header--call-now">
          <Link
            href="tel:+918296818834"
            className="flex justify-between items-center text-xl font-semibold gap-2 hover:text-primary transition-colors"
          >
            <Phone size="30" className="text-primary " /> +91 82968-18834
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
