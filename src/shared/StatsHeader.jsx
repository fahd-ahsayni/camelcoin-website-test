import Logo from "../assets/logo.png"
import Image from "next/image"

export default function StatsHeader() {
    return (
        <>
            <div className="stats z-[0] bg-gray-50 dark:bg-primary-dark-light shadow mt-4">

                <div className="stat">
                    <div className="stat-figure text-camel-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title dark:text-gray-50 font-semibold">Minted Supply</div>
                    <div className="stat-value text-camel-600">100.0M</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-camel-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title dark:text-gray-50 font-semibold">Circulating supply</div>
                    <div className="stat-value text-camel-600">5.0M</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online w-20">
                        <Image className="w-52" alt="camlcoin" src={Logo} />
                        </div>
                    </div>
                    <div className="stat-value dark:text-gray-50">86%</div>
                    <div className="stat-title dark:text-gray-300 font-semibold">Tasks done</div>
                    <div className="stat-desc text-camel-600">31 tasks remaining</div>
                </div>

            </div>
        </>
    )
}
