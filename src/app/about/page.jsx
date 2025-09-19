import Image from "next/image";
import Team from "../components/Pages/aboutPage/Team";
import About from "../components/Pages/aboutPage/About";
import element1 from "../assets/image/elements/element1.png";
import PagesHero from "../components/sheard/pagesHero/PagesHero";
import ContactFrom from "../contact/ContactFrom";
import ContactInfo from "../contact/ContactInfo";

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
        title="Get To Know Us"
        text="Discover our passion for innovation and technology. At Notex, we craft digital solutions with expertise, creating exceptional experiences for our clients in every project we undertake."
      />
      <About />
      <Team />

      <PagesHero
        title="Contact"
        text="Connect with us effortlessly through our Contact page. Whether you have inquiries, suggestions, or just want to say hello, we are here to listen and respond promptly. Reach out today!"
      />
      <ContactFrom />
      <ContactInfo />
    </section>
  );
}
