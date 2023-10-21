"use client";

import React from "react";
import Image from "next/image";
import kavery from "../../../assets/kavery.jpg";
import Link from "next/link";
import HostelBtn from "@/components/HostelBtn";
import CarouselBox from "@/components/CarouselBox";
import { useParams } from "next/navigation";


const SingleHostelPage = () => {
    const {name} = useParams()
   
  return (
    <>
      <div className=" w-full mt-4 flex flex-col md:flex-row ">
        <Image
          src={kavery}
          className="rounded-md md:w-[80%]"
          width={500}
          height={500}
          alt="hostel image"
        />
        <div className=" md:w-[20%] w-full flex justify-center items-end">
          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-[#023047] dark:hover:bg-gray-700 mt-8 md:mt-0">
            <Image
              src={kavery}
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
              alt=""
              height={100}
              width={200}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mr. Rakesh
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Senior Warden of NMIT
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                +91 4654674624
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-3xl flex justify-center items-center bg-[#FFB703] p-4 -skew-x-12 mt-8 text-white">
        Have a glimpse of Jails...
      </div>
      <div className="  gap-4 flex flex-col mt-12 w-full md:flex-row md:justify-between">
        <Image
          src={kavery}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          alt=""
          height={100}
          width={200}
        />
        <Image
          src={kavery}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          alt=""
          height={100}
          width={200}
        />
        <Image
          src={kavery}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          alt=""
          height={100}
          width={200}
        />
        <Image
          src={kavery}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          alt=""
          height={100}
          width={200}
        />
      </div>

      <div className="mb-12 text-3xl flex justify-center items-center bg-[#FFB703] p-4 -skew-x-12 mt-8 text-white">
        Features of Jails...
      </div>
      {/* <div className="  gap-4 flex flex-col mt-12 w-full md:flex-row md:justify-between">
        <Image
          src={kavery}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          alt=""
          height={100}
          width={200}
        />
        <Image
          src={kavery}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          alt=""
          height={100}
          width={200}
        />
        <Image
          src={kavery}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          alt=""
          height={100}
          width={200}
        />
        <Image
          src={kavery}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg "
          alt=""
          height={100}
          width={200}
        />
      </div> */}
      <CarouselBox/>

      <div className="  gap-4 flex flex-col mt-12 w-full md:flex-row md:justify-between">
            <HostelBtn hostelName={name}/>
        </div>
    </>
  );
};

export default SingleHostelPage;
