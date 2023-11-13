(function(){
    'use strict'
    let draggable  = false
    let offSet
    let zIndex = 1
    let lastItem 
    const parts = document.querySelector('#parts')

    const picture = document.querySelectorAll('img')
    const potato = document.querySelector('#potato')
    const enlarge = document.getElementById("enlarge")
    const minimize = document.getElementById("minimize")


    enlarge.addEventListener('click',() => {
        if(!lastItem.style.width){
            lastItem.style.width = `${lastItem.naturalWidth+10}px`;
        }
        else{
            lastItem.style.width = `${parseInt(lastItem.style.width)+10}px`;
        }
    })

    minimize.addEventListener('click',() => {
        if(!lastItem.style.width){
            lastItem.style.width = `${lastItem.naturalWidth-10}px`;
        }
        else{
            lastItem.style.width = `${parseInt(lastItem.style.width)-10}px`;
        }
    })


    document.addEventListener('mousedown',(e) => {
        if(e.target.matches('img')){
            draggable = e.target;
           offSet =   { y: e.offsetY, x: e.offsetX };
           if(draggable != potato){
           draggable.style.zIndex = ++zIndex
           }
        }
    })

    document.addEventListener('mouseup', e => {
        if(draggable){
            lastItem = draggable
            draggable = false
            console.log("mouseup")
        }
        saveState()
    });

    document.addEventListener('mousemove', movePicture);
    function movePicture(e){
        e.preventDefault();
        if(draggable){
        const currentStyle = getComputedStyle(draggable);
            draggable.style.top = `${e.clientY - offSet.y}px`;
            draggable.style.left = `${e.clientX -offSet.x}px`;
        }
    }  

    function saveState() {
        const partsData = [];
        picture.forEach(part => {
          partsData.push({
            top: part.style.top,
            left: part.style.left,
            zindex: part.style.zIndex,
            width: part.style.width
          });
        });
    
        localStorage.setItem('parts', JSON.stringify(partsData));
    }

    function loadState(){
        let parts = JSON.parse(localStorage.getItem('parts'))
        let i = 0
        let saved
        picture.forEach(part => {
            saved = parts[i]
            part.style.top =  saved.top
            part.style.left =  saved.left
            part.style.zIndex =  saved.zindex
            part.style.width =  saved.width
            i++
        });
    };

    loadState()
      
    
}())