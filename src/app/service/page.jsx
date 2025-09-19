import Image from "next/image";
import element1 from "../assets/image/elements/element1.png";
import PagesHero from "../components/sheard/pagesHero/PagesHero";
import Services from "../components/Pages/servicesPage/ServicesItems";

export default function page() {
  return (
    <section>
      <Image
        src={element1}
        alt="element1"
        className=" h-[50rem] w-[50rem] opacity-50 fixed -top-12 -right-96 z-[1]"
      />
      <Image
        src={element1}
        alt="element1"
        className=" h-[50rem] w-[50rem] opacity-50 fixed top-48 -left-[26rem] z-[1]"
      />
      <PagesHero
        title="Awesome Service"
        text="At Notex, we offer unparalleled services, blending cutting-edge technology with creative solutions. From web and app development to digital marketing, we craft experiences that define innovation and excellence"
      />
      <Services />
    </section>
  );
}
