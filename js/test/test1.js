(function () {
    'use strict';
    let myArray = [1,2,3,4,5]

    function myMap(anArray, callbackFn) {
        for (let index = 0; index < anArray.length; index++) {
            anArray[index] = callbackFn(anArray[index], index, anArray);
        }
      }


      myMap(myArray, e => e + 67)
      console.log(myArray)

    
}());    