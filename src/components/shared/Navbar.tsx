"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'


const Navbar = () => {
 const pathname = usePathname()
  return (
    <div className='flex justify-center items-center'>
      <nav className='flex justify-between items-center gap-4 shadow-lg rounded-md p-[1%]'>
        <Link className={cn(
                  "py-[5px] px-[10px] rounded-md",
                  pathname === "/adminpannel"
                    ? "bg-green-200 border-green-400 border text-green-900  "
                    : "text-[#727272] mx-2 my-1"
                )} href="/adminpannel">Admin pannel</Link>
        <Link className={cn(
                  "p-[5px] rounded-md",
                  pathname === "/mainstore"
                    ? "bg-green-200 border-green-400 border text-green-900  "
                    : "text-[#727272] mx-2 my-1"
                )} href="/">MainStore</Link>
      </nav>
    </div>
  )
}

export default Navbar
