import React from "react";
import * as THREE from "three";
import { Canvas } from "react-three-fiber";
import Boxes from "./Boxes";
import Light from "./Light";
import "./App.css";

export default function App() {
	return (
		<Canvas
			camera={{ position: [2, 5, 13], near: 1, far: 25 }}
			gl={{ antialias: true, alpha: true }}
			onCreated={({ gl }) => gl.setClearColor("gray")}
		>
			<Light brightness={2.0} color={"white"} />
			<Boxes />
		</Canvas>
	);
}
