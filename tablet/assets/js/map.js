//create an array to hold all the markers
var markers = [
   			//CSE Offices
   			["<center>ECC <br> <a href='#ECC'>GO HERE</a> </center>", 0.268, 0.134],
   			["<center>Computer Science and Engineering Department Office <br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>", 0.252, 1.496],
   			["<center>IT Offices <br> <a href='#ITOffice'>GO HERE</a> </center>", 0.486, 1.570],
            ["<center>Steve Clayton's Office <br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>",  0.280,  1.230],
   			["<center>Dr. George Bebis's Office <br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>", 0.120, 1.650],
   			["<center>Graduate Student Offices <br> <a href='#GradOffices'>GO HERE</a> </center>", 0.909, -0.260],
   			["<center>Dr. Fred Harris's Office <br> <a href='#HarrisNancyOffice'>GO HERE</a> </center>", -0.140, 1.650],
   			["<center>Nancy Latourette's Office <br> <a href='#HarrisNancyOffice'>GO HERE</a> </center>", -0.140,  1.488],
            ["<center>Dr. Monica Nicolescu's Office <br> <a href='#MonicaOffice'>GO HERE</a> </center>", -0.140,  1.350],
            ["<center>Dr. Mehmet Gunes's Office <br> <a href='#GunesOffice'>GO HERE</a> </center>", -0.140,  1.210],
            ["<center>Dr. Murat Yuksel's Office <br> <a href='#YukselOffice'>GO HERE</a> </center>", -0.140,  1.080],
            ["<center>Dr. Bobby Bryant's Office <br> <a href='#BryantOffice'>GO HERE</a> </center>", -0.400, -1.451],
            ["<center>Dr. Eelke Folmer's Office <br> <a href='#EelkeOffice'>GO HERE</a> </center>", -0.280, -1.448],
            ["<center>Dr. Yaakov Varol's Office <br> <a href='#VarolOffice'>GO HERE</a> </center>", -0.140, -1.050],
            ["<center>Dr. Dave Feil-Seifer's Office <br> <a href='#DaveOffice'>GO HERE</a> </center>", -0.140, -0.925],
            ["<center>Dr. Michael Leverington's Office <br> <a href='#MichaelOffice'>GO HERE</a> </center>", -0.140,  0.315],
            ["<center>Dr. Mircea Nicolescu's Office <br> <a href='#MirceaOffice'>GO HERE</a> </center>", -0.140,  0.440],
            ["<center>Dr. Sushil Louis's Office <br> <a href='#SushilOfficeClass'>GO HERE</a> </center>", -0.140,  0.675],
            ["<center>Dr. Sergiu Dascalu's Office <br> <a href='#DascaluOffice'>GO HERE</a> </center>", -0.140,  0.950],
            ["<center>Dr. Shamik Sengupta's Office <br> <a href='#ShamikOffice'>GO HERE</a> </center>", -0.520, -1.454],

   			//Labs
   			["<center>ECSL Lab <br> <a href='#ECSL'>GO HERE</a> </center>", -0.570, -1.697],
   			["<center>Computer Networking Lab <br> <a href='#NetworkLab'>GO HERE</a> </center>", 0.000, -1.690],
   			["<center>Robotics Lab  <br> <a href='#RoboticsLab'>GO HERE</a> </center>", 0.679, 1.570],
   			["<center>Robotics Lab Workroom <br> <a href='#RoboticsWorkroom'>GO HERE</a> </center>", 0.570, 1.230],
            ["<center>Cyber Infrastructure Lab <br> <a href='#CyberLab'>GO HERE</a> </center>", 0.867, -0.457],

   			//Classrooms
   			["<center>Classroom Big <br> <a href='#SushilOfficeClass'>GO HERE</a> </center>", 0.178, 0.909],
   			["<center>Engineering Grid Node <br> <a href='#GridNode'>GO HERE</a> </center>", -0.820, -1.700],
            ["<center>Classroom <br> <a href='#Class2'>GO HERE</a> </center>",  0.250, -0.740],
            ["<center>Classroom <br> <a href='#Class1'>GO HERE</a> </center>",  0.570, -0.740],

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

