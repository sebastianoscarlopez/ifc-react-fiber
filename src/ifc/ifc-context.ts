import { createContext } from "react";
import { IFCLoader } from "web-ifc-three/IFCLoader";
const ifcLoader = new IFCLoader();

ifcLoader.ifcManager.setWasmPath("/ifc/wasm/");

export const IfcContext = createContext({ifcLoader});