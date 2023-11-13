import GameObject from "../engine/GameObject";

class PhysicsEngine {
    private gameObjects: GameObject[];

    constructor() {
        this.gameObjects = [];
    }

    public addGameObject(gameObject: GameObject): void {
        this.gameObjects.push(gameObject);
    }

    public update(deltaTime: number): void {
        // Gestion des collisions
        for (let i = 0; i < this.gameObjects.length; i++) {
            for (let j = i + 1; j < this.gameObjects.length; j++) {
                const gameObject1 = this.gameObjects[i];
                const gameObject2 = this.gameObjects[j];

                if (gameObject1.collidesWith(gameObject2)) {
                    this.resolveCollision(gameObject1, gameObject2);
                }
            }
        }

        // Mise à jour des positions
        this.gameObjects.forEach((gameObject) => {
            gameObject.update(deltaTime);
        });
    }

    private resolveCollision(gameObject1: GameObject, gameObject2: GameObject): void {

    }
}

export default PhysicsEngine;