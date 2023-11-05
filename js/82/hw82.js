(async function () {
    const position =  { lat: 31.776722734550425, lng: 35.23443943973345 };

    const { Map } = await google.maps.importLibrary('maps');
    const map = new Map(document.getElementById('map'), {
        zoom: 13,
        center: position,
        mapId: 'DEMO_MAP_ID'
        //mapTypeId: google.maps.MapTypeId.HYBRID
      });
    
    const { DrawingManager } = await google.maps.importLibrary('drawing');
    const drawingManager = new DrawingManager();
    drawingManager.setMap(map);
    let drawings = JSON.parse(localStorage.getItem('drawings')) || [];
    google.maps.event.addListener(drawingManager, "markercomplete", (e) => {
        drawings.push({position: {lat: e.position.lat(), lng: e.position.lng()},type: "marker" });
        saveDrawings();
      });
      google.maps.event.addListener(drawingManager, "circlecomplete", (e) => {
        console.log(e)
        drawings.push({center: {lat: e.center.lat(), lng: e.center.lng() },radius: e.radius ,type: "circle"});
        saveDrawings();
      });
      google.maps.event.addListener(drawingManager, "rectanglecomplete", (e) => {
        drawings.push({ type: "rectangle", bounds: e.bounds });
        saveDrawings();
      });
    
      function saveDrawings() {
        localStorage.setItem("drawings", JSON.stringify(drawings));
      }
      function loadDrawings() {
        const savedDrawings = JSON.parse(localStorage.getItem("drawings"));
        if (savedDrawings) {
            savedDrawings.forEach((drawing) => {
                console.log(drawing)
                if (drawing.type === "marker") {
                    console.log(drawing.position)
                new google.maps.Marker({
                    map: map,
                    position: drawing.position,
                });
                } else if (drawing.type === "circle") {
                new google.maps.Circle({
                    map: map,
                    center: drawing.center,
                    radius: drawing.radius,
                });
                } else if (drawing.type === "rectangle") {
                    new google.maps.Rectangle({
                    map: map,
                    bounds: drawing.bounds
                    });
                }
            });
        }
    }
      
    loadDrawings()

    
}())   