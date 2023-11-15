import SceneManager from "./SceneManager";
import Renderer from "../rendering/Renderer";
import PhysicsEngine from "../physics/PhysicsEngine";
import InputManager from "../input/InputManager";
import AudioManager from "../audio/AudioManager";
import UIManager from "../ui/UIManager";

class Engine {
    private readonly _sceneManager: SceneManager;
    private readonly _renderer: Renderer;
    private readonly physicsEngine: PhysicsEngine;
    private readonly audioManager: AudioManager;
    private readonly _inputManager: InputManager;
    private readonly _uiManager: UIManager;

    private isRunning: boolean;
    private lastUpdateTime: number;

    private updateCallback: (deltaTime: number) => void;

    constructor() {
        this._sceneManager = new SceneManager();
        this._renderer = new Renderer();
        this.physicsEngine = new PhysicsEngine();
        this.audioManager = new AudioManager();
        this._inputManager = new InputManager();
        this._uiManager = new UIManager();

        this.isRunning = false;
        this.updateCallback = () => {};
    }

    get sceneManager(): SceneManager {
        return this._sceneManager;
    }

    get inputManager(): InputManager {
        return this._inputManager;
    }

    get renderer(): Renderer {
        return this._renderer;
    }

    // Lancer la boucle de jeu
    public start(): void {
        this.isRunning = true;

        this.gameLoop();
    }

    public onUpdate(callback: (deltaTime: number) => void): void {
        this.updateCallback = callback;
    }


    // Boucle de jeu principale
    private gameLoop(): void {
        if (!this.isRunning) {
            return;
        }

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastUpdateTime) / 1000.0;
        this.lastUpdateTime = currentTime;

        this._sceneManager.update(deltaTime);
        this.physicsEngine.update(deltaTime);

        this.updateCallback(deltaTime);

        // Rendu des éléments d'interface utilisateur
        this._uiManager.drawElements(this.renderer.renderingContext);

        requestAnimationFrame(() => this.gameLoop());
    }
}

export default Engine;