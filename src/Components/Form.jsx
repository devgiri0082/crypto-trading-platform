import { useState } from "react"
import styled from "styled-components"

let MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    box-shadow: 1px 1px 5px rgb(182, 181, 181);
    margin-bottom: 5em;
    border-radius: 10px;
`
let Header = styled.div`
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    color: white;
    background-color: #353434;
    border-radius: 10px 10px 0 0;

    button {
        background-color: transparent;
        border: none;
        color: white;
        font-weight: 600;
    }
`
let FormBody = styled.div`
    height: 100%;
    color: #505050;
    padding: 15px 15px;
    display: flex;
    flex-direction: column;
    gap: .5em;
    align-items: flex-start;
    justify-content: center;
    background-color: white;
    border-radius: 0 0 10px 10px;

    label {
        display: flex;
        gap: .5em;
        align-items: center;
    }

    .amt {
        height: 2.5em;
        padding: 0em .5em;
        border: 2px solid #505050;
        border-radius: 5px;   
        font-family: "Poppins";
    }

    button {
        padding: .5em 1em;
        border: none;
        background-color: #353434;
        color: white;
        border-radius: 5px;
    }
`

export default function Form(props) {

    let [type, setType] = useState('Buy')
    let [coinName, currentPrice] = ['Dogecoin', 0.511823]

    return (
        <MainDiv>
            <Header>
                <div className="title">{type + ' ' + coinName}</div>
                <button>X</button>
            </Header>
            <FormBody>
                <p>Current Price: ${currentPrice}</p>
                <label>
                    <input className='amt' type="text" placeholder='0' />
                    Max: 195.123456
                </label>
                <label>
                <input type="radio" name='type' value='Buy' /> Buy
                </label>
                <label>
                <input type="radio" name='type' value='Sell' /> Sell
                </label>
                <button>{type}</button>
            </FormBody>
        </MainDiv>
    )
}