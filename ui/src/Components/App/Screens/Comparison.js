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
				<div className="header-row">
					<h1>Bi-monthly Waste Difference</h1>
					{/* <p>Legend</p> */}
				</div>
				<div className="container">
					<div className="card blue">
						<h2>Cascade Recovery</h2>
						<CascadeComponent
							months={data["Monthly Tracking"]}
							filter={["JANUARY", "FEBRUARY"]}
						/>
						<ImageComponent title="cascade" />
					</div>
					<div className="card cyan eco-action">
						<h2>Eco Action</h2>
						<EcoActionComponent
							months={data["Monthly Tracking"]}
							filter={["JANUARY", "FEBRUARY"]}
						/>
						<ImageComponent title="ecoAction" />
					</div>
				</div>
				<div className="container">
					<div className="card grey">
						<h2>Waste Control Services</h2>
						<WasteServiceComponent
							months={data["Monthly Tracking"]}
							filter={["JANUARY", "FEBRUARY"]}
						/>
						<ImageComponent title="waste" />
					</div>
					<div className="card orange">
						<h2>Refundables</h2>
						<RefundablesComponent
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
