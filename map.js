function updateMap() {
    console.log("Updating map with Realtime data")
    // For realtime data use a api from covid-tracing
    fetch("./hello.json")
    .then(response => response.json())
    .then(rsp => {
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;
            if (cases>255){
                color = "rgb(255, 0, 0)";
            }

            else{
                color = `rgb(${cases}, 0, 0)`;
            }

            // Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color: color
            }).setLngLat([longitude, latitude])
            .addTo(map); 
        });
    })

}
newFunction();
function newFunction() {
    updateMap();
}