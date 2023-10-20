"use client";
import Link from "next/link";
import React, { useState } from "react";
import Lootie from "lottie-react";
import animationData from "@/assets/logo.json";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { logOut } from "@/redux/slices/UserSlice";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchUser,setSearchUser] = useState("")
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user);
  const router = useRouter()
 
  const handleLogout = () => {
    dispatch(logOut())
  }

  const handleUserSearch = (e) => {
    // console.log(e.key)
    if (e.key === 'Enter') {
      performSearch();
    }
  }

  const performSearch = () => {
    router.push(`/User?name=${searchUser}`)
  }


  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#023047]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link href="/" className="flex items-center  ">
          <div
            className="h-4  max-w-sm"
            style={{ width: "4rem", height: "100%" }}
            initial={{ opacity: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ opacity: 1 }}
          >
            <Lootie animationData={animationData} />
          </div>

          <span className="italic self-center text-2xl font-semibold whitespace-nowrap dark:text-[#FFB703]">
            <span className="text-white">Hostel</span>
            Daze
          </span>
        </Link>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className=" block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              // onChange={(e) => console.log(e.key)}
              onKeyDown={handleUserSearch}
              // onSubmitEditing={handleUserSearch} 
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-transparent dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
            onClick={toggleSearch}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isSearchOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className=" block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              autoComplete="off"
              value={searchUser}
              onChange={(e) => setSearchUser(e.target.value)}
              // onChange={(e) => console.log(e.key)}
              onKeyDown={handleUserSearch}
              // onSubmitEditing={handleUserSearch} 
            />
          </div>

          <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#FFB703] md:dark:bg-[#023047] dark:border-gray-700 md:justify-center md:items-center">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FFB703] md:p-0 md:dark:hover:text-[#FFB703] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FFB703] md:p-0 md:dark:hover:text-[#FFB703] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            {Object.keys(state).length === 0 ? (
              <li>
                <Link
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#FFB703] md:p-0 md:dark:hover:text-[#FFB703] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Login
                </Link>
              </li>
            ) : (
              <>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={handleLogout}
                >
                  Logout
                </button>
                <Link href={`/User/${state?._id}`}>
                <Image
                  className="w-10 h-10 p-1 mt-4 md:mt-0 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={state?.imageUrl}
                  alt="Bordered avatar"
                  height={5}
                  width={5}
                />
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
