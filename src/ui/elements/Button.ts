import UIElement from "../UIElement";
import Label from "./Label";

class Button extends UIElement {
    private label: Label;
    private width: number;
    private height: number;
    private backgroundColor: string;
    private onClick: () => void;

    constructor(x: number, y: number, width: number, height: number, text: string, onClick: () => void, backgroundColor = 'grey') {
        super(x, y);

        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.label = new Label(x, y, text);
        this.onClick = onClick;

        // Écouteur d'événement pour le clic
        document.addEventListener('click', this.handleClick.bind(this));
    }

    /**
     * Gérer le clic sur le bouton
     * @param event
     * @private
     */
    private handleClick(event: MouseEvent): void {
        const rect = (event.target as HTMLCanvasElement).getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height) {
            this.onClick();
        }
    }

    /**
     * Dessiner le bouton
     * @param context
     */
    public draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = this.backgroundColor;
        context.fillRect(this.x, this.y, this.width, this.height);
        this.label.draw(context);
    }
}

export default Button;
