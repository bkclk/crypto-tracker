import styled from "styled-components";
import { Field } from "redux-form";
import {Link } from  "react-router-dom"
export const Container = styled.div`
  background-color: #111013;
  width: 100vw;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem calc((100vw - 1300px) / 2);
  
`;
export const Nav = styled.div`
  height: 250px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (max-width:650px) {
    height: 200px;
    
  }
  
`;
export const Img = styled.img`
  height: 80%;
  width: auto;
`;
export const SearchInput = styled(Field)`
  margin: 2rem 0;
  height: 60px;
  padding: 5px 20px;
  
  width: 500px;

  border: none;
  border-radius: 1rem;
  background-color: #21212d;
  color: #fff;
  font-weight: 700;
  @media (max-width:650px) {
    margin:1rem 0;
    
    width:80% ;
    
  }
`;
export const CryptoRow = styled(Link)`
  color: #fff;
  margin: 0 calc((100vw - 1300px) / 2);
  padding:10px 10px ;
  height: auto;
  font-size: 1rem;
  display: grid;
  grid-template-columns:1fr 3fr 3fr  3fr 2fr 5fr ;
  width:100%;
  border-radius:1rem ;
  
  border-bottom: solid 2px darkgray;
  text-decoration:none ;
  font-weight: 700;
  @media (max-width:650px) {
    grid-template-columns:1fr 3fr 3fr  3fr 2fr;
    padding:10px 10px;
    
  }
&:hover{
  background-color:#F7931A;
}

  img {
    width: 2rem;
    height: 2rem;
  }
  div {
    align-self: center;
    text-decoration:none ;
  }
  div.market{
    @media (max-width:650px) {
    
    display: none;
    
  }
  }
`;
export const Divcolor=styled.div`
  color:${({color})=>color};
`
