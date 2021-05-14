import React from 'react'
import styled from 'styled-components'
let Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
let Title = styled.div`
    font-size: 25px;
`
export default function Holdings() {
    return (
        <Box>
            <Title>Current Holdings</Title>
        </Box>
    )
}
