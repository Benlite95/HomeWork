(function () {
    'use strict';
    let myArray = [1,2,3,4,5]

    function myMap(anArray, callbackFn) {
        for (let index = 0; index < anArray.length; index++) {
            // SL - Your replacing the values in the existing array. Question asked to leave the existing array as is, and instead return a new array with the transformed values
            anArray[index] = callbackFn(anArray[index], index, anArray);
        }
      }


      myMap(myArray, e => e + 67)
      console.log(myArray)


}());

// SL - I see the html file loads test2.js and test3.js but they dont exist... Did you just forget to commit?
// Grade - 65????
