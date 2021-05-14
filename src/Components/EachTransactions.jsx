import React from 'react'
import styled from 'styled-components'

let MainDiv = styled.div`

`

export default function EachTransactions() {

    let [ type, coinName, quantity, currentPrice, date] = ['Bought', 'Dogecoin', 50, 0.511823, (new Date()).getTime()]

    return (
        <MainDiv>
            <p>{coinName + ' ~ ' + quantity + '@' + currentPrice}</p>
            <p>Paid: {parseFloat((quantity * currentPrice).toFixed(2))}</p>
            <p className="date">{type} on {(new Intl.DateTimeFormat('en', date)).format()}</p>
        </MainDiv>
    )
}
