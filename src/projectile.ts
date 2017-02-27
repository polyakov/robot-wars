///<reference path="point.ts" />

class Projectile {
    position: Point;
    velX: number;
    velY: number;
    constructor (x: number, y: number, velX: number, velY: number) {
        this.position = new Point(x,y);

        this.velX = 10;
        this.velY = 10;
    }
}