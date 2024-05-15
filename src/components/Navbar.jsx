import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";

// react icons font 6
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaXTwitter,
  FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // NavItems
  const navItems = [
    { path: "/", Link: "Home" },
    { path: "/services", Link: "Services" },
    { path: "/about", Link: "About" },
    { path: "/blogs", Link: "Blogs" },
    { path: "/contact", Link: "Contact" },
  ];
  return (
    <header className="bg-black fixed top-0 left-0 right-0">
      <nav className="container py-4 md:py-6 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          YA<span className="text-orange-500">Blog's</span>
        </a>

        {/* Nav Items for dekstop */}
        <ul className="hidden lg:flex items-center text-white gap-8 ms-4">
          {navItems.map(({ path, Link }, index) => (
            <li key={index} className="text-md">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-orange-500" : ""
                }
              >
                {Link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}
        <div className="text-white hidden lg:flex items-center gap-4 text-xl">
          <a
            href="/"
            className="hover:text-orange-500 transition-colors duration-300 ease"
          >
            <FaFacebook />
          </a>
          <a
            href="/"
            className="hover:text-orange-500 transition-colors duration-300 ease"
          >
            <FaDribbble />
          </a>
          <a
            href="/"
            className="hover:text-orange-500 transition-colors duration-300 ease"
          >
            <FaXTwitter />
          </a>
          <button className="ms-2 bg-orange-500 text-base px-6 py-2 text-white font-medium rounded hover:bg-white hover:text-orange-500 hover:outline-none transition-all duration-200 ease-in">
            Log in
          </button>
        </div>

        {/* Mobile Menu icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl text-white cursor-pointer transition-all ease duration-300"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* Mobile menu link */}

      <Transition
        show={isMenuOpen}
        enter="transition ease-in-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="container pt-4 pb-8 border-t-2 border-white">
          <ul className="lg:hidden flex flex-col gap-8 text-white ">
            {navItems.map(({ path, Link }, index) => (
              <li key={index} className="text-md">
                <NavLink onClick={toggleMenu} to={path}>
                  {Link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Navbar;
