import React from 'react'
import ServicesIntro from './servicesComp/ServicesIntro'
import ServicesComp from './servicesComp/ServicesComp'
import ServicesOuter from './servicesComp/ServicesOuter'

const ServicesPage = () => {
  return (
    <div  className='w-full min-h-screen '>
        <ServicesIntro/>
        <ServicesComp/>
        <ServicesOuter/>
    </div>
  )
}

export default ServicesPage
