import { DonutChart } from "@ui5/webcomponents-react-charts";

function Donut({ data, filter, selectedMonth, label }) {
	const result = [];

	// console.log(filter, data, selectedMonth);
	const monthData = data.find((obj) => obj.Month === selectedMonth);

	const month = data.indexOf(monthData);

	for (const key in data[month]) {
		if (filter.includes(key)) {
			result.push({
				group1: key + " (in Kg)",
				val: data[month][key],
			});
		}
	}

	return (
		<DonutChart
			style={{ height: "325px" }}
			centerLabel={label}
			dataset={result}
			dimension={{
				accessor: "group1",
				height: 200,
			}}
			measure={{
				accessor: "val",
				DataLabel: "kg",
				colors: ["#47a6f3", "#476af3", "blue"],
			}}
		/>
	);
}

export default Donut;
