import React from 'react'
import styled from 'styled-components'
import EachTransactions from './EachTransactions'

let MainDiv = styled.div`

`

let TransactionList = styled.div`
    
`

export default function Transactions() {

    return (
        <MainDiv>
            <h1>Transactions</h1>
            <TransactionList>
                <EachTransactions />
            </TransactionList>
        </MainDiv>
    )
}
