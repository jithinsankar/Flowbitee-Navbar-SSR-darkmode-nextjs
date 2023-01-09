import React from "react";
import { Navbar } from "flowbite-react";

import Navlink from "./Navlink";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Navbar_c = () => {
  return (
    <Navbar fluid={true} rounded={false}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <ThemeSwitch />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navlink href="/">Home</Navlink>
        <Navlink href="/About">About</Navlink>
        <Navlink href="/Services">Services</Navlink>
        <Navlink href="/Contact">Contact</Navlink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_c;
