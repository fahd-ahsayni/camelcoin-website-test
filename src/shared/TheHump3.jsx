import { motion } from "framer-motion";
import Image from "next/image";
import hump1 from "../assets/thrhump1.png";

export default function TheHump3() {
  const Images = [hump1, hump1, hump1, hump1];
  return (
    <div>
      <div className=" z-[109] mx-auto text-center">
        <h2 className="mb-4 capitalize text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Revolutionary design
        </h2>
        <p className="max-w-xl mx-auto my-4 text-base leading-relaxed text-gray-500 dark:text-gray-300">
          Have yourself a look on the easy to use and awesome ergonomy of The
          Hump.
        </p>
        <div class="grid mt-20 w-full lg:grid-cols-4 gap-4 justify-items-center md:grid-cols-2">
          <div>
            <Image src={hump1} alt="" className="w-40" />
          </div>
          <div>
            <Image src={hump1} alt="" className="w-40" />
          </div>
          <div>
            <Image src={hump1} alt="" className="w-40" />
          </div>
          <div>
            <Image src={hump1} alt="" className="w-40" />
          </div> 
        </div>
      </div>
    </div>
  );
}
