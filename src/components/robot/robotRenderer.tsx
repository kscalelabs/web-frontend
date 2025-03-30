"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { LuminosityShader } from "three/examples/jsm/shaders/LuminosityShader.js";
import { SobelOperatorShader } from "three/examples/jsm/shaders/SobelOperatorShader.js";
import URDFLoader from "urdf-loader";
import { URDFJoint } from "urdf-loader/src/URDFClasses";

const URDF_URL = "/cad/gpr-20241204.urdf";
const SCALE = 3;

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
  const mountRef = useRef<HTMLDivElement | null>(null);

  const robotRef = useRef<THREE.Object3D | null>(null);
  let effectSobel: ShaderPass;
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = null;

    // Adjust FOV based on screen width
    const fov = window.innerWidth < 768 ? 25 : 13;
    const camera = new THREE.PerspectiveCamera(
      fov,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    const currentMount = mountRef.current;

    if (currentMount) {
      const { clientWidth, clientHeight } = currentMount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x0f0f10, 1);

    if (currentMount) {
      currentMount.appendChild(renderer.domElement);
    }

    const loader = new URDFLoader();
    loader.load(URDF_URL, (robot: THREE.Object3D) => {
      scene.add(robot);

      // Sets the robot position and rotation.
      robot.rotation.x = -90.0;
      robot.rotation.y = 0.0;
      robot.position.y += 0.4;

      // NEW: Store the robot in the ref, so we can rotate this exact object later
      robotRef.current = robot;

      robot.scale.set(SCALE, SCALE, SCALE);

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

      scene.add(robot);
      updateMaterials();

      updateMaterials();

      const startTime = Date.now();

      const animate = () => {
        requestAnimationFrame(animate);

        // Update joint positions with a sinusoidal pattern
        const time = (Date.now() - startTime) / 1000;
        robot.traverse((child) => {
          const joint = child as URDFJoint;
          if (joint.isURDFJoint) {
            if (WAYPOINTS[joint.name]) {
              const { start, end } = WAYPOINTS[joint.name];
              const value =
                start + (end - start) * ((Math.sin((time * Math.PI) / DURATION_S) + 1) / 2);
              joint.setJointValue(value);
            }
          }
        });

        if (robotRef.current) {
          robotRef.current.rotation.z = (mouseX / window.innerWidth - 0.5) * Math.PI * 0.2;
        }

        composer.render();
      };

      animate();
    });

    const mainLight = new THREE.DirectionalLight(0xffffff, 2);
    mainLight.position.set(100, 0, -20);
    camera.add(mainLight);

    const fill1Light = new THREE.DirectionalLight(0xffffff, 2);
    fill1Light.position.set(-100, 0, -200);
    camera.add(fill1Light);

    const fill2Light = new THREE.DirectionalLight(0xffffff, 0.2);
    fill2Light.position.set(0, 0, 20);
    camera.add(fill2Light);

    scene.add(camera);

    camera.position.z = 20;
    camera.position.y = 10;
    camera.position.x = 0;
    camera.lookAt(0, 0, 0);

    const composer = new EffectComposer(renderer);

    const renderPass = new RenderPass(scene, camera, null, new THREE.Color(0x0f0f10), 1);

    composer.addPass(renderPass);

    const shaderPass = new ShaderPass(LuminosityShader);
    composer.addPass(shaderPass);

    const effectGrayScale = new ShaderPass(LuminosityShader);
    effectGrayScale.renderToScreen = false;
    composer.addPass(effectGrayScale);

    effectSobel = new ShaderPass(SobelOperatorShader);
    effectSobel.renderToScreen = false;
    effectSobel.uniforms["resolution"].value.x = window.innerWidth * window.devicePixelRatio;
    effectSobel.uniforms["resolution"].value.y = window.innerHeight * window.devicePixelRatio;
    composer.addPass(effectSobel);

    const outputPass = new OutputPass();
    outputPass.renderToScreen = true;
    composer.addPass(outputPass);

    const handleResize = () => {
      if (currentMount) {
        const { clientWidth, clientHeight } = currentMount;
        camera.aspect = clientWidth / clientHeight;

        // Update FOV and position based on screen width
        camera.fov = clientWidth < 768 ? 25 : 13;
        camera.position.z = clientWidth < 768 ? 12 : 20;
        camera.position.y = clientWidth < 768 ? 6 : 10;

        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
        composer.setSize(clientWidth, clientHeight);
        effectSobel.uniforms["resolution"].value.x = clientWidth * window.devicePixelRatio;
        effectSobel.uniforms["resolution"].value.y = clientHeight * window.devicePixelRatio;
      }
    };

    window.addEventListener("resize", handleResize);

    let mouseX = window.innerWidth * 0.4;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const handleTouchMove = (event: TouchEvent) => {
      mouseX = event.touches[0].clientX;
    };

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full overflow-hidden" />;
};

export default RobotRenderer;
