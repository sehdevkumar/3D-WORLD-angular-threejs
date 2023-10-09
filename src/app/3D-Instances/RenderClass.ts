import { WebGLRenderer } from 'three'
import { IRendererInstance } from '../3D-Typings/components-typings'

export class RenderClass implements IRendererInstance {
  createRenderer(): WebGLRenderer {
    const renderer = new WebGLRenderer({antialias:true})


    return renderer
  }
}
