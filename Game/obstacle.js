class Obstacle{
    constructor(x,y,radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
    }

    drawObstacle(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = '#333333';
        ctx.fill();
    }
    moveDown(){
        this.y += this.speed;

    }
}
