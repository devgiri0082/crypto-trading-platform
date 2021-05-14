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
    let [Wallet, setWallet] = useState(1000)

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
        })
    );
    // console.log(temp)
    setPrices(temp);
    }
    
    useEffect(() => {
        let refreshPrice = setInterval(() => getPrices(), 5000)
        return () => clearInterval(refreshPrice)
    }, [])

  return (
      <CoinContext.Provider value={{ Coin: prices, Wallet: Wallet, Holdings: { dogecoin: [], bitcoin: [], ethereum: []} }}>
      <Container>
        <Header />
      </Container>
    </CoinContext.Provider>
  );
}
