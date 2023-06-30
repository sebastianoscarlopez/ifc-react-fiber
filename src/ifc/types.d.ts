import { Mesh } from "three";
interface UseIfc {
  model: Mesh | undefined,
  loading: boolean
}

interface IfcProps {
  path: string;
}