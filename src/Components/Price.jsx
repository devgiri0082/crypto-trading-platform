import React, { useContext } from "react";
import CoinContext from "../Context/CoinContext";
import EachPrice from "./EachPrice";
import styled from 'styled-components'

let PriceDiv = styled.div`
    display: grid;
    width: 60%;
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
