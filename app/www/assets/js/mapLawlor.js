var cluster = L.markerClusterGroup({showCoverageOnHover: false, maxClusterRadius: 80});

//create arrays to store the different types of points of interests
var poster = 
        ["<center><b>Roslyn Project Poster</b> <br>" +
         "The team poster for our project provides more detail about our project." + 
         "There should be at least one team member nearby in case you have any questions." +
        "<br> <a href='#poster'>GO HERE</a> </center>", -0.3955, 0.1181];

var posterRoom =
        [   "<center><b>Innovation Day Poster Room </b><br>" +
            "Senior capstone projects represent innovative engineering products " +
            "designed by teams of undergraduate students during the course of their senior year." +
            "<br> <a href='#posterRoom'>GO HERE</a></center>", -0.32135, 0.64819];

var lawlorOffice =
        [   "<center><b>Lawlor Events Center Offices</b><br>" +
            "Offices used by Lawlor Events Center." +
            "<br> <a href='#lawlorOffice'>GO HERE</a></center>", -0.222, 1.057];
                
var entrance =
        [   "<center><b>Lawlor Events Center Entrance</b><br>" +
            "Lawlor Events Center houses many different types of events. These include: " +
            "Senior Capstone Innovation Day, basketball games, concerts, and university ceremonies." +
            "<br> <a href='#lawlorEntrance'>GO HERE</a></center>", -0.994, 1.032];

var hall =
        [   "<center><b>Main Hall</b><br>" +
            "This is the main hall around the main event arena. I cannot take you here, but if you get a chance you might " +
            "notice an awesome wolf in the case. GO PACK!"
            , 0.589, 0.664];

// create the map
var map = L.map('map_pane', {
  zoom:8, 
  minZoom:8, 
  maxZoom:10, 
  zoomControl:false})
  .setView([0,0], 0);

// assign the bounds for the image
var southWest = L.latLng(-600/360.0, -960/360.0),
northEast = L.latLng(600/360.0, 960/360.0),
boundsImage = L.latLngBounds(southWest, northEast);

// set the background image for the map, 1920x1200
L.imageOverlay('assets/img/roslynInterfaceMap.png', boundsImage).addTo(map);

//sets bounds for the map
var southWest2 = L.latLng(-350/360.0, -550/360.0),  
northEast2 = L.latLng(350/360.0, 500/360.0),        
boundsMap = L.latLngBounds(southWest2, northEast2);

map.setMaxBounds(boundsMap);

// Set parameters for the different icons
var greenIcon = L.icon({
    iconUrl: 'assets/img/marker-icon-green.png',
    iconRetinaUrl: 'assets/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor: [22, 51],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});

var blueIcon = L.icon({
    iconUrl: 'assets/img/marker-icon-blue.png',
    iconRetinaUrl: 'assets/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [22, 51],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});

var redIcon = L.icon({
    iconUrl: 'assets/img/marker-icon-red.png',
    iconRetinaUrl: 'assets/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [22, 51],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});

var purpleIcon = L.icon({
    iconUrl: 'assets/img/marker-icon-purple.png',
    iconRetinaUrl: 'assets/img/marker-icon-2x-purple.png',
    iconSize: [25, 41],
    iconAnchor: [22, 51],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});

var wolfIcon = L.icon({
    iconUrl: 'assets/img/wolf.png',
    iconSize: [40, 30],
    iconAnchor: [30, 40],
    popupAnchor: [0, -30],
});

var currentLocIcon = L.icon({
    iconUrl: 'assets/img/markerCurrentLoc.png',
    iconSize: [25, 41],
    iconAnchor: [22, 51],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});


//Place team poster marker
marker = new L.marker([poster[1], poster[2]], {icon: blueIcon}).bindPopup(poster[0]);
cluster.addLayer(marker);
map.addLayer(cluster);

//Place poster room marker
marker = new L.marker([posterRoom[1], posterRoom[2]], {icon: greenIcon}).bindPopup(posterRoom[0]);
cluster.addLayer(marker);
map.addLayer(cluster);

//Place lawlor offices marker
marker = new L.marker([lawlorOffice[1], lawlorOffice[2]], {icon: purpleIcon}).bindPopup(lawlorOffice[0]);
cluster.addLayer(marker);
map.addLayer(cluster);

//Place lawlor entrance marker
marker = new L.marker([entrance[1], entrance[2]], {icon: redIcon}).bindPopup(entrance[0]);
cluster.addLayer(marker);
map.addLayer(cluster);

//Place hall marker
marker = new L.marker([hall[1], hall[2]], {icon: wolfIcon}).bindPopup(hall[0]);
cluster.addLayer(marker);
map.addLayer(cluster);

var current_loc = new L.marker([-0.29,0.14395], {icon: currentLocIcon});
map.addLayer(current_loc);

//(just for testing) create a popup whereever the user clicks the map
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<center>Click on any marker to see a description of that place. <br>If you want to go to the selected destination, <br> press 'GO HERE' </center>")
        // .setContent(e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
