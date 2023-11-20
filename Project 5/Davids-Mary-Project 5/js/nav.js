var map = L.map('map').setView([39.172611, -86.523333], 13);
// var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([39.172611, -86.523333]).addTo(map);

// var popup = L.popup()
//     .setLatLng([39.172937, -86.523130])
//     .setContent("Luddy School of <b> Informatics, Computing and Engineering</b>")
//     .openOn(map);

marker.bindPopup(" Luddy School of <br> <b> Informatics, Computing and Engineering</b>.").openPopup();
