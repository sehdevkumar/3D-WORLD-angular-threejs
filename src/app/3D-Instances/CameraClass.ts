import { Camera, PerspectiveCamera } from "three";
import { ICameraInstance } from "../3D-Typings/components-typings";

export class CameraClass implements ICameraInstance {
   createCamera(): PerspectiveCamera {
        const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    100, // far clipping plane
  );

  // move the camera back so we can view the scene
  camera.position.set(0, 0, 20);

  return camera;

   }
}
