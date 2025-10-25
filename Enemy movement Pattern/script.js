/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemies = 10;
const enemiesArray = [];

let gameFrame = 0;

class EnemyFrontBat {
    constructor() {
        this.image = new Image();
        this.image.src = 'src/enemy1.png';
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = 0;// Arreglame
        this.y = 0;// Arreglame
        this.frame = 0;
        this.flapSpeed = 0;// Arreglame
    }

    update() {
        // Arreglame
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

class EnemySideBat {
    constructor() {
        this.image = new Image();
        this.image.src = 'src/enemy2.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = 0;// Arreglame
        this.y = 0;// Arreglame
        this.frame = 0;
        this.flapSpeed = 0;// Arreglame
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 0.2;
        this.curve = Math.random() * 7;
    }

    update() {
        // Arreglame
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

class EnemyAlienCow {
    constructor() {
        this.image = new Image();
        this.image.src = 'src/enemy3.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = CANVAS_WIDTH / 2;// Arreglame
        this.y = CANVAS_HEIGHT / 2;// Arreglame
        this.frame = 0;
        this.flapSpeed = 0;// Arreglame
        this.angle = Math.random() * 500;
        this.angleSpeed = Math.random() * 0.5 + 0.5;
        // this.curve = Math.random() * 200 + 50;
    }

    update() {
        // Arreglame
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

class EnemySaw {
    constructor() {
        this.image = new Image();
        this.image.src = 'src/enemy4.png';
        this.speed = Math.random() * 4 + 1;
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteHeight / 2.5;
        this.x = 0;// Arreglame
        this.y = 0;// Arreglame
        this.newX = 0;// Arreglame
        this.newY = 0;// Arreglame
        this.frame = 0;
        this.flapSpeed = 0;// Arreglame
    }

    update() {
        // Arreglame
    }

    draw() {
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
};

for (let i = 0; i < numberOfEnemies; i++) {
    // Creamos varios enemigos aqui
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    const enemy = new EnemyAlienCow();
    enemy.update();
    enemy.draw();
    gameFrame++;
    requestAnimationFrame(animate);
}

animate();