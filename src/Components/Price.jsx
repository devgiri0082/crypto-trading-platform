import React, { useState } from "react";
import CoinContext from "../Context/CoinContext";
import EachPrice from "./EachPrice";

export default function Price() {
  return (
    <div>
          <EachPrice />
          <EachPrice />
          <EachPrice />
    </div>
  );
}
