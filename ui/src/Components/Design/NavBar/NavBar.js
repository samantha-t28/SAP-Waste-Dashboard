import { ShellBar, StandardListItem } from "@ui5/webcomponents-react";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<ShellBar
			logo={
				<img
					slot="logo"
					alt="SAP Logo"
					src="https://ui5.github.io/webcomponents/images/sap-logo-svg.svg"
				/>
			}
			menuItems={
				<>
					<StandardListItem data-key="1">
						<Link to="/">Overview</Link>
					</StandardListItem>
					<StandardListItem data-key="1">
						<Link to="/comparison">Comparison</Link>
					</StandardListItem>
				</>
			}
			primaryTitle="Waste Diversion Dashboard"
		></ShellBar>
	);
};
