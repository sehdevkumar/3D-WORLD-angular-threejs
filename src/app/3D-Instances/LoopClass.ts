import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Mesh, PerspectiveCamera, Scene, WebGLRenderer,Clock } from 'three';
export class LoopClass {

   updatedObjectCollections:Mesh[] | OrbitControls[] = []
    clock = new Clock();

   constructor(private camera:PerspectiveCamera,private scene:Scene,private renderer:WebGLRenderer) {

   }

   onPushCollection(object: OrbitControls | Mesh) {
     this.updatedObjectCollections.push(object as any)
   }


   start() {
      this.renderer.setAnimationLoop(()=>{
        this.tick()
        this.renderer.render(this.scene,this.camera)
      })
   }


   stop() {
       this.renderer.setAnimationLoop(null);
   }

   tick() {
      // Previous Frame Rate (Delta helpfull to decupple the frame rate make sync and target the 60fps), passing this delta to the callback to call on the every cube because we have already registered the tick method on every cube with delta aguments so that we can use to multiply with the radians after converting deg to rad method from the three MathUtil class
      const delta = this.clock.getDelta();
      for(let cube of this.updatedObjectCollections) {
         (cube as any)?.tick(delta)
      }

   }
}
