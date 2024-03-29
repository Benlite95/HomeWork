'use strict'

const farenhietInput = document.getElementById("farenheit")
const celsiusInput = document.getElementById("celsius")

const celsiusToFarenheit = function(c){
    return Math.round((c*1.8)+32)
}

const farenheitToCelsius = function(f){
    return Math.round((f-32)/1.8)
}


farenhietInput.onchange = function() {
    celsiusInput.value = farenheitToCelsius(farenhietInput.value);
};

celsiusInput.onchange = function() {
    farenhietInput.value = celsiusToFarenheit(celsiusInput.value);
};