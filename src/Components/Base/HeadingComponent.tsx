import React, { useState } from "react";



const HeadingComponent = ({url, headingText} : {url : string, headingText: string}) => {
  return (
    <div className="w-full max-h-[26rem] relative flex justify-center text-center">
      <div
        className="relative w-full h-[30rem] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:bg-[#000] before:opacity-[0.3] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[rgba(26,26,26,0.5)]"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <p className="text-white text-[3.5rem] z-10 absolute top-32 font-black">{headingText}</p>
    </div>
  );
};

export default HeadingComponent;
