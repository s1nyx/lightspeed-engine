import GameObject from "./GameObject";

class Scene {
    private gameObjects: GameObject[];

    constructor() {
        this.gameObjects = [];
    }

    public addGameObject(gameObject: GameObject): Scene {
        this.gameObjects.push(gameObject);

        return this;
    }

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