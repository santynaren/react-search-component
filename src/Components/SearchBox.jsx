import React, { useRef, useState, useEffect } from "react";

const Searchbox = ({ delay, onChange, setVal,placeholder },props) => {
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
                placeholder={placeholder}
				onChange={(event) => setValue(event.target.value)}
                {...props}
			/>
		</>
	);
};
export default Searchbox;
