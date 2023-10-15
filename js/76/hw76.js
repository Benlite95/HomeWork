(function () {
    'use strict';
    const nameInput = $("#name")
    const addressInput = $("#address")
    const submitBtn = $("#submit")
    const contentDiv = $("#content")
    submitBtn.on('click',addContent)

    function addContent(){
        if(nameInput.val()){
            contentDiv.append(`<h3>Name: ${nameInput.val()} | Address: ${addressInput.val()}</h3>`)
            $("input").val(null) 
        }
    }
}());  