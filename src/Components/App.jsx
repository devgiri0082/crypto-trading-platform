import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CoinContext from "../Context/CoinContext";
import { useState, useEffect } from "react";
import Price from "./Price";
import Holdings from "./Holdings";
import Transactions from "./Transactions";
import Forms from "./Form";

let Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: url("images/bg.svg");
  /* background-repeat: repeat; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;
let Bottom = styled.div`
  width: 90%;
  max-width: 930px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 10px;
`;
export default function App() {
    const API =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20dogecoin";

    let [prices, setPrices] = useState({});
    let [wallet, setWallet] = useState(100);
    let [holding, setHolding] = useState({
        dogecoin: { quantity: 0, boughtPriceTotal: 0 }, // remove current price, we only storing quantity and how much it was bought
        bitcoin: { quantity: 0, boughtPriceTotal: 0 },  // the current price we will display would be from the Coin context
        ethereum: { quantity: 0, boughtPriceTotal: 0 },
    });
    let [transactionValues, setTransactionValues] = useState({ form: "hidden" }); 
    let [doneTransaction, setDoneTransaction] = useState([]); // storing all the transactions

    async function getPrices() {
        let response = await fetch(API);
        let data = await response.json();
        let temp = {};
        data.forEach(
            (el) =>
            (temp[el.id] = {
                name: el.name,
                current_price: el.current_price,
                market_cap: el.market_cap_change_percentage_24h.toFixed(5),
                image: el.image,
            })
        );
        setPrices(temp);
    }

    // function changeHolding() {
    //     let values = JSON.parse(JSON.stringify(holding));
    //     for (let coin in prices) {
    //         let lowerValue = coin.toLowerCase();
    //         values[lowerValue].currentPrice = prices[coin].current_price;
    //     }
    //     setHolding(values);
    // }

    useEffect(() => {
        let refreshPrice = setInterval(() => getPrices(), 3000);
        return () => clearInterval(refreshPrice);
    }, []);

    // useEffect(() => {
    //     changeHolding();
    // }, [prices])

    return (
        <CoinContext.Provider
            value={{
                Coin: prices,
                wallet: [wallet, setWallet],
                holdings: [holding, setHolding],
                transactionValues: [transactionValues, setTransactionValues],
                doneTransaction: [doneTransaction, setDoneTransaction]
            }}
        >
            <Container>
                <Forms />
                <Header />
                <Price />
                <Bottom>
                    <Holdings />
                    <Transactions />
                </Bottom>
            </Container>
        </CoinContext.Provider>
    );
}
