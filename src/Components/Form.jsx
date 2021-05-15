import { useEffect, useState } from "react";
import styled from "styled-components";


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

export default function Forms(props) {
  let [inputValue, setInputValue] = useState("0");
  let [click, setClick] = useState(true);
  let [type, setType] = useState("Buy");
  let [total, setTotal] = useState(0);
  let [coinName, currentPrice, maxSell, maxBuy] = [props.values[0], props.values[1], props.values[2], props.values[3]];
  useEffect(() => {
    setButton(inputValue);
  }, [type])
  return (
    <Background className={props.display}>
      <MainDiv>
        <Header>
          <div className="title">{type + " " + coinName}</div>
          <button onClick={() => {
            setType("Buy");
            props.hide()
          }}>X</button>
        </Header>
        <FormBody>
          <p>Current Price: ${currentPrice}</p>
          <label>
            <input name="quantity" type="number" min="0" className="amt" placeholder={0} onChange={(e) => {
              setInputValue(e.target.value);
              setButton(e.target.value);
            }} />
            {`Max ${type}: ${type === "Buy" ? maxBuy.toFixed(10) : maxSell}`}
          </label>
          <label>
            <input type="radio" checked name="type" value="Buy" onClick={() => {
              setType("Buy")
            }} /> Buy
          </label>
          <label>
            <input type="radio" name="type" value="Sell" onClick={() => setType("Sell")} /> Sell
          </label>
          <button style={{ background: click === true ? "black" : "gray" }} onClick={(e) => {
            if (e.target.style.background === "gray") return;
            console.log(inputValue, coinName);
          }}>{type}</button>
        </FormBody>
      </MainDiv>
    </Background>
  )
  function setButton(value) {
    let totalCan = (type === "Buy" ? maxBuy.toFixed(10) : maxSell);
    if (Number(value) < 0) {
      setClick(false);
      return;
    }
    totalCan < (value === "" ? 0 : Number(value)) ? setClick(false) : setClick(true);

  }
}
