class AudioManager {
    private sounds: Map<string, HTMLAudioElement>;

    constructor() {
        this.sounds = new Map<string, HTMLAudioElement>();
    }

    /**
     * Charger un son
     * @param key
     * @param path
     */
    public loadSound(key: string, path: string): void {
        const audio = new Audio(path);
        this.sounds.set(key, audio);
    }

    /**
     * Jouer un son chargé
     * @param key
     */
    public playSound(key: string): void {
        const sound = this.sounds.get(key);
        if (sound) {
            sound.play();
        }
    }

    /**
     * Arrêter un son chargé
     * @param key
     */
    public stopSound(key: string): void {
        const sound = this.sounds.get(key);
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    }

    /**
     * Mettre en pause un son chargé
     * @param key
     * @param volume
     */
    public setVolume(key: string, volume: number): void {
        const sound = this.sounds.get(key);
        if (sound) {
            sound.volume = volume;
        }
    }

    // Autres méthodes potentielles...
}

export default AudioManager;