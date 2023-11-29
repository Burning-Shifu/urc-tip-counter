const tipOptions = [
  { id: 1, title: "Dissatisfied (0%)", percent: 0 },
  { id: 2, title: "It was ok (5%)", percent: 5 },
  { id: 3, title: "It was good (10%)", percent: 10 },
  { id: 4, title: "Absolutely amaizing! (15%)", percent: 15 },
];

export default function TipPercentInput({
  id,
  children,
  tipPercent,
  onTipChange,
}) {
  return (
    <div className="input">
      <label htmlFor={id}>{children}</label>
      <select id={id} value={tipPercent} onChange={onTipChange}>
        {tipOptions.map((option) => (
          <option value={option.percent} key={option.title}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
