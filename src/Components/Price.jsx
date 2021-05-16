import React, { useContext } from "react";
import CoinContext from "../Context/CoinContext";
import EachPrice from "./EachPrice";
import styled from 'styled-components'

let MainDiv = styled.div`
    display: grid;
    width: 90%;
    max-width: 930px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 0.5em;
    .loading {
      font-size: 25px;
      width: 72.5vw;
      display: flex;
      justify-content: center;
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
        <h1 className="loading">Coin Info Loading...</h1>
      </MainDiv>
    )
  }
}
