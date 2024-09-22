import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegHeart, FaRetweet } from "react-icons/fa6";
import { MdOutlineFileUpload } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";

const FeedCard: React.FC = () => {
  return (
    <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className=" grid grid-cols-12 gap-2">
        <div className=" col-span-1">
          <img
            src="https://avatars.githubusercontent.com/u/138473541?v=4"
            alt="user-image"
            height={50}
            width={50}
          />
        </div>
        <div className=" col-span-11">
          <h5>Chandankrsah</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            praesentium perspiciatis autem ullam dolorum eligendi corrupti.
          </p>
          <div className=" flex justify-between items-center mt-5 text-xl p-2">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <SiGoogleanalytics />
            </div>
            <div>
              <MdOutlineFileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
