/**
 * Initialize a map of Mendon, MA using Google Map API
 */
function initMap() {
    // Coordinates of Mendon, MA
    const mendon = {
        lat: 42.106,
        lng: -71.555,
    };

    // New instance of Google Map of Mendon
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: mendon
    });

    // Add a marker at Mendons position on the map
    const marker = new google.maps.Marker({
        position: mendon,
        map: map,
    });
}

window.initMap = initMap;