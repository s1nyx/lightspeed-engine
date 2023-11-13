import Scene from "../engine/Scene";
import GameObject from "../engine/GameObject";

class Renderer {
    private renderingContext: WebGLRenderingContext;
    private canvas: HTMLCanvasElement;

    constructor() {
        this.canvas = document.getElementById('canvas') as HTMLCanvasElement;

        if (!this.canvas) {
            throw new Error("Canvas not found");
        }

        this.renderingContext = this.canvas.getContext("webgl");

        if (!this.renderingContext) {
            throw new Error("WebGL not supported");
        }

        this.initializeWebGLSettings();
    }

    private initializeWebGLSettings(): void {
        // Initialiser les paramètres WebGL (Viewport, couleur de fond, profondeur...)
        this.renderingContext.clearColor(0.0, 0.0, 0.0, 1.0);
        this.renderingContext.enable(this.renderingContext.DEPTH_TEST); // Activer le test de profondeur
        this.renderingContext.depthFunc(this.renderingContext.LEQUAL); // Objets proches cachent les objets lointains
    }

    public render(scene: Scene): void {
        this.renderingContext.clear(this.renderingContext.COLOR_BUFFER_BIT | this.renderingContext.DEPTH_BUFFER_BIT);

        scene.getGameObjects().forEach((gameObject) => {
           this.drawGameObject(gameObject);
        });
    }

    private drawGameObject(gameObject: GameObject): void {

    }
}

export default Renderer;