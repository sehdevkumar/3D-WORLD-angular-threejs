import { ElementRef } from "@angular/core";
import { PerspectiveCamera, WebGLRenderer } from "three";

export class ResizerClass {
   constructor(container:ElementRef<HTMLDivElement>, camera:PerspectiveCamera, renderer:WebGLRenderer) {
    // Set the camera's aspect ratio
    camera.aspect = container?.nativeElement.clientWidth / container?.nativeElement?.clientHeight;

    // update the size of the renderer AND the canvas
    renderer?.setSize(container?.nativeElement.clientWidth,container?.nativeElement?.clientHeight);

    // set the pixel ratio (for mobile devices)
    renderer?.setPixelRatio(window?.devicePixelRatio);
  }
}
