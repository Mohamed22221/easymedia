import React from 'react'
import AboutHeader from '../components/home/AboutHeader'
import ClientHome from '../components/home/ClientHome'
import ContactHome from '../components/home/ContactHome'
import FotterHome from '../components/home/FotterHome'
import Header from '../components/home/Header'
import Portfolio from '../components/home/Portfolio'
import SecHeader from '../components/home/SecHeader'
import Servcises from '../components/home/Servcises'
import VideoAbout from '../components/home/VideoAbout'

const Home = () => {
  return (
    <>
        <SecHeader />
        {/*<Header/>*/}
        <AboutHeader/>
        <VideoAbout/>
        <Servcises/>
        <Portfolio/>
        <ClientHome/>
        <ContactHome/>
        <FotterHome/>
    </>
  )
}
export default Home