import React, { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import Projects from "./pages/Projects";
import MainNavigation from "./components/Layout/MainNavigation";
import "./App.css";

function App() {
	return (
		<div>
			<MainNavigation />
			<main>
				<Routes>
					<Route path="/" element={<Navigate to="/home" />}></Route>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/projects/*" element={<Projects />}></Route>
					<Route
						path="/projects/:projectId"
						element={<ProjectDetails />}
					></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
