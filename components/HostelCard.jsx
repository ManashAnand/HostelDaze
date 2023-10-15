"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dummyImage from '../assets/dummyHostel.jpeg'

const HostelCard = ({name,descp,imgSrc}) => {
  return (
    <>
      <motion.div
        key={descp}
        className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        <Image
        src={dummyImage}
        //   className="w-full"
          height={500}
          width={500}
          
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            {descp}
          </p>
        </div>
        
      </motion.div>
    </>
  );
};

export default HostelCard;
