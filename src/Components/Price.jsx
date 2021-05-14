import React from "react";
import CoinContext from "../Context/CoinContext";

export default function Price() {
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2C%20ethereum%2C%20dogecoin";
  async function getPrices() {
    let response = await fetch(API);
    let data = await response.json();
    let temp = {}
      data.forEach(el => temp[el.id] = { name: el.name, current_price: el.current_price, market_cap: (el.market_cap_change_24h).toFixed(5) })
      
    }
    
    let [prices, setPrices] = useState({})
  return (
      <CoinContext.Provider value={{ Prices: prices}}>
        <div>
              
      </div>
    </CoinContext.Provider>
  );
}
