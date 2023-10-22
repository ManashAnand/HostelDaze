
"use client";
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import axios from 'axios';
import React from 'react'
import useSWR from 'swr';
import dummy from "../../../assets/dummyHostel.jpeg";
import Image from "next/image";
import BackButton from "@/components/BackButton";

import { usePathname } from 'next/navigation'

const fetcher = async  (...args) => {
  // console.log(args)
  const response = await axios.post(args);
  // console.log(response?.data)
  return response?.data?.res
}


const SingleUserPage = () => {
  const pathname = usePathname()
  const id =  pathname.split('/')[2];

  const {data,error,isLoading} = useSWR(`/api/user/${id}`,fetcher);
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
      <div>
        <section className="relative block h-500-px mt-28 sm:mt-20">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <Image alt="profile image" src={data?.imageUrl} height={300} width={300} className="z-50 relative sm:-translate-y-16"/>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                     <BackButton/>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                   
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {data?.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {data?.email}
                  </div>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    {data?.number}
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Student - NMIT
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    University of VTU
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      A versatile student at NMIT, hailing from diverse backgrounds, showcases a unique blend of skills and talents. With a passion for learning and a thirst for knowledge, they engage with various disciplines, contributing to the academic community. Their enthusiasm for education is reflected in their ability to adapt, excel, and create, making every subject and project their own.
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
};

export default SingleUserPage;
