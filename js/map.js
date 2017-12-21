function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(49.8, 23.9),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}