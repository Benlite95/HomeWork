class Person{
    #age
    constructor(firstName, lastName, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.#age = age
    }
    ageSetter(age){
        if(typeof age === 'number' &&  age >= 0  && age < 120){
            this.#age = age
        }
        else{
            throw new Error("age has to be a valid number between 0 and 120")
        }
    }
    age(){
        return this.#age
    }
    toString(){
        let str = ""
        for (const key in this) {
            str += `${key} is ${this[key]}, `
          }
        str += `age is ${this.age()}`
        console.log(str)
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, grade){
        super(firstName, lastName, age)
        this.grade = grade
    }
}
const s = new Student("niel","bohr",34,3)
const p = new Person("Elon", "Musk", 67)
s.toString()
p.toString()