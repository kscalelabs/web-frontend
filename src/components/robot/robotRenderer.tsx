"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import URDFLoader from "urdf-loader";
import { URDFJoint, URDFRobot } from "urdf-loader/src/URDFClasses";
import { EffectComposer, Outline } from "@react-three/postprocessing";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { LuminosityShader } from "three/examples/jsm/shaders/LuminosityShader.js";
import { SobelOperatorShader } from "three/examples/jsm/shaders/SobelOperatorShader.js";
import { Canvas } from "@react-three/fiber";
import { useThree, useFrame } from "@react-three/fiber";

const URDF_URL = "/cad/gpr-20241204.urdf";
const SCALE = 3;
const TRANSLATE_Y = 1.2;

interface Waypoint {
  start: number;
  end: number;
}

// TODO: Instead of doing a sinusoidal pattern, we should provide a sequence
// of waypoints that the robot will follow.
const WAYPOINTS: { [key: string]: Waypoint } = {
  L_shoulder_y: { start: Math.PI / 4, end: 0 },
  L_shoulder_x: { start: 0, end: 0 },
  L_shoulder_z: { start: Math.PI, end: Math.PI },
  R_elbow: { start: 0, end: Math.PI / 2 },
  R_wrist: { start: 0, end: 0.2 },
  R_shoulder_y: { start: 0, end: -Math.PI / 4 },
  R_shoulder_x: { start: 0, end: 0 },
  R_shoulder_z: { start: Math.PI, end: Math.PI },
  L_elbow: { start: Math.PI / 2, end: 0 },
  L_wrist: { start: 0, end: 0.2 },
  L_hip_y: { start: -Math.PI / 4, end: Math.PI / 4 },
  L_hip_x: { start: 0, end: 0 },
  L_hip_z: { start: 0, end: 0 },
  L_knee: { start: -Math.PI / 2, end: 0 },
  L_ankle: { start: -0.1, end: 0.1 },
  R_hip_y: { start: -Math.PI / 4, end: Math.PI / 4 },
  R_hip_x: { start: 0, end: 0 },
  R_hip_z: { start: 0, end: 0 },
  R_knee: { start: 0, end: -Math.PI / 2 },
  R_ankle: { start: -0.1, end: 0.1 },
};

const DURATION_S = 5;

const RobotRenderer: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden rounded-lg">
      <Canvas
        className="w-full h-full"
        camera={{
          fov: 13,
          near: 0.1,
          far: 1000,
          position: [9, 9, 16],
        }}
        fallback={<div>Sorry no WebGL supported!</div>}
      >
        <Elements />
      </Canvas>
    </div>
  );
};

const Elements: React.FC = () => {
  const [robot, setRobot] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    const loader = new URDFLoader();
    loader.load(URDF_URL, (robot: THREE.Object3D) => {
      const updateMaterials = () => {
        robot.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const originalColor =
              child.material instanceof THREE.Material
                ? (child.material as THREE.MeshPhysicalMaterial).color
                : new THREE.Color(0x808080);
            child.material = new THREE.MeshPhysicalMaterial({
              metalness: 0.4,
              roughness: 0.5,
              color: originalColor,
            });
          }
        });
      };
      updateMaterials();
      setRobot(robot);
      robot.rotateY(Math.PI / 2);
      robot.translateY(TRANSLATE_Y);
      robot.scale.set(SCALE, SCALE, SCALE);
    });
  }, []);

  useFrame(({ clock }) => {
    if (robot) {
      robot.traverse((child) => {
        const joint = child as URDFJoint;
        if (joint.isURDFJoint) {
          if (WAYPOINTS[joint.name]) {
            const { start, end } = WAYPOINTS[joint.name];
            const value =
              start +
              (end - start) * ((Math.sin((clock.getElapsedTime() * Math.PI) / DURATION_S) + 1) / 2);
            joint.setJointValue(value);
          }
        }
      });
    }
  });

  //   const composer = new EffectComposer(renderer);
  //   const renderPass = new RenderPass(scene, camera);
  //   composer.addPass(renderPass);

  //   const shaderPass = new ShaderPass(LuminosityShader);
  //   composer.addPass(shaderPass);

  //   // color to grayscale conversion

  //   const effectGrayScale = new ShaderPass(LuminosityShader);
  //   composer.addPass(effectGrayScale);

  //   // you might want to use a gaussian blur filter before
  //   // the next pass to improve the result of the Sobel operator

  //   // Sobel operator

  //   effectSobel = new ShaderPass(SobelOperatorShader);
  //   effectSobel.uniforms["resolution"].value.x = window.innerWidth * window.devicePixelRatio;
  //   effectSobel.uniforms["resolution"].value.y = window.innerHeight * window.devicePixelRatio;
  //   composer.addPass(effectSobel);

  //   const outputPass = new OutputPass();
  //   composer.addPass(outputPass);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.25}
        screenSpacePanning={false}
        maxPolarAngle={Math.PI / 2}
      />
      <directionalLight position={[100, 0, -20]} color="white" />
      <directionalLight position={[-100, 0, -200]} color="white" />
      <directionalLight position={[0, 0, 20]} color="white" />
      <EffectComposer>
        <Outline />
      </EffectComposer>
      {robot && <primitive object={robot} />}
    </>
  );
};

export default RobotRenderer;
