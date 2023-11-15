import SceneManager from "./SceneManager";
import Renderer from "../rendering/Renderer";
import PhysicsEngine from "../physics/PhysicsEngine";
import InputManager from "../input/InputManager";
import AudioManager from "../audio/AudioManager";

class Engine {
    private readonly sceneManager: SceneManager;
    private readonly renderer: Renderer;
    private readonly physicsEngine: PhysicsEngine;
    private readonly audioManager: AudioManager;

    private isRunning: boolean;
    private lastUpdateTime: number;

    constructor() {
        this.sceneManager = new SceneManager();
        this.renderer = new Renderer();
        this.physicsEngine = new PhysicsEngine();
        this.audioManager = new AudioManager();

        this.isRunning = false;
    }

    // Initialisation du moteur
    public initialize(): void {
    }

    // Lancer la boucle de jeu
    public start(): void {
        this.isRunning = true;

        this.gameLoop();
    }

    // Boucle de jeu principale
    private gameLoop(): void {
        if (!this.isRunning) {
            return;
        }

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastUpdateTime) / 1000.0;
        this.lastUpdateTime = currentTime;

        this.sceneManager.update(deltaTime);
        this.physicsEngine.update(deltaTime);

        this.renderer.render(this.sceneManager.getCurrentScene());

        requestAnimationFrame(() => this.gameLoop());
    }
}

export default Engine;