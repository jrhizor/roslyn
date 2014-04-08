//create an array to hold all the markers
var offices = [
   			//CSE Offices
   			["<center><u>ECC</u> <br> <a href='#ECC'>GO HERE</a> </center>", 0.268, 0.134],
   			["<center><u>Computer Science and Engineering Department Office</u> <br> The Department of Computer Science and Engineering offers undergraduate and graduate degrees that provide a well-rounded education in computing. Our students gain experience with both hardware and software and learn how to blend technical expertise with creative problem-solving skills to push technological boundaries, create automated solutions to human problems and build better computing systems. <br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>", 0.252, 1.496],
   			["<center><u>IT Offices</u> <br> <a href='#ITOffice'>GO HERE</a> </center>", 0.486, 1.570],
            ["<center><u>Steve Clayton's Office</u> <br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>",  0.280,  1.230],
   			["<center><u>Dr. George Bebis's Office</u> <br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>", 0.120, 1.650],
   			["<center><u>Graduate Student Offices</u> <br> <a href='#GradOffices'>GO HERE</a> </center>", 0.909, -0.260],
   			["<center><u>Dr. Fred Harris's Office</u> <br> <a href='#HarrisNancyOffice'>GO HERE</a> </center>", -0.140, 1.650],
   			["<center><u>Nancy Latourette's Office</u> <br> <a href='#HarrisNancyOffice'>GO HERE</a> </center>", -0.140,  1.488],
            ["<center><u>Dr. Monica Nicolescu's Office</u> <br> <a href='#MonicaOffice'>GO HERE</a> </center>", -0.140,  1.350],
            ["<center><u>Dr. Mehmet Gunes's Office</u> <br> <a href='#GunesOffice'>GO HERE</a> </center>", -0.140,  1.210],
            ["<center><u>Dr. Murat Yuksel's Office</u> <br> <a href='#YukselOffice'>GO HERE</a> </center>", -0.140,  1.080],
            ["<center><u>Dr. Bobby Bryant's Office</u> <br> <a href='#BryantOffice'>GO HERE</a> </center>", -0.400, -1.451],
            ["<center><u>Dr. Eelke Folmer's Office </u> <br> <a href='#EelkeOffice'>GO HERE</a> </center>", -0.280, -1.448],
            ["<center><u>Dr. Yaakov Varol's Office</u> <br> <a href='#VarolOffice'>GO HERE</a> </center>", -0.140, -1.050],
            ["<center><u>Dr. Dave Feil-Seifer's Office</u> <br> <a href='#DaveOffice'>GO HERE</a> </center>", -0.140, -0.925],
            ["<center><u>Dr. Michael Leverington's Office</u> <br> <a href='#MichaelOffice'>GO HERE</a> </center>", -0.140,  0.315],
            ["<center><u>Dr. Mircea Nicolescu's Office</u> <br> <a href='#MirceaOffice'>GO HERE</a> </center>", -0.140,  0.440],
            ["<center><u>Dr. Sushil Louis's Office</u> <br> <a href='#SushilOfficeClass'>GO HERE</a> </center>", -0.140,  0.675],
            ["<center><u>Dr. Sergiu Dascalu's Office</u> <br> <a href='#DascaluOffice'>GO HERE</a> </center>", -0.140,  0.950],
            ["<center><u>Dr. Shamik Sengupta's Office</u> <br> <a href='#ShamikOffice'>GO HERE</a> </center>", -0.520, -1.454],
];

var labs = [
   			//Labs
   			["<center><u>ECSL Lab</u> <br> <a href='#ECSL'>GO HERE</a> </center>", -0.570, -1.697],
   			["<center><u>Computer Networking Lab</u> <br> <a href='#NetworkLab'>GO HERE</a> </center>", 0.000, -1.690],
   			["<center><u>Robotics Lab</u> <br> <a href='#RoboticsLab'>GO HERE</a> </center>", 0.679, 1.570],
   			["<center><u>Robotics Lab Workroom</u> <br> <a href='#RoboticsWorkroom'>GO HERE</a> </center>", 0.570, 1.230],
            ["<center><u>Cyber Infrastructure Lab</u> <br> <a href='#CyberLab'>GO HERE</a> </center>", 0.867, -0.457],
];

var classrooms = [
   			//Classrooms
   			["<center>Classroom Big <br> <a href='#SushilOfficeClass'>GO HERE</a> </center>", 0.178, 0.909],
   			["<center>Engineering Grid Node <br> <a href='#GridNode'>GO HERE</a> </center>", -0.820, -1.700],
            ["<center>Classroom <br> <a href='#Class2'>GO HERE</a> </center>",  0.250, -0.740],
            ["<center>Classroom <br> <a href='#Class1'>GO HERE</a> </center>",  0.570, -0.740],
];

var amenities = [
   			//Amenities
   			["<center>Men's Restroom <br> <a href='#MenRR2'>GO HERE</a> </center>", 0.135, -0.443],
   			["<center>Men's Restroom <br> <a href='#MenRR1'>GO HERE</a> </center>", 0.125, 1.230],
            ["<center>Women's Restroom <br> <a href='#WomenRR1'>GO HERE</a> </center>", -0.140,  0.550],
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

var greenIcon = L.icon({
    iconUrl: 'assets/img/marker-icon-green.png',
    iconRetinaUrl: 'assets/img/marker-icon-2x-green.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});

var blueIcon = L.icon({
    iconUrl: 'assets/img/marker-icon-blue.png',
    iconRetinaUrl: 'assets/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});

var redIcon = L.icon({
    iconUrl: 'assets/img/marker-icon-red.png',
    iconRetinaUrl: 'assets/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});

var yellowIcon = L.icon({
    iconUrl: 'assets/img/marker-icon-yellow.png',
    iconRetinaUrl: 'assets/img/marker-icon-2x-yellow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'assets/img/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12.5, 41]
});

//Place all office markers on the map
for (var i = 0; i < offices.length; i++) 
{
	marker = new L.marker([offices[i][1],offices[i][2]], {icon: blueIcon})
		.bindPopup(offices[i][0])
		.addTo(map);
}

//Place all lab markers on the map
for (var i = 0; i < labs.length; i++) 
{
   marker = new L.marker([labs[i][1],labs[i][2]], {icon: redIcon})
      .bindPopup(labs[i][0])
      .addTo(map);
}

//Place all classroom markers on the map
for (var i = 0; i < classrooms.length; i++) 
{
   marker = new L.marker([classrooms[i][1],classrooms[i][2]], {icon: greenIcon})
      .bindPopup(classrooms[i][0])
      .addTo(map);
}

//Place all amenities markers on the map
for (var i = 0; i < amenities.length; i++) 
{
   marker = new L.marker([amenities[i][1],amenities[i][2]], {icon: yellowIcon})
      .bindPopup(amenities[i][0])
      .addTo(map);
}

// (just for testing) create a popup whereever the user clicks the map
var popup = L.popup();
function onMapClick(e) {
popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(map);
}

map.on('click', onMapClick);
