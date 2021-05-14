import React from 'react'
import styled from 'styled-components'
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
    return (
        <Heading>
            <Title>Earn some virtual money 💰</Title>
            <Message>To buy virtual food🍕</Message>
            <Money>🏦 Wallet: $100</Money>
            <Portfolio>Portfolio Value: $0.00</Portfolio>
        </Heading>
    )
}
