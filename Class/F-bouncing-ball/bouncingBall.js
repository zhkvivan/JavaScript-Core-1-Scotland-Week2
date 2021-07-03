
let positionX;
let positionY;
let screenWidth;
let screenHeight;
let speedX;
let speedY;

function moveBall(){
    positionX += speedX;
    positionY += speedY;

    if(positionX > screenWidth || positionX < 0){
        speedX *= -1;
    }

    if(positionY > screenHeight || positionY < 0){
        speedY *= -1;
    }
}





intialiseValues();
window.setInterval(movementLoop, 10);

let ball = document.querySelector('#ballDiv');

function movementLoop(){
    moveBall();
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
}

function intialiseValues(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    positionX = (screenWidth / 3);
    positionY = (screenHeight - 250.6);
    speedX = 3;
    speedY = 3;
}