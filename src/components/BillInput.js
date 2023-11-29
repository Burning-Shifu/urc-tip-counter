export default function BillInput({ billSum, onBillChange }) {
  return (
    <div className="input">
      <label htmlFor="bill">How much was the bill?</label>
      <input id="bill" value={billSum} onChange={onBillChange} type="number" />
    </div>
  );
}
