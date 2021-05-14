import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CoinContext from "../Context/CoinContext";
import { useState, useEffect } from "react";

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
    let [holding, setHolding] = useState({
        dogecoin: {},
        bitcoin: [],
        ethereum: []
    })


    async function getPrices() {
        let response = await fetch(API);
        let data = await response.json();
        let temp = {};
        data.forEach(
            (el) =>
            (temp[el.id] = {
                name: el.name,
                current_price: el.current_price,
                market_cap: el.market_cap_change_24h.toFixed(5),
            })
        );
        setPrices(temp);
    }

    useEffect(() => {
        getPrices()
    }, [])

    return (
        <CoinContext.Provider value={{ Coin: prices, Wallet: 100, Holdings: { Holding } }}>
            <Container>
                <Header />
            </Container>
        </CoinContext.Provider>
    );
}
