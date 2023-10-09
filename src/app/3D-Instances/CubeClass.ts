import {
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader,
  MaterialLoader,
  Material,
} from 'three'
import { ICubeInstance } from '../3D-Typings/components-typings'

export class CubeClass implements ICubeInstance {


 createMaterial():Material {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    'assets/textures/copper-rock1-metal.png',
  );



  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
    roughness:1,
  });

  return material;
}

  createCube(): Mesh {
    // create a geometry
    const geometry = new BoxGeometry(2, 2, 2)

    // create a default (white) Basic material
    const material = this.createMaterial()

    // create a Mesh containing the geometry and material
    const cube = new Mesh(geometry, material)
    cube.rotation.set(-0.5, 0.5, 10)

    const degreeToRadians = MathUtils.degToRad(30)

    // Little Monkey Patching :  Add the code at runtime
    ;(cube as any).tick = (delta: number) => {
      cube.rotation.z += degreeToRadians * delta
      cube.rotation.y += degreeToRadians * delta

      cube.rotation.x += degreeToRadians * delta
    }

    return cube
  }
}
