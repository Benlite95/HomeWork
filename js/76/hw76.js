(function () {
    'use strict';
    const nameInput = $("#name")
    const addressInput = $("#address")
    const submitBtn = $("#submit")
    const contentDiv = $("#content")
    const disableCheckbox = $("#disableCheckbox")

    submitBtn.on('click',addContent)
    disableCheckbox.on('change', disableFields);


    function addContent(){
        if(nameInput.val()){
            contentDiv.append(`<h3>Name: ${nameInput.val()} | Address: ${addressInput.val()}</h3>`)
            $("input").val(null) 
        }
        else{
            alert("Please enter name and address before submiting")
        }
    }


    function disableFields() {
        if (disableCheckbox.is(':checked')) {
            nameInput.prop('disabled', true);
            addressInput.prop('disabled', true);
            submitBtn.prop('disabled', true);
        } else {
            nameInput.prop('disabled', false);
            addressInput.prop('disabled', false);
            submitBtn.prop('disabled', false);
        }
    }
    
}());  