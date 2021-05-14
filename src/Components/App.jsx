import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CoinContext from "../Context/CoinContext";
import { useState, useEffect } from "react";
import Price from "./Price";
import Holdings from "./Holdings";
import Transactions from "./Transactions";
import Form from "./Form";

let Container = styled.div`
  height: 100%;
  width: 100%;
  background-image: url("images/bg.svg");
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5em;

`;
let Bottom = styled.div`
    width: 60%; 
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 10px;
    
`
export default function App() {
    const API =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20dogecoin";

    let [prices, setPrices] = useState({});
    let [wallet, setWallet] = useState(100);
    let [holding, setHolding] = useState({
        dogecoin: { quantity: 0, boughtPrice: 0, currentPrice: 0 },
        bitcoin: { quantity: 0, boughtPrice: 0, currentPrice: 0 },
        ethereum: { quantity: 0, boughtPrice: 0, currentPrice: 0 }
    })
    let [transaction, setTransaction] = useState({form: 'hidden'})

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
                image: el.image
            })
        );
        setPrices(temp);
        let values = JSON.parse(JSON.stringify(holding));
        for (let coin in temp) {
            let lowerValue = coin.toLowerCase();
            values[lowerValue].currentPrice = temp[coin].current_price;
        }
        setHolding(values);
    }

    useEffect(() => {
        let refreshPrice = setInterval(() => getPrices(), 5000)
        return () => clearInterval(refreshPrice)
    }, [])

    function hideForm() {
        let copy = JSON.parse(JSON.stringify(transaction))
        copy.form = 'hidden'
        setTransaction(copy)
    }

    return (
        < CoinContext.Provider value={{ Coin: prices, wallet: [wallet, setWallet], holdings: [holding, setHolding], transaction: [transaction, setTransaction] }}>
            <Container>    
                <Form display={transaction.form} hide={hideForm}/>
                <Header />
                <Price />
                <Bottom>
                    <Holdings />
                    <Transactions />
                </Bottom>
            </Container>
        </CoinContext.Provider >
    );
}
