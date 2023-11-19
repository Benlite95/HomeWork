class Vehicle {
    constructor(color){
        this.color = color
    }
    go(speed){
        this.speed = speed
        console.log(`the car is going at ${this.speed}`)
    }
    print(){
        console.log(`the color is ${this.color} and the speed is ${this.speed}`)
    }
}


class Plane extends Vehicle{
    constructor(color){
        super(color)
        
    }
    go(speed){
        this.speed = speed
        console.log(`the plane is flying at ${this.speed}`)
    }

}
const v1= new Vehicle("blue")
v1.go(67)
v1.print()
const p1 = new Plane("purple")
p1.go(399)
p1.print()
