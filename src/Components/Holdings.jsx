import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'
import EachHoldings from './EachHoldings'
let Box = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 1em;
padding: 1em;

h1 {
    font-weight: 500;
}
`

let Title = styled.h1`
`
export default function Holdings() {
    let contextData = useContext(CoinContext);
    return (
        <Box>
            <Title>Current Holdings</Title>
            {Object.entries(contextData.holdings[0]).map(elem => <EachHoldings elem={elem} />)}
        </Box>
    )
}
