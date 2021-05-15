import React, { useContext } from "react";
import styled from "styled-components";
import CoinContext from "../Context/CoinContext";
import EachTransactions from "./EachTransactions";

let MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em;

  h1 {
    font-weight: 500;
  }

`;

let TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  max-height: 600px;
  overflow-y: scroll;
  padding: 0.5em;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Transactions() {
  let { doneTransaction } = useContext(CoinContext)
  return (
    <MainDiv>
      <h1>Transactions</h1>
      <TransactionList>
        {doneTransaction[0].map((elem, i) => <EachTransactions index={i} />)}
      </TransactionList>
    </MainDiv>
  );
}
