import Image from "next/image";
import React from "react";

const TempMainCard = () => {
  return (
    <div className="card card-normal animate-pulse">
      <figure>
        {/* <svg
          className="aspect-square h-full w-full text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg> */}
        <Image
          src={"/imagenotfound.svg"}
          alt={"Placeholder"}
          height={375}
          width={375}
          className="aspect-square h-full w-full object-cover"
        />
      </figure>
      <div className=" my-3 mr-4 flex flex-col">
        <div className="flex justify-between">
          <div className=" h-2.5 w-[225px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 w-[36px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-between">
          <div className="mb-2.5 h-2 w-[160px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="mb-2.5 h-2 w-[28px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
};

export default TempMainCard;
