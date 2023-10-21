"use client";

import Loading from '@/components/Loading';
import React from 'react'
import useSWR from 'swr';
import  Error  from '@/components/Error';
import axios from 'axios';
import { useParams } from 'next/navigation'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


const fetcher = async  (...args) => {
  const response = await axios.get(args);
  // console.log(response?.data?.res)
  return response?.data?.res
}

const BookARoom = () => {
  const searchParams = useParams()
  const {name} = searchParams 

  const state = useSelector((state) =>  state.user)

  const notify = (message) =>toast(message, {
    position: "bottom-left",
    autoClose: 5000,
    theme: "light",
    });;

  const RoomHandler = async (Id,room,pos) => {
    console.log(room)
    console.log(pos)
    console.log(state)
    if(room?.isBooked){
      notify("Room is already booked!");
      return;
    }
    if(Object.keys(state).length == 0 ){
      notify("Login first to book a room!");
      return;
    }
    const userId = state?._id
    const reqData = {Id,pos,userId}
    // console.log(reqData)
    const res = await axios.put('http://localhost:3000/api/hostels/nandini/rooms',{reqData})
    console.log(res)
    if(res)
    notify("Room booked successfully");

    
  }

  const {data,error,isLoading} = useSWR(`http://localhost:3000/api/hostels/${name}/rooms`,fetcher);

  
    
  if(isLoading){
    return(
      <>
      <Loading/>
      </>
    )
  }
  if(error){
    return(
      <>
         <Error/>
      </>
    )
  }

  return (
    <>
      <div className=" md:grid md:grid-cols-2 gap-4 grid grid-cols-1 mt-12 bg-gray-300 rounded-sm p-2 w-full">
        {
          data?.map((hostelRoom) => {
            return(
              <>
                <div key={hostelRoom?._id} className="p-2 border-8 border-slate-200 min-w-[25%]  min-h-[20rem] flex flex-col">
                  <div className={`min-h-[25%]  flex justify-end`}>
                    <div className={`${hostelRoom?.left?.isBooked ? "bg-red-400":"bg-white"} w-[40%] h-4/5 flex justify-center items-center rounded-md cursor-pointer`}
                    onClick={() => RoomHandler(hostelRoom?._id,hostelRoom?.left,"left")}
                    >
                      Left
                    </div>
                  </div>
                  <div className={`h-[50%] `}>
                    <div className={`${hostelRoom?.middle?.isBooked ? "bg-red-400":"bg-white"} cursor-pointer h-full w-[25%] sm:w-[15%] flex justify-center items-center rounded-md`}
                    onClick={() => RoomHandler(hostelRoom?._id,hostelRoom?.middle,"middle")}
                    >
                      middle
                    </div>
                  </div>
                  <div className={`min-h-[25%]  flex justify-end items-end`}>
                    <div className={`${hostelRoom?.right?.isBooked ? "bg-red-400":"bg-white"} w-[40%] h-4/5 flex justify-center items-center rounded-md cursor-pointer`}
                    onClick={() => RoomHandler(hostelRoom?._id,hostelRoom?.right,"right")}>
                      Right
                    </div>
                  </div>
                <div className="bg-green-300 mt-2 flex justify-center items-center">
                  {hostelRoom?.RoomNo}
                </div>
                </div>
              </>
            )
          })
        }
      
      </div>
    </>
  )
}

export default BookARoom
