import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as React from "react";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import box_mtl from "../../../../ignore_assets/cottage_obj.mtl";
import box from "../../../../ignore_assets/cottage_obj.obj";

//
export interface GiftProps {}

//
const scale = 1 / 80;

//
const Box = ({}) => {
    //
    const refMesh = React.useRef<THREE.Mesh>(null!);

    //
    const materials = useLoader(MTLLoader, box_mtl as string);
    const obj = useLoader(OBJLoader, box as string, (loader: OBJLoader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    //
    useFrame(() => {
        refMesh.current.rotation.y += 1 * scale;
    });

    //
    return (
        <mesh ref={refMesh} position={[0, 0, 0]} scale={scale}>
            <primitive object={obj} dispose={null} />

            <meshStandardMaterial
                attach="material"
                color="white"
                transparent
                opacity={0.6}
                roughness={1}
                metalness={0}
            />
        </mesh>
    );
};

//
function Gift({}: GiftProps) {
    //
    return (
        <div style={{ margin: "auto", height: 350, width: 500 }}>
            <Canvas>
                {/* <ambientLight /> */}
                {/* <pointLight position={[0, 0, 100]} /> */}

                {/* <directionalLight position={[10, 10, 5]} intensity={2} />
                <directionalLight position={[-10, -10, -5]} intensity={1} /> */}

                <React.Suspense fallback={"Loading..."}>
                    <Box />

                    <OrbitControls />
                    <Environment preset="sunset" background />
                </React.Suspense>
            </Canvas>
        </div>
    );
}

export default Gift;
