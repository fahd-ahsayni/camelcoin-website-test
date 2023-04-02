import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { GiCamel } from "react-icons/gi";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import LogoIconDark from "../assets/logo_icon.png";
import LogoIconLight from "../assets/logo_icon_light.png";
import { Button } from "@material-tailwind/react";
import { navVariants } from "@/constants/motionVariants";

const Navbar = () => {
  // State for dark mode and whether to show navbar
  const [darkMode, setDarkMode] = useState("light");
  const [showNavbar, setShowNavbar] = useState(false);

  // Function to update showNavbar state based on scroll position
  const handleScroll = () => setShowNavbar(window.scrollY > 100);

  useEffect(() => {
    // Add scroll event listener to update navbar visibility
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set initial dark mode based on user's preferred color scheme
  useEffect(() => {
    const isDarkModePreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(isDarkModePreferred ? "dark" : "light");
  }, []);

  // Update HTML element class to toggle dark mode styles
  useEffect(() => {
    const htmlEl = document.documentElement;

    if (darkMode === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
  }, [darkMode]);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    const newMode = darkMode === "light" ? "dark" : "light";
    setDarkMode(newMode);

    // Store dark mode preference in localStorage
    localStorage.setItem("darkMode", newMode);
  };

  // Retrieve dark mode preference from localStorage on mount
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode) setDarkMode(storedDarkMode);
  }, []);

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`navbar rounded-lg ${
        showNavbar
          ? "backdrop-blur shadow-sm dark:shadow-md bg-white/70 dark:bg-[#0d1117]/70"
          : "bg-transparent"
      }`}
    >
      <div className="navbar-start">
        <motion.div
          initial={{
            x: -400,
            opacity: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="dropdown"
        >
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle dark:hover:bg-black/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 dark:text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-primary-dark-light dark:shadow-2xl"
          >
            <li>
              <Link
                href="#"
                className="dark:text-gray-200 hover:dark:bg-neutral"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#qui_nous_sommes"
                className="dark:text-gray-200 hover:dark:bg-neutral"
              >
                services
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="navbar-center md:block hidden">
        <a className="btn btn-ghost normal-case text-xl dark:text-blue-gray-50 text-gray-900">
          <GiCamel />
          <span className="ml-4">Camelcoin.io</span>
        </a>
      </div>
      <motion.div
        initial={{
          x: 400,
          opacity: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="navbar-end"
      >
        <button
          onClick={toggleDarkMode}
          className="btn btn-ghost btn-circle dark:hover:bg-black/10"
        >
          {darkMode === "light" ? (
            <BiMoon className="h-5 w-5 text-gray-900" />
          ) : (
            <BiSun className="h-5 w-5 text-gray-100" />
          )}
        </button>
        <span className="btn btn-ghost btn-circle dark:hover:bg-black/10">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Image
                  src={darkMode === "light" ? LogoIconLight : LogoIconDark}
                  alt="logo camelcoin"
                  className="w-5 h-[22px]"
                />
                <span className="badge badge-sm badge-warning text-black indicator-item">
                  8
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body dark:bg-primary-dark-light dark:shadow-2xl rounded-md">
                <span className="font-bold text-lg text-gray-900 dark:text-gray-100">
                  8 Items
                </span>
                <span className="text-yellow-700 dark:text-yellow-500">
                  Subtotal: $999
                </span>
                <div className="card-actions">
                  <Button
                    variant="gradient"
                    color="yellow"
                    className="btn-block"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
