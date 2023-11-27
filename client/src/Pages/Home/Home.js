import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Service from '../../Components/Services/Service'
import Experience from "../../Components/Experience/Experience"
import Slider from '../../Components/Slider/Slider'

const Home = () => {
  return (
    <>
     <Carousel/>
     <Experience/>
     <Service/> 
     <Slider/>
    </>
  )
}

export default Home
