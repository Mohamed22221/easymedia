import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import animation from "../../img/animation.mp4"




const VideoAbout = () => {
  return (
    <Container maxWidth="lg">
    <VideoStyle src={animation} muted type="video/mp4"  autoPlay={true} preLoad="auto" loop></VideoStyle>
    </Container>
  )
}
const VideoStyle = styled.video`
margin: 9rem 0 1rem 0;
width:100%;
padding: 10px;



`
export default VideoAbout