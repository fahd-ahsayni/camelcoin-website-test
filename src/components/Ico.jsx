import {
  GiCamel,
  GiProgression,
  GiCubeforce,
} from "react-icons/gi";
import { AiOutlineAppstore, AiOutlineFileDone } from "react-icons/ai";
import { IoOptions } from "react-icons/io5";

const features = [
  {
    name: "CameLink Blockchain",
    description:
      "Our POS blockchain enables swift and cheap transactions, With the Hump app, we track and secure ethical commerce actions, Ensuring fair trade and transparency, our system creates satisfaction.",
    icon: GiCubeforce,
  },
  {
    name: "Volume Strategy",
    description:
      "The Camelcoin project partners will accept CML as payment for 5% to 25% of their turnover on the CamelZone platform. This will increase daily transaction volumes and the utility value of Camelcoin.",
    icon: GiProgression,
  },
  {
    name: "The Hump App",
    description:
      "The Hump is a wallet app for safe storage and staking of Camelcoin and upcoming tokens. It also tracks and scans for producers and buyers on CamelZone.",
    icon: AiOutlineAppstore,
  },
  {
    name: "Staking Options",
    description:
      "The Hump wallet app offers staking options for holding Camelcoin (CML), with monthly rewards based on the amount held. This increases rarity and potential price appreciation of Camelcoin.",
    icon: IoOptions,
  },
  {
    name: "CamelZone Platform",
    description:
      "CameLink will be the first trustlabel blockchain, approving only ethical projects on CamelZone. This diversifies products and users, increasing transaction volumes.",
    icon: GiCamel,
  },
  {
    name: "200 Smartcontract Limited",
    description:
      "CameLink limits smart contract creation and approves only ethical projects to sell on CamelZone. This diversifies products and users, increasing transaction volumes.",
    icon: AiOutlineFileDone,
  },
];

export default function Ico() {
  return (
    <div className="relative py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 dark:text-gray-50 sm:text-4xl">
          Reason For The Success Of{" "}
          <span className="text-yellow-700 dark:text-yellow-500">
            Camelcoin
          </span>{" "}
          Crypto-Economy
        </p>
        <p className="mx-auto mt-5 max-w-prose text-gray-500 dark:text-gray-300">
          Our economic system relies on supply and demand, Camelcoin{"'"}s
          business model aims to expand its customer base, By managing its
          services and users, the value of Camelcoin elevates.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, key) => (
              <div key={key} className="pt-6">
                <div className="flow-root w-full h-full rounded-lg bg-gray-50 dark:bg-primary-dark-light px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-gradient-to-br from-yellow-800 via-yellow-700 to-yellow-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
