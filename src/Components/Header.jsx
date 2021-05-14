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
    return (
        <Heading>
            <Title>Earn some virtual money 💰</Title>
            <Message>To buy virtual food🍕</Message>
            <Money>🏦 Wallet: ${contextData.wallet[0]}</Money>
            <Portfolio>Portfolio Value: $0.00</Portfolio>
        </Heading>
    )
}
