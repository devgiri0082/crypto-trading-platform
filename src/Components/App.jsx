import React from 'react'
import styled from 'styled-components'
import Header from './Header'

let Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url("images/bg.svg");
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`
export default function App() {
    return (
        <Container>
            <Header />
        </Container>
    )
}
