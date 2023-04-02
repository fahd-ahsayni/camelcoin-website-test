import About from "@/components/About";
import Header from "@/components/Header";
import Ico from "@/components/Ico";
import LogoCloud from "@/components/LogoCloud";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import TheHump from "@/components/TheHump";
import ProgressBar from "@/shared/ProgressBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen overflow-x-hidden">
        <div className="w-full flex justify-center items-center">
          <nav className="container pt-4 lg:px-16 md:px-12 px-8 fixed top-0 z-[9999]">
            <Navbar />
          </nav>
        </div>
        <Header>
          <LogoCloud />
        </Header>
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
        {/* <Stats /> */}
      </main>
    </>
  );
}
