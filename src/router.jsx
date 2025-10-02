import { createBrowserRouter } from "react-router-dom";
import { App } from "./pages/home/App.jsx";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	}
]);