import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'
let Box = styled.div`
    width: 100%;
    box-shadow: 0px 0px 1px gray;
    display: flex;
    flex-direction: column;
    background: white; 
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0px;
`
let Quantity = styled.div`

`
export default function EachHoldings({ coinName }) {
    let { Coin, holdings } = useContext(CoinContext)
    let { quantity, boughtPriceTotal } = holdings[0][coinName]
    let { current_price } = Coin[coinName] ? Coin[coinName].current_price : 0
    // let totalPaid = quantity * boughtPrice;   =======> removed this because brought price would be different each transaction so we should just store the total in the context
    let currentValue = quantity * current_price;
    return (
        <>
        {quantity > 0 &&
            <Box>
                <Quantity>{`${Coin[coinName].name}: ${quantity}`}</Quantity>
                <Quantity>{`Total Paid: $${boughtPriceTotal.toFixed(2)}, Current Value: $${currentValue.toFixed(2)}`}</Quantity>
                <Quantity currentValue={currentValue - boughtPriceTotal}>{`P/L ${currentValue - boughtPriceTotal}`}</Quantity>
            </Box>
        }
        </>
    )
}
