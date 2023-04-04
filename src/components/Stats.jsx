import ProgressBar from "@/shared/ProgressBar";
import StatsHeader from "@/shared/StatsHeader";
import Legacy from "../assets/legacy2.png";
import Image from "next/image";
import CoinBingPong from "./CoinBingPong";

export default function Stats() {
  return (
    <section className="px-8">
      <div className="py-1 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Tokenomics chart
            </h2>
            <p className="max-w-xl mx-auto my-4 text-base leading-relaxed text-gray-500 dark:text-gray-300">
              Total supply 170 Million
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <StatsHeader />
          </div>
          <section className="mt-5 z-[99999]">
            <div className="relative px-4 pb-8 pt-5 xl:pt-0 dark:text-gray-300 mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* <div className="w-full h-full relative flex items-center justify-center">
                <CoinBingPong />
              </div> */}
              <div className="px-5 mt-8">
                <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2 z-[9999]">
                  <div className="flex space-y-4 flex-col items-start">
                    <h5>
                      <span className="text-lg text-gray-700 dark:text-gray-300 mr-4">
                        Legal Works
                      </span>
                      <span className="text-purple-600 text-lg font-semibold">
                        3%
                      </span>
                    </h5>
                    <ProgressBar
                      progress={3}
                      bg="bg-gradient-to-r from-purple-400 to-purple-600"
                    />
                  </div>
                  <div className="flex flex-col space-y-4 items-start">
                    <h5>
                      <span className="text-lg text-gray-700 dark:text-gray-300 mr-4">
                        Projects Funding
                      </span>
                      <span className="text-red-500 text-lg font-semibold">
                        50%
                      </span>
                    </h5>
                    <ProgressBar
                      progress={50}
                      bg="bg-gradient-to-r from-red-300 to-red-500"
                    />
                  </div>
                  <div className="flex space-y-4 flex-col items-start">
                    <h5>
                      <span className="text-lg text-gray-700 dark:text-gray-300 mr-4">
                        Promotion & Marketing
                      </span>
                      <span className="text-cyan-500 text-lg font-semibold">
                        5%
                      </span>
                    </h5>
                    <ProgressBar
                      progress={5}
                      bg="bg-gradient-to-r from-cyan-300 to-cyan-500"
                    />
                  </div>
                  <div className="flex space-y-4 flex-col items-start">
                    <h5>
                      <span className="text-lg text-gray-700 dark:text-gray-300 mr-4">
                        Team & Partners
                      </span>
                      <span className="text-green-500 text-lg font-semibold">
                        7%
                      </span>
                    </h5>
                    <ProgressBar
                      progress={7}
                      bg="bg-gradient-to-r from-green-300 to-green-500"
                    />
                  </div>
                  <div className="flex space-y-4 flex-col items-start">
                    <h5>
                      <span className="text-lg text-gray-700 dark:text-gray-300 mr-4">
                        Security Reserve
                      </span>
                      <span className="text-blue-600 text-lg font-semibold">
                        15%
                      </span>
                    </h5>
                    <ProgressBar
                      progress={15}
                      bg="bg-gradient-to-r from-blue-300 to-blue-600"
                    />
                  </div>
                  <div className="flex space-y-4 flex-col items-start">
                    <h5>
                      <span className="text-lg text-gray-700 dark:text-gray-300 mr-4">
                        Camelink Development
                      </span>
                      <span className="text-orange-600 text-lg font-semibold">
                        20 %
                      </span>
                    </h5>
                    <ProgressBar
                      progress={20}
                      bg="bg-gradient-to-r from-orange-300 to-orange-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
