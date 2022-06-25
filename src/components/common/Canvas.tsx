import React, { Suspense } from "react";
import { Canvas as FiberCanvas } from "@react-three/fiber";
import Model from "./Model";

export default function Canvas(): JSX.Element {
    return (
        <FiberCanvas
            camera={{ position: [2, 0, 12.25], fov: 12 }}
            style={{
                backgroundColor: "transparent",
                width: 400,
                height: 600,
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
            }}
        >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
                <Model position={[0.025, -0.9, 0]} />
            </Suspense>
        </FiberCanvas>
    );
}
