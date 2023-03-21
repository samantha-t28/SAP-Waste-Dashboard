import { ColumnChart } from "@ui5/webcomponents-react-charts";

// link months from app.js
function ColumnBar({ months, filter }) {
	let result = [];

	for (const [key, month] of Object.entries(months)) {
		const includesInMonthsArrayFilter = filter.includes(month.Month);

		if (filter.includes(month.Month)) {
			result.push({
				month: month["Month"],
				cascadeTotal:
					month["Rigids      (refundable & non)"] +
					month["Mixed Paper/Fiber"],
				ecoactionTotal: month["Compost"],
				wasteTotal: month["Garbage"],
				coffeeTotal: month["Coffee Grounds"],
			});
		}
	}

	return (
		<ColumnChart
			style={{ height: "325px" }}
			dataset={result}
			dimensions={[
				{
					accessor: "month",
				},
			]}
			measures={[
				{
					accessor: "cascadeTotal",
					label: "Cascade Recovery",
					color: "blue",
				},
				{
					accessor: "ecoactionTotal",
					label: "Eco Action Recycling",
					color: "#13a373",
				},
				{
					accessor: "wasteTotal",
					label: "Waste Control Services",
					color: "grey",
				},
				{
					accessor: "coffeeTotal",
					label: "Thirst First Services",
					color: "#e6873a",
				},
			]}
		/>
	);
}

export default ColumnBar;
