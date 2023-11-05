(async function () {
  'use strict';
    const search = $("#search")
    const searchBtn = $("#submit")
    const placesList = $("#placesList")
  

  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');
  const {LatLngBounds} = await google.maps.importLibrary("core")

  
async function getLocation() {
  if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition((p) => {
        return { lat: 31.776722734550425, lng: 35.23443943973345 };
      });
  } else { 
      return { lat: 31.776722734550425, lng: 35.23443943973345 };
  }
}
 
  const position =  { lat: 31.776722734550425, lng: 35.23443943973345 };
  console.log(position)

  searchBtn.on('click',searchWiki)

  async function searchWiki(){
      const query = search.val();
      const url = `http://api.geonames.org/wikipediaSearchJSON?q=${query}&maxRows=10&username=slubowsky`;
      let bounds = new google.maps.LatLngBounds();

      try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data.geonames)
          data.geonames.forEach(place =>{
            const thumbNail = document.createElement('img');
            thumbNail.src = place.thumbnailImg
            let newMarker = new AdvancedMarkerElement({
              map: map,
              position: { lat: place.lat, lng: place.lng },
              title: place.title,
              content: thumbNail,
            });
            bounds.extend({ lat: place.lat, lng: place.lng });
            placesList.append(`<li>
                                <h1>${place.title}</h1>
                                <img src=${place.thumbnailImg}>
                                <a href=https://${place.wikipediaUrl} target="_blank">Link to Wikipedia</a>
                                <p>${place.summary}</p>
                                </li>`)
          }
          
          )
          map.fitBounds(bounds);

      } catch (error) {
          console.error('An error occurred:', error);
      }
  }
  const map = new Map(document.getElementById('map'), {
    zoom: 13,
    center: position,
    mapId: 'DEMO_MAP_ID'
    //mapTypeId: google.maps.MapTypeId.HYBRID
  });


}());
