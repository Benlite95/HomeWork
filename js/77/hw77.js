(function () {
    'use strict';
    const evenBtn = $("#evenBtn")
    const oddBtn = $("#oddBtn")
    const evenParagraphs = $("p:nth-child(2n)")
    const oddParagraphs = $("p:nth-child(2n-1)")
    
    $("button").on('click',changeColors.bind(this))

    function changeColors(target){
        if(target.delegateTarget.id == "oddBtn"){
           oddParagraphs.addClass("yellow")   
           evenParagraphs.removeClass("yellow")   
        }
        else{
            evenParagraphs.addClass("yellow")   
            oddParagraphs.removeClass("yellow")   
        }
    }
}());  