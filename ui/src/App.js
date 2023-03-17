import logo from "./logo.svg";
import "./App.css";
import { ShellBar } from "@ui5/webcomponents-react";
import ColumnGraph from "./Components/ColumnGraph";
import BarGraph from "./Components/BarGraph";
import DonutChart from "./Components/DonutChart";
import RadialChart from "./Components/RadialChart";

const data = require("../src/Data/data.json");

function App() {
	return (
		<>
			<ShellBar
				logo={
					<img
						alt="SAP Logo"
						src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"
					/>
				}
				primaryTitle="Waste Diversion Dashboard"
			></ShellBar>
			<main className="dashboard">
				<h1>Overview</h1>
				<section className="bar_chart">
					<div className="row">
						<ColumnGraph
							months={data["Monthly Tracking"]}
							filter={["JANUARY", "FEBRUARY"]}
						/>
						{/* <RadialChart /> */}
					</div>
				</section>
				{/* <section className="donut_chart">
					<DonutChart
						data={data["Monthly Tracking"]}
						filter={["Garbage", "Coffee Grounds"]}
						selectedMonth="DECEMBER"
						label="Landfill"
					/>
				</section> */}
				<section className="chart_wrap">
					<div className="donut_chart">
						<DonutChart
							data={data["Monthly Tracking"]}
							filter={[
								"Mixed Paper/Fiber",
								"Confidential Paper",
								"Rigids      (refundable & non)",
							]}
							selectedMonth="FEBRUARY"
							label="Cascade Recovery"
						/>
					</div>
					<div className="donut_chart">
						{/* <DonutChart
							data={data["Monthly Tracking"]}
							filter={["Grounds", "Coffee Grounds"]}
							selectedMonth="DECEMBER"
							label="Thirst First Service"
						/> */}
						<BarGraph months={data["Monthly Tracking"]} />
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
