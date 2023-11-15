abstract class UIElement {
    protected x: number;
    protected y: number;

    protected constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Dessiner l'élément
     * @param context
     */
    public abstract draw(context: CanvasRenderingContext2D): void;
}

export default UIElement;
