"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import team1 from "../../../assets/image/team/team1.jpg";
import team2 from "../../../assets/image/team/team2.jpg";
import team3 from "../../../assets/image/team/team3.jpg";
import team4 from "../../../assets/image/team/team4.jpg";
import team5 from "../../../assets/image/team/team5.jpg";
import team6 from "../../../assets/image/team/team6.jpg";
import team7 from "../../../assets/image/team/team7.jpg";
import team8 from "../../../assets/image/team/team8.png";
import team9 from "../../../assets/image/team/team10.jpg";
import team10 from "../../../assets/image/team/team9.jpg";
import team11 from "../../../assets/image/team/team11.jpg";
import team12 from "../../../assets/image/team/team12.jpg";

import TitleBox from "../../uiKit/TitleBox";

const teamsData = [
  {
    id: 1,
    name: "Md Moshiur Islam",
    designation: "Founder",
    text: "Focused on innovation, growth, and client success, managing NotexHub with passion, building impactful solutions, inspiring teamwork, and always dreaming big to transform ideas into meaningful digital experiences.",
    img: team1,
  },
  {
    id: 2,
    name: "Jubayer Islam",
    designation: "Backend Engineer",
    text: "Passionate Backend Engineer at NotexHub, focused on building scalable and secure server-side solutions, optimizing performance, managing databases, and contributing to high-quality, reliable, and innovative web applications.",
    img: team12,
  },
  {
    id: 3,
    name: "RK Ripon Khan",
    designation: "HR Head & Project Manager",
    text: "Passionate about building strong teams and successful projects, managing HR and operations at NotexHub with leadership, collaboration, and commitment to delivering impactful results with efficiency and creativity.",
    img: team2,
  },
  {
    id: 4,
    name: "Joy Paul",
    designation: "Front-End Developer",
    text: "Dedicated Front-End Developer at NotexHub, crafting seamless user experiences, developing interactive web interfaces, and leveraging modern tools and frameworks to deliver impactful, high-quality digital solutions.",
    img: team11,
  },
  {
    id: 5,
    name: "Abu Sayed",
    designation: "Advisor",
    text: "Advising NotexHub with expertise and vision, guiding strategy, fostering growth, mentoring the team, and ensuring innovative solutions and effective decision-making for sustainable success and meaningful impact.",
    img: team5,
  },

  {
    id: 6,
    name: "Ahsan Habib Munna",
    designation: "Social Media Manager",
    text: "Crafting engaging content and managing social media strategies at NotexHub, building brand presence, connecting with audiences, driving growth, and creating impactful digital experiences with creativity, consistency, and innovation.",
    img: team3,
  },
  {
    id: 7,
    name: "Sazid Ahamed Sifat",
    designation: "Front-End Developer(Intern)",
    text: "Passionate Front-End Developer intern at NotexHub, learning and building responsive, user-friendly web interfaces, contributing to projects with creativity, dedication, and continuous improvement in modern web technologies.",
    img: team7,
  },
  {
    id: 8,
    name: "Rubaiya Tahamim",
    designation: "Front-End Developer(Intern)",
    text: "Eager Front-End Developer intern at NotexHub, passionate about building responsive and interactive web interfaces, learning modern frameworks, and contributing to innovative projects with creativity, collaboration, and continuous growth.",
    img: team8,
  },
  {
    id: 9,
    name: "Riyeaz Akondo",
    designation: "Front-End Developer(Intern)",
    text: "Learning and growing as a Front-End Developer intern at NotexHub, focused on creating intuitive UI, collaborating on projects, and contributing to the development of engaging, user-friendly web applications.",
    img: team9,
  },
  {
    id: 10,
    name: "Fahim Rahman",
    designation: "Front-End Developer(Intern)",
    text: "Joining NotexHub as a Front-End Developer intern, eager to create engaging web experiences, learn modern technologies, enhance UI/UX, and contribute to innovative digital solutions with dedication and enthusiasm",
    img: team6,
  },
  {
    id: 11,
    name: "Nabila",
    designation: "Front-End Developer(Intern)",
    text: "Motivated Front-End Developer intern at NotexHub, dedicated to crafting seamless user experiences, improving technical skills, exploring new technologies, and supporting the team in delivering high-quality web solutions.",
    img: team10,
  },
  {
    id: 12,
    name: "Naim Badsha",
    designation: "Graphic Designer",
    text: "Leading creative design at NotexHub, producing visually stunning graphics, enhancing brand storytelling, and transforming concepts into impactful digital designs with creativity, attention to detail, and innovative thinking.",
    img: team4,
  },
];

const Team = () => {
  const [isHover, setIsHover] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * teamsData.length);
      setIsHover(teamsData[random]?.id);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [teamsData]);

  return (
    <div className="my-16">
      <TitleBox tag="Team" title1="Our" title2=" Creative Minds" />
      <div className="2xl:w-9/12 xl:w-10/12 w-full mx-auto z-[10] relative pt-48 pb-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-x-12 gap-y-44">
          {teamsData?.map((team, index) => (
            <div
              key={team?.id}
              className={`relative ${
                index % 2 === 0 ? "sm:mt-0 mt-8" : "sm:mt-[10rem] mt-8"
              } transition-all duration-300 ease-in-out`}
              onMouseEnter={() => setIsHover(team?.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <div className="relative">
                <Image
                  src={team?.img}
                  alt={team?.name}
                  className="rounded-full border-2 border-lime-400 w-20 h-20 mx-auto cursor-pointer"
                />
                <p className="text-center text-lg font-semibold text-lime-300">
                  {team?.name.slice(0, 18)}
                </p>
              </div>

              {/* hover Content */}
              <div
                className={`absolute w-max z-[100] transition-all duration-200 ease-linear 
    ${isHover === team?.id ? "visible scale-100" : "invisible scale-0"}
    -top-[14rem] left-1/2 -translate-x-1/2`}
              >
                <div className="bg-gradient-to-r from-[#10110f48] via-[#a3f8053b] to-[#0000] w-[22rem] rounded-md p-3 text-center relative border border-lime-900 bg-[#111204]">
                  <h3 className="text-xl font-medium text-lime-400">
                    {team?.name}
                  </h3>
                  <div className="text-sm text-gray-300">
                    {team?.designation}
                  </div>
                  <div className="border-b border-dashed border-lime-400 my-3"></div>
                  <p className="text-white">{team?.text}</p>

                  {/* Arrow pointing down to the image */}
                  <svg
                    className="w-6 h-3 rotate-90 absolute top-full left-1/2 -translate-x-1/2"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M0 0 L100 50 L0 100 Z"
                      fill="#a3f80548"
                      className="z-[-1]"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
