import { Header } from "@/components/Header/page";
import { Hero } from "./Hero/page";
import { About } from "./About/page";
import FrontEnd from "./FrontEnd/page";
import Backend from "./Backend/page";
import Database from "./Database/page";
import Project from "./Project/page";
import Experience from "./Experience/page";
import Contact from "./Contact/page";
import Footer from "@/components/Footer/page";


export default function Home() {
  return (
    <>
      <div className="bg-slate-900 ">
        <Header />
        <section id="home">
        <Hero />
        </section>
        <section id="about">
        <About />
        </section>
        <section id="project">
        <Project />
        </section>
        <section id="frontend">
        <FrontEnd />
        </section>
        <section id="backend">
        <Backend />
        </section>
        <Database />
        <Experience />
        <section id="contact">
        <Contact/>
        </section>
        <Footer/>
      </div>
    </>
  );
}
