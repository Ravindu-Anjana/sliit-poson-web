import React from "react";

export default function CarouselCard({ mentor }) {
  return (
    <div>
      <div
        className="block z-0 bg-center bg-cover relative w-[340px] h-[450px] rounded-[12px] drop-shadow-md before:absolute before:z-[-1] before:inset-x-0 before:bottom-0 before:w-[100%] before:h-[25%] before:bg-gradient-to-t before:from-[#48093f] to-[transparant] before:transition ease before:duration-[0.5s] before:rounded-b-[10px] hover:before:bg-[#48093f] dark:before:bg-gradient-to-t dark:before:from-[black] to-[transparant] dark:hover:before:bg-[black]"
        style={{
          backgroundImage: `url(${mentor.image})`,
        }}
      >
        <div className="absolute bottom-0 left-0 m-7 text-white">
          <h2 className="text-xl font-bold">{mentor.name}</h2>
          <p className="text-lg">{mentor.designation}</p>
        </div>
      </div>
    </div>
  );
}
