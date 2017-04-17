///<reference path="point.ts" />
///<reference path="vector.ts" />

class Projectile {
    position: Point;
    velocity: Vector;

    constructor (x: number, y: number, velX: number, velY: number) {
        this.position = new Point(x,y);
        this.velocity.x = velX;
        this.velocity.y = velY;
    }
}