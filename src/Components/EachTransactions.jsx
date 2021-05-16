import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'

let MainDiv = styled.div`
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

    &.Bought {
        border-left: 8px solid #24b324;
    }

    &.Sold {
        border-left: 8px solid #b32424;
    }

    .date {
        font-size: .8rem;
    }
`

export default function EachTransactions({index}) {
    let { doneTransaction } = useContext(CoinContext)
    let [type, coinName, quantity, currentPrice, date] = doneTransaction[0][index]

    return (
        <MainDiv className={type}>
            <p>{coinName + ' ~ ' + quantity + '@' + currentPrice}</p>
            <p>Paid: ${parseFloat((quantity * currentPrice).toFixed(2))}</p>
            <p className="date">{type} on {date}</p>
        </MainDiv>
    )
}
