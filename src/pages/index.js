import Head from "next/head";

import Coin from "../assets/logo.png";
import Legacy from "../assets/legacy.png";
import Image from "next/image";
import Modal from "@/shared/Modal";
import { Button } from "@material-tailwind/react";
import { BsPlayCircle } from "react-icons/bs";
import LogoCloud from "@/components/LogoCloud";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-blue-gray-50 dark:bg-[#0d1117] md:overflow-y-hidden overflow-y-auto overflow-x-hidden">
        <div className="w-screen h-full absolute top-0 left-0 opacity-5 dark:opacity-40">
          <Image
            src={Legacy}
            alt="background"
            placeholder="blur"
            className="w-full h-full"
          />
        </div>
        <div className="absolute dark:from-[#0d1117] dark:via-[#0d1117] top-0 left-0 w-full opacity-50 h-96 bg-gradient-to-b from-blue-gray-50 via-blue-gray-50 to-transparent" />
        <div className="absolute dark:from-[#0d1117] dark:via-[#0d1117] bottom-0 left-0 w-full h-40 opacity-60 bg-gradient-to-t from-blue-gray-50 via-blue-gray-50 to-transparent" />
        <div className="relative isolate px-6 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#E4A11B] to-[#EAB54C] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center flex-col w-screen h-screen max-w-2xl mx-auto"
          >
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 dark:text-gray-300 text-gray-700 ring-1 dark:ring-gray-400/10 ring-gray-800/10 hover:dark:ring-gray-300/20 hover:ring-gray-700/20 bg-gray-200/50 dark:bg-white-dark/10">
                Welcome To Fairtrade Revolution.{" "}
                <a href="#" className="font-semibold text-camel-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="w-full justify-center items-center flex my-3">
              <Image className="w-36 camelcoin" src={Coin} alt="" />
            </div>
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
                  className="inline-block font-semibold rounded cursor-pointer bg-camel-600 px-6 pt-2.5 pb-2 text-xs uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-camel-700 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-camel-700 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]"
                >
                  Buy Camelcoin Now !
                </label>
                <label
                  htmlFor="my-modal-2"
                  className="btn btn-ghost space-x-4 dark:text-gray-300"
                >
                  <span>Watch video</span>
                  <BsPlayCircle className="w-8 h-8" />
                </label>

                <Modal idModel="my-modal-3">
                  <div className="mockup-window border bg-base-300">
                    <div className="flex justify-center px-4 py-16 bg-blue-gray-50">
                      <div className="flex flex-col px-12 items-center justify-center space-y-4">
                        <Button
                          variant="gradient"
                          color="orange"
                          className="btn-block"
                        >
                          Buy Camelcoin on XT.com
                        </Button>
                        <Button
                          variant="gradient"
                          color="blue"
                          className="btn-block"
                        >
                          Buy Now on cameleader
                        </Button>
                      </div>
                    </div>
                  </div>
                </Modal>
                <Modal idModel="my-modal-2">
                  <div className="mockup-window border bg-base-300">
                    <div className="flex justify-center p-4 bg-blue-gray-50">
                      <div
                        className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                        style={{ paddingTop: "56.25%" }}
                      >
                        <iframe
                          className="embed-responsive-item rounded-md absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                          src="https://www.youtube.com/embed/ppajh0EQ38s"
                          allowFullScreen=""
                          data-gtm-yt-inspected-2340190_699="true"
                          id={240632615}
                        />
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
            <LogoCloud />
          </motion.div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#EAB54C] to-[#E4A11B] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
