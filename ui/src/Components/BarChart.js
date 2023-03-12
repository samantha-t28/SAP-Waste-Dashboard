import { ColumnChart } from "@ui5/webcomponents-react-charts";

const data_original = require("../Data/data.json");
function BarChart() {
	// settings:
	const SETMONTH = "DECEMBER";
	const result = [];

	const targetObject = data_original["Monthly Tracking"].find(
		(obj) => obj.Month === SETMONTH
	);
	const month = data_original["Monthly Tracking"].indexOf(targetObject);

	for (const key in data_original["Monthly Tracking"][month]) {
		if (key === "Compost") {
			result.push({
				group1: key,
				val: data_original["Monthly Tracking"][month][key],
			});
		}
		if (key === "coffeeGrounds") {
			result.push({
				group1: key,
				val: data_original["Monthly Tracking"][month][key],
			});
		}
		if (key === "Garbage") {
			result.push({
				group1: key,
				val: data_original["Monthly Tracking"][month][key],
			});
		}
	}

	console.log(result);

	return (
		<ColumnChart
			dataset={result}
			dimensions={[
				{
					accessor: "Month",
					formatter: function Ma() {},
				},
			]}
			measures={[
				{
					accessor: "Rigids      (refundable & non)",
					formatter: function Ma() {},
					label: "Rigids",
				},
				{
					accessor: "Compost",
					formatter: function Ma() {},
					hideDataLabel: true,
					label: "Compost",
				},
				{
					accessor: "Garbage",
					label: "Garbage",
				},
			]}
			onClick={function Ma() {}}
			onDataPointClick={function Ma() {}}
			onLegendClick={function Ma() {}}
		/>
	);
}

export default BarChart;
