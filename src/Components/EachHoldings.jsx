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
    let totalPaid = elem[1].quantity * elem[1].boughtPrice;
    let currentValue = elem[1].quantity * elem[1].currentPrice;
    if (elem[1].quantity > 0) {
        return (
            <Box>
                <Quantity>{`${elem[0]}: ${elem[1].quantity}`}</Quantity>
                <Quantity>{`Total Paid: $${totalPaid.toFixed(2)}, Current Value: $${currentValue.toFixed(2)}`}</Quantity>
                <Quantity currentValue={currentValue - totalPaid}>{`P/L ${currentValue - totalPaid}`}</Quantity>

            </Box>
        )
    }
    return (<></>);
}
