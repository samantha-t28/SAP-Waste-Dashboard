import logo from "./logo.svg";
import "./App.css";
import { ShellBar } from "@ui5/webcomponents-react";
import BarChart from "./Components/BarChart";
import DonutChart from "./Components/DonutChart";
import RadialChart from "./Components/RadialChart";

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
				<section className="bar_chart">
					<div className="row">
						<BarChart />
						<RadialChart />
						{/* <DonutChart /> */}
					</div>
				</section>
				<section className="donut_chart">
					<DonutChart />
				</section>
			</main>
		</>
	);
}

export default App;
