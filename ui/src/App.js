import logo from "./logo.svg";
import "./App.css";
import {
	ShellBar,
	StandardListItem,
	Avatar,
	Input,
	Icon,
	ShellBarItem,
} from "@ui5/webcomponents-react";
import BarChart from "./Components/BarChart";

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
				menuItems={
					<>
						<StandardListItem data-key="1">
							Menu Item 1
						</StandardListItem>
						<StandardListItem data-key="2">
							Menu Item 2
						</StandardListItem>
						<StandardListItem data-key="3">
							Menu Item 3
						</StandardListItem>
					</>
				}
				// notificationsCount="10"
				onCoPilotClick={function Ma() {}}
				onLogoClick={function Ma() {}}
				onMenuItemClick={function Ma() {}}
				onNotificationsClick={function Ma() {}}
				onProductSwitchClick={function Ma() {}}
				onProfileClick={function Ma() {}}
				primaryTitle="Shell Bar"
				profile={
					<Avatar>
						<img src="https://sap.github.io/ui5-webcomponents-react/assets/Person-eb847016.png" />
					</Avatar>
				}
				searchField={
					<Input
						icon={<Icon interactive name="search" />}
						showClearIcon
					/>
				}
				secondaryTitle="Waste "
				showCoPilot
				showNotifications
				showProductSwitch
			>
				<ShellBarItem count="3" icon="add" text="ShellBarItem" />
			</ShellBar>
			<BarChart />
		</>
	);
}

export default App;
