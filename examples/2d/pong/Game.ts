import Engine from "../../../src/engine/Engine";
import GameObject from "../../../src/engine/GameObject";
import Scene from "../../../src/engine/Scene";
import Logger from "../../../src/utils/Logger";

// Initialiser le moteur et ses composants
const engine = new Engine();
const sceneManager = engine.sceneManager;
const inputManager = engine.inputManager;
const renderer = engine.renderer;

Logger.debug("Initialisation du jeu");

// Préparer le jeu
const paddle1 = new GameObject(30, 150, 20, 100);
const paddle2 = new GameObject(750, 150, 20, 100);

const ball = new GameObject(400, 200, 20, 20);
ball.velocity = { x: 5, y: 5 };

Logger.debug("Objets créés");

// Gestion de la scène
const mainScene = new Scene()
    .addGameObject(paddle1)
    .addGameObject(paddle2)
    .addGameObject(ball);

sceneManager.addScene("main", mainScene);
sceneManager.setCurrentScene('main');

Logger.debug("Scène créée");

// Boucle de jeu
engine.onUpdate((deltaTime) => {
    // Gestion des entrées pour déplacer les raquettes
    if (inputManager.isKeyPressed('w')) paddle1.y -= 10;
    if (inputManager.isKeyPressed('s')) paddle1.y += 10;
    if (inputManager.isKeyPressed('ArrowUp')) paddle2.y -= 10;
    if (inputManager.isKeyPressed('ArrowDown')) paddle2.y += 10;

    // Mise à jour de la position de la balle
    ball.x += ball.velocity.x * deltaTime;
    ball.y += ball.velocity.y * deltaTime;

    // Collision avec les bords haut et bas
    if (ball.y <= 0 || ball.y + ball.height >= 600) ball.velocity.y *= -1;

    renderer.clear();
    sceneManager.getCurrentScene().getGameObjects().forEach(gameObject => {
        renderer.drawGameObject(gameObject);
    });
})

// Lancer le moteur
engine.start();

Logger.debug("Jeu lancé");