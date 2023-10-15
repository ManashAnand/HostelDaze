"use client";

import React from 'react'
import animationData from '@/assets/display.json'
import { motion } from "framer-motion";

import Lootie from 'lottie-react'

const MainPageLogo = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full  mt-8  flex-col md:flex-row ">
        <div className=" sm:w-3/5 h-full text-2xl p-4 w-full">
        Experience innovation with our web app - where ideas come to life, efficiency thrives, and possibilities are endless.<br/> Join us on a journey of seamless solutions and boundless creativity, making the digital world your playground.
        </div>
        <motion.div className="" style={{width:"24rem",height:"100%"}}
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
        >
            <Lootie animationData={animationData}  />
        </motion.div>
      </div>
    </>
  )
}

export default MainPageLogo
