import UIElement from "./UIElement";

class UIManager {
    private elements: UIElement[];

    constructor() {
        this.elements = [];
    }

    /**
     * Ajouter un élément
     * @param element
     */
    public addElement(element: UIElement): void {
        this.elements.push(element);
    }

    /**
     * Mettre à jour les éléments
     * @param context
     */
    public drawElements(context: CanvasRenderingContext2D): void {
        this.elements.forEach(element => element.draw(context));
    }
}

export default UIManager;
