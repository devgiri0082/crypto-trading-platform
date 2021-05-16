import React, { useContext } from "react";
import styled from "styled-components";
import CoinContext from "../Context/CoinContext";
import EachHoldings from "./EachHoldings";
let Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  h1 {
    font-weight: 500;
  }
`;

let Title = styled.h1``;

let HoldingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  max-height: 600px;
  overflow-y: scroll;
  padding: 0.5em;
  padding-left: 0.2em;

  &::-webkit-scrollbar {
    display: none;
  }
`;

let NoHoldings = styled.div`
  display: flex;
  box-shadow: 1px 1px 5px rgb(182, 181, 181);
  border-radius: 8px;
  background-color: white;
  align-items: center;
  font-weight: 400;
  width: 100%;
  height: 90px;
  color: #c5c5c5;
  font-size: 1.5rem;
  letter-spacing: 2px;
  padding: 0.5em 1em;
`;

export default function Holdings() {
  let { holdings } = useContext(CoinContext);
  let holdingSum = Object.values(holdings[0]).reduce(
    (acc, val) => (acc += val.quantity),
    0
  );
  return (
    <Box>
      <Title>Current Holdings</Title>
      {holdingSum === 0 ? <NoHoldings>Go buy some ↗↗</NoHoldings> :
        (
          <HoldingList>
            {Object.keys(holdings[0]).map((elem, index) => (
              <EachHoldings coinName={elem} key={'holdings ' + index} />
            ))}
          </HoldingList>
        )}
    </Box>
  );
}
