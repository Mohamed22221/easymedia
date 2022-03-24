import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
 :root{
    --primary-color:#E53516;
    --primary-color-obacity: rgb(153 5 190 / 10%);
    --background-dark-color: #3c3d4a;
    --font: #303030;
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
@keyframes MoveUpDown {
    0%, 100% {
    left: 0;
    }
    50% {
    left: 15px;
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
     height: 3000px;
}


`

export default GlopalStyle