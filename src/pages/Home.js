import React from 'react'
import AboutHeader from '../components/home/AboutHeader'
import ClientHome from '../components/home/ClientHome'
import ContactHome from '../components/home/ContactHome'
import FotterHome from '../components/home/FotterHome'
import Header from '../components/home/Header'
import Portfolio from '../components/home/Portfolio'
import Servcises from '../components/home/Servcises'
import VideoAbout from '../components/home/VideoAbout'

const Home = () => {
  return (
    <>
        <Header/>
        <AboutHeader/>
        <VideoAbout/>
        <Servcises/>
        <ContactHome/>
        <Portfolio/>
        <ClientHome/>
        <FotterHome/>
    </>
  )
}
export default Home