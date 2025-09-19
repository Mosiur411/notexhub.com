"use client";
import { BiCodeAlt } from "react-icons/bi";
import TitleBox from "../../uiKit/TitleBox";
import services from "../../../assets/json/services.json";
import Button from "@/app/components/sheard/button/Button";
import ServiceCard from "@/app/components/sheard/card/ServiceCard";
import { useState } from "react";
// import { useRouter } from "next/router";

export default function Services() {
  // const [isExpand, setIsExpand] = useState(false);
  // const toggleHanlde = () => {
  //   setIsExpand(!isExpand);
  // }

  return (
    <div className="z-[10] relative pt-32">
      <TitleBox
        tag="Our Services"
        title1="Exceptional Service"
        title2="Digital Solutions For You"
      />
      <div
        data-aos="fade-up"
        className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-4 py-12 gap-5"
      >
        {services?.map((service) => (
          <ServiceCard data-aos="fade-up" key={service?.id} service={service} />
        ))}
      </div>

      {/* <div style={{maxHeight: isExpand ? 'none' : 'services.length'}} className="flex items-center flex-wrap justify-center lg:gap-10 gap-7 py-12 lg:px-20 px-10 sm:px-0">
        {services?.map((service) => (
          <div
            data-aos="fade-up"
            key={service?.id}
            className=" lg:w-[30%] sm:w-[45%] w-full"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div> */}

      <div className=" flex items-center flex-wrap justify-center lg:gap-10 gap-7 py-12 lg:px-20 px-10 sm:px-0">
        {services?.map((service) => (
          <div
            data-aos="fade-up"
            key={service?.id}
            className=" lg:w-[30%] sm:w-[45%] w-full"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <div data-aos="fade-up" className=" flex justify-center mt-5">
        <Button
          type="button"
          text="See More Services"
          isFill={false}
          href="/service"
          icon={<BiCodeAlt />}
          // onclick={toggleHanlde}
        />
      </div>
    </div>
  );
}
