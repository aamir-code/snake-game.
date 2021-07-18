var snake,snakeUp,snakeDown,snakeRight,snakeLeft;
var start,startImg;
var appleImg,apple;
var score=  0;

function preload() {
    snakeUp = loadImage("snakeUp.png");
    startImg = loadImage("start.png");
    snakeDown = loadImage("snakeDown.png");
    snakeLeft = loadImage("snakeLeft.png");
    snakeRight = loadImage("snakeRight.png");
    appleImg = loadImage("apple.png");  
}
function setup() {
    createCanvas(800,400);

    start = createSprite(400,200,10,10);
    start.addImage(startImg);
    start.scale = 0.3;

    snake = createSprite(400,200,10,10);
    snake.addImage(snakeUp);
    snake.scale = 0.5;
    snake.visible = false;

    apple = createSprite(random(100,800),random(100,400),10,10);
    apple.addImage(appleImg);
    apple.scale = 0.5;
    apple.visible = false;

}
function draw() {
    background("lightBlue");
    textSize(22);
    fill("blue");
    text("Score : "+score,700,30);
    

    if(mousePressedOver(start)) {
        start.visible = false;
        snake.visible = true;
        apple.visible = true;
    
}
    if(keyDown(UP_ARROW)) {
        snake.addImage(snakeUp);
        snake.velocityY = -3;

    }
    if(keyDown(DOWN_ARROW)) {
        snake.addImage(snakeDown);
        snake.velocityY = 3;

    }
    if(keyDown(LEFT_ARROW)) {
        snake.addImage(snakeLeft);
        snake.velocityX = -3;


    }
    if(keyDown(RIGHT_ARROW)) {
        snake.addImage(snakeRight);
        snake.velocityX = 3;
    }
    if(snake.isTouching(apple)) {
        apple.x = random(100,800);
        apple.y = random(100,400);
        score = score+1;
    }
   
    drawSprites();
}