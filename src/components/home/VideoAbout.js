import React from 'react'
import styled from 'styled-components'
import Video from "../../img/apout.mp4"
const VideoAbout = () => {
  return (
    <VideoStyle width="100%" autoplay loop > 
        <source  src={Video} type="video/mp4" />
        <source  src={Video} type="video/ogg" />
    </VideoStyle>
  )
}
const VideoStyle = styled.video`
padding: 8rem 0 0 0;

video{


}

`
export default VideoAbout