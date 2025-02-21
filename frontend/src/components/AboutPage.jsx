import React from 'react'
import AboutUsIntro from './aboutComp/AboutUsIntro'
import AboutStaff from './aboutComp/AboutStaff'
import AboutOuter from './aboutComp/aboutOuter'

const AboutPage = () => {
  return (
    <>
    
    <div  className='w-full min-h-screen '>
        <AboutUsIntro/>
        <AboutStaff/>
        <AboutOuter/>
    </div>
    </>
  )
}

export default AboutPage
