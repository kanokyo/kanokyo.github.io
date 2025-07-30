import AboutME from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Test from "@/components/test";
import Skills from "@/components/Skills";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className=" bg-slate-950">
        {/* <Test /> */}
        <Header />
        <div className="p-5">
          <Hero />
          <AboutME />
          <Skills />
          <Works />
        </div>
      </div>
    </div>
  );
}
