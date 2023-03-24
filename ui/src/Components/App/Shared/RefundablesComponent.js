import React, { useState, useEffect } from "react";
import { CalculatePercentage } from "./CalculatePercentage";

function RefundablesComponent({ months, filter }) {
	const [isNegative, setIsNegative] = useState(false);
	const [percentage, setPercentage] = useState("0%");
	useEffect(() => {
		let data = CalculatePercentage(
			"Rigids      (refundable & non)",
			"wasteTotal",
			months,
			filter
		);
		setIsNegative(data[0]);
		setPercentage(data[1]);
	}, [isNegative, months, filter]); // dependence of useEffect

	return (
		<>
			<div className="flex">
				<div className={isNegative ? "positive" : "negative"}></div>
			</div>
			<p className="percent-text">
				<span className="arrow">{isNegative ? "↓" : "↑"}</span>
				{percentage}
			</p>
		</>
	);
}

export default RefundablesComponent;
