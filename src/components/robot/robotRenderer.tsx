"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import URDFLoader from "urdf-loader";
import { URDFJoint } from "urdf-loader/src/URDFClasses";

const URDF_URL = "/cad/gpr-20241204.urdf";
const SCALE = 3;
const TRANSLATE_Y = 1.5;

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

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const currentMount = mountRef.current;

    if (currentMount) {
      const { clientWidth, clientHeight } = currentMount;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    }
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    if (currentMount) {
      currentMount.appendChild(renderer.domElement);
    }

    const loader = new URDFLoader();
    loader.load(URDF_URL, (robot: THREE.Object3D) => {
      scene.add(robot);

      // Correcting for the robot initial size and position.
      robot.rotateY(Math.PI / 2);
      robot.translateY(TRANSLATE_Y);
      robot.scale.set(SCALE, SCALE, SCALE);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2;
      controls.enableZoom = false;

      const startTime = Date.now();

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();

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

        renderer.render(scene, camera);
      };

      animate();
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 2.0);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, 2, -5);
    scene.add(fillLight);

    camera.position.z = 5;

    const handleResize = () => {
      if (currentMount) {
        const { clientWidth, clientHeight } = currentMount;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default RobotRenderer;
