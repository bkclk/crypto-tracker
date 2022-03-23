import styled from "styled-components"
import {Link} from "react-router-dom"


export const CoinContainer=styled.div`
 background-color: #111013;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 calc((100vw - 1300px) / 2);
 
`
export const CoinItems=styled.div`
color: #fff;
 
 padding: 1rem 1rem;
 height: auto;
 font-size: 1.5rem;
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 width: 90vw;
 border-radius:1rem ;
 margin-bottom:1rem;
 


 img {
   max-width:400px;
   max-height:400px;
    width: 80%;
   height:80%;
   margin-bottom:2rem;
   @media (max-width:650px) {
    height: 200px;
    width: 200px;
    
    
  }
   
 }
 div {
   padding:0.5rem 2rem ;
   border-bottom: solid 2px darkgray;
   width: 80%;
   @media (max-width:650px) {
    height:2rem;
    font-size:1rem;
  }
   
 }
 a {
    padding:0.5rem 2rem ;
   border-bottom: solid 2px darkgray;
   text-decoration: none;
   color:#fff;
   width: 80%;
   @media (max-width:650px) {
    height:2rem;
    font-size:1rem;
  }

   &:hover{
       background-color: #F7931A;
   }
 }
`
export const Divcolor=styled.div`
  color:${({color})=>color};
`

export const HomeLink=styled(Link)`

margin-top:1rem;
width: 150px;
padding:1rem 2rem ;
font-size: 1.2rem;
font-weight: 700;
border:none;
border-radius: 1rem;
text-align: center;
cursor: pointer;
text-decoration:none;
color:black;
background-color: #fff;
&:hover {
  background-color:#F7931A ;
  color:#fff;
}
@media (max-width:650px) {
    height:2rem;
    font-size:1rem;
    margin-top:0.8rem;
    padding:0rem 1rem;
    display:flex;
    align-items: center;
    justify-content: center;
  }

`