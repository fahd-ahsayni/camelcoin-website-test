import { useEffect, useState } from "react";
import { BiHomeAlt, BiMoon, BiSun } from "react-icons/bi";
import { GiCamel, GiCamelHead } from "react-icons/gi";
import { motion } from "framer-motion";
import Link from "next/link";
import { navVariants } from "@/constants/motionVariants";
import { IoStatsChartSharp } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";
import { Tooltip } from "../client/material-tailwind";
import { RiTeamFill } from "react-icons/ri";
import { HiMail } from "react-icons/hi";

const navItems = [
  {
    id: 1,
    name: "Camelcoin.io",
    href: "/",
    icon: <BiHomeAlt className="w-5 h-5 text-gray-100" />,
  },
  {
    id: 2,
    name: "About",
    href: "/about",
    icon: <GiCamel className="w-5 h-5 text-gray-100" />,
  },
  {
    id: 3,
    name: "Ico",
    href: "/ico",
    icon: <VscSettings className="w-5 h-5 text-gray-100" />,
  },
  {
    id: 4,
    name: "Hump",
    href: "/hump",
    icon: <GiCamelHead className="w-5 h-5 text-gray-100" />,
  },
  {
    id: 5,
    name: "Satats",
    href: "/stats",
    icon: <IoStatsChartSharp className="w-5 h-5 text-gray-100" />,
  },
  {
    id: 6,
    name: "Team",
    href: "/team",
    icon: <RiTeamFill className="w-5 h-5 text-gray-100" />,
  },
  {
    id: 7,
    name: "Contact",
    href: "/contact",
    icon: <HiMail className="w-5 h-5 text-gray-100" />,
  },
];

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
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
      className="navbar md:px-16 px-16 "
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
          <button
            onClick={toggleLinks}
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
          </button>
          {showLinks && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=""
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute h-64 w-64 rounded-full flex justify-center items-center"
              >
                {navItems.map((item, index) => (
                  <Link key={item.id} href={item.href}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        className="absolute flex items-center justify-center rounded-full h-16 w-16 font-semibold cursor-pointer bg-camel-600 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-camel-700 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-camel-700 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]"
                        style={{
                          left: `${
                            Math.sin((index / navItems.length) * Math.PI * 2) *
                              120 +
                            120
                          }px`,
                          top: `${
                            Math.cos((index / navItems.length) * Math.PI * 2) *
                              120 +
                            120
                          }px`,
                        }}
                      >
                        {item.icon}
                      </motion.button>
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          )}
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
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
