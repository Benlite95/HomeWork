(async function(){
    'use strict'

    const searchBtn = $("#search")
    const contents = $('h1')
    const input = $("input")
    contents.text("new text");

    searchBtn.on('click', searchForFile.bind(this,searchForFile))
    function searchForFile(){
        let file = input.val()
        console.log(file)
        fetch(file)
            .then(r => {
                 if (r.status >= 400){
                    throw "400s error"
                }
                return r.text()
            })
               
            .then(r => contents.text(r) )
            .catch(e => console.error("error",e))
            input.val("")
    }
}())