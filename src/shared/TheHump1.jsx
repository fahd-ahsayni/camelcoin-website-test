import { motion } from "framer-motion";
import Image from "next/image";
import TheHumpImage from "../assets/theHump.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function TheHump1() {
  const [text] = useTypewriter({
    words: ["Order", "Tracking", "NFTs"],
    loop: 0,
  });
  return (
    <div className="px-4 mx-auto overflow-hidden bg-gradient-to-tr from-[#cd9c3f] via-[#cd9c3f] to-[#a54b1e] max-w-7xl sm:px-6 lg:px-8 shadow-lg rounded-lg">
      <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
          <div>
            <h2 className="text-3xl h-[150px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
              <span className="block">One Wallet App For </span>
              <span>{text} <Cursor cursorColor="#fff" cursorStyle="_" /></span>
            </h2>
            <p className="mt-4 text-base text-gray-50">
              From the Hump Wallet App, center of the system, you can order and
              track your products from anywhere at anytime. Valuables will be
              also securised with NFT acts of property. NEW!!! NFT sponsorship
              You can own and sponsor your own ethical entities from your
              wallet. First camels from isolated areas but also hives, trees and
              even rare animals to fight against illegal traffic.
            </p>
            <div className="flex flex-row items-center mt-8 space-x-4 lg:mt-12">
              <a href="#" title="" className="flex" role="button">
                <img
                  className="w-auto h-14"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg"
                  alt=""
                />
              </a>
              <a href="#" title="" className="flex" role="button">
                <img
                  className="w-auto h-14"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="relative flex justify-center items-center w-full px-12">
            <svg
              className="absolute inset-x-0 bottom-0 left-1/2 -translate-x-1/2 -mb-48 lg:-mb-72 text-[#f6cc4d] w-[460px] h-[460px] sm:w-[600px] sm:h-[600px]"
              fill="currentColor"
              viewBox="0 0 8 8"
            >
              <circle cx={4} cy={4} r={3} />
            </svg>
            <motion.div
              initial={{ y: 400 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="mockup-phone relative -mb-32 lg:-mb-52">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1">
                    <Image
                      className="w-full h-full"
                      src={TheHumpImage}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
