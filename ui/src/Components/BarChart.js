import { ColumnChart } from "@ui5/webcomponents-react-charts";

const data = require("../Data/data.json");

function BarChart() {
	let result = [];

	for (let i = 10; i < 12; i++) {
		// we are now looping in here: nov and dec

		let rigidData =
			data["Monthly Tracking"][i]["Rigids      (refundable & non)"];
		let paperData = data["Monthly Tracking"][i]["Mixed Paper/Fiber"];
		let compostData = data["Monthly Tracking"][i]["Compost"];
		let garbageData = data["Monthly Tracking"][i]["Garbage"];

		result.push({
			month: data["Monthly Tracking"][i]["Month"],
			rigids: rigidData,
			paper: paperData,
			compost: compostData,
			garbage: garbageData,
		});
		// console.log(result);
	}

	return (
		<ColumnChart
			style={{ height: "350px" }}
			dataset={result}
			dimensions={[
				{
					accessor: "month",
				},
			]}
			measures={[
				{
					accessor: "rigids",
					label: "Rigids",
				},
				{
					accessor: "paper",
					label: "Mixed Recycling / Paper",
				},
				{
					accessor: "compost",
					label: "Food Waste & Organics",
				},
				{
					accessor: "garbage",
					label: "Landfill",
				},
			]}
		/>
	);
}

export default BarChart;
