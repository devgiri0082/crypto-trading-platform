import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'
let Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
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
    let { Wallet } = useContext(CoinContext)
    return (
        <Heading>
            <Title>Earn some virtual money 💰</Title>
            <Message>To buy virtual food🍕</Message>
            <Money>🏦 Wallet: ${Wallet}</Money>
            <Portfolio>Portfolio Value: $0.00</Portfolio>
        </Heading>
    )
}
