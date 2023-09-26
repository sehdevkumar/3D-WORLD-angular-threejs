import { DirectionalLight } from "three";

export class LightClass {

   createLight() {

      const light = new DirectionalLight('red',100)
      light.position.set(-10,10,10)

      return light

   }


}
