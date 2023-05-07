class Monster {

    constructor(x, y, width, height,speedX,speedY,src) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
        this.src = src;
    }


    draw(ctx){
        let img = new Image();
        img.src = this.src;
        ctx.drawImage(img,this.x, this.y, this.width, this.height);
    }
    move(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

}