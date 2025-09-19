import Button from "../sheard/button/Button";
import { PiStarFourFill } from "react-icons/pi";
import { GoStarFill } from "react-icons/go";
import { FaQuoteRight } from "react-icons/fa";
import team1 from "../../assets/image/team/team1.jpg"
import Image from 'next/image';

// import { PiStarFourLight } from "react-icons/pi";
//<PiStarFourLight />

export default function WhyChooseUs() {
  return (
    <>
      <div className="mt-14 ">
        <div className="flex justify-center">
          <button
            className="border border-[#B9FD50] text-[#B9FD50] flex justify-center items-center gap-2 px-5 
         rounded-full font-semibold text-base hover:bg-[#B9FD50] hover:text-black py-1"
          >
            <PiStarFourFill /> Why Choose Us
          </button>
        </div>
       <div className="md:mx-32">
         <h2
          className="mt-10 bg-gradient-to-r from-[#B9FD50] to-[#9eee26] text-center
          bg-clip-text text-transparent text-4xl font-bold">
          
          <span className="text-white">Maximizing Engagement,</span> <br />
          Driving Growth
        </h2>
        <p className="text-center text-white mt-4">আপনার Digital Success নিশ্চিত করাই আমাদের Mission! আমাদের Expert টিম,
           Advanced Marketing Strategy আর Smart Solutions দিয়ে আমরা আপনাকে দিচ্ছি Best Service.</p>
       </div>

{/* testimonial section here */}
    <div className=" mt-5 h-[600px] bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl rounded-xl shadow-lg">
     <div className="flex justify-center">
          <button
            className="border border-[#B9FD50] mt-20 text-[#B9FD50] flex justify-center items-center gap-2 px-5 
         rounded-full font-semibold text-base hover:bg-[#B9FD50] hover:text-black py-1"
          >
            <PiStarFourFill /> Testimonial
          </button>
        </div>
         <h2
          className="my-7 bg-gradient-to-r from-[#B9FD50] to-[#9eee26] text-center
          bg-clip-text text-transparent text-4xl font-bold">
          
          <span className="text-white mr-3">What They Say</span>
          About Us
        </h2>
{/* div section */}
     <div className="pb-10 grid md:grid-cols-3 grid-cols-1 gap-5 mt-10 px-10">
 <div className=" col-span-1 relative pt-7 pb-3
  bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl rounded-xl shadow-lg">
  <p className="flex justify-center text-[#B9FD50] pb-3"><FaQuoteRight /></p>

  <p className="text-center text-white mx-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate a,
     numquam quis aperiam enim debitis, adipisci minima odit, ex sint! 
  </p>
  <div className="flex justify-end  mx-4">
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
  </div>
 <div className="bg-black  w-20 h-20 absolute top-48 left-36 rounded-full border-4 border-white/10 backdrop-blur-2xl">
    <Image src={team1} alt="logo" className="rounded-full border-1 border-[#B9FD50]"/>
 </div>

 </div>
 <div className=" col-span-1 relative pt-7 pb-3
  bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl rounded-xl shadow-lg">
  <p className="flex justify-center text-[#B9FD50] pb-3"><FaQuoteRight /></p>

  <p className="text-center text-white mx-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate a,
     numquam quis aperiam enim debitis, adipisci minima odit, ex sint! 
  </p>
  <div className="flex justify-end  mx-4">
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
  </div>
 <div className="bg-black  w-20 h-20 absolute top-48 left-36 rounded-full">
 
 </div>
</div>

 <div className=" col-span-1 relative pt-7 pb-3
  bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl rounded-xl shadow-lg">
  <p className="flex justify-center text-[#B9FD50] pb-3"><FaQuoteRight /></p>

  <p className="text-center text-white mx-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cupiditate a,
     numquam quis aperiam enim debitis, adipisci minima odit, ex sint! 
  </p>
  <div className="flex justify-end  mx-4">
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
    <p className="text-yellow-500 text-xl"><GoStarFill /></p>
  </div>
 <div className="bg-black  w-20 h-20 absolute top-48 left-36 rounded-full">
 
 </div>

 </div>
     </div>

    </div>

      </div>
    </>
  );
}
