import GameObject from "./GameObject";

class Scene {
    private gameObjects: GameObject[];

    constructor() {
        this.gameObjects = [];
    }

    /**
     * Ajouter un GameObject à la scène
     * @param gameObject
     */
    public addGameObject(gameObject: GameObject): Scene {
        this.gameObjects.push(gameObject);

        return this;
    }

    /**
     * Mettre à jour les positions des GameObjects de la scène
     * @param delaTime
     */
    public update(delaTime: number): void {
        this.gameObjects.forEach((gameObject) => {
            gameObject.update(delaTime);
        });
    }

    public getGameObjects(): GameObject[] {
        return this.gameObjects;
    }
}

export default Scene;