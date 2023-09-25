import { CameraClass } from "../3D-Instances/CameraClass";
import { CubeClass } from "../3D-Instances/CubeClass";
import { RenderClass } from "../3D-Instances/RenderClass";
import { ResizerClass } from "../3D-Instances/ResizerClass";
import { SceneClass } from "../3D-Instances/SceneClass";

export interface IWorldInstance {
     RendererInstance:RenderClass
     CubeInstance:CubeClass
     CameraInstance:CameraClass
     SceneInstance:SceneClass
     ResizerInstance:ResizerClass
     render():void;
}
