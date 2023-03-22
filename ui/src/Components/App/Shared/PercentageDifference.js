function PercentageDifference({ data, filterOld, filterNew, valueKey }) {
	const oldMonthValue = data.find((month) => month.Month === filterOld)[
		valueKey
	];
	const newMonthValue = data.find((month) => month.Month === filterNew)[
		valueKey
	];

	const percent = ((oldMonthValue - newMonthValue) / newMonthValue) * 100;
	const percentage = percent.toFixed(2) + "%";

	const isNegative = percent < 0;
	const backgroundColor = isNegative ? "positive" : "negative";
	const arrow = isNegative ? "↓" : "↑";

	return (
		<>
			<div className={`flex ${backgroundColor}`}></div>
			<p className="percent-text">
				<span className="arrow">{arrow}</span>
				{percentage}
			</p>
		</>
	);
}

export default PercentageDifference;
