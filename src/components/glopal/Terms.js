import React from 'react'
import styled from 'styled-components'

const Terms = () => {
  return (
    <MainTerms>
     <h2>Instructions for use</h2>
     <h4>We reserve the right to amend the terms and conditions below at any time. If you do not agree to any of these terms and conditions, you must immediately stop accessing Easy Media and your use of the services offered through it. Your continued use of Easy Media signifies your acceptance of these terms and conditions, which may change from time to time.</h4>
     <p>1 - You agree to receive pre-programmed notifications from Seller on your mobile phone, mobile device, email, website or application (as the case may be)</p>
     <p>2- You agree and will be bound by the seller's terms and conditions associated with your purchases, which may be modified from time to time.</p>
     <p>3- Reselling any of the products or models is prohibited</p>
     <p>4- It is prohibited to provide us with any false information including: false names, addresses, contact information and credit card numbers used in a fraudulent manne</p>
     <p>5- We may make periodic changes to the content of the site, including descriptions and prices of advertised goods and services, at any time and without notice. We are not responsible for any errors or omissions in the content of our website</p>
     <p>6- Website: The Application, Services and any purchase relating exclusively to users who have access to the Application.</p>
     
      <li> </li>

     </MainTerms>
  )
}
const MainTerms = styled.div`

padding: 20px 4rem;
width: 70%;
margin: 0 auto;
    @media (max-width:500px) {
    padding: 20px 2rem; 
    width: 100%;   
 }
 h2{
  text-align: center;
  color: var(--primary-color);
 }
 h4{
  margin: 15px 0;
 }
 p{
  margin: 10px 0;
 }
 li{
  padding: 10px 0;
 }
`
export default Terms