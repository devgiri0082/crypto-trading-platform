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

let NoTransaction = styled.div`
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

export default function Transactions() {
  let { doneTransaction } = useContext(CoinContext);
  return (
    <MainDiv>
      <h1>Transactions</h1>
      {doneTransaction[0].length !== 0 && (
        <TransactionList>
          {doneTransaction[0].map((elem, i) => (
            <EachTransactions index={i} />
          ))}
        </TransactionList>
      )}
      {doneTransaction[0].length === 0 && (<NoTransaction>So empty...</NoTransaction>)}
    </MainDiv>
  );
}
