import React, { useState, useEffect, useContext, useRef } from "react";
import { IfcContext } from "./ifc-context";

import { IFCModel } from "web-ifc-three/IFC/components/IFCModel";
import { IfcProps, UseIfc } from "./types.d";

export const useIfc = ({ path }: IfcProps): UseIfc => {
  const { ifcLoader } = useContext(IfcContext);
  const modelRef = useRef<IFCModel>();
  const [loading, setLoading] = useState(false);

  function loadModel(ifcURL) {
    if (!loading && !modelRef.current) {
      setLoading((isLoading) => {
        if(isLoading) {
          return isLoading;
        }
        ifcLoader.load(ifcURL, (ifcModel: IFCModel) => {
          modelRef.current = ifcModel;
          setLoading(false);
        });
        return true;
      });
    }
  }

  useEffect(() => {
    if (ifcLoader && path) {
      loadModel(path);
    }
  }, []);

  return { loading, model: modelRef.current };
};
