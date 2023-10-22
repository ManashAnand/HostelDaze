"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

 const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isAdmin, setIsAdmin] = useState(false);

  const handleRadio = (e) => {
    setIsAdmin(!isAdmin);
  };

  const notify = (message) =>toast(message, {
    position: "bottom-left",
    autoClose: 5000,
    theme: "light",
    });;


  const onSubmit = async (data) => {
    const image = data.image[0];
    const name = data.name;
    const number = data.number;
    const password = data.password;
    const email = data.email;
    const secretAdminKey = data.secretAdminKey;

    const formData = new FormData();
    formData.append("file", image);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_USERNAME
    );

    if(!isAdmin)
    {
        try {
          const uploadResponse = await fetch(
              `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}/image/upload`,
              {
                method: "POST",
                body: formData,
              }
            );
            const uploadedImageData = await uploadResponse.json();
            const imageUrl = uploadedImageData.secure_url;

          console.log(imageUrl);
          if (imageUrl) {
            const res = await axios.post("/api/register", {
              name,
              password,
              number,
              email,
              imageUrl,
            });
            if (res.status === 200) {
              router.push("/")
            } else {
              console.log("Error in registring user");
            }
          }
        } catch (error) {
          console.log(error);
        }

    } else {
      try {
        const uploadResponse = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );
          const uploadedImageData = await uploadResponse.json();
          const imageUrl = uploadedImageData.secure_url;
        // let imageUrl = "image u  rl";
        // console.log(imageUrl);
        if (imageUrl) {
          const res = await axios.post("/api/admin", {
            name,
            password,
            number,
            secretAdminKey,
            email,
            imageUrl,
            isAdmin,
          });
          if (res.status === 200) {
            router.push("/")
            notify("Admin registered succesfully, Try again")
  
          } else {
            notify("Error in registring admin from server, Try again")
          }
        }
      } catch (error) {
        console.log(error);
        notify("Error in registring admin , Try again")
      }
    }
  };

  return (
    <>
      <div className="h-screen md:flex mt-8">
        <div className="relative overflow-hidden  md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden p-8">
          <div>
            <h1 className="text-white font-bold text-5xl font-sans">
              HostelDaze
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
          <form
            className="  w-full xl:px-10 xl:mx-5"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                {...register("name")}
                defaultValue={""}
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full xl:h-10 xl:rounded-lg xl:ml-2"
                type="email"
                name="email"
                id=""
                placeholder="Your email 📧"
                {...register("email")}
                defaultValue={""}
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M15 1a1 1 0 00-1 1v16a1 1 0 001 1h4a1 1 0 001-1V2a1 1 0 00-1-1h-4zm-1 2h-2a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1zM5 3h8a1 1 0 011 1v10a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none w-full xl:h-10 xl:rounded-lg xl:ml-2"
                type="tel"
                name="number"
                id=""
                placeholder="Your personal number "
                {...register("number")}
                defaultValue={""}
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
                {...register("password")}
                defaultValue={""}
              />
            </div>

            <label className="relative mt-4 ml-4 inline-flex items-center mr-5 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAdmin}
                onChange={handleRadio}
                // {...register('isAdmin')}

              />
              <div
                className={`w-11 h-6 rounded-full peer dark:bg-[#FB8500] peer-focus:ring-4 peer-focus:ring-purple-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 ${
                  isAdmin ? "peer-checked:bg-purple-600" : ""
                }`}
              ></div>
              <span
                className={`ml-3 text-sm font-medium text-[#FB8500] ${
                  isAdmin ? "dark:text-purple-700" : "dark:text-[#FB8500]"
                }`}
              >
                {isAdmin ? "Warden" : "Student"}
              </span>
            </label>
            {isAdmin && (
              <>
                <div className="mt-5 flex items-center border-2 py-2 px-3 rounded-2xl">
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
                    name="secretAdminKey"
                    id=""
                    placeholder="Secret Admin password"
                    {...register("secretAdminKey")}
                    defaultValue={""}
                  />
                </div>
              </>
            )}
            <input
              {...register("image")}
              className="relative mt-4 m-0 block w-full min-w-0 flex-auto rounded border cursor-pointer border-solid border-blue-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-blue-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-blue-100 file:px-3 file:py-[0.32rem] file:text-blue-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-purple-700 focus:border-blue focus:text-blue-700 focus:shadow-text-blue focus:outline-none dark:border-blue-600 dark:text-blue-200 dark:file:bg-blue-700 dark:file:text-blue-100 dark:focus:border-blue"
              type="file"
              id="formFile"
            />

            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Register
            </button>
            <Link
              href={"/login"}
              className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
            >
              Have an account ?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
