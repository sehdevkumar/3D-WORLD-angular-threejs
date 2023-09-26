import { DirectionalLight, SpotLight } from 'three';
import { PerspectiveCamera } from 'three'
import { Mesh, Scene } from 'three'
import { WebGLRenderer } from 'three'
import { ElementRef } from '@angular/core'
import { IWorldInstance } from '../3D-Typings/systems-typings'
import { CameraClass } from './CameraClass'
import { CubeClass } from './CubeClass'
import { RenderClass } from './RenderClass'
import { ResizerClass } from './ResizerClass'
import { SceneClass } from './SceneClass'
import { LightClass } from './LightClass';

export class WorldClass implements IWorldInstance {
  // Instance Classess
  RendererInstance: RenderClass = new RenderClass()
  CubeInstance: CubeClass = new CubeClass()
  CameraInstance: CameraClass = new CameraClass()
  SceneInstance: SceneClass = new SceneClass()
  LightInstance:LightClass = new LightClass()
  ResizerInstance!: ResizerClass

  // World Instance
   renderer!: WebGLRenderer
   cube!: Mesh
   scene!: Scene
   camera!: PerspectiveCamera
   light!:DirectionalLight | SpotLight;
  constructor(private container: ElementRef<HTMLDivElement>) {
    this.renderer = this.RendererInstance?.createRenderer()
    this.cube = this.CubeInstance.createCube()
    const cube2 = this.CubeInstance.createCube()
    cube2.position.set(3,1,5);

    this.camera = this.CameraInstance.createCamera()
    this.scene = this.SceneInstance.createScene()
    this.light = this.LightInstance.createLight();

    this.scene.add(...[this.cube,cube2],this.light)
    container?.nativeElement?.append(this.renderer?.domElement)

    this.ResizerInstance = new ResizerClass(
      container,
      this.camera,
      this.renderer,
    )
  }

  render(): void {
    this.renderer.render(this.scene, this.camera)
  }
}
