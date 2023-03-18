import { BarChart } from "@ui5/webcomponents-react-charts";

function BarGraph({ months }) {
	let result = [];

	months = months.slice(0);
	months.pop();

	for (const [key, month] of Object.entries(months)) {
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

	return (
		<BarChart
			style={{ height: "325px" }}
			dataset={[
				{
					name: "     ",
					sessions: 300,
					users: 100,
					volume: 756,
				},
			]}
			dimensions={[
				{
					accessor: "name",
				},
			]}
			measures={[
				{
					accessor: "users",
					label: "Coffee Grounds",
					color: "#e6873a",
				},
				{
					accessor: "sessions",
					label: "Landfill",
					color: "grey",
				},
				{
					accessor: "volume",
					label: "Compost",
				},
			]}
		/>
	);
}

export default BarGraph;
