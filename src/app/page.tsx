import AboutME from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Test from "@/components/test";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="h-full">
      <div className="relative h-full w-full bg-slate-950 ">
        {/* <Test /> */}
        <Header />
        <Hero />
        <AboutME />
        <Skills />
        <Works />
      </div>
    </div>
  );
}
