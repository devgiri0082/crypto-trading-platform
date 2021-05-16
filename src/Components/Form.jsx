import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import CoinContext from "../Context/CoinContext";


let Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);

  &.hidden {
      display: none;
  }
`;

let MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  box-shadow: 2px 2px 15px 5px rgba(97, 97, 97, 0.534), -2px -2px 15px 5px rgba(97, 97, 97, 0.534);
  margin-bottom: 5em;
  border-radius: 10px;
`;

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
    cursor: pointer;
  }
`;
let FormBody = styled.div`
  height: 100%;
  color: #505050;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: flex-start;
  justify-content: center;
  background-color: white;
  border-radius: 0 0 10px 10px;

  label {
    display: flex;
    gap: 0.5em;
    align-items: center;
    font-size: 13.7px;
  }

  .amt {
    height: 2.5em;
    padding: 0em 0.5em;
    border: 2px solid #505050;
    border-radius: 5px;
    font-family: "Poppins";
  }

  button {
    padding: 0.5em 1em;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

let InputValue = styled.div`
  display: flex;
  flex-direction: column;

  .max {
    cursor: pointer;
  }

  .total {
    font-size: 0.7rem;
  }
`

export default function Forms() {
  
  let { price, transactionValues, holdings, wallet, doneTransaction } = useContext(CoinContext)
  let { form, coinName, name } = transactionValues[0]   // coinName is 'ethereum','dogecoin','bitcoin'. name is 'Ethereum', 'Dogecoin', and 'Bitcoin'
  let current_price = price[coinName] ? price[coinName].current_price : 0  // this is just for newly reload, because price is empty when not fetched yet and would cause error if we access current_price of empty object

  let [valid, setValid] = useState(false);
  let [type, setType] = useState("Buy");
  let [total, setTotal] = useState(0);

  let inputRef = useRef()

  function checkValue() { 
    let quantity = inputRef.current.value
    let totalCan = (maxBuy().toFixed(10));
    if (Number(quantity) <= 0) {
      setValid(false);
      return;
    }
    totalCan < (quantity === "" ? 0 : Number(quantity)) ? setValid(false) : setValid(true);
    setTotal(quantity * current_price)
  }

  function maxBuy() {
    if (type === 'Buy') return wallet[0] / current_price;
    return holdings[0][coinName] ? holdings[0][coinName].quantity : 0;
  }

  function hideForm() {
    transactionValues[1]({ form: 'hidden' })
    inputRef.current.value = ''
    setValid(false);
  }

  function submit() { // organized the submit function and added functioning wallet
    if (!valid) return;
    let tempHolding = JSON.parse(JSON.stringify(holdings[0]));
    let quantity = Number(inputRef.current.value);
    if (type === 'Buy') {
      doneTransaction[1]([...doneTransaction[0], ["Bought", name, inputRef.current.value, current_price, (new Date()).toLocaleString()]]);
      tempHolding[coinName].quantity += quantity
      tempHolding[coinName].boughtPriceTotal += (quantity * current_price)
      wallet[1]((p) => p - (quantity * current_price))
    }
    else if (type === 'Sell') {
      doneTransaction[1]([...doneTransaction[0], ["Sold", name, inputRef.current.value, current_price, (new Date()).toLocaleString()]]);
      tempHolding[coinName].quantity -= quantity
      tempHolding[coinName].boughtPriceTotal -= (quantity * current_price)
      wallet[1]((p) => p + (quantity * current_price))
    }
    holdings[1](tempHolding);
  }

  function placeMax() {
    let max = parseFloat(maxBuy().toFixed(8))
    inputRef.current.value = max
    setTotal(max * current_price)
    setValid(true)
  }

  return (
    <Background className={form}>
      <MainDiv>
        <Header>
          <div className="title">{type + " " + name}</div>
          <button onClick={hideForm}>X</button>
        </Header>
        <FormBody>
          <p>Current Price: ${current_price}</p>
          <InputValue>
            <label>
              <input name="quantity" type="number" min="0" className="amt" placeholder={0} ref={inputRef} onChange={checkValue} />
              <p className='max' onClick={placeMax}>{`Max: ${parseFloat(maxBuy().toFixed(8))}`}</p>
            </label>
            {valid &&
              <p className='total' >You will {type === 'Buy' ? 'be charged ' : 'receive '} ${total.toFixed(2)}</p>
            }
            {!valid &&
              <p className='total' >Please enter a valid quantity</p>
            }
          </InputValue>
          <label>
            <input type="radio" name="type" value="Buy" onChange={() => {
              setType('Buy')
              inputRef.current.value = ''
              setValid(false)
            }} defaultChecked /> Buy
          </label>
          <label>
            <input type="radio" name="type" value="Sell" onChange={() => {
              setType('Sell')
              inputRef.current.value = ''
              setValid(false)
            }} /> Sell
          </label>
          <button style={{ background: valid ? "black" : "gray" }} onClick={submit}>{type}</button>
        </FormBody>
      </MainDiv>
    </Background>
  )
}
