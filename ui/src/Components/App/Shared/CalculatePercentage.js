function CalculatePercentage(
	wasteTotalKey,
	resultKey,
	months,
	filter,
	wasteTotalKey2
) {
	let result = [];

	months = months.slice(0);
	months.pop();

	for (const [key, month] of Object.entries(months)) {
		result.push({
			month: month["Month"],
			wasteTotal: wasteTotalKey2
				? month[wasteTotalKey] + month[wasteTotalKey2]
				: month[wasteTotalKey],
		});
	}

	let oldMonth = filter[0];
	let newMonth = filter[1];

	let oldMonthIndex = -1;
	let newMonthIndex = -1;

	result.forEach((element, index) => {
		if (element["month"] === oldMonth) {
			oldMonthIndex = index;
		}
		if (element["month"] === newMonth) {
			newMonthIndex = index;
		}
	});

	oldMonth = result[oldMonthIndex][resultKey];
	newMonth = result[newMonthIndex][resultKey];

	let percent = ((oldMonth - newMonth) / newMonth) * 100;
	let percentage = percent.toFixed(2) + "%";

	const isNegative = percent < 0;
	return [isNegative, percentage];
}

module.exports = { CalculatePercentage };
