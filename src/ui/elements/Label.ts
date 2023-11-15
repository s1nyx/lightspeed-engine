import UIElement from "../UIElement";

class Label extends UIElement {
    private text: string;
    private font: string;
    private color: string;

    constructor(x: number, y: number, text: string, font = '20px Arial', color = 'white') {
        super(x, y);
        this.text = text;
        this.font = font;
        this.color = color;
    }

    /**
     * Modifier le texte
     * @param newText
     */
    public setText(newText: string): void {
        this.text = newText;
    }

    /**
     * Dessiner le label
     * @param context
     */
    public draw(context: CanvasRenderingContext2D): void {
        context.font = this.font;
        context.fillStyle = this.color;
        context.fillText(this.text, this.x, this.y);
    }
}

export default Label;
