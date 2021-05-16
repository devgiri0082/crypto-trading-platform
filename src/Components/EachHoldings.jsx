import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'
let Box = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 5px rgb(182, 181, 181);
    padding: 0.5em 1em;
    border-radius: 8px;
    background-color: white;
    justify-content: center;
    font-weight: 400;
    gap: 0.2em;
    width: 100%;
    color: #505050;
`
let Quantity = styled.div`
    font-size: .9rem;
    font-weight: 400;

    &.positive {
        color: green;
    }

    &.negative {
        color: red;
    }

`
export default function EachHoldings({ coinName }) {
    let { price, holdings } = useContext(CoinContext)
    let { quantity, boughtPriceTotal } = holdings[0][coinName]
    let current_price = price[coinName] ? price[coinName].current_price : 0 
    let currentValue = quantity * current_price;
    let pl = parseFloat((currentValue - boughtPriceTotal).toFixed(3))
    return (
        <>
            {quantity > 0 &&
                <Box>
                    <Quantity>{`${price[coinName].name}: ${quantity}`}</Quantity>
                    <Quantity>{`Total Paid: $${boughtPriceTotal.toFixed(2)}, Current Value: $${currentValue.toFixed(2)}`}</Quantity>
                    <Quantity className={pl >= 0 ? 'positive' : 'negative'}>{`P/L: ${pl + (pl >= 0 ? ' 🚀' : ' ▼')}`}</Quantity>
                </Box>
            }
        </>
    )
}
