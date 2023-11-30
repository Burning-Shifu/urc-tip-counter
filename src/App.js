import { useState } from "react";

import BillInput from "./components/BillInput";
import NumberOfPeople from "./components/NumberOfPeople";
import ResetBtn from "./components/ResetBtn";
import TipPercentInput from "./components/TipPercentInput";
import TextOutput from "./components/TextOutput";

import "./styles.css";

export default function App() {
  const [billSum, setBillSum] = useState(0);
  const [numOfPeople, setnumOfPeople] = useState(2);
  const [tipPercents, setTipPercents] = useState(Array(numOfPeople).fill(0));

  function matchPeopleWithPercents(newNumOfPeople, currentTipPercents) {
    if (newNumOfPeople > currentTipPercents.length) {
      const newTipPercents = Array(newNumOfPeople).fill(0);
      return newTipPercents.map((_, index) =>
        index < currentTipPercents.length ? currentTipPercents[index] : 0,
      );
    } else {
      return currentTipPercents.slice(0, newNumOfPeople);
    }
  }

  function handleNumPeopleChange(e) {
    const newNumOfPeople = +e.target.value;
    setnumOfPeople(newNumOfPeople);

    setTipPercents((prevTipPercents) =>
      matchPeopleWithPercents(newNumOfPeople, prevTipPercents),
    );
  }

  function handleBillChange(e) {
    setBillSum(+e.target.value);
  }

  function handleTipChange(e, index) {
    const updatedTips = [...tipPercents];
    updatedTips[index] = +e.target.value;
    setTipPercents(updatedTips);
  }

  function handleReset() {
    setBillSum(0);
    setTipPercents(Array(numOfPeople).fill(0));
  }

  return (
    <div className="App">
      <h1>Tip Counter</h1>
      <NumberOfPeople
        numOfPeople={numOfPeople}
        onNumPeopleChange={handleNumPeopleChange}
      />

      <BillInput billSum={billSum} onBillChange={handleBillChange} />

      {Array.from({ length: numOfPeople }, (_, i) => (
        <TipPercentInput
          key={i}
          index={i}
          id={`tipPercent${i}`}
          tipPercents={tipPercents}
          onTipChange={handleTipChange}
        />
      ))}

      {billSum > 0 && (
        <>
          <TextOutput billSum={billSum} tipPercents={tipPercents} />
          <ResetBtn onReset={handleReset} />
        </>
      )}
    </div>
  );
}
