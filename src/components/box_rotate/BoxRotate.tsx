import * as React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

//
export interface BoxRotateProps {}

//
const Box = (props: JSX.IntrinsicElements["mesh"]) => {
    const refMesh = React.useRef<THREE.Mesh>(null!);
    const [hovered, hover] = React.useState(false);
    const [clicked, click] = React.useState(false);
    useFrame((state, delta) => {
        refMesh.current.rotation.x += 0.01;
        refMesh.current.rotation.y += 0.01;
        refMesh.current.rotation.z -= 0.01;
    });

    //
    return (
        <mesh
            {...props}
            ref={refMesh}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            {/* <boxGeometry args={[1, 1, 1]} /> */}
            {/* <meshStandardMaterial color={hovered ? "hotpink" : "orange"} /> */}
            <sphereGeometry args={[2, 62, 32]} />
            <meshBasicMaterial color={hovered ? "blue" : "green"} />
        </mesh>
    );
};

//
function BoxRotate({}: BoxRotateProps) {
    //
    return (
        <Canvas>
            {/* <ambientLight /> */}
            {/* <pointLight position={[10, 10, 10]} /> */}
            <Box position={[-1.2, 0, 0]} />
            {/* <Box position={[1.2, 0, 0]} /> */}
        </Canvas>
    );
}

export default BoxRotate;
