"use client"
import React from 'react'
import FaqCard from './component/faq'

const page = () => {
  return (
    <div className="overflow-y-hidden py-10">
      <h1 className="text-3xl font-bold text-center mb-8">FAQ</h1>
      <FaqCard />
    </div>
  )
}

export default page
