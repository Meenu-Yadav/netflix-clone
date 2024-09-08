import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
const VideoTitle = () => {
  return (
    <div className="absolute text-white pt-[30%] p-12">
      <h1 className="text-3xl, font-medium">Movie Name</h1>
      <p>This is description about the movie</p>
      <div className="mt-3 flex">
        <button className="flex items-center bg-white text-black rounded-md px-5 py-1 text-xl mr-2 hover:bg-opacity-75">
          <FaPlay className="mr-2 size-5" />
          <span>Play</span>
        </button>
        <button className="flex items-center bg-white text-black rounded-md px-5 py-1 text-xl hover:bg-opacity-75">
          <IoIosInformationCircle className="mr-2 size-6" />
          <span>Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
