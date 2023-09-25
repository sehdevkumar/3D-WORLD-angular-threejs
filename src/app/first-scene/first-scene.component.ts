import { WorldClass } from './../3D-Instances/WorldClass';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import {
  BoxGeometry,
  BufferGeometry,
  Camera,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
// components/camera.js
// components/cube.js
// components/scene.js
// systems/renderer.js
// systems/Resizer.js
@Component({
  selector: 'app-first-scene',
  templateUrl: './first-scene.component.html',
  styleUrls: ['./first-scene.component.scss'],
})
export class FirstSceneComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLDivElement>


  world!:WorldClass;


  ngAfterViewInit(): void {

    this.world = new WorldClass(this.container)

    this.world.render()
  }


}
