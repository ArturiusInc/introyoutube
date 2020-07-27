import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";

export default function Box({ position }) {
	const mesh = useRef();
	const [speed, setSpeed] = useState(Math.random() / 60);
	const [range, setRange] = useState(Math.random() + 0.1);
	const [startPos, setStartPos] = useState(position[2]);
	const [trigger, setTrigger] = useState(Math.random() > 0.5 ? true : false);
	useFrame(() => {
		if (trigger) {
			if (mesh.current.position.z <= startPos - range) setTrigger(false);
			mesh.current.position.z = mesh.current.position.z -= speed;
		}
		if (!trigger) {
			if (mesh.current.position.z > startPos + range) setTrigger(true);
			mesh.current.position.z = mesh.current.position.z += speed;
		}
	});
	return (
		<mesh visible position={position} ref={mesh} scale={[1, 1, 1]} castShadow>
			<boxBufferGeometry attach="geometry" args={[1, 1, 10]} />
			<meshStandardMaterial attach="material" color={"gray"} />
		</mesh>
	);
}
