import React, { useCallback, useState } from "react";
import Box from "./Box";
export default function Boxes() {
	const matrix = { x: 40, y: 40 };

	const createArray = useCallback(() => {
		const tempArr = [];
		for (let x = -matrix.x / 2; x < matrix.x / 2; x++) {
			for (let y = -matrix.y / 2; y < matrix.y / 2; y++) {
				tempArr.push([x, y, Math.random() - 5]);
			}
		}
		return tempArr;
	});

	const [arr, setArr] = useState(createArray());

	return arr.map((pos, i) => <Box position={pos} key={i} />);
}
