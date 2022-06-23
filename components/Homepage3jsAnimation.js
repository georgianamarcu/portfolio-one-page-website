// import "../pages/index.css";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

function Homepage3jsAnimation() {
  const ref = useRef(null);

  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.001));
  return (
    <mesh
      visible
      scale={[0.18, 0.18, 0.18]}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
      ref={ref}
    >
      <sphereGeometry args={[15, 32, 16]} />
      <MeshWobbleMaterial
        attach="material"
        wireframe={true}
        factor={1}
        speed={0.6}
        color="#2D5873" // Speed (default=1)
      />
    </mesh>
  );
}

export default Homepage3jsAnimation;
