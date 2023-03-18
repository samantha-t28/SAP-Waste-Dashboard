import { Outlet } from "react-router-dom";
import { Container } from "../Design/Container";
import { NavBar } from "../Design/NavBar/NavBar";

export const AppLayout = () => {
	return (
		<>
			<NavBar />
			<Container>
				<Outlet />
			</Container>
		</>
	);
};
