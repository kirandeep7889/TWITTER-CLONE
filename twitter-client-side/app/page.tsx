"use Client"
import Image from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { BiHome, BiMoney, BiUser } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope } from "react-icons/bs";
import FeedCard from "./FeedCard";
import { SlOptions } from "react-icons/sl";
import { GoogleLogin } from "@react-oauth/google";
import GoogleLoginButton from "./GoogleLoginButton";



interface TwitterSidebarButton{
  title : String
  icon : React.ReactNode
}
const sidebarMenuItems: TwitterSidebarButton[]=[
  {
    title : 'Home',
    icon :  <BiHome/>
  },
  {
    title : 'Explore',
    icon : <BiHash/>
  },
  {
    title : 'Notifications',
    icon : <BsBell/>
  },
  {
    title : "Messages",
   icon : <BsEnvelope/>
  },
  {
    title : 'Bookmarks',
    icon : <BsBookmark />
  },
  {
    title : "Twitter Blue",
    icon : <BiMoney/>
  },
  {
    title : 'Profile',
    icon :  <BiUser/>
  },
  {
    title : 'More Options',
    icon : <SlOptions />
  }

]


export default function Home() {

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3 pt-1 px-4 ml-30">
          <div className="text-2xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <FaTwitter/>
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
              <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full  px-3 py-3 w-fit  cursor-pointer pt-2">
                <span className="text-2xl">{item.icon}</span>
                <span>{item.title}</span>
                </li>
                ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] py-2 px-4 rounded-full w-full mx-4">Tweet</button>
            </div>
          </div>
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600 ">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3 p-3">
          <div className=" p-3 bg-slate-700 rounded-lg">
            <h1 className="my-2 text-2xl font-semibold">New to Twitter?</h1>
            <GoogleLoginButton/>
          </div>
        </div>
      </div>
          
    </div>
  )
}