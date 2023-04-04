import Image from "next/image";
import Legacy from "@/assets/about.png";
import { Button } from "@/client/material-tailwind";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section>
      <motion.div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="relative h-64 sm:h-80 lg:h-full"
            >
              <Image
                alt="House"
                src={Legacy}
                className="absolute shadow-xl inset-0 h-full w-full object-cover"
                height={400}
                width={400}
              />
            </motion.div>
          </div>
          <div className="relative flex items-center bg-gray-100 dark:bg-primary-dark-light shadow-xl">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100 lg:dark:bg-primary-dark-light" />
            <div className="absolute w-full h-full flex justify-center items-start">
              {/* <Image src={Legacy} className="opacity-50 lg:-ml-16 -ml-12" alt="camelcoin legacy background"/> */}
            </div>
            <div className="p-8 sm:p-16 lg:p-24 z-[999]">
              <h3 className="text-camel-600 text-lg font-semibold tracking-wider">
                A Fulfilled Ecosystem
              </h3>
              <h2 className="text-2xl font-bold sm:text-3xl dark:text-gray-50 text-gray-900">
                From projects to your house in a fairtrade way
              </h2>
              <p className="mt-4 text-gray-700 font-semibold dark:text-gray-300">
                A cryptocurrency based in the Sahara, near the largest
                livestocks and wild animals.
              </p>
              <p className="text-sm dark:text-gray-500 text-gray-600 mt-2.5">
                The camelcoin team aims to create and develop a cryptocurrency
                (Camelcoin), design its own information exchange network
                (CameLink blockchain) and facilitate the democratization and
                recognition of camel products in the world. This triple solution
                will collectively help support the economic development of all
                activities around camelids, stimulate innovation in all sectors
                of these activities (food, cosmetics, tourism, textiles, sports,
                etc.) and improve the position of these markets globally as well
                as create new income generating activities in particular areas
                in need. This whole ecosystem will then be open to 200 limited
                similar projects and expand the natural products available in
                the platform to thousands and all needs (oils, honeys, herbs...)
              </p>
              <span
                href="#"
                className="mt-6 font-semibold inline-block cursor-pointer rounded group text-gray-700 text-sm hover:text-amber-500 dark:text-gray-100"
              >
                Read more{" "}
                <span
                  aria-hidden="true"
                  className="group-hover:pl-1 transition-all"
                >
                  &rarr;
                </span>
              </span>
              <div className="flex flex-col md:flex-row items-center justify-start space-x-0 md:space-y-0 md:space-x-6 space-y-4 mt-8">
                <button className="btn-block inline-block font-semibold rounded cursor-pointer bg-camel-600 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-camel-700 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-camel-700 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]">
                  project whitepaper
                </button>
                <button className="btn-block inline-block font-semibold rounded cursor-pointer bg-camel-600 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-camel-700 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-camel-700 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]">
                  blockchaine
                </button>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-start mt-4 md:mt-3 space-x-0 md:space-y-0 space-y-4 md:space-x-6">
                <button className="btn-block inline-block font-semibold rounded cursor-pointer bg-camel-600 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-camel-700 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-camel-700 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]">
                  project greenpaper
                </button>
                <button className="btn-block inline-block font-semibold rounded cursor-pointer bg-camel-600 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-camel-700 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-camel-700 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]">
                  camelcoin pitch deck
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
