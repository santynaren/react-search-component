
import { useState } from "react";
import "./App.css";
import {Searchbox} from 'react-search-box-component'

function App() {
	const [view, setView] = useState("");
  const [delay,setDelay] = useState(0);
	return (
		<div className='App'>
		
      <Searchbox delay={500} setVal={setDelay} placeholder="type delay in ms" />
			<br />

			<span>{view}</span>
		</div>
	);
}

export default App;
