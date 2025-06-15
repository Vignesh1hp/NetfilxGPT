import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-300 text-white p-4 px-12 text-xl items-center rounded-lg cursor-pointer">
          ▶Play
        </button>
        <button className="bg-gray-300 mx-2 text-white p-4 px-12 text-xl items-center rounded-lg cursor-pointer">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
