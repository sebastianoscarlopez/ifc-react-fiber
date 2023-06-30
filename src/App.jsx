import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";

import { useIfc } from "./ifc";

import "./App.css";

function App() {
  const [IfcModel, setIfcModel] = useState(null);
  const { model, loading } = useIfc({ path: "/ifc/models/01.ifc" });

  useEffect(() => {
    setIfcModel(model);
  }, [model]);

  useEffect(() => {
    console.log(IfcModel);
  }, [IfcModel]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {IfcModel && !loading && <primitive object={IfcModel} position={[0, -2, -10]} />}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
