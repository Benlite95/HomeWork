(function(){
    'use strict'
    const menu = $(".menu")
    const videoPlayer = $("#videoPlayer")
    const videoContainer = $(".video-container")
    const title = $("h1")
    videoContainer.hide()
    
    const item = $(".item")
    console.log(item)

    $(document).on('click', '.item', fetchVideo);

    async function getNames() {
        try {
            let names = await fetch("hw80.json");
            if (!names.ok) {
                throw new Error('Not OK Netword Response');
            }
            let array = await names.json();
            return array;
        } 
        catch (error) {
            console.error('An error occurred ', error);
        }
    }
        
    async function populateVideos(){
        const theVideos = await getNames()
        theVideos.forEach(video => menu.append(`
        <div class="item" value="${video.id}">
            <img src="${video.picture}" alt="Image 1">
            <div class="description">${video.name}</div>
        </div>
        `))
    }

    async function fetchVideo(){
        videoContainer.show()
        const thevideos = await getNames()
        let itemId = parseInt($(this).attr('value'))
        console.log(itemId)
        videoPlayer.attr('src',thevideos[itemId].video)
        title.text(thevideos[itemId].name)
    }

    populateVideos()
}())

