class Player{
    constructor(){
        this.body=createSprite(50,300)
    }
    moveRight(){
        this.body.x+=5
    }
    moveLeft(){
        this.body.x-=5
    }
    moveUp(){
        this.body.velocityY=-11
    }
    gravity(){
    this.body.velocityY+=2
    }
}