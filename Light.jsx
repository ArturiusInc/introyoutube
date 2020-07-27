import React from "react";
export default function Light({ brightness, color }) {
	return (
		<rectAreaLight
			width={15}
			height={15}
			color={color}
			intensity={brightness}
			position={[-5, 2, 7]}
			lookAt={[0, 0, 0]}
			penumbra={0}
			castShadow
		/>
	);
}
