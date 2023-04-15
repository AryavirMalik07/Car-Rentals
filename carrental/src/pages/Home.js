import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Car from "../components/Car";

const Home = () => {
  return (
    <div>
      {/* <Canvas>
        <OrbitControls enableZoom={false} />
        <PerspectiveCamera makeDefault position={[100, 1000, 500]} />
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Car />
        </Suspense>
      </Canvas> */}
    </div>
  );
};

export default Home;
