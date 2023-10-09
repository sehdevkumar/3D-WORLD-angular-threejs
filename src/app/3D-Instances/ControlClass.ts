import { ElementRef } from '@angular/core';

import { PerspectiveCamera } from 'three';
import {OrbitControls}  from 'three/examples/jsm/controls/OrbitControls'

export class ControlClass {


  createOrbitControl(camera:PerspectiveCamera,canvas:HTMLElement) {

    const control = new OrbitControls(camera,canvas);

    control.enableDamping = true;
    (control as any).tick=()=> control.update()


    return control


  }



}
