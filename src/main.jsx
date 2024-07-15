import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import App from "./App";

const rootElement = document.getElementById("root");

// Create a root using ReactDOM.createRoot
if (!rootElement._reactRootContainer) {
	const root = ReactDOM.createRoot(rootElement);

	function Main() {
		return (
			<React.StrictMode>
				<App />
				<ToastContainer />
			</React.StrictMode>
		);
	}

	root.render(<Main />);
}
