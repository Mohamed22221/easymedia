import React from 'react'
import styled from 'styled-components'
import CopyrightIcon from '@mui/icons-material/Copyright';
import wats from "../../img/wats.png"
import face from "../../img/face.png"
import linked from "../../img/linked.png"
import insta from "../../img/insta.png"



const FotterHome = () => {
  return (
    <FotterStyle >
        <div className='main-fotter' >
        <div className='item-fotter' >
            <h2>location</h2>
            <p><a href='https://www.google.com/search?q=easymedia.agency&rlz=1C1BNSD_enKW969KW969&sxsrf=APq-WBv-4tg1tdu9mJyJcXGkuuHLnNMfOw:1650241798316&ei=p69cYtibD8nBgQa31Y6wDQ&oq=easy&gs_lcp=Cgdnd3Mtd2l6EAMYADIECCMQJzIECCMQJzIGCCMQJxATMgcILhDUAhBDMgoILhDHARDRAxBDMgoILhDHARDRAxBDMgQIABBDMgQILhBDMgQIABBDMgUIABCABDoHCCMQsAMQJzoHCAAQRxCwAzoHCAAQsAMQQzoOCC4QgAQQsQMQxwEQ0QM6DgguEIAEELEDEMcBEKMCOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQowI6CwguEIAEELEDENQCOgUILhCABDoKCC4QsQMQ1AIQQzoLCC4QxwEQ0QMQywE6BQgAEMsBOgQIABAeOgcIIxDqAhAnOg0ILhDHARCvARDqAhAnOggILhCABBCxAzoFCAAQsQM6CAgAELEDEIMBOggIABCABBCxAzoICC4QgAQQ1AI6CggAELEDEIMBEENKBAhBGABKBAhGGABQ7glYgz5g70ZoC3ABeACAAaMCiAH6GJIBBDItMTKYAQCgAQGwAQrIAQrAAQE&sclient=gws-wiz&tbs=lf:1,lf_ui:2&tbm=lcl&rflfq=1&num=10&rldimm=2705044429460152125&lqi=ChBlYXN5bWVkaWEuYWdlbmN5WhIiEGVhc3ltZWRpYSBhZ2VuY3mSARBtYXJrZXRpbmdfYWdlbmN5&ved=2ahUKEwiznbrhrZz3AhVs_bsIHVOZBnUQvS56BAgREAE&sa=X&rlst=f#rlfi=hd:;si:2705044429460152125,l,ChBlYXN5bWVkaWEuYWdlbmN5WhIiEGVhc3ltZWRpYSBhZ2VuY3mSARBtYXJrZXRpbmdfYWdlbmN5;mv:[[29.634084417525198,48.60180323463209],[29.243000675189805,47.90142481666334]]' target="_blank">Kuwait : Fahad Al-Salem street <span></span> </a></p>
            <p><a href='https://www.google.com/maps/place/%D9%85%D8%B1%D9%83%D8%B2+%D8%AD%D9%85%D8%AF%D8%A7%D9%86+%D8%A8%D9%86+%D8%B1%D8%A7%D8%B4%D8%AF+%D8%A2%D9%84+%D9%85%D9%83%D8%AA%D9%88%D9%85+%D9%84%D9%84%D9%85%D9%88%D9%87%D8%A8%D8%A9+%D9%88%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D9%83%D8%A7%D8%B1%E2%80%AD/@25.2184219,55.2705717,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f425f0f73a993:0x7f54c67bf775f6b3!8m2!3d25.2183939!4d55.2684297' target="_blank">Dubai : Hamdan Bin Rashid Al Maktoum <span> </span>  </a></p>
            <p><a href='#'>Egypt : ismailia</a></p>
            
        </div>
        <div className='item-fotter' >
            <h2>contact</h2>
            <p><a href='mailto:info@easymedia.agency'>info@easymedia.agency</a></p>
            <p><a href='tel:+965 2220 9570'>+965 2220 9570</a></p>
            <p><a href='tel:+965 5537 2333'>+965 5537 2333</a></p>
            <p><a href='tel:+971 54 233 3232'>+971 54 233 3232</a></p>
        </div>
        <div className='item-fotter' >
            <h2>Social media</h2>
            <a href='https://www.facebook.com/easymedia.agency' target="_blank"><img src={face} /></a>
            <a href='https://www.instagram.com/easymedia_agency/' target="_blank"><img src={insta} /></a>
            <a href='https://www.linkedin.com/company/easy-media-agency/mycompany/?viewAsMember=true'  target="_blank"><img src={linked} /></a>
            <a href='https://wa.me/0096555372333'  target="_blank"><img src={wats} /></a>
        </div>
        </div>
        <div className='copy-right' >
        <h2>Copyright<span><CopyrightIcon className='copy'/></span></h2>
        </div>
       

        
        
    </FotterStyle>
  )
}
const FotterStyle = styled.div`
    background-color: var(--primary-color);
    padding: 40px 4rem;
    @media (max-width:500px) {
    padding: 40px 2rem;    
    }
    .main-fotter{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    @media (max-width:500px) {
        justify-content: center;   
    }
    .item-fotter{
        
        padding: 15px;
        display: flex;
        flex-direction: column;
        @media (max-width:500px) {
        align-items: center;   
    }
        &:last-child{
            display: block;
            flex-direction: row; 
        }
        h2{
            font-weight: 400;
            font-size: 30px;
            color: white;
            text-transform: uppercase;
            padding: 8px 0;
        }
        a{
            color: white;
            opacity: 0.8;
            cursor: pointer;
            font-size: 15px;
            @media (max-width:600px) {
             span{
                 display: none;
             }
             }
             img{
                 width: 30px;
                 margin:0 11px;
                 
                

             }
        }

    }
    }
    .copy-right{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 2px;
        padding: 80px 0 40px;
        h2{
            padding-right: 18px;
            position: relative;
            span .copy{
            position: absolute;
            top: 2px;
            margin-left: 4px;
        }
        &::after{
            position: absolute;
            
            content: "";
            top: -50px;
            width: 250px;
            height: 1px;
            color: white;
            background-color: white;
            left: 44%;
            transform: translate(-46%);
        }
        }

    }
    

`
export default FotterHome