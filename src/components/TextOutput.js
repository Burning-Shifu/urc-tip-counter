export default function TextOutput({ billSum, tipPercent1, tipPercent2 }) {
  const averageTipPersent = (tipPercent1 + tipPercent2) / 2;
  const tip = billSum * (averageTipPersent / 100);
  const totalAmount = billSum + tip;

  return (
    <>
      <h2>{`You pay $${totalAmount} ($${billSum} + $${tip} tip)`}</h2>
    </>
  );
}
