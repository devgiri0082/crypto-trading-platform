import React, { useContext } from "react";
import CoinContext from "../Context/CoinContext";
import EachPrice from "./EachPrice";
import styled from 'styled-components'

let PriceDiv = styled.div`
    display: grid;
    width: 90%;
    max-width: 930px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 0.5em;
`

export default function Price() {
  let { Coin } = useContext(CoinContext)
  return (
    <PriceDiv>
      {Object.keys(Coin).map(el => <EachPrice coinName={el} />)}
    </PriceDiv>
  );
}
