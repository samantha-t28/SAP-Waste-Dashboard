import { ColumnChart } from "@ui5/webcomponents-react-charts";

const data = require("../Data/data.json");
function BarChart() {
	return (
		<ColumnChart
			dataset={data["Monthly Tracking"]}
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
