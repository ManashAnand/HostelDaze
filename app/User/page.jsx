"use client";
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import React from 'react'
import useSWR from 'swr';
import UserProfileCard from '@/components/UserProfileCard';

const fetcher = async  (...args) => {
  // console.log(args)
  const response = await axios.post(args);
  // console.log(response?.data?.res)
  return response?.data?.res
}



const UserSearchPage = () => {
    const searchParams = useSearchParams()
    const name = searchParams.get('name')

    const {data,error,isLoading} = useSWR(`/api/user?name=${name}`,fetcher);
    
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
      <div className="md:grid w-full  grid-cols-3 gap-4 flex flex-col mt-12 min-h-screen">
      {
        data?.map((user) => {
          {/* console.log(user) */}
          return(
            <UserProfileCard user={user} key={user._id} />
          )
        } )
      }
      </div>
    </>
  )
}

export default UserSearchPage
