import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'

let Card = styled.div`
    display: flex;
    box-shadow: 1px 1px 5px rgb(182, 181, 181);
    padding: 0.5em 1em;
    border-radius: 10px;
    background-color: white;
    align-items: center;
    gap: 1em;
    cursor: pointer;
`

let Logo = styled.img`
    width: 70px;
    height: 70px;
`

let Details = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
    }

    .name {
        font-weight: 400;
    }

    .cap {
        font-size: .8rem;
    }
`

export default function EachPrice({ coinName }) {
    let { price, transactionValues } = useContext(CoinContext)
    let { image, current_price, name, market_cap } = price[coinName]

    function showForm() {
        let copy = JSON.parse(JSON.stringify(transactionValues[0]))
        copy.form = '';
        copy.coinName = coinName;
        copy.name = name;
        transactionValues[1](copy)
    }

    return (
        <Card onClick={showForm}>
            <Logo src={image} />
            <Details>
                <h1>${current_price}</h1>
                <p className='name'><b>{name}</b></p>
                <p className='cap'>Last 24h: <span style={{ color: market_cap > 0 ? 'green' : 'red' }} >{market_cap}%</span></p>
            </Details>
        </Card >
    )
}
