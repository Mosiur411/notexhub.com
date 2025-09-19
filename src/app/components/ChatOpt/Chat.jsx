"use client"
import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";




export default function Chat(){
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("chat");

    return(
        <>
    <button onClick={() => setOpen(true)}
    className="fixed bottom-10 z-30  cursor-pointer
     rounded-full right-10 w-16 h-16 bg-[#B9FD50] border">
 <AiFillMessage className="text-4xl   text-[#111204] relative left-3.5" />
    </button>
       {/* <div  className="fixed bottom-10  cursor-pointer  rounded-full right-10 w-16 h-16 bg-lime-200 border border-lime-800">
       <button  className="relative top-3 left-3.5 cursor-pointer">
        <AiFillMessage className="text-4xl   text-lime-500" />

       </button>
      
       </div> */}
        {/* Overlay + Chat Form */}
      {open && (
        
        <div className="fixed inset-0 z-40 flex justify-end">
          {/* Background Blur */}
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          ></div>
            {/* Chat Form */}
          <div className="relative top-28 right-10 bottom-10 z-50 w-1/4 h-4/5
           bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl rounded-xl shadow-lg flex flex-col">
            {/* Header */}
            {/* [#111204] */}
            <div className="flex items-center justify-between p-4 border-b">
            <div>
                <h2 className="font-semibold text-white text-2xl">Get in touch</h2>
              <p className="text-white text-sm">We would love to hear from you</p>
            </div>
              <button onClick={() => setOpen(false)}>
               <RxCross1 className="text-white text-xl" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("chat")}
                className={`flex-1 p-2 text-center items-center text-[#B9FD50] ${
                  activeTab === "chat" ? "border-b-2 border-[#B9FD50]  font-semibold" : "text-white"
                }`}
              >
            Contact Form
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`flex-1 gap-2 items-center p-2 text-center text-[#B9FD50] ${
                  activeTab === "contact" ? "border-b-2 border-[#B9FD50] font-semibold" : "text-white"
                }`}
              >
              Contact Info
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              {activeTab === "chat" && (
                <form className="flex flex-col">
                    <p className="text-[#B9FD50] mb-2">Full Name</p>
                    <input type="text" name="name" placeholder="Enter Your name"  
                    className="mb-3 p-3 border border-gray-300 rounded-md bg-[#111204] placeholder:text-gray-300" />
                    <p className="text-[#B9FD50] mb-2">Contact Number</p>
                    <input type="number" name="numer" placeholder="+88" 
                    className="mb-3 p-3 bg-[#111204] border border-gray-300 rounded-md placeholder:text-gray-300" />
                    <p className="text-[#B9FD50] mb-2">Email</p>
                    <input type="email" name="email" placeholder="Enter Your email" 
                    className="mb-3 p-3 border border-gray-300 rounded-md bg-[#111204] placeholder:text-gray-300" />
                   <p className="text-[#B9FD50] mb-2">Message</p>
                  <textarea
                    className=" p-2 w-full bg-[#111204] mb-5 border border-gray-300 rounded-md placeholder:text-gray-300"
                    placeholder="Type your message..."
                    rows={4}
                  />
                  <button className=" flex justify-center  items-center gap-2 bg-transparent text-[#B9FD50] border border-[#B9FD50] font-semibold  py-2 rounded  hover:text-black hover:bg-[#B9FD50] ">
                 <RiMailSendLine />  Send
 
                  </button>
                </form>
              )}
              {activeTab === "contact" && (
                <form className="flex flex-col gap-3">
                 <div className="flex  gap-3 p-3
                  bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl 
                  rounded-md">
                  <button className="bg-transparent border border-[#B9FD50] px-4 py-3 rounded-full text-xl text-[#B9FD50]"><IoCall /></button>
                 <div>
                   <h3 className="text-[#B9FD50] text-lg">Phone</h3>
                  <p className="text-[#B9FD50] text-sm">01788829796</p>
                 </div>
                 </div>
                 <div className="flex  gap-3 p-3 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl rounded-md">
                  <button className="bg-transparent border border-[#B9FD50] px-4 py-3 rounded-full text-xl text-[#B9FD50]"><GoMail /></button>
                 <div>
                   <h3 className="text-[#B9FD50] text-lg">Email</h3>
                  <p className="text-[#B9FD50] text-sm">notexhub@gmail.com</p>
                 </div>
                 </div>
                 <div className="flex  gap-3 p-3 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl rounded-md">
                  <button className="bg-transparent border border-[#B9FD50] px-4 py-3 rounded-full text-xl text-[#B9FD50]"><MdLocationPin /></button>
                 <div>
                   <h3 className="text-[#B9FD50] text-lg">Adress</h3>
                  <p className="text-[#B9FD50] text-sm">Mohammadpur,Dhaka,Bangladesh</p>
                 </div>
                 </div>
                 <div className="flex  gap-3 p-3 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl rounded-md">
                  <button className="bg-transparent border border-[#B9FD50] px-4 py-3 rounded-full text-xl text-[#B9FD50]"><FaRegClock /></button>
                 <div>
                   <h3 className="text-[#B9FD50] text-lg">Business Hours</h3>
                  <p className="text-[#B9FD50] text-sm">24 hours support</p>
                 </div>
                 </div>
                
                
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      
      </>
    )

}