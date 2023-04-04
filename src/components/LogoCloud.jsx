import Image from "next/image";
import logo1 from "@/assets/part1.png";
import logo2 from "@/assets/part2.png";
import logo3 from "@/assets/part3.png";
import logo4 from "@/assets/part4.png";
import logo5 from "@/assets/part5.png";
import logo6 from "@/assets/part6.png";

export default function LogoCloud() {
  return (
    <>
      <div className="flex flex-col mt-10 items-center w-screen">
        <div className="container relative z-[1] m-auto px-6 md:px-8">
          <div className="m-auto text-center md:w-8/12 lg:w-6/12">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl">
              Our Strategic <span className="text-camel-600">Partnerships</span>
            </h2>
          </div>
          <div className="m-auto mt-4 md:w-11/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="group rounded-xl border border-blue-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <Image
                  src={logo1}
                  className="contrast-0 w-16 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo airbnb"
                />
              </div>
              <div className="group rounded-xl border border-blue-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <Image
                  src={logo2}
                  className="contrast-0 w-16 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo microsoft"
                />
              </div>
              <div className="group rounded-xl border border-blue-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <Image
                  src={logo3}
                  className="contrast-0 w-16 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo ge"
                />
              </div>
              <div className="group rounded-xl border border-blue-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <Image
                  src={logo4}
                  className="contrast-0 w-16 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
              <div className="group rounded-xl border border-blue-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <Image
                  src={logo5}
                  className="contrast-0 w-16 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
              <div className="group rounded-xl border border-blue-gray-200 dark:border-gray-600 bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
                <Image
                  src={logo6}
                  className="contrast-0 w-16 transition group-hover:contrast-100"
                  loading="lazy"
                  alt="logo bissell"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
