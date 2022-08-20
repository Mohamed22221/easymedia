import React from 'react'

import ClientHome from '../components/home/ClientHome'
import ContactHome from '../components/home/ContactHome'
import FotterHome from '../components/home/FotterHome'

import Portfolio from '../components/home/Portfolio'
import SecAbout from '../components/home/SecAbout'
import SecHeader from '../components/home/SecHeader'
import Servcises from '../components/home/Servcises'
import VideoAbout from '../components/home/VideoAbout'

const Home = () => {
  return (
    <>
        <SecHeader />
        <SecAbout />
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