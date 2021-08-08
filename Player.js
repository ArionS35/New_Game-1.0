class Player{
    constructor(){
        this.body=createSprite(50,100)
        this.body.shapeColor='red'
        this.body.image= p_walking1
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