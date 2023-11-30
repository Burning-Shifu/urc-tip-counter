export default function NumberOfPeople({ numOfPeople, onNumPeopleChange }) {
  return (
    <div className="input">
      <label htmlFor="numOfPeople">How many people had food/drinks?</label>
      <select id="numOfPeople" value={numOfPeople} onChange={onNumPeopleChange}>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
