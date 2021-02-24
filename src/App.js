import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import SearchBox from "./Components/SearchBox.jsx";

function App() {
	const [view, setView] = useState("");
	return (
		<div className='App'>
			<SearchBox delay={3000} setVal={setView} />
			<br />
			<span>{view}</span>
		</div>
	);
}

export default App;
