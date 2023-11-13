import Scene from "./Scene";

class SceneManager {
    private scenes: Map<string, Scene>;
    private currentScene: Scene | null;

    constructor() {
        this.scenes = new Map<string, Scene>();
        this.currentScene = null;
    }

    /**
     * Ajoute une scène
     * @param name
     * @param scene
     */
    public addScene(name: string, scene: Scene): void {
        this.scenes.set(name, scene);
    }

    /**
     * Changer la scène courante
     * @param name
     */
    public setCurrentScene(name: string): void {
        const scene = this.scenes.get(name);

        if (!scene) {
            throw new Error(`Scene ${name} not found`);
        }

        this.currentScene = scene;
    }

    /**
     * Récupérer la scène courante
     */
    public getCurrentScene(): Scene {
        if (!this.currentScene) {
            throw new Error("No current scene");
        }

        return this.currentScene;
    }

    /**
     * Mettre à jour la scène courante
     */
    public update(deltaTime: number): void {
        if (this.currentScene) {
            this.currentScene.update(deltaTime);
        }
    }
}

export default SceneManager;