class InputManager {
    private static instance: InputManager;
    private keyStates: Map<string, boolean>;

    private constructor() {
        this.keyStates = new Map<string, boolean>();

        // Écouteurs d'événements pour les entrées clavier
        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    public static getInstance(): InputManager {
        if (!InputManager.instance) {
            InputManager.instance = new InputManager();
        }
        return InputManager.instance;
    }

    /**
     * Mettre à jour l'état des touches enfoncées
     * @param event
     * @private
     */
    private onKeyDown(event: KeyboardEvent): void {
        this.keyStates.set(event.key, true);
    }

    /**
     * Mettre à jour l'état des touches relâchées
     * @param event
     * @private
     */
    private onKeyUp(event: KeyboardEvent): void {
        this.keyStates.set(event.key, false);
    }

    /**
     * Mettre à jour l'état des touches pressées
     * @param key
     */
    public isKeyPressed(key: string): boolean {
        return this.keyStates.get(key) || false;
    }

    // Autres méthodes potentielles pour gérer la souris, le toucher, etc.
}

export default InputManager;