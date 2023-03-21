function EcoActionComponent({ percentage, months, filter }) {
	let result = [];

	months = months.slice(0); // months = months // because of safety
	months.pop();

	for (const [key, month] of Object.entries(months)) {
		result.push({
			month: month["Month"],
			ecoactionTotal: month["Compost"],
		});
	}

	let oldMonth = filter[0];
	let newMonth = filter[1];

	let oldMonthIndex = -1; // good numbers are 0 - 12+ because the dataset can be 0-12 or more, i would not put THE correct value in here
	let newMonthIndex = -1;

	result.forEach((element, index) => {
		if (element["month"] === oldMonth) {
			oldMonthIndex = index;
		}
		if (element["month"] === newMonth) {
			newMonthIndex = index;
		}
	});

	oldMonth = result[oldMonthIndex]["ecoactionTotal"];
	newMonth = result[newMonthIndex]["ecoactionTotal"];

	let percent = ((oldMonth - newMonth) / newMonth) * 100;
	percentage = percent.toFixed(2) + "%";

	const isNegative = percent < 0;
	const backgroundColor = isNegative ? "  positive" : "  negative";

	return (
		<>
			<div className={backgroundColor}>
				<p>{percentage}</p>
			</div>
		</>
	);
}

export default EcoActionComponent;
