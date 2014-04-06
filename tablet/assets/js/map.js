//create an array to hold all the markers
var markers = [
	["The Engineering Computing Center is for the use of Engineering and Computer Science majors/minors, and for anyone currently taking an engineering or computer science class. All users must abide by the Engineering Computing Center Extended Usage Agreement. The ECC has dual booted (Microsoft Windows 7 & Linux Ubuntu) computers located in rooms A, B, C, D, E and the north side of F. Some labs are used as Teaching Laboratories and are open for general use only when classes are not being held in the rooms.  A schedule for these labs can be found by following the Lab links on the right of the screen.  Rooms A and F are open for general use during all ECC business hours.<br /><a href='#ecc'>GO HERE</a>", 0.2685, 0.13458],
	["Department of Computer Science and Engineering Office", 0.2529, 1.49689],
	["Dr. George Bebis's Office <a href='http://www.google.com'>google</a>", 0.12085, 1.6507]
];


var map = L.map('map_pane', {zoom:8, minZoom:8, maxZoom:10, zoomControl:false}).setView([0,0], 0);

var southWest = L.latLng(-400/360.0, -640/360.0),
northEast = L.latLng(400/360.0, 640/360.0),
bounds = L.latLngBounds(southWest, northEast);

L.imageOverlay('assets/img/scaleMap.png', bounds).addTo(map);

//sets bounds
var southWest2 = L.latLng(-500/360.0, -740/360.0),
northEast2 = L.latLng(500/360.0, 740/360.0),
bounds2 = L.latLngBounds(southWest2, northEast2);

map.setMaxBounds(bounds2);

//Place all markers on the map
for (var i = 0; i < markers.length; i++) 
{
	marker = new L.marker([markers[i][1],markers[i][2]])
		.bindPopup(markers[i][0])
		.addTo(map);
}

// (just for testing) create a popup whereever the user clicks the map
var popup = L.popup();
function onMapClick(e) {
popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(map);
}

map.on('click', onMapClick);

