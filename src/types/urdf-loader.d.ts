declare module "urdf-loader" {
  import { Object3D } from "three";

  interface URDFJoint extends Object3D {
    isURDFJoint: boolean;
    setJointValue(value: number): void;
  }

  export default class URDFLoader {
    load(url: string, callback: (robot: Object3D) => void): void;
  }
}
