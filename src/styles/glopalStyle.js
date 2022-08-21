import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
 :root{
    --primary-color:#E53516;
    --primary-color-obacity: rgb(153 5 190 / 10%);
    --background-dark-color: #3c3d4a;
    --font: #6c757d;
    --font-two:#cbcbcb;
    --white-color: #FFF;
} 
*{

    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
   
}
html {
  scroll-behavior: smooth;
}

@keyframes MoveUpDown {
    0%, 100% {
    transform: translateX(0);
    }
    50% {
      transform: translateX(15px);
    }
  }
  @keyframes  MoveUpDownLeft {
    0%, 100% {
    right: 4rem;
    }
    50% {
    right: 5rem;
    }
  }
  @keyframes Rotate {
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
  }
body{
     font-family: 'Nunito', sans-serif;

}


`

export default GlopalStyle