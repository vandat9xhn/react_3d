import { useGLTF } from "@react-three/drei";
import * as React from "react";
// import { Material, Mesh } from "three";
// import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

import heli from "../../../../ignore_assets/Attack helicopter.glb";

const url = heli as string;

// export interface GLTFResult extends GLTF {
//     nodes: Record<string, Mesh>;
//     materials: Record<string, Material>;
// }

//
export default function HeliModel({ ...props }) {
    //
    const { nodes, materials } = useGLTF(url) as any;

    //
    const [part_a3_color, setPartA3Color] = React.useState("rgb(1, 1, 1)");

    //
    const group = React.useRef();

    React.useEffect(() => {
        console.log(nodes.part_a3.material);
        
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            <group scale={0.004}>
                <mesh
                    onClick={() => {
                        setPartA3Color((part_a3_color) => {
                            console.log(part_a3_color);

                            if (part_a3_color === "red") {
                                return "rgb(1, 1, 1)";
                            } else {
                                return "red";
                            }
                        });
                    }}
                    castShadow
                    receiveShadow
                    geometry={nodes.part_a3.geometry}
                    // material={materials.part_a3}
                    material={nodes.part_b4.material}
                    material-color={part_a3_color}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.part_b4.geometry}
                    material={nodes.part_b4.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.displays6.geometry}
                    material={nodes.displays6.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.lights7.geometry}
                    material={nodes.lights7.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.back_light8.geometry}
                    material={nodes.back_light8.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.helmet_glass_110.geometry}
                    material={nodes.helmet_glass_110.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.helmet_glass_211.geometry}
                    material={nodes.helmet_glass_211.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.helicopter_pilot_112.geometry}
                    material={nodes.helicopter_pilot_112.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.helicopter_pilot_213.geometry}
                    material={nodes.helicopter_pilot_213.material}
                />
                <group
                    position={[121.26, -4.52, 29.52]}
                    rotation={[-0.02, -0.47, -0.08]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_10.geometry}
                        material={nodes.mesh_10.material}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.mesh_9.geometry}
                        material={nodes.mesh_9.material}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.glass16.geometry}
                    material={nodes.glass16.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.back_fan15.geometry}
                    material={nodes.back_fan15.material}
                />
            </group>
        </group>
    );
}

useGLTF.preload(url);
