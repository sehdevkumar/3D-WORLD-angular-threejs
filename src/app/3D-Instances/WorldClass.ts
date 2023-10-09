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
import { LoopClass } from './LoopClass';
import { ControlClass } from './ControlClass';

export class WorldClass implements IWorldInstance {
  // Instance Classess
  RendererInstance: RenderClass = new RenderClass()
  CubeInstance: CubeClass = new CubeClass()
  CameraInstance: CameraClass = new CameraClass()
  SceneInstance: SceneClass = new SceneClass()
  LightInstance:LightClass = new LightClass()
  ResizerInstance!: ResizerClass
  orbitControlInstance:ControlClass = new ControlClass()

  // World Instance
   renderer!: WebGLRenderer
   cube!: Mesh
   scene!: Scene
   camera!: PerspectiveCamera
   light!:DirectionalLight | SpotLight;
   loop!:LoopClass;
  constructor(private container: ElementRef<HTMLDivElement>) {
    this.renderer = this.RendererInstance?.createRenderer()
    this.cube = this.CubeInstance.createCube()

    this.camera = this.CameraInstance.createCamera()
    this.scene = this.SceneInstance.createScene()
    this.light = this.LightInstance.createLight();
    this.loop = new LoopClass(this.camera,this.scene,this.renderer);

    this.scene.add(...[this.cube],this.light)
    container?.nativeElement?.append(this.renderer?.domElement)

    const orbitControl = this.orbitControlInstance.createOrbitControl(this.camera,this.renderer?.domElement)



    this.loop.onPushCollection(orbitControl)


    this.ResizerInstance = new ResizerClass(
      container,
      this.camera,
      this.renderer,
    )


    // Assign The Position to the Camera of the Cube , if there are more cube then we have to give all position
    orbitControl.target.copy(this.cube.position);



    // this.ResizerInstance.onResize=()=>{
    //   this.render()
    // }
  }

  render(): void {
    this.renderer.render(this.scene, this.camera)
  }

  start()  {
     this.loop.start()
  }

  stop() {
     this.loop.stop()
  }
}
