import { useContext, useEffect, useRef, useState } from "react";
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

  label p {
    cursor: pointer;
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

export default function Forms() {

  let { transactionValues, holdings, wallet } = useContext(CoinContext)
  let { form, coinName, current_price} = transactionValues[0] // merged the transaction and values context

  let [valid, setValid] = useState(false); // former click, setClick
  let [type, setType] = useState("Buy");
  let [total, setTotal] = useState(0);

  let inputRef = useRef() // replaced inputValue state with a ref
  
  function checkValue() {  // former setButton function
    let value = inputRef.current.value
    let totalCan = (maxBuy().toFixed(10));
    if (Number(value) <= 0 || value === '') {
      setValid(false);
      return;
    }
    totalCan < (value === "" ? 0 : Number(value)) ? setValid(false) : setValid(true);
    setTotal(value*current_price)
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

  function submit() {
      if (!valid) return;
      console.log(type, inputRef.current.value, coinName);
  }

  function placeMax() {
    inputRef.current.value = parseFloat(maxBuy().toFixed(8))
    setValid(true)
  }

  return (
    <Background className={form}>
      <MainDiv>
        <Header>
          <div className="title">{type + " " + coinName}</div>
          <button onClick={hideForm}>X</button>
        </Header>
        <FormBody>
          <p>Current Price: ${current_price}</p>
          <label>
            <input name="quantity" type="number" min="0" className="amt" placeholder={0} ref={inputRef} onChange={checkValue}/>
            <p onClick={placeMax}>{`Max: ${parseFloat(maxBuy().toFixed(8))}`}</p>
            {/*removed sell buy word so it would fit in one line and form doesn't change size*/}
          </label>
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
