import { ElementRef } from "@angular/core";
import { IWorldInstance } from "../3D-Typings/systems-typings";
import { CameraClass } from "./CameraClass";
import { CubeClass } from "./CubeClass";
import { RenderClass } from "./RenderClass";
import { ResizerClass } from "./ResizerClass";
import { SceneClass } from "./SceneClass";

export class WorldClass implements IWorldInstance {
  RendererInstance: RenderClass = new RenderClass();
  CubeInstance: CubeClass = new CubeClass();
  CameraInstance: CameraClass = new CameraClass();
  SceneInstance: SceneClass = new SceneClass();
  ResizerInstance!: ResizerClass;

  constructor(container:ElementRef<HTMLDivElement>) {


    container?.nativeElement?.append(this.RendererInstance?.createRenderer()?.domElement)

    const cube  = this.CubeInstance.createCube()

    this.SceneInstance.createScene().add(cube);

    this.ResizerInstance = new ResizerClass(container,this.CameraInstance.createCamera(),this.RendererInstance.createRenderer())


  }



  render(): void {





  }

}
