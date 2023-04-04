import About from "@/components/About";
import CoinBingPong from "@/components/CoinBingPong";
import Header from "@/components/Header";
import Ico from "@/components/Ico";
import LogoCloud from "@/components/LogoCloud";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import TheHump from "@/components/TheHump";
import Circles from "@/shared/Circles";
import ProgressBar from "@/shared/ProgressBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full overflow-x-hidden">
        <div className="w-full flex justify-center items-center">
          <nav className="container pt-4 lg:px-16 md:px-12 px-8 fixed top-0 z-[9999]">
            <Navbar />
          </nav>
        </div>
        <Header>
        </Header>
        <Circles />
        <LogoCloud />
        <div className="relative">
          <About />
          <div className="z-0 opacity-50 gradient-02" />
          <Team />
        </div>
        <div className="relative">
          <Ico />
          <div className="z-0 opacity-50 gradient-01" />
          <TheHump />
        </div>
        <Stats />
      </main>
    </>
  );
}
