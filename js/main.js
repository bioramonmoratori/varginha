// Variáveis de Ambiente
let PAGE_WIDTH;
let PAGE_HEIGHT;
let GRAVITY;
let UFO_SPEED;
let BG_CENTER_H;
let BG_CENTER_W;
let VERTICAL_SPEED_UP;
let VERTICAL_SPEED_DOWN;


// Definição de Variáveis de Ambiente
function proportionScreen(height, speed) {
    PAGE_HEIGHT = height;
    PAGE_WIDTH = height * 1.25;
    BG_CENTER_H = height / 2;
    BG_CENTER_W = PAGE_WIDTH / 2 - 120;
    GRAVITY = 500;
    VERTICAL_SPEED_UP = -speed
    VERTICAL_SPEED_DOWN = speed*2
    HORIZONTAL_SPEED_LEFT = -speed
    HORIZONTAL_SPEED_RIGHT = speed
}

//Objetos do jogo


proportionScreen(900, 240)

const config = {
    type: Phaser.AUTO,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: GRAVITY },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', './assets/images/background.png');
    this.load.image('ufo', './assets/images/ufo.png');

    
}

function create ()
{
    background = this.add.image(BG_CENTER_H, BG_CENTER_W, 'sky');


    ufo = this.physics.add.image(150, 200, 'ufo');
    ufo.setScale(0.12);

    ufo.setCollideWorldBounds(true);
    ufo.set
    
}

function update ()
{
    let cursors = this.input.keyboard.createCursorKeys();
    if (cursors.up.isDown){
        ufo.setVelocityY(VERTICAL_SPEED_UP);
    } else if (cursors.down.isDown){
        ufo.setVelocityY(VERTICAL_SPEED_DOWN);
    } else if (cursors.left.isDown){
        ufo.setVelocityX(HORIZONTAL_SPEED_LEFT);
    } else if (cursors.right.isDown){
        ufo.setVelocityX(HORIZONTAL_SPEED_RIGHT)
    }

    if(cursors.left.isUp && cursors.right.isUp) {
        ufo.setVelocityX(0)
    }

}


