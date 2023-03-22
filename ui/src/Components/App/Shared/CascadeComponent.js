// CascadeComponent.js: is a card in inside the comparison section of the website
// details:
// Comparison.js gives this component data and a space to print its percentage

// CascadeComponent(): calculates the percent change between 2 months of "cascade recovery" data
// @percentage: just a space to write the percentage
// @months: comes from comparison.js as an import like this: months={data["Monthly Tracking"]}
// @filter: comes from comparison.js as selector of months that they want to see like this: filter={["JANUARY", "FEBRUARY"]}
// Currently we will expect to always have 2 months otherwise this component might break

function CascadeComponent({ percentage, months, filter }) {
	let result = [];

	months = months.slice(0); // months = months // because of safety
	months.pop();

	for (const [key, month] of Object.entries(months)) {
		result.push({
			month: month["Month"],
			cascadeTotal:
				month["Rigids      (refundable & non)"] +
				month["Mixed Paper/Fiber"],
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

	oldMonth = result[oldMonthIndex]["cascadeTotal"];
	newMonth = result[newMonthIndex]["cascadeTotal"];

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

export default CascadeComponent;
