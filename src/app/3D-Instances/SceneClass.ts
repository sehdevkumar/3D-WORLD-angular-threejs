import { Color, Scene } from 'three'
import { ISceneInstance } from '../3D-Typings/components-typings'

export class SceneClass implements ISceneInstance {
  createScene(): Scene {
    const scene = new Scene()

    scene.background = new Color('skyblue')

    return scene
  }
}
