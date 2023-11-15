(function(){
    'use strict'

    function Vehicle(color){
        this.color = color
        this.speed = 0; 
    }

    Vehicle.prototype.go = function(speed){
        this.speed = speed 
        console.log(`The ${this.color} car is going at ${speed} miles per hour`)
    }

    Vehicle.prototype.print = function(){
        console.log(`The ${this.color} car is currently going at ${this.speed} miles per hour (print method)`)
    }

    
    function Plane(color){
        Vehicle.call(this,color);
    }

    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.costructor = Plane

    Plane.prototype.go = function(speed){
        this.speed = speed
        console.log(`The ${this.color} plane is flying at ${speed} miles per hour`)
    }

    let v1 = new Vehicle("purple")
    v1.go(56)
    v1.print()

    let p1 = new Plane("yellow")
    p1.go(564)
    console.log(p1.speed)
    p1.print()

}())