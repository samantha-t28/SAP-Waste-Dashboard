import { DonutChart } from "@ui5/webcomponents-react-charts";

const data = require("../Data/data.json");

function PieChart() {
	// settings:
	const SETMONTH = "FEBRUARY";
	const result = [];
	const category = "Landfill";

	// set data["Monthly Tracking"][0] - 0 means jan , 1 means feb

	const targetObject = data["Monthly Tracking"].find(
		(obj) => obj.Month === SETMONTH
	);
	const month = data["Monthly Tracking"].indexOf(targetObject);

	// for loop that goes through the Monthly Tracking obj, the "key" is for example: Compost, Year etc
	// the if statements is for catching what "we need" to display
	for (const key in data["Monthly Tracking"][month]) {
		if (key === "Coffee Grounds") {
			result.push({
				group1: key + " (in Kg)",
				val: data["Monthly Tracking"][month][key],
			});
		}
		if (key === "Garbage") {
			result.push({
				group1: key + " (in Kg)",
				val: data["Monthly Tracking"][month][key],
			});
		}
	}

	// console.log(result);

	return (
		<DonutChart
			centerLabel={category}
			dataset={result}
			// required
			dimension={{
				accessor: "group1",
			}}
			measure={{
				accessor: "val",
				DataLabel: "kg",
			}}
		/>
	);
}

export default PieChart;
