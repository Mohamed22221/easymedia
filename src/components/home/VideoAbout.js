import React from 'react'
import styled from 'styled-components'
import Video from "../../img/video01.mp4"
import Video1 from "../../img/video2.mp4"



const VideoAbout = () => {
  return (
    <VideoStyle src={Video1} 
    muted  
    type="video/mp4"  
    autoPlay={true}
    preLoad="auto"
    loop
    >
       
    </VideoStyle>
  )
}
const VideoStyle = styled.video`
margin: 9rem 0 1rem 0;
width:100%;



`
export default VideoAbout