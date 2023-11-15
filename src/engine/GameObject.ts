class GameObject {
    public x: number;
    public y: number;
    public width: number;
    public height: number;
    public velocity: { x: number, y: number };
    public sprite: HTMLImageElement | null;

    constructor(x: number, y: number, width: number, height: number, sprite: HTMLImageElement | null = null) {
        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.velocity = { x: 0, y: 0 };

        this.sprite = sprite;
    }

    /**
     * Mettre à jour la position du GameObject en fonction de sa vélocité
     * @param deltaTime
     */
    public update(deltaTime: number): void {
        this.x += this.velocity.x * deltaTime;
        this.y += this.velocity.y * deltaTime;
    }

    /**
     * Vérifier si le GameObject est en collision avec un autre
     * @param other
     */
    public collidesWith(other: GameObject): boolean {
        return this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.y + this.height > other.y;
    }
}

export default GameObject;