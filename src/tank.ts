/// <reference path="point.ts" />
/// <reference path="projectile.ts" />


class Tank {
    name: string = "hello world!";   
    position: Point = new Point(0,0);
    moveS: number = 0;
    moveA: number = 0;
    move(deltaX: number, deltaY: number): void {
        //this.position.x += deltaX;
        //this.position.y += deltaY;
        this.moveS = 300;


    }



    shoot(): Projectile {
        console.log("Creating project at position - x: " + this.position.x + ", y: "+ this.position.y );
        let directionX: number = 100;
        let directionY: number = 20;
        
        let p:Projectile = new Projectile(this.position.x, this.position.y, directionX,directionY);
        
        return p;
    }
}