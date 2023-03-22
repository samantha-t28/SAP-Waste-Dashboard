import CascadeComponent from "../Shared/CascadeComponent";
import EcoActionComponent from "../Shared/EcoActionComponent";
import { ImageComponent } from "../Shared/ImageComponent";
import RefundablesComponent from "../Shared/RefundablesComponent";
import WasteServiceComponent from "../Shared/WasteServiceComponent";

const data = require("../../../Data/data.json");

export const Comparison = () => {
	return (
		<>
			<section>
				<div className="row">
					<h1>Comparison</h1>
					<p>Testing</p>
				</div>
				<div className="container">
					<div className="card blue">
						<p>Cascade Recovery</p>
						<CascadeComponent
							percentage="percent text placeholder"
							months={data["Monthly Tracking"]}
							filter={["JANUARY", "FEBRUARY"]} // put the month in order of: old month, new month
						/>
						<ImageComponent title="cascade" />
					</div>
					<div className="card cyan eco-action">
						<p>Eco Action</p>
						<EcoActionComponent
							percentage="percent text placeholder"
							months={data["Monthly Tracking"]}
							filter={["JANUARY", "FEBRUARY"]}
						/>
						<ImageComponent title="ecoAction" />
					</div>
				</div>
				<div className="container">
					<div className="card grey">
						<p>Waste Control Services</p>
						<WasteServiceComponent
							percentage="percent text placeholder"
							months={data["Monthly Tracking"]}
							filter={["JANUARY", "FEBRUARY"]}
						/>
						<ImageComponent title="waste" />
					</div>
					<div className="card orange">
						<p>Refundables</p>
						<RefundablesComponent
							percentage="percent text placeholder"
							months={data["Monthly Tracking"]}
							filter={["JANUARY", "FEBRUARY"]}
						/>
						<div className="refundables">
							<ImageComponent title="refund" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
