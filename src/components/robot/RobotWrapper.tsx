"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Dynamically import the RobotRenderer component
const RobotRenderer = dynamic(() => import("./robotRenderer"), { ssr: false });

const RobotRendererWrapper: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(mountRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-full items-start md:absolute right-0 md:flex md:w-[35vw] w1024:w-[45vw] 3xl:w-[48vw] -z-10 top-0">
      <div ref={mountRef} id="test" className="w-full h-[calc(100vh-5rem)] top-20 sticky">
        {isVisible && <RobotRenderer />}
      </div>
    </div>
  );
};

export default RobotRendererWrapper;
