import React from 'react'
import WeddingIntro from './weddingComp/WeddingIntro'
import WeddingImages from './weddingComp/WeddingImages'
import WeddingOuter from './weddingComp/WeddingOuter'

const WeddingPage = () => {
  return (
    <>
    <div
    data-scroll
    data-scroll-speed = "auto" 
     className='w-full min-h-screen '>
      <WeddingImages/>
      <WeddingIntro/>
      <WeddingOuter/>
    </div>
    </>
  )
}

export default WeddingPage
