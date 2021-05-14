import { useState } from "react"
import styled from "styled-components"

let MainDiv = styled.div`

`
let Header = styled.div`

`

let FormBody = style.div`

`

export default function Form(props) {

    let [type, setType] = useState('Buy')
    let [coinName, currentPrice] = ['Dogecoin', 0.511823]

    return (
        <MainDiv>
            <Header>
                <div className="title">{type + ' ' + coinName}</div>
                <button>x</button>

            </Header>
            <FormBody>
                <p>Current Price: ${currentPrice}</p>
                <label>
                    <input type="text" placeholder='0' />
                    Max:
                </label>
            </FormBody>
        </MainDiv>
    )
}