import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import ProjectDetails from "./pages/ProjectDetails";
// import Projects from "./pages/Projects";
// import Aboutme from "./pages/Aboutme";
import Layout from "./components/Layout/Layout";
import "./App.css";
import Spinner from "./components/Loader/Spinner";

const Projects = React.lazy(() => import("./pages/Projects"));
const Aboutme = React.lazy(() => import("./pages/Aboutme"));
const ProjectDetails = React.lazy(() => import("./pages/ProjectDetails"));

function App() {
	return (
		<Layout>
			<Suspense fallback={<Spinner />}>
				<Routes>
					<Route path="/" element={<Navigate to="/home" />}></Route>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/aboutme" element={<Aboutme />}></Route>
					<Route path="/projects/*" element={<Projects />}></Route>
					<Route
						path="/projects/:projectId"
						element={<ProjectDetails />}
					></Route>
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
