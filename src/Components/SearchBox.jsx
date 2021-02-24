import React, { useRef, useState, useEffect } from "react";

const Searchbox = ({ delay, onChange, setVal }) => {
	const [value, setValue] = useState("");

	useEffect(() => {
		const timeOutId = setTimeout(() => setVal(value), delay);
		return () => clearTimeout(timeOutId);
	}, [value]);

	return (
		<>
			<input
				type='text'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		</>
	);
};
export default Searchbox;
