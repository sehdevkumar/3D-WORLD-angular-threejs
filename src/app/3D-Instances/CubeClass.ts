import {
  Mesh,

  BoxGeometry,
  MeshBasicMaterial,
} from 'three'
import { ICubeInstance } from '../3D-Typings/components-typings'

export class CubeClass implements ICubeInstance {
  createCube(): Mesh {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, 2)

    // create a default (white) Basic material
    const material = new MeshBasicMaterial()

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material)

    return cube
  }
}
