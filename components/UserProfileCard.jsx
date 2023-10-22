import React from "react";
import Image from "next/image";

import { formatDistanceToNow } from 'date-fns';
import Link from "next/link";


  
const UserProfileCard = ({ user }) => {
  const { _id,name, email, number, imageUrl, createdAt } = user;
  return (  
    <>
      <Link key={_id} href={`/User/${_id}`} className="w-[15rem] h-[20rem] bg-[#219EBC] mx-auto rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            <Image
              className="h-36 w-36 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
              src={imageUrl}
              height={200}
              width={200}
              alt
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1 flex flex-start">
                {name}
              </h3>
              <div className=" flex-start items-center flex text-gray-700 dark:text-gray-300 ">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.32l-3.17-3.17-4.24 4.24h14.82l-4.24-4.24-3.17 3.17zm-1.41-3.75l-6.01-6.01H18.4z" />
                </svg>

                {email}
              </div>
              <div className="mt-2  items-center flex text-gray-700 flex-start dark:text-gray-300 ">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.32l-3.17-3.17-4.24 4.24h14.82l-4.24-4.24-3.17 3.17zm-1.41-3.75l-6.01-6.01H18.4z" />
                </svg>

                {number}
              </div>

            </div>
          </div>
        </div>

        {/* <div className="px-4 py-4">
          <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path
                className
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </svg>
            <span>
              <strong className="text-black dark:text-white">From</strong>{" "}
             </span>
          </div>
        </div> */}
      </Link>
    </>
  );
};

export default UserProfileCard;
