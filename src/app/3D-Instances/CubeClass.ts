import {
  Mesh,

  BoxGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial
} from 'three'
import { ICubeInstance } from '../3D-Typings/components-typings'

export class CubeClass implements ICubeInstance {
  createCube(): Mesh {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, 2)

    // create a default (white) Basic material
    const material = new MeshStandardMaterial({color:'white'})



    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material)

    cube.rotation.set(1,1,1)

    return cube
  }
}
