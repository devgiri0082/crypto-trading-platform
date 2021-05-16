import React, { useContext } from "react";
import CoinContext from "../Context/CoinContext";
import EachPrice from "./EachPrice";
import styled from 'styled-components'

let MainDiv = styled.div`
    display: grid;
    width: 90%;
    max-width: 900px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 0.5em;
    
    &, .loading {
      font-size: 25px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .loading {
      height: 100px;
      box-shadow: 1px 1px 5px rgb(182, 181, 181);
      border-radius: 10px;
      background-color: white;
      color: #353535;
    }
`

export default function Price() {
  let { price } = useContext(CoinContext);
  if (Object.keys(price).length > 0) {
    return (
      <MainDiv>
        {Object.keys(price).map((el, index) => <EachPrice coinName={el} key={index} />)}
      </MainDiv>
    );
  } else {
    return (
      <MainDiv>
        <h1 className="loading">Digging some coins... 🏴‍☠️💰🦜</h1>
      </MainDiv>
    )
  }
}
