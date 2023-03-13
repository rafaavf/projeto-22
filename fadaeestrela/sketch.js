var starImg, bgImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, fadaImg;
var sound;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    starImg = loadImage("images/star.png");
    bgImg = loadImage("images/starNight.png");
    //carregar animação de fada 
    fadaImg = loadAnimation("./images/fairyImage1.png", "./images/fairyImage2.png");
    sound = loadSound("./sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    sound.play();
    sound.setVolume(0.5);


    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130, 520);
    fada.addAnimation("fada", fadaImg);
    fada.scale = 0.25;

    engine = Engine.create();
    world = engine.world;
    var options = {
        isStatic: true,
    }
    ground = Bodies.rectangle(400, 740, 800, 20, options);
    World.add(world, ground);


    starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic:false});
    World.add(world, starBody);

    Engine.run(engine);
}

function draw() {
    background(bgImg);

    //star.x = starBody.position.x
    //star.y = starBody.position.y

    starBody.velocityY +=1;

    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 800, 20);

    if (fada.position.y > 470 && starBody.postion.y > 470) {
        Matter.Body.setStatic(starBody, true);
    }

    if (keyDown("d") || keyDown(RIGHT_ARROW)) {
        fada.x += 6;
    }

    if (keyDown("a") || keyDown(LEFT_ARROW)) {
        fada.x -= 6;
    }

    drawSprites();
}
