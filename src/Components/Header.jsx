import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'
let Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
let Title = styled.div`
font-size: 40px;
`
let Message = styled(Title)`
    font-size: 15px;
    opacity: 0.7;
`
let Money = styled(Title)`
    font-size: 20px;
`
let Portfolio = styled(Title)`
    font-size: 30px;
`
export default function Header() {
    let contextData = useContext(CoinContext);
    for (let coin in contextData.Coin) {
        let values = JSON.parse(JSON.stringify(contextData.holdings[0]));
        if (contextData.Coin[coin] !== undefined) {
            let lowerValue = coin.toLowerCase();
            console.log(values.lowerValue);

        }
    }
    return (
        <Heading>
            <Title>Earn some virtual money 💰</Title>
            <Message>To buy virtual food🍕</Message>
            <Money>🏦 Wallet: ${contextData.wallet[0]}</Money>
            <Portfolio>Portfolio Value: ${Object.entries(contextData.holdings[0]).reduce((acc, elem) => acc + elem[1].quantity * elem[1].currentPrice, 0).toFixed(2)}</Portfolio>
            <Portfolio></Portfolio>
        </Heading>
    )
}
