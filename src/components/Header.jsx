import { Button } from "@/client/material-tailwind";
import { GiCamel } from "react-icons/gi";
import LogoIcon from "../assets/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/shared/Modal";
import Legacy from "../assets/legacy.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header({ children }) {
  return (
    <div>
      <div className="relative isolate px-6 pt-8 lg:px-8 dark:bg-[#0d1117]">
        <div className="w-full h-72 bg-gradient-to-b from-transparent dark:to-[#0d1117] dark:via-[#0d1117] to-blue-gray-50 via-blue-gray-50 -z-[100] absolute -bottom-24 left-0" />
        <div className="w-[3000px] absolute top-0 h-72 left-0 bg-gradient-to-b dark:from-black from-blue-gray-50 to-transparent" />
        <div className="absolute z-[-999] w-full h-full flex justify-center items-start">
          <Image
            src={Legacy}
            className="opacity-20 dark:opacity-30 lg:-ml-16 -ml-12"
            alt="camelcoin legacy background"
          />
          {/* <div
            className="w-full h-full opacity-50 lg:-ml-16 -ml-12"
            style={{
              backgroundImage: `url(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2378909c' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
              )`,
            }}
          /> */}
        </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f9b02a]/50 via-[#eba31c] to-[#cd9c3f]/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto relative max-w-2xl pt-12 sm:pt-28 lg:pt-28 z-[9999]">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 dark:text-gray-300 text-gray-700 ring-1 dark:ring-gray-400/10 ring-gray-800/10 hover:dark:ring-gray-300/20 hover:ring-gray-700/20 bg-gray-200/50 dark:bg-white-dark/10">
              Welcome To Fairtrade Revolution.{" "}
              <a
                href="#"
                className="font-semibold dark:text-yellow-500 text-yellow-700"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <motion.div
            drag
            whileDrag={{ zIndex: 9999 }}
            className="w-full camelcoin-conatiner z-[9999] flex justify-center items-center pb-8 pt-1"
          >
            <Image
              src={LogoIcon}
              alt="camelcoin logo"
              className="md:w-52 -z-[1] w-32 drop-shadow-2xl camelcoin"
            />
          </motion.div>
          <div className="text-center">
            <h1 className="text-4xl font-bold drop-shadow-2xl tracking-tight dark:text-white text-gray-900 sm:text-6xl">
              The CamelCoin Project
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-gray-300 text-gray-700">
              Join the decentralized finance revolution with Camelcoin - the
              secure and efficient digital currency that anyone can use with
              ease.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <label
                htmlFor="my-modal-3"
                className="cursor-pointer px-8 py-3 uppercase font-semibold text-[13px] text-center text-white transition hover:scale-105 duration-300 rounded-lg hover:shadow-xl ease bg-gradient-to-tr from-[#cd9c3f] to-[#a54b1e] md:w-auto"
              >
                Buy Camelcoin Now !
              </label>
              
              <Modal />
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f1ab29] via-[#b57f1c]/50 to-[#f7c110] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
}
