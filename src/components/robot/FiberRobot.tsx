"use client";

import { Canvas } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Outline, Selection, Select } from "@react-three/postprocessing";
import * as THREE from "three";
// import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
// import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
// import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
// import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
// import { LuminosityShader } from "three/examples/jsm/shaders/LuminosityShader.js";
// import { SobelOperatorShader } from "three/examples/jsm/shaders/SobelOperatorShader.js";
import URDFLoader from "urdf-loader";

const URDF_URL = "/cad/gpr-20241204.urdf";
const SCALE = 3;

// TODO: Instead of doing a sinusoidal pattern, we should provide a sequence
// of waypoints that the robot will follow.

function URDFRobot() {
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    const loader = new URDFLoader();
    loader.load(URDF_URL, (urdf) => {
      urdf.rotation.x = -Math.PI / 2;
      urdf.position.y += 0.05;
      urdf.scale.set(SCALE, SCALE, SCALE);
      group.current?.add(urdf);

      const checkForMeshes = () => {
        const visuals = Object.values(urdf.visual || {});

        const allReady =
          visuals.length > 0 &&
          visuals.every((v: any) => v.children.some((c: any) => c instanceof THREE.Mesh));

        if (allReady) {
          visuals.forEach((visual: any) => {
            visual.traverse((child: any) => {
              if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshPhysicalMaterial({
                  metalness: 0.8,
                  roughness: 0.5,
                  color: 0x111111,
                  transparent: true,
                  opacity: 1,
                });
              }
            });
          });
        } else {
          requestAnimationFrame(checkForMeshes);
        }
      };
      checkForMeshes();
      Object.values(urdf.visual).map((e) => e.name);
    });
  }, []);

  useEffect(() => {}, [group]);

  return <group ref={group} />;
}

const FiberRobot: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden mb-4">
      <Canvas camera={{ position: [0, 10, 20], fov: 10 }} frameloop="demand">
        <OrbitControls />
        {/* <directionalLight color={0xffffff} intensity={2} position={[100, 0, -20]} /> */}
        {/* <directionalLight color={0xffffff} intensity={2} position={[-100, 0, -200]} /> */}
        <directionalLight color={0xffffff} intensity={1} position={[0, 0, 20]} />
        <Selection>
          <Select enabled>
            <URDFRobot />
          </Select>
          <EffectComposer autoClear={false} multisampling={0}>
            <Outline
              blur
              edgeStrength={100}
              visibleEdgeColor={0xffffff}
              hiddenEdgeColor={0xff0000}
              xRay={true}
            />
          </EffectComposer>
        </Selection>
      </Canvas>
    </div>
  );
};

export default FiberRobot;
