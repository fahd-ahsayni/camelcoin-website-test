import { Button } from "@/client/material-tailwind";
import LogoIcon from "../assets/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";
import Modal from "@/shared/Modal";
import Legacy from "../assets/legacy.png";
import { BsPlayCircle } from "react-icons/bs";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  return (
    <>
      <div className="relative overflow-hidden isolate px-6 pt-8 pb-16 lg:px-8">
        <div className="w-full  h-72 bg-gradient-to-b from-transparent dark:to-[#0d1117] dark:via-[#0d1117] to-blue-gray-50 via-blue-gray-50 -z-[100] absolute -bottom-24 left-0" />
        <div className="w-[3000px] absolute top-0 h-72 left-0 bg-gradient-to-b dark:from-black from-blue-gray-50 to-transparent" />
        <div className="">
          <div className="absolute z-[-999] w-full flex justify-center items-start">
            <Image
              src={Legacy}
              className="opacity-20 w-full object-cover dark:opacity-50 lg:-ml-16 -ml-12"
              alt="camelcoin legacy background"
            />
          </div>
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
              <a href="#" className="font-semibold text-camel-600">
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
    </>
  );
}
