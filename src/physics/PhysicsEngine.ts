import GameObject from "../engine/GameObject";

class PhysicsEngine {
    private readonly gameObjects: GameObject[];

    constructor() {
        this.gameObjects = [];
    }

    /**
     * Mettre à jour les positions des GameObjects et gérer les collisions
     * @param deltaTime
     */
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

    /**
     * Résoudre une collision entre deux GameObjects
     * @param gameObject1
     * @param gameObject2
     * @private
     */
    private resolveCollision(gameObject1: GameObject, gameObject2: GameObject): void {
        // Calculer la différence de position pour déterminer le côté de la collision
        const dx = (gameObject1.x + gameObject1.width / 2) - (gameObject2.x + gameObject2.width / 2);
        const dy = (gameObject1.y + gameObject1.height / 2) - (gameObject2.y + gameObject2.height / 2);

        // Collision horizontale
        if (Math.abs(dx) > Math.abs(dy)) {
            gameObject1.velocity.x *= -1;
            gameObject2.velocity.x *= -1;

        // Collision verticale
        } else {
            gameObject1.velocity.y *= -1;
            gameObject2.velocity.y *= -1;
        }
    }
}

export default PhysicsEngine;