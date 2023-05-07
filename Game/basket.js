class Basket {

    constructor(x, y, width, height, src, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;
        this.speed = speed;
    }

    drawBasket(ctx){
        let image = new Image;
        image.src = this.src;
        ctx.drawImage(image,this.x, this.y, this.width,this.height);
        // ctx.beginPath();
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        // ctx.fillStyle = 'black';

    }
    moveLeft(){
        this.x -= this.speed;
    }
    moveRight(){
        this.x += this.speed;
    }
    moveUp(){
        this.y -= this.speed;
    }
    moveDown(){
        this.y += this.speed;
    }
}


