import React from 'react'
import AboutHeader from '../components/home/AboutHeader'
import ContactHome from '../components/home/ContactHome'
import Header from '../components/home/Header'
import Servcises from '../components/home/Servcises'
import VideoAbout from '../components/home/VideoAbout'

const Home = () => {
  return (
    <div>
        <Header/>
        <AboutHeader/>
        <VideoAbout/>
        <Servcises/>
        <ContactHome/>
    </div>
  )
}
export default Home