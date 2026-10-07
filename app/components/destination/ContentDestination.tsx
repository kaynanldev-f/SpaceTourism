"use client";
import Image from "next/image";

import { useState } from "react";
import moon from "@/assets/destination/image-moon.png";
import { DestinationTypes } from "@/app/types/destination";

export default function DestinationItems({
  destinationData,
}: {
  destinationData: DestinationTypes[];
}) {
  const [planet, setPlanet] = useState("Moon");
  const [destinationsData, setDestinationData] = useState<DestinationTypes[]>(
    [],
  );
  console.log("Destination data:", destinationData);
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="w-[480px] h-[480px] relative aspect-square">
        <Image src={moon.src} alt="Moon" fill />
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-whitee text-[100px] font-bellefair">
          {destinationData[2].name}
        </h1>
        <p className="text-whitee/60 text-center max-w-[450px]">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="flex items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-whitee/60 text-[14px] tracking-[2.36px]">
              AVG. DISTANCE
            </span>
            <span className="text-whitee text-[28px] font-bellefair">
              384,400 km
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-whitee/60 text-[14px] tracking-[2.36px]">
              JOURNEY TIME
            </span>
            <span className="text-whitee text-[28px] font-bellefair">
              3 days
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
