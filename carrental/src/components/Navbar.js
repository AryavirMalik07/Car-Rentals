import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Car from "../components/Car";
import "../styles/nav.css";
const Navbar = () => {
  return (
    <div className="navbar max-width">
      <div className="nav-logo">
        <div className="car-logo">
          <Canvas>
            <OrbitControls autoRotate enableZoom={false} />
            <PerspectiveCamera makeDefault position={[1000, 1000, 100]} />
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
              <Car />
            </Suspense>
          </Canvas>
        </div>
        <h1 className="logo-head">Car Rentals</h1>
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li className="nav-list-items">
            <Link className="nav-link" to="#">
              Home
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="nav-link" to="#">
              About
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="nav-link" to="#">
              Testimonials
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="nav-link" to="#">
              Vehicles
            </Link>
          </li>
          <li className="nav-list-items">
            <Link className="nav-link" to="#">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
