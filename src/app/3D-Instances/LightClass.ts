import { DirectionalLight } from "three";

export class LightClass {

   createLight() {

      const light = new DirectionalLight('purple',100)
      light.position.set(-10,10,10)

      return light

   }


}
