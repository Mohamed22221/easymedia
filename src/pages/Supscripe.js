import React from 'react'
import BackGround from '../components/supscripe/BackGround'
import FormSubscripe from '../components/supscripe/FormSubscripe'
import styled from 'styled-components'

const Supscripe = () => {
  return (
    <>
    <BackGround />
    <StyleFlex>
    <FormSubscripe/>
    </StyleFlex>
    </>
  )
}
const StyleFlex = styled.div`
display: flex;

`
export default Supscripe