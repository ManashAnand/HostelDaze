"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from 'axios'
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logIn } from "@/redux/slices/UserSlice";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [pageData, setPageData] = useState({
    name: "",
    password: "",
  });

  const dispatch = useDispatch()

  const router = useRouter()

  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (e) => {
    setPageData({
      ...pageData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadio = (e) => {
    setIsAdmin(!isAdmin);
  };
  const notify = (message) =>toast(message, {
    position: "bottom-left",
    autoClose: 5000,
    theme: "light",
    });;

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(isAdmin)
    if(!isAdmin){
        try {
          const data = {pageData,isAdmin}
          const res = await axios.post("/api/login", {
             data
            });
            if (res.status === 200) {
              // console.log(res?.data?.userDoc)
              dispatch(logIn(res?.data?.userDoc))
              router.push("/")
            } else {
              console.log("Error in logging user from server");
              notify("Error in logging user from server, Try again")
            }
          } catch (error) { 
            console.log(error)
            console.log("Error in logging user")
            notify("Error in logging user, Try again")
        }
    } else {
      try {
        const data = {pageData,isAdmin}
        const res = await axios.post("/api/login", {
           data
          });
          if (res.status === 200) {
            // console.log(res?.data?.userDoc)
            dispatch(logIn(res?.data?.userDoc))
            router.push("/")
          } else {
            console.log("Error in logging user from server");
            notify("Error in logging user from server, Try again")
          }
        } catch (error) { 
          console.log(error)
          console.log("Error in logging user")
          notify("Error in logging user, Try again")
      }
    }
  };

  return (
    <>
      <div className="h-screen md:flex mt-8">
        <div className="relative overflow-hidden  md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden p-8">
          <div>
            <h1 className="text-white font-bold text-5xl font-sans">
              Hostel<span className="text-[#FFB703]">

              Daze
              </span>
            </h1>
            <p className="text-white mt-1 text-4xl ">
              Find your room in comfy way
            </p>
            <button
              type="submit"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 "
            >
              Read More
            </button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2  justify-center py-10 items-center ">
          <form className="  w-full xl:px-10 xl:mx-5">
            <h1 className="text-slate-800 font-bold text-4xl mb-1">Hey</h1>
            <p className="text-sm sm:text-4xl font-normal text-slate-600 mb-7">
              Lets start your registration
            </p>
            <div className="flex items-center   border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full xl:h-10 xl:rounded-lg xl:ml-2 "
                type="text"
                name="name"
                id=""
                placeholder="Your good name "
                value={pageData?.name}
                onChange={handleChange}
              />
            </div>

          
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full xl:h-10 xl:rounded-lg xl:ml-2"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                value={pageData?.password}
                onChange={handleChange}
              />
            </div>

            <label className="relative mt-4 ml-4 inline-flex items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAdmin}
                onChange={handleRadio}
              />
              <div
                className={`w-11 h-6 rounded-full peer dark:bg-[#FB8500] peer-focus:ring-4 peer-focus:ring-purple-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
                  isAdmin ? "peer-checked:bg-purple-600" : ""
                }`}
              ></div>
              <span className={`ml-3 text-sm font-medium text-[#FB8500] ${isAdmin?"dark:text-purple-700":"dark:text-[#FB8500]"}`}>
                {isAdmin ? "Warden":"Student"}
              </span>
            </label>
            
            
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              onClick={handleLogin}
            >
              Login
            </button>
            <Link href="/register" className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
              Does not have an account
            </Link>?
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
