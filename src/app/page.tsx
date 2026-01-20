import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import MyServices from './components/MyServices'
// import Testimonial from './components/Testimonial'

const page = () => {
  return (
    <main>
      <>
        <Hero/>
        <About/>
        <Skills/>
        <Portfolio/>
        <MyServices/>
        {/* <Testimonial/> */}
      </>
    </main>
  )
}

export default page