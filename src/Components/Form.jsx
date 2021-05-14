import { useState } from "react";
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
    background-color: #353434;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default function Form(props) {
  let [type, setType] = useState("Buy");
    let [coinName, currentPrice] = ["Dogecoin", 0.511823];

  return (
    <Background className={props.display}>
      <MainDiv>
        <Header>
          <div className="title">{type + " " + coinName}</div>
          <button onClick={() => props.hide()}>X</button>
        </Header>
        <FormBody>
          <p>Current Price: ${currentPrice}</p>
          <label>
            <input className="amt" type="text" placeholder="0" />
            Max: 195.123456
          </label>
          <label>
            <input type="radio" name="type" value="Buy" /> Buy
          </label>
          <label>
            <input type="radio" name="type" value="Sell" /> Sell
          </label>
          <button>{type}</button>
        </FormBody>
      </MainDiv>
    </Background>
  );
}
