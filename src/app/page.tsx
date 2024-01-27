/** @format */

"use client";

import Image from "next/image";

import { BsThreeDots } from "react-icons/bs";

import workImg from "@/assets/images/icon-work.svg";
import userImage from "@/assets/images/image-jeremy.png";
import playImage from "@/assets/images/icon-play.svg";
import studyImage from "@/assets/images/icon-study.svg";
import exerciseImage from "@/assets/images/icon-exercise.svg";
import socialImage from "@/assets/images/icon-social.svg";
import selfCareImage from "@/assets/images/icon-self-care.svg";

import data from "@/assets/data.json";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";

import { useState } from "react";

export default function Home() {
  const [timeFrame, setTimeFrame] = useState<"daily" | "weekly" | "monthly">(
    "weekly"
  );

  const styleList = [
    {
      color: "bg-Work",
      icon: workImg
    },
    {
      color: "bg-Play",
      icon: playImage
    },
    {
      color: "bg-Study",
      icon: studyImage
    },
    {
      color: "bg-Exercise",
      icon: exerciseImage
    },
    {
      color: "bg-Social",
      icon: socialImage
    },
    {
      color: "bg-SelfCare",
      icon: selfCareImage
    }
  ];

  return (
    <div className="min-h-screen w-full bg-VeryDarkBlue text-white flex flex-col items-center justify-center py-10 px-3">
      <main className=" max-w-[850px] grid grid-cols-1 lg:grid-cols-4 gap-5 transition-all ">
        <div className=" bg-DarkBlue row-span-2  rounded-xl overflow-hidden flex items-start flex-col">
          {/* Blue div */}
          <div className="bg-Blue rounded-xl px-6 pt-10 pb-16   flex-row lg:flex-col flex  gap-8 w-full">
            {/* user Image */}
            <Image
              src={userImage}
              alt="user-image"
              className="ring-2 h-12 w-12 rounded-full ring-white border-white "
            />

            <section className=" flex-col flex gap-1">
              <p className="text-PaleBlue text-xs">Report for</p>
              <h2 className=" text-2xl lg:text-3xl font-thin">Jeremy Robson</h2>
            </section>
          </div>
          <div className="flex lg:flex-col gap-4 justify-between px-6 \  py-4 text-PaleBlue text-sm font-thin items-start flex-row w-full">
            <button
              className={timeFrame === "daily" ? "text-white" : ""}
              onClick={() => setTimeFrame("daily")}
            >
              Daily
            </button>
            <button
              className={timeFrame === "weekly" ? "text-white" : ""}
              onClick={() => setTimeFrame("weekly")}
            >
              Weekly
            </button>
            <button
              className={timeFrame === "monthly" ? "text-white" : ""}
              onClick={() => setTimeFrame("monthly")}
            >
              Monthly
            </button>
          </div>

          {/*  */}
        </div>
        {data.map((d, i) => {
          let current;
          let previous;
          if (timeFrame === "daily") {
            current = d.timeframes.daily.current;
            previous = d.timeframes.daily.previous;
          }
          if (timeFrame === "monthly") {
            current = d.timeframes.monthly.current;
            previous = d.timeframes.monthly.previous;
          }
          if (timeFrame === "weekly") {
            current = d.timeframes.weekly.current;
            previous = d.timeframes.weekly.previous;
          }

          return (
            <>
              <TimeCard
                color={styleList[i].color}
                icon={styleList[i].icon}
                key={i}
                title={d.title}
                current={current ?? 0}
                previous={previous ?? 0}
              />
            </>
          );
        })}
      </main>
    </div>
  );
}

type TimeCardType = {
  title: string;
  current: number;
  previous: number;
  color: string;
  icon: string | StaticImport;
};

function TimeCard({
  current = 32,
  previous = 36,
  title,
  color,
  icon
}: TimeCardType) {
  return (
    <div className={clsx("  pt-10 rounded-xl overflow-hidden relative", color)}>
      <Image
        className="  absolute top-[-10px] right-3 z-10  h-[70px] w-auto "
        src={icon}
        alt="time-card-img"
      />
      {/* blue */}
      <div className="bg-DarkBlue relative z-20 rounded-t-lg p-6 flex-col flex gap-6">
        {/* work  */}
        <div className=" flex justify-between  w-full">
          <p>{title}</p>
          <BsThreeDots className="text-2xl" />
        </div>

        <section className=" lg:flex-col items-center justify-between flex gap-1 flex-row ">
          <h2 className=" text-3xl lg:text-4xl font-thin"> {current}hrs </h2>

          <p className=" text-PaleBlue text-xs"> Last Week - {previous}hrs </p>
        </section>
      </div>
    </div>
  );
}
