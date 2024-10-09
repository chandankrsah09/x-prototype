"use client";
import React, { useCallback } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { RiNotification4Fill } from "react-icons/ri";
import { RiSlashCommands2 } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "./components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "./api/api";
import { verifyUserGoogleTokenQuery } from "./graphql/query/user";

interface TwitterSideBarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSideBarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill />,
  },
  {
    title: "Explore",
    icon: <FaSearch />,
  },
  {
    title: "Notifications",
    icon: <RiNotification4Fill />,
  },
  {
    title: "Messages",
    icon: <FaEnvelope />,
  },
  {
    title: "Grok",
    icon: <RiSlashCommands2 />,
  },
  {
    title: "Communities",
    icon: <BsPeopleFill />,
  },
  {
    title: "Premium",
    icon: <FaXTwitter />,
  },
  {
    title: "Profile",
    icon: <BsFillPersonFill />,
  },
  {
    title: "More",
    icon: <CgMoreO />,
  },
];

export default function Home() {
  const handaleLogWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error(`Google token not found`);
    const { verifyGoogleToken } = await graphqlClient.request(
      verifyUserGoogleTokenQuery,
      { token: googleToken }
    );

    toast.success("Verified Success");
    console.log(verifyGoogleToken);
    
    if (verifyGoogleToken)
      window.localStorage.setItem("__twitter_token", verifyGoogleToken);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className=" col-span-3 pt-1">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-4 cursor-pointer transition-all">
            <FaXTwitter />
          </div>
          <div className=" text-2xl pr-4">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-2 w-fit cursor-pointer mt-1 text-xl"
                  key={item.title}
                >
                  <span className=" text-3xl">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className=" mt-4 px-3">
              <button className="bg-[#1d9bf0] p-2  rounded-full text-lg font-semibold w-full">
                Post
              </button>
            </div>
          </div>
        </div>
        <div className=" col-span-6 border-r-[1px] border-l-[1px] h-screen overflow-y-scroll border-gray-600">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className=" col-span-3 p-5">
          <div className=" p-5 bg-slate-700 rounded-lg">
            <h1 className=" my-2 text-2xl">New To X !</h1>
            <GoogleLogin onSuccess={handaleLogWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}
