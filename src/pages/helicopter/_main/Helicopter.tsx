import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as React from "react";

import HeliModel from "../model/HeliModel";

//
export interface HelicopterProps {}

//
function Helicopter({}: HelicopterProps) {
    //
    return (
        <div style={{ margin: "auto", height: 350, width: 500 }}>
            <Canvas>
                <ambientLight />
                
                <React.Suspense fallback={"Loading..."}>
                    <HeliModel />
                    <Environment preset="sunset" background />
                </React.Suspense>

                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default Helicopter;
