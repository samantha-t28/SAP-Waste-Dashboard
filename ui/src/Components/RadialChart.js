import { RadialChart } from "@ui5/webcomponents-react-charts";

function Radial() {
	return (
		<RadialChart
			style={{ height: "325px" }}
			chartConfig={{
				innerRadius: "90%",
				outerRadius: "70%",
			}}
			displayValue="1230 Employee"
			maxValue={1000}
			value={300}
		/>
	);
}

export default Radial;
