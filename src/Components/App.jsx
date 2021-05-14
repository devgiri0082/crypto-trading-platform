import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CoinContext from "../Context/CoinContext";
import { useState, useEffect } from "react";
import Price from "./Price";

let Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("images/bg.svg");
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
export default function App() {
    const API =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20dogecoin";

    let [prices, setPrices] = useState({});
    let [wallet, setWallet] = useState(100);
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
    }

    useEffect(() => {
        getPrices()
    }, [])
    let [holding, setHolding] = useState({
        dogecoin: { quantity: 0, boughtPrice: 0, currentPrice: 0 },
        bitcoin: { quantity: 0, boughtPrice: 0, currentPrice: 0 },
        ethereum: { quantity: 0, boughtPrice: 0, currentPrice: 0 }
    })
    return (
        < CoinContext.Provider value={{ Coin: prices, wallet: [wallet, setWallet], holdings: [holding, setHolding] }}>
            <Container>
                <Header />
                <Price />
            </Container>
        </CoinContext.Provider >
    );
}
