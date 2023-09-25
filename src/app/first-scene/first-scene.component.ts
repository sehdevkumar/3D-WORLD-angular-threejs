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

  // threejs ref
  theScene!: Scene
  theCamera!: Camera
  theGeometry!: BoxGeometry
  theMaterial!: MeshBasicMaterial
  theMesh!: Mesh
  theRenderer!: WebGLRenderer

  ngAfterViewInit(): void {
    this.onCreateScene()
    this.onCreateCamera()
    this.onCreateGeometry()
    this.onCreateMaterial()
    this.onCreateMesh()
    this.onCreateWebGLRenderer()

  }

  onCreateScene() {
    // create a Scene
    this.theScene = new Scene()
    // Set the background color
    this.theScene.background = new Color('skyblue')
  }

  onCreateCamera() {
    const fov = 30 // AKA Field of View
    const aspect =
      this.container?.nativeElement?.clientWidth /
      this.container?.nativeElement?.clientHeight
    const near = 0.1 // the near clipping plane
    const far = 100 // the far clipping plane

    this.theCamera = new PerspectiveCamera(fov, aspect, near, far)

    // Set the Initial Camera Position (x,y,z)
    this.theCamera.position.set(0, 0, 10)
  }

  onCreateGeometry() {
    // create a geometry (width,height,depth)
    this.theGeometry = new BoxGeometry(2, 2, 2)
  }

  onCreateMaterial() {
    this.theMaterial = new MeshBasicMaterial()
  }

  onCreateMesh() {
    this.theMesh = new Mesh(this.theGeometry, this.theMaterial)

    this.theScene.add(this.theMesh)
  }

  onCreateWebGLRenderer() {
    this.theRenderer = new WebGLRenderer()

    this.theRenderer.setSize(
      this.container.nativeElement?.clientWidth,
      this.container?.nativeElement?.clientHeight,
    )

    this.theRenderer.setPixelRatio(window.devicePixelRatio)


    this.container.nativeElement.append(this.theRenderer.domElement);


    this.theRenderer.render(this.theScene,this.theCamera);


  }
}
