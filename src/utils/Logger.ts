class Logger {
    public debug(message: string): void {
        console.debug(`[DEBUG] ${message}`);
    }

    public info(message: string): void {
        console.info(`[INFO] ${message}`);
    }

    public warn(message: string): void {
        console.warn(`[WARN] ${message}`);
    }

    public error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }
}

export default Logger;