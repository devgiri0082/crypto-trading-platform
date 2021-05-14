import React, { useContext } from 'react'
import styled from 'styled-components'
import CoinContext from '../Context/CoinContext'
import EachHoldings from './EachHoldings'
let Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 15px;
    margin-top: 20px;
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
