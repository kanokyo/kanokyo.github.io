import AboutME from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Test from "@/components/test";
import Skills from "@/components/Skills";
import Works from "@/components/Works";
import Contact from "@/components/contact";
import MailForm from "@/components/MailForm";

export default function Home() {
  return (
    <main className="">
      {/* <Test /> */}
      <Header />
      <Hero />
      <AboutME />
      <Skills />
      <Works />
      <Contact />
      <MailForm />
      <div id="mailForm"></div>
    </main>
  );
}
