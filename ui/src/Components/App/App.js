import "../../App.css";

import { Route, Routes } from "react-router-dom";
import { Overview } from "./Screens/Overview";
import { Comparison } from "./Screens/Comparison";
import { AppLayout } from "./AppLayout";

function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path="/" element={<Overview />} />
				<Route path="/comparison" element={<Comparison />} />
			</Route>
		</Routes>
	);
}

export default App;
