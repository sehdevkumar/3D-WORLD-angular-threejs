// import { WebGLRenderer } from 'three';

import { Camera, Mesh, PerspectiveCamera, Scene, WebGLRenderer } from "three";

// function createRenderer() {
//   const renderer = new WebGLRenderer();

//   return renderer;
// }

// export { createRenderer };


export interface IRendererInstance {
  createRenderer():WebGLRenderer;
}

export interface ICubeInstance {
  createCube():Mesh;
}

export interface ICameraInstance {
  createCamera():PerspectiveCamera;
}

export interface ISceneInstance {
  createScene():Scene;
}
