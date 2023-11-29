import { useState } from "react";

import BillInput from "./components/BillInput";
import TipPercentInput from "./components/TipPercentInput";
import TextOutput from "./components/TextOutput";
import ResetBtn from "./components/ResetBtn";

import "./styles.css";

export default function App() {
  const [billSum, setBillSum] = useState(0);
  const [tipPercent1, setTipPercent1] = useState(0);
  const [tipPercent2, setTipPercent2] = useState(0);

  function handleBillChange(e) {
    setBillSum(+e.target.value);
  }

  function handleTipChange1(e) {
    setTipPercent1(+e.target.value);
  }

  function handleTipChange2(e) {
    setTipPercent2(+e.target.value);
  }

  function handleReset() {
    setBillSum(0);
    setTipPercent1(0);
    setTipPercent2(0);
  }

  return (
    <div className="App">
      <h1>Tip Counter</h1>
      <BillInput billSum={billSum} onBillChange={handleBillChange} />
      <TipPercentInput
        id="tipPercent1"
        tipPercent1={tipPercent1}
        onTipChange={handleTipChange1}
      >
        How did you like the service?
      </TipPercentInput>
      <TipPercentInput
        id="tipPercent2"
        tipPercent2={tipPercent2}
        onTipChange={handleTipChange2}
      >
        How did your friend likes the service?
      </TipPercentInput>
      {billSum > 0 && (
        <TextOutput
          billSum={billSum}
          tipPercent1={tipPercent1}
          tipPercent2={tipPercent2}
        />
      )}
      {billSum > 0 && <ResetBtn onReset={handleReset} />}
    </div>
  );
}
