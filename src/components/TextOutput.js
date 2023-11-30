export default function TextOutput({ billSum, tipPercents }) {
  const averageTipPersent =
    tipPercents.reduce((a, b) => {
      return a + b;
    }) / tipPercents.length;
  const tip = +(billSum * (averageTipPersent / 100)).toFixed(2);
  const totalAmount = billSum + tip;

  return (
    <>
      <h2>
        You pay ${totalAmount} (${billSum} + ${tip} tip)
      </h2>
    </>
  );
}