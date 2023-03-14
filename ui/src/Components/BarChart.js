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
		let coffeeData = data["Monthly Tracking"][i]["Coffee Grounds"];

		let cascadeData = rigidData + paperData;

		result.push({
			month: data["Monthly Tracking"][i]["Month"],
			cascadeTotal: cascadeData,
			ecoactionTotal: compostData,
			wasteTotal: garbageData,
			coffeeTotal: coffeeData,
		});
		// console.log(totalData);
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
					accessor: "cascadeTotal",
					label: "Cascade Recovery",
					color: "#ebc700",
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

export default BarChart;
