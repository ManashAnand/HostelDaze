"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";


const HostelBtn = ({hostelName}) => {
  const state = useSelector((state) => state.user);
  // console.log(state);
  const router = useRouter()
  console.log(state)
  return (
    <>
      {
        (!state.isAdmin && state.name) && 
        <>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => router.push(`/hostels/${hostelName}/BookARoom`)}>
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Book a Room
          </span>
        </button>
        </>
      }
      
      
      {state.isAdmin && (
        <>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"  onClick={() => router.push(`/hostels/${hostelName}/BookARoom`)}>
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Vacate a student
            </span>
          </button>

          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
           onClick={() => router.push(`/hostels/${hostelName}/BookARoom`)}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" >
              Vacate a room
            </span>
          </button>
        </>
      )
        }
      
    

      
    </>
  );
};

export default HostelBtn;
