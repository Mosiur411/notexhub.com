import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import About from "../aboutPage/About";
import Team from "../aboutPage/Team";
import PricingSection from "../pricing/pricing";
import Projects from "../projectsPage/Projects";
import Services from "../servicesPage/ServicesItems";
import Hero from "./Hero";
import HeroImg from "./HeroImg";

export default function Home() {
  return (
    <div>
      <Hero />
      <HeroImg />
      <About />
      <Services />
      <Projects />
      <WhyChooseUs></WhyChooseUs>
      <PricingSection />
    </div>
  );
}
