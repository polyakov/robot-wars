///<reference path="point.ts" />

class Projectile {
    position: Point;
    
    constructor (x: number, y: number, velX: number, velY: number) {
        this.position = new Point(x,y);
    }
}