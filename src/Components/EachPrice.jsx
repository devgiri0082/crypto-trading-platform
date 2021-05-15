import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'
import Form from './Form'

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
    let { Coin, wallet, holdings, transaction, values } = useContext(CoinContext)
    let { image, current_price, name, market_cap } = Coin[coinName]

    function showForm() {
        let copy = JSON.parse(JSON.stringify(transaction[0]))
        copy.form = ''
        transaction[1](copy)
    }

    return (
        <Card className={`coin ${name}`} onClick={() => {
            values[1]([name.toLowerCase(), current_price, holdings[0][name.toLowerCase()].quantity, maxBuy(current_price)]);
            showForm();
        }
        }>
            <Logo src={image} />
            <Details>
                <h1>${current_price}</h1>
                <p className='name'><b>{name}</b></p>
                <p className='cap'>Last 24h: <span style={{ color: market_cap > 0 ? 'green' : 'red' }} >{market_cap}%</span></p>
            </Details>
        </Card >
    )
    function maxBuy(price) {
        console.log()
        return wallet[0] / price;
    }
}
