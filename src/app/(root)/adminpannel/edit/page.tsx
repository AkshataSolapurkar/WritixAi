"use client"
import React from 'react'
import ProductManagement from './component/productmanagement'

const page = () => {
  return (
    <div className='flex-grow overflow-y-auto custom__scrollbar h-[calc(100dvh-120px)]'>
      <ProductManagement/>
    </div>
  )
}

export default page
