import React from 'react'
import styled from 'styled-components'
let Box = styled.div`
    width: 100%;
    box-shadow: 0px 0px 1px gray;
    display: flex;
    flex-direction: column;
    background: white; 
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0px;
`
let Quantity = styled.div`

`
export default function EachHoldings({ elem }) {
    console.log(elem);
    let totalPaid = elem[1].quantity * elem[1].boughtPrice;
    let currentValue = elem[1].quantity * elem[1].currentPrice;
    return (
        <Box>
            <Quantity>{`${elem[0]}: ${elem[1].quantity}`}</Quantity>
            <Quantity>{`Total Paid: $${totalPaid}, Current Value: $${currentValue}`}</Quantity>
            <Quantity currentValue={currentValue - totalPaid}>{`P/L ${currentValue - totalPaid}`}</Quantity>

        </Box>
    )
}
