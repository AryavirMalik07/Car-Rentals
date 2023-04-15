import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Sports } from "./Sports";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section max-width">
      <div className="hero-left">
        <div>
          <h2 className="hero-head-small">Plan your trip now</h2>
          <h1 className="hero-primary-head">
            Save <strong>big</strong> with our car rental
          </h1>
          <p className="hero-description">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
        </div>
        <div className="button-div">
          <a href="/" className="book-ride">
            Book Ride
          </a>
          <a href="/" className="learn-more">
            Learn More
          </a>
        </div>
      </div>
      <div className="hero-right">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <PerspectiveCamera makeDefault position={[5, 1, 8]} />
          <Suspense>
            <Sports />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HeroSection;
