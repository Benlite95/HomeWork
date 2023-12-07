class Person{
    constructor(firstName,lastName,age,address){
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.address = address
    }
    print(){
        console.log(`My name is ${this.firstName} ${this.lastName} and i am ${this.age} years old and live opn ${this.address}`)
    }
}
let p = new myPerson("Elon","Musk",52,"123 Main Street")
p.print()
import $ from 'messagebox.js'