import BarGraph from "../../BarGraph";
import ColumnGraph from "../../ColumnGraph";
import Donut from "../../Design/Charts/Donut";

const data = require("../../../Data/data.json");

export const Overview = () => {
	return (
		<>
			<h1>Overview</h1>
			<section className="bar_chart">
				<div className="row">
					<ColumnGraph
						months={data["Monthly Tracking"]}
						filter={["JANUARY", "FEBRUARY"]}
					/>
				</div>
			</section>

			<h2>February</h2>
			<section className="chart_wrap">
				<div className="card">
					<Donut
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
				<div className="card">
					<BarGraph months={data["Monthly Tracking"]} />
				</div>
			</section>
		</>
	);
};
