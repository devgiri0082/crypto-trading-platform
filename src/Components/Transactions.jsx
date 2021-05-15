import React from "react";
import styled from "styled-components";
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
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Transactions({ doneTransaction }) {
  return (
    <MainDiv>
      <h1>Transactions</h1>
      <TransactionList>
        {doneTransaction.map(elem => <EachTransactions elem={elem} />)}
      </TransactionList>
    </MainDiv>
  );
}
