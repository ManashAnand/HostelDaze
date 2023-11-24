"use client";

import Loading from "@/components/Loading";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import Error from "@/components/Error";
import axios from "axios";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

const fetcher = async (...args) => {
  const response = await axios.get(args, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  });
  // console.log(response?.data?.res)
  return response?.data?.res;
};

const BookARoom = () => {
  const searchParams = useParams();
  const { name } = searchParams;
  const [roomNo,setRoomNo] = useState(0)

  const state = useSelector((state) => state.user);

  const router = useRouter();
  const notify = (message) =>
    toast(message, {
      position: "bottom-left",
      autoClose: 5000,
      theme: "light",
    });

  const AdminRoomHandler = async (Id, room, pos,hostelRoomNo) => {
    console.log("working from admin");
    console.log(hostelRoomNo)
    


    if (!room?.isBooked && !hostelRoomNo) {
      notify("slot is already empty!");
      return;
    }
    const userId = state?._id;
    const reqData = { Id, pos, userId,hostelRoomNo };
    console.log(reqData);
    if (state?.isAdmin) {
      const res = await axios.put(
        `/api/hostels/${name}/rooms/admin`,
        { reqData }
      );
      console.log(res);
        
      if (res)
      {
        
      mutate(`/api/hostels/${name}/rooms`) ;
        notify("Room vacated successfully");
        return;
      }
    }
  };

  const RoomHandler = async (Id, room, pos) => {
    console.log("working from user");
    if (room?.isBooked) {
      notify("Room is already booked!");
      return;
    }
    if (Object.keys(state).length == 0) {
      notify("Login first to book a room!");
      return;
    }
    const userId = state?._id;
    const reqData = { Id, pos, userId };
    if (state?.isAdmin) {
      const res = await axios.put(
        `/api/hostels/${name}/rooms`,
        { reqData }
      );
      return;
    }
    // console.log(reqData)
    const res = await axios.put(
      `/api/hostels/${name}/rooms`,
      { reqData }
    );
    
    console.log(res);
    if (res){
      router.refresh()
      // fetcher(`/api/hostels/${name}/rooms`); 
      mutate(`/api/hostels/${name}/rooms`) ;
      notify("Room booked successfully");
    } 
  };

  const { data, error, isLoading } = useSWR(
    `/api/hostels/${name}/rooms`,
    fetcher
  );

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <>
      {state?.isAdmin && (
        <>
        <div className="w-full mt-12">
        <div className="w-full md:w-[40%]">

          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Room no"
              value={roomNo}
              onChange={(e) => setRoomNo(e.target.value)}
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() =>
                          AdminRoomHandler("","","",
                          roomNo
                          )
                        }
            >
              Vacate a Room
            </button>
          </div>
        </div>

        </div>
        </>
      )}
      <div className=" md:grid md:grid-cols-2 gap-4 grid grid-cols-1 mt-12 bg-gray-300 rounded-sm p-2 w-full">
        {state?.isAdmin ? (
          <>
            {data?.map((hostelRoom) => {
              return (
                <>
                  <div
                    key={hostelRoom?._id}
                    className="p-2 border-8 border-slate-200 min-w-[25%]  min-h-[20rem] flex flex-col"
                  >
                    <div className={`min-h-[25%]  flex justify-end`}>
                      <div
                        className={`${
                          hostelRoom?.left?.isBooked ? "bg-red-400" : "bg-white"
                        } w-[40%] h-4/5 flex justify-center items-center rounded-md cursor-pointer`}
                        onClick={() =>
                          AdminRoomHandler(
                            hostelRoom?._id,
                            hostelRoom?.left,
                            "left"
                          )
                        }
                      >
                        Left
                      </div>
                    </div>
                    <div className={`h-[50%] `}>
                      <div
                        className={`${
                          hostelRoom?.middle?.isBooked
                            ? "bg-red-400"
                            : "bg-white"
                        } cursor-pointer h-full w-[25%] sm:w-[15%] flex justify-center items-center rounded-md`}
                        onClick={() =>
                          AdminRoomHandler(
                            hostelRoom?._id,
                            hostelRoom?.middle,
                            "middle"
                          )
                        }
                      >
                        middle
                      </div>
                    </div>
                    <div className={`min-h-[25%]  flex justify-end items-end`}>
                      <div
                        className={`${
                          hostelRoom?.right?.isBooked
                            ? "bg-red-400"
                            : "bg-white"
                        } w-[40%] h-4/5 flex justify-center items-center rounded-md cursor-pointer`}
                        onClick={() =>
                          AdminRoomHandler(
                            hostelRoom?._id,
                            hostelRoom?.right,
                            "right"
                          )
                        }
                      >
                        Right
                      </div>
                    </div>
                    <div className="bg-green-300 mt-2 flex justify-center items-center">
                      {hostelRoom?.RoomNo}
                    </div>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>
            {data?.map((hostelRoom) => {
              return (
                <>
                  <div
                    key={hostelRoom?._id}
                    className="p-2 border-8 border-slate-200 min-w-[25%]  min-h-[20rem] flex flex-col"
                  >
                    <div className={`min-h-[25%]  flex justify-end`}>
                      <div
                        className={`${
                          hostelRoom?.left?.isBooked ? "bg-red-400" : "bg-white"
                        } w-[40%] h-4/5 flex justify-center items-center rounded-md cursor-pointer`}
                        onClick={() =>
                          RoomHandler(hostelRoom?._id, hostelRoom?.left, "left")
                        }
                      >
                        Left
                      </div>
                    </div>
                    <div className={`h-[50%] `}>
                      <div
                        className={`${
                          hostelRoom?.middle?.isBooked
                            ? "bg-red-400"
                            : "bg-white"
                        } cursor-pointer h-full w-[25%] sm:w-[15%] flex justify-center items-center rounded-md`}
                        onClick={() =>
                          RoomHandler(
                            hostelRoom?._id,
                            hostelRoom?.middle,
                            "middle"
                          )
                        }
                      >
                        middle
                      </div>
                    </div>
                    <div className={`min-h-[25%]  flex justify-end items-end`}>
                      <div
                        className={`${
                          hostelRoom?.right?.isBooked
                            ? "bg-red-400"
                            : "bg-white"
                        } w-[40%] h-4/5 flex justify-center items-center rounded-md cursor-pointer`}
                        onClick={() =>
                          RoomHandler(
                            hostelRoom?._id,
                            hostelRoom?.right,
                            "right"
                          )
                        }
                      >
                        Right
                      </div>
                    </div>
                    <div className="bg-green-300 mt-2 flex justify-center items-center">
                      {hostelRoom?.RoomNo}
                    </div>
                  </div>
                </>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default BookARoom;
