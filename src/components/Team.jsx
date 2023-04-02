import Person1 from "../assets/person1.png";
import Person8 from "../assets/person8.png";
import Person3 from "../assets/person3.png";
import Person4 from "../assets/person4.png";
import Image from "next/image";

export default function Team() {
  return (
    <div className="py-20">
      <div className="xl:container mx-auto px-6 md:px-12">
        <div className="mb-16 md:w-2/3 lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Meet our <span className="text-yellow-700 dark:text-yellow-500">Incredible Team</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            camelcoin prides itself not only on award-winning technology, but
            also on the talent of its people of some of the brightest minds and
            most experienced executives in business.
          </p>
        </div>
        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <Image
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src={Person1}
              alt="Issa"
              loading="lazy"
              width={640}
              height={805}
            />
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                  Issa Jeremy Vector
                </h4>
                <span className="block text-sm text-gray-500">CEO-Founder</span>
              </div>
              <p className="mt-8 text-gray-300 dark:text-gray-600">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <Image
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src={Person8}
              alt="reda"
              loading="lazy"
              width={640}
              height={805}
            />
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                  Reda EL BAKRAOUY
                </h4>
                <span className="block text-sm text-gray-500">
                  Design Operation Manager
                </span>
              </div>
              <p className="mt-8 text-gray-300 dark:text-gray-600">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <Image
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src={Person3}
              alt="kacem"
              loading="lazy"
              width={640}
              height={805}
            />
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                  Lucas KACEM
                </h4>
                <span className="block text-sm text-gray-500">
                  CEO-Digital Unicorn
                </span>
              </div>
              <p className="mt-8 text-gray-300 dark:text-gray-600">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
          <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
            <Image
              className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src={Person4}
              alt="woman"
              loading="lazy"
              width={640}
              height={805}
            />
            <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
              <div>
                <h4 className="text-xl font-semibold dark:text-gray-700 text-white">
                  Bryan TRUONG
                </h4>
                <span className="block text-sm text-gray-500">
                  Chief Development Officer
                </span>
              </div>
              <p className="mt-8 text-gray-300 dark:text-gray-600">
                Quae labore quia tempora dolor impedit. Possimus, sint ducimus
                ipsam?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
