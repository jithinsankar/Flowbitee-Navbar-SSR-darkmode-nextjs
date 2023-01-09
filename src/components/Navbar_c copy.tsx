import React from "react";
import { Navbar } from "flowbite-react";
import { usePathname } from "next/navigation";
import Navlink from "./Navlink";

const Navbar_c = () => {
  return (
    <Navbar fluid={true} rounded={true}>
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
      <Navbar.Toggle />
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
