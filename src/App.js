import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import SearchBox from "./Components/SearchBox.jsx";

function App() {
	const [view, setView] = useState("");
  const [delay,setDelay] = useState(0);
	return (
		<div className='App'>
			<SearchBox delay={delay ? delay : 3000} setVal={setView} placeholder="type search"/>
      <SearchBox delay={500} setVal={setDelay} placeholder="type delay in ms" />
			<br />

			<span>{view}</span>
		</div>
	);
}

export default App;
