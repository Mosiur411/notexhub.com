import Button from "@/app/components/sheard/button/Button";
import { BiCodeAlt, BiLink, BiLogoGithub } from "react-icons/bi";
import project1 from "../../../assets/image/project/project1.png";
import project2 from "../../../assets/image/project/project2.png";
import project3 from "../../../assets/image/project/project3.png";
import project4 from "../../../assets/image/project/project4.png";
import project5 from "../../../assets/image/project/project5.png";
import project6 from "../../../assets/image/project/project6.png";
import project7 from "../../../assets/image/project/project7.png";
import project8 from "../../../assets/image/project/project8.png";
import project9 from "../../../assets/image/project/project9.png";
import project10 from "../../../assets/image/project/project10.png";
import project11 from "../../../assets/image/project/project11.png";
import project12 from "../../../assets/image/project/project12.png";
import project13 from "../../../assets/image/project/project13.png";
import project14 from "../../../assets/image/project/project14.png";
import project15 from "../../../assets/image/project/project15.png";
import Image from "next/image";
import TitleBox from "../../uiKit/TitleBox";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      imgSrc: project1,
      title: "Icon Admission Aid",
      Animation: "fade-up",
      link: "https://iconadmissionaid.com/",
      hoverImgLeft: project1,
      hoverImgRight: project1,
    },
    {
      id: 2,
      imgSrc: project15,
      title: "Medico Phile",
      Animation: "fade-up",
      link: "https://medicophile.com/",
      hoverImgLeft: project15,
      hoverImgRight: project15,
    },
    {
      id: 3,
      imgSrc: project3,
      title: "Amar Kena Kata",
      Animation: "fade-up",
      // link: "https://app.medicophile.com/"
      link: "http://amarkenakatasupershop.com/",
      hoverImgLeft: project3,
      hoverImgRight: project3,
    },
   
    {
      id: 4,
      imgSrc: project11,
      title: "Smart Union",
      Animation: "fade-up",
      link: "https://smartunion.com.bd/",
      hoverImgLeft: project4,
      hoverImgRight: project4,
    },
    {
      id: 5,
      imgSrc: project5,
      title: "College Admission",
      Animation: "fade-up",
      link: "https://college-admission-system-client-side.vercel.app/",
      hoverImgLeft: project5,
      hoverImgRight: project5,
    },
    {
      id: 6,
      imgSrc: project6,
      title: "Reglazing Wow",
      Animation: "fade-up",
      link: "https://tourmaline-sorbet-e8c72d.netlify.app/",
      hoverImgLeft: project6,
      hoverImgRight: project6,
    },

    {
      id: 8,
      imgSrc: project8,
      title: "Ummahe Telecom",
      Animation: "fade-up",
      link: "https://reachare-site.vercel.app/",
      hoverImgLeft: project8,
      hoverImgRight: project8,
    },
    {
      id: 9,
      imgSrc: project9,
      title: "Photo Edit Specialist",
      Animation: "fade-up",
      link: "https://www.photoeditspecialist.com/",
      hoverImgLeft: project9,
      hoverImgRight: project9,
    },
    {
      id: 10,
      imgSrc: project10,
      title: "Portfolio Site",
      Animation: "fade-up",
      link: "https://www.mosiur.site/",
      hoverImgLeft: project10,
      hoverImgRight: project10,
    },
  
    {
      id: 11,
      imgSrc: project4,
      title: "Property Finder",
      Animation: "fade-up",
      link: "https://property-listing-cleint-side.vercel.app/",
      hoverImgLeft: project4,
      hoverImgRight: project4,
    },
    {
      id: 12,
      imgSrc: project12,
      title: "Medulas",
      Animation: "fade-up",
      link: "https://leafy-hamster-123e43.netlify.app/",
      hoverImgLeft: project12,
      hoverImgRight: project12,
    },

    {
      id: 14,
      imgSrc: project14,
      title: "Nest Ranger",
      Animation: "fade-up",
      link: "https://www.nestranger.com/",

      hoverImgLeft: project14,
      hoverImgRight: project14,
    },
  ];

  return (
    <div className="z-[10] relative pt-28 pb-10">
      <TitleBox
        tag="Our Projects"
        title1="A Pictorial Journey "
        title2="Through Our Projects"
      />
      <div className=" mt-10 flex flex-wrap items-center justify-center gap-14 py-10 lg:px-40">
        {projects.map((project) => (
          <div
            key={project?.id}
            data-aos={project?.Animation}
            className=" 2xl:w-[47%] sm:w-[45%] relative group cursor-pointer "
          >
            <div className="rounded-xl overflow-hidden">
              <Image
                src={project?.imgSrc}
                alt="project1"
                className="transition-all ease-linear duration-200  group-hover:scale-110"
              />
            </div>
            <div className=" absolute top-0 left-0 w-full h-full bg-[#121804] bg-opacity-50 z-[1] transition-all ease-linear duration-200 group-hover:opacity-100 opacity-0 group-hover:visible invisible"></div>
            <div className="absolute left-0 top-0 h-full w-full flex flex-col items-center  justify-start 2xl:pt-28 xl:pt-20 pt-12">
              <h1 className=" xl:text-xl text-lg font-medium text-white mt-[-10%] z-[12] relative group-hover:mt-[0%]  group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all ease-linear duration-200">
                {project?.title}
              </h1>

              <div className=" relative z-[50] mt-[-2%]  group-hover:mt-[3%]  group-hover:opacity-100 opacity-0 group-hover:visible invisible transition-all ease-linear duration-200">
                <Button
                  type="button"
                  text="See Live"
                  isFill={true}
                  icon={<BiCodeAlt />}
                />
              </div>

              <div className=" absolute transition-all ease-linear duration-200 invisible group-hover:visible bottom-10 group-hover:bottom-8 left-0 w-full group-hover:opacity-100 opacity-0  z-[10]">
                <div className=" h-32 overflow-hidden rounded-b-lg w-full z-[10] relative">
                  <Image
                    src={project.hoverImgLeft}
                    alt="project1"
                    className=" absolute top-10 w-1/2 -rotate-12"
                  />
                  <Image
                    src={project.hoverImgRight}
                    alt="project1"
                    className="absolute right-0   top-10 w-1/2 rotate-12"
                  />
                </div>
              </div>
            </div>

            <div className=" text-lime-400 z-[10] relative text-2xl flex items-center justify-between mt-2 ">
              <div className=" flex items-center gap-7">
                {project.link && (
                  <Link href={project?.link}>
                    <BiLink className=" cursor-pointer hover:text-white" />
                  </Link>
                )}
              </div>
              <BiCodeAlt className=" cursor-pointer hover:text-white" />
            </div>
          </div>
        ))}
      </div>
      <div data-aos="fade-down" className=" flex justify-center mt-5">
        <Button
          type="button"
          text="See More Projects"
          isFill={false}
          href="/projects"
          icon={<BiCodeAlt />}
        />
      </div>
    </div>
  );
}
