import Image from "next/image";
import React from "react";

const MediaHero = () => {
  return (
    <div className="flex w-full flex-col items-center bg-base-200 py-12">
      <h1 className="mx-2 mb-2 text-2xl font-bold">
        Follow Products and Updates on Instagram
      </h1>
      <div className="flex flex-wrap gap-4 ">
        <Image
          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
          alt=""
          width={96}
          height={120}
        />
        <Image
          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
          alt=""
          width={96}
          height={120}
        />
        <Image
          src="https://kiiaaunaenthemzngrew.supabase.co/storage/v1/object/public/wss.assests/4987cdc3-a063-4eb9-9371-05af6fc0d4be.webp"
          alt=""
          width={96}
          height={120}
        />
      </div>
    </div>
  );
};

export default MediaHero;
