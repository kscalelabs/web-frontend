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
    <div ref={mountRef} className="w-full overflow-hidden aspect-square sm:aspect-video mb-4">
      {isVisible && <RobotRenderer />}
    </div>
  );
};

export default RobotRendererWrapper;
