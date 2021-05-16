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
`

export default function Price() {
  let { price } = useContext(CoinContext)
  return (
    <MainDiv>
      {Object.keys(price).map(el => <EachPrice coinName={el} />)}
    </MainDiv>
  );
}
