(function () {
    'use strict';

   const firstNames = ["Jacob", "Samuel", "David", "Benjamin", "Chaim","Miriam", "Abigail", "Esther", "Rebecca", "Rachel"]
   const lastNames = ["Cohen", "Levine", "Goldman", "Rosenberg", "Friedman", "Katz", "Weinstein", "Grossman", "Silverman", "Kaplan", "Adler", "Stein", "Rubin", "Schwartz", "Berman", "Jacobs", "Schneider", "Meyer", "Glassman", "Finkelstein"]
   
   const people = []
  
   function makePerson(id,firstName, lastName,gender) {
        return {
            id,
            firstName,
            lastName,
            gender,

            print: function()  {console.log(`${this.id} ${this.firstName} ${this.lastName}`)}
        }
    }

    function createPeople(){
        for(let i = 0;i < 40; i++ ){
            let person =  makePerson(i+1,firstNames[Math.floor(Math.random()*5)+(Math.floor(i/20)*5)], lastNames[Math.floor(Math.random()*20)],Math.floor(i/20))
            people.push(person)
        }
    }

    createPeople()

    for (const element of people) {
       let otherGender = people.filter(p => p.gender != element.gender && p.spouse == undefined);
       let sp = otherGender[Math.floor(Math.random()*otherGender.length)]
       element.spouse = sp
       sp.spouse = element
       if(otherGender.length == 1){
        break
       }
    };

    people.forEach(person => {
        console.log(`id ${person.id}, first: ${person.firstName}, last: ${person.lastName}, gender: ${person.gender}, spouse: ${person.spouse.firstName}, spouse_id: ${person.spouse.id}`);
    });

}());  