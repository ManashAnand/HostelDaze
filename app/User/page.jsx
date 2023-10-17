"use client";
import { useSearchParams } from 'next/navigation'
import React from 'react'

const UserSearchPage = () => {
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
  return (
    <>
      users {name}
    </>
  )
}

export default UserSearchPage
