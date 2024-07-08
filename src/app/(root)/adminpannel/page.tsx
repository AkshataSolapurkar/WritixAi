import React from 'react'
import Avatar from '@/components/shared/Avtar'

const page = () => {
  return (
    <div>
      <section>
    <div className={"flex text-black h-full relative"}>
      <div className="no-scrollbar h-[calc(100dvh-120px)] md:block hidden">
        <Sidebar id={studentId} />
      </div>
      <div className="w-full">{children}</div>
    </div>
    </section>
    </div>
  )
}

export default page
