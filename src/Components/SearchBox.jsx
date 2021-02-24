import React, { useRef, useState, useEffect } from "react";

const Searchbox = ({ delay, onChange, setVal,placeholder },props) => {
	const [value, setValue] = useState("");
    const search = useRef();
	useEffect(() => {
		const timeOut = setTimeout(() => setVal(value), delay);
		return () => clearTimeout(timeOut);
	}, [delay, setVal, value]);

	return (
		<>
			<input
            ref={search}
				type='text'
				value={value}
                placeholder={placeholder}
				onChange={(event) => setValue(search.current.value)}
                {...props}
			/>
		</>
	);
};
export default Searchbox;
