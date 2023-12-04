import React from 'react'
import youtube from "../assets/Flyerwiz_1701703674528_1.jpg"
import Image from 'next/image'
const Youtube = () => {
  return (
    <>
     <div>
     <Image 
      src={youtube}
      width={100}
       height={10}
       className="bg-white t"
      />
     </div> 
    </>
  )
}

export default Youtube
