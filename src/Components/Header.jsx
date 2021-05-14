import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'
let Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
    margin-top: 30px;
`
let Title = styled.div`
font-size: 40px;
`
let Message = styled(Title)`
    font-size: 15px;
    opacity: 0.8;
`
let Money = styled(Title)`
    font-size: 20px;
`
let Portfolio = styled(Title)`
    font-size: 30px;
`
export default function Header() {
    let contextData = useContext(CoinContext);
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
