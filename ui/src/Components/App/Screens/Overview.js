import BarGraph from "../../Design/Charts/BarGraph";
import ColumnGraph from "../../Design/Charts/ColumnGraph";
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

			<h2 className="sub-heading">February</h2>
			<section className="chart_wrap">
				<div className="overview-card">
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
				<div className="overview-card">
					<BarGraph months={data["Monthly Tracking"]} />
				</div>
			</section>
		</>
	);
};
