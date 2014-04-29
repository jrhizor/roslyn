var cluster = L.markerClusterGroup({showCoverageOnHover: false, maxClusterRadius: 47});

//create arrays to store the different types of points of interests
var offices = [
        //CSE Offices
        ["<center><b>Computer Science and Engineering Department Office</b> <br>" +  
        "The Department of Computer Science and Engineering offers undergraduate and graduate degrees that provide a well-rounded education in computing. " +
        "Our students gain experience with both hardware and software and learn how to blend technical expertise with creative problem-solving " +
        "skills to push technological boundaries, create automated solutions to human problems and build better computing systems. " +
        "<br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>", 0.252, 1.496],

        ["<center><b>IT Offices</b> <br> <a href='#ITOffice'>GO HERE</a> </center>", 0.486, 1.570],
            
        ["<center><b>Steve Clayton's Office</b> <br> IT Technician <br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>",  0.280,  1.230],
        
        ["<center><b>Dr. George Bebis's Office</b> <br> Dr. Bebis is the chair of the CSE department as well as a professor. " +
        "His research interests include: computer vision, image processing, machine learning, and pattern recognition. " +
        "His research has been funded by the NSF and NASA, among others. " +
        "<br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>", 0.120, 1.650],
        
        ["<center><b>Graduate Student Offices</b> <br> Graduate students have their offices in this area. " +
        "Graduate students assist professors with the research they are working on. They may also act as teaching assistants (TAs) for classes. " +
        "<br> <a href='#GradOffices'>GO HERE</a> </center>", 0.909, -0.260],
        
        ["<center><b>Dr. Fred Harris's Office</b> <br> Dr. Harris is the professor in charge of the High Performance Computation and Visualization (HPCVIS) Lab. " +
        "His research interests include: computer graphics, parallel computing, cortical simulation, and virtual reality. " +
        "<br> <a href='#HarrisNancyOffice'>GO HERE</a> </center>", -0.140, 1.650],
        
        ["<center><b>Nancy LaTourette's Office</b> <br> Prof. LaTourette is a lecturer for the CSE department. Her research interests include: " +
        "discrete mathematics, theory of computation, and systems administration. " +
        "<br> <a href='#HarrisNancyOffice'>GO HERE</a> </center>", -0.140,  1.488],
            
        ["<center><b>Dr. Monica Nicolescu's Office</b> <br> Dr. Nicolescu is one of the professors in charge of the Robotics Lab. " +
        "Her research interests include: robotics, artificial intelligence, machine learning, human robot interaction, and multi-robot systems. " +
        "<br> <a href='#MonicaOffice'>GO HERE</a> </center>", -0.140,  1.350],
            
        ["<center><b>Dr. Mehmet Gunes's Office</b> <br> Dr. Gunes is a professor that works in the Computer Network Lab. " +
        "His research interests include: communications, complex networks, internet measurements, and network security. Much of his gets funded by the NSF. " +
        "<br> <a href='#GunesOffice'>GO HERE</a> </center>", -0.140,  1.210],
            
        ["<center><b>Dr. Murat Yuksel's Office</b> <br> Dr. Yuksel is an associate professor for the CSE department. " +
        "His research interests include: networked and wireless systems, optical wireless, big-data networking, and cloud-assisted routing. " +
        "<br> <a href='#YukselOffice'>GO HERE</a> </center>", -0.140,  1.080],

        ["<center><b>Dr. Sergiu Dascalu's Office</b> <br> Dr. Dascalu is the Director of the Software Engineering Laboratory (SOELA) and the " +
        "Co-Director of the Cyber Infrastructure Lab (CIL). His main research interests include Software Engineering and Human-Computer Interaction. " +
        "<br> <a href='#DascaluOffice'>GO HERE</a> </center>", -0.140,  0.950],
            
        ["<center><b>Dr. Bobby Bryant's Office</b> <br> Dr. Bryant is an assistant professor for the CSE department. His research interests include: " +
        "machine learning, agent modeling, biologically inspired methods, and simulated biological intelligence. " +
        "<br> <a href='#BryantOffice'>GO HERE</a> </center>", -0.400, -1.451],
            
        ["<center><b>Dr. Eelke Folmer's Office </b> <br> Dr. Folmer is an associate professor for the CSE department. His research focuses on " +
        "designing, building, and evaluating technology to address high impact social problems pertaining to assistive technology, “real world” " +
        "accessibility, health and well-being. " +
        "<br> <a href='#EelkeOffice'>GO HERE</a> </center>", -0.280, -1.448],
            
        ["<center><b>Dr. Yaakov Varol's Office</b> <br> Dr. Varol is a professor for the CSE department. His research interests include: " +
        "parallel computing, algorithm design and analysis, data fusion, and discrete simulation and modeling. " +
        "<br> <a href='#VarolOffice'>GO HERE</a> </center>", -0.140, -1.050],
            
        ["<center><b>Dr. David Feil-Seifer's Office</b> <br> Dr. Feil-Seifer is an assistant professor that works in the Robotics Lab. " +
        "His research interests includes: socially assistive robotics, human-robot interaction, machine learning, and ethics in computing. " +
        "<br> <a href='#DaveOffice'>GO HERE</a> </center>", -0.140, -0.925],
            
        ["<center><b>Dr. Michael Leverington's Office</b> <br> Dr. Leverington is a lecturer for the CSE department. His research interests " +
        "include: curriculum and course development, teaching effectiveness, and problem-solving (human and computer). " +
        "<br> <a href='#MichaelOffice'>GO HERE</a> </center>", -0.140,  0.315],
            
        ["<center><b>Dr. Mircea Nicolescu's Office</b> <br> Dr. Nicolescu is an associate professor for the CSE department. His research interests " +
        "include: computer vision, three-dimensional reconstruction, and image and video segmentation. " +
        "<br> <a href='#MirceaOffice'>GO HERE</a> </center>", -0.140,  0.440],
            
        ["<center><b>Dr. Sushil Louis's Office</b> <br> Dr. Louis is a professor who works on evolutionary algorithms. His research interests include: " +
        "genetic algorithms, serious games, game artificial intelligence, and engineering design and optimization. " +
        "<br> <a href='#SushilOfficeClass'>GO HERE</a> </center>", -0.140,  0.675],
            
        ["<center><b>Dr. Shamik Sengupta's Office</b> <br> Dr. Sengupta is an assistant professor for the CSE department . His research interests include: " +
        "wireless network and mobile computing, network security, covert communications, and dynamic spectrum access. " +
        "<br> <a href='#ShamikOffice'>GO HERE</a> </center>", -0.520, -1.454]
];

var labs = [
        //Labs
        ["<center><b>Evolutionary Computing Systems Lab</b> <br> ECSL investigates systems that combine genetic algorithm search with case-based " +
        "reasoning principles. Such Case Injected Genetic Algorithms (CIGAR) lead to a new paradigm for machine learning " +
        "with special emphasis on design, optimization, and human modeling. " +
        "<br> <a href='#ECSL'>GO HERE</a> </center>", -0.570, -1.697],
        
        ["<center><b>Computer Networking Lab</b> <br> The research efforts in the CNL are on various topics in computer communication networks " +
        "encompassing both experimental and theoretical aspects. Research performed in the CNL has been funded by both the government and by the industry. " +
        "<br> <a href='#NetworkLab'>GO HERE</a> </center>", 0.000, -1.690],
        
        ["<center><b>Robotics Lab</b> <br> Dr. David Feil-Seifer and Dr. Monica Nicolescu run the Robotics Lab. " +
        "Some of the research interests of these professors include: socially assistive robotics, artificial intelligence, " +
        "human-robot interaction, and behavior-based control. <br> <a href='#RoboticsLab'>GO HERE</a> </center>", 0.679, 1.570],
        
        ["<center><b>Robotics Lab Workroom</b> <br> This room is currently used by undergraduate researchers who are working on senior projects related to robotics " +
        "<br> <a href='#RoboticsWorkroom'>GO HERE</a> </center>", 0.570, 1.230],
            
        ["<center><b>Cyber Infrastructure Lab</b> <br> The focused of the CIL is on developing new computing environments and " +
        "related methodologies that enable and accelerate modern scientific research and knowledge discovery. " +
        "<br> <a href='#CyberLab'>GO HERE</a> </center>", 0.867, -0.457],
];

var classrooms = [
        //Classrooms        
        ["<center><b>Classroom </b><br> <a href='#SushilOfficeClass'>GO HERE</a> </center>", 0.178, 0.909],
        ["<center><b>Engineering Grid Node </b><br> <a href='#GridNode'>GO HERE</a> </center>", -0.820, -1.700],
        ["<center><b>Classroom </b><br> <a href='#Class2'>GO HERE</a> </center>",  0.250, -0.740],
        ["<center><b>Classroom </b><br> <a href='#ClassFountain'>GO HERE</a> </center>",  0.570, -0.740],
];

var ecc = ["<center><b>ECC</b> <br> The Engineering Computing Center is for the use of students that are pursuing a major or minor in the College of Engineering. " + 
        "It is also available to anyone that is currently enrolled in an engineering or computer science class. " +
        "<br> <a href='#ECC'>GO HERE</a> </center>", 0.268, 0.134];

var acmLounge = ["<center><b>ACM Student Lounge</b> <br> Students may purchase snacks and refreshments from this lounge between classes." +
        "This is also a place where people can meetup to spend time between classes. " +
        "<br><a href='#ACM'>GO HERE</a> </center>", -0.140, 0.82397]

var mensRR = [
    	["<center><b>Men's Restroom</b><br> <a href='#MenRRbyECC'>GO HERE</a> </center>", 0.100, -0.443],
    	["<center><b>Men's Restroom</b><br> <a href='#MenRRbyCSEOffice'>GO HERE</a> </center>", 0.100, 1.230],
];    

var womensRR = [
    	["<center><b>Women's Restroom</b><br> <a href='#WomenRRbySushil'>GO HERE</a> </center>", -0.140,  0.550],
    	["<center><b>Women's Restroom</b><br> <a href='#WomenRRbyNetworking'>GO HERE</a> </center>", 0.100,  -1.480],
]

var helpMarker = [
    	["<center><b>Icon Key</b></center>", 1.000, -1.59]
]

var fountains = [
		["<center><b>Water Fountain</b> <br> <a href='#fountainOffice'>GO HERE</a> </center>", 0.17853, 1.332],		    //outside CSE office
		["<center><b>Water Fountain</b> <br> <a href='#ClassFountain'>GO HERE</a> </center>", 0.14832, -0.53833],	    //outside Classroom
		["<center><b>Water Fountain</b> <br> <a href='#fountainNetworking'>GO HERE</a> </center>", 0.03021, -1.6095]	//outside networking lab
]

var stairs = [
		["<center><b>Stairs</b> <br> <a href='#stairsElevatorECSL'>GO HERE</a> </center>", -0.99147, -1.604],	//near ECSL
		["<center><b>Stairs</b> <br> <a href='#stairsGradOffices'>GO HERE</a> </center>", 0.85416, -0.57404],	//near grad student lounges
		["<center><b>Stairs</b> <br> <a href='#stairsBackElevator'>GO HERE</a> </center>", 0.86926, 0.42984],	//near elevator
		["<center><b>Stairs</b> <br> <a href='#stairsECC'>GO HERE</a> </center>", -0.140, 0.20737],	    //near ECC
		["<center><b>Stairs</b> <br> <a href='#stairsHarris'>GO HERE</a> </center>", -0.015,1.59027]		//near Harris
]

var elevators = [
		["<center>Elevator <br> <a href='#stairsElevatorECSL'>GO HERE</a> </center>", 0.89398, 0.34607],  //back 
		["<center>Elevator <br> <a href='#elevatorBack'>GO HERE</a> </center>", -0.90359, -1.49826]  //by ecsl

]

// create the map
var map = L.map('map_pane', {
  zoom:8, 
  minZoom:8, 
  maxZoom:10, 
  zoomControl:false})
  .setView([0,0], 0);

// assign the bounds for the image
var southWest = L.latLng(-400/360.0, -640/360.0),
northEast = L.latLng(400/360.0, 640/360.0),
boundsImage = L.latLngBounds(southWest, northEast);

// set the background image for the map, 1920x1200
L.imageOverlay('assets/img/scaleMap.png', boundsImage).addTo(map);

//sets bounds for the map
var southWest2 = L.latLng(-600/360.0, -850/360.0),  
northEast2 = L.latLng(650/360.0, 900/360.0),        
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

var maleIcon = L.icon({
    iconUrl: 'assets/img/male.png',
    iconSize: [35,35],
    iconAnchor: [27, 35],
    popupAnchor: [0, -25]
});

var femaleIcon = L.icon({
    iconUrl: 'assets/img/female.png',
    iconSize: [35,35],
    iconAnchor: [27, 35],
    popupAnchor: [0, -25]
});

var stairIcon = L.icon({
    iconUrl: 'assets/img/stairs.png',
    iconSize: [30,30],
    iconAnchor: [25, 35],
    popupAnchor: [0, -15]
});

var fountainIcon = L.icon({
    iconUrl: 'assets/img/fountain.png',
    iconSize: [25,25],
    iconAnchor: [22, 35],
    popupAnchor: [0, -25]
});

var elevatorIcon = L.icon({
    iconUrl: 'assets/img/elevator.png',
    iconSize: [30,30],
    iconAnchor: [25, 35],
    popupAnchor: [0, -25]
});

var acmIcon = L.icon({
	iconUrl: 'assets/img/acm.png',
    iconSize: [40,40],
    iconAnchor: [30, 45],
    popupAnchor: [0, -35]
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

//Place all office markers on the map
for (var i = 0; i < offices.length; i++) 
{
	marker = new L.marker([offices[i][1],offices[i][2]], {icon: blueIcon})
		.bindPopup(offices[i][0]);
	
  cluster.addLayer(marker);
  map.addLayer(cluster);
}

//Place all lab markers on the map
for (var i = 0; i < labs.length; i++) 
{
  marker = new L.marker([labs[i][1],labs[i][2]], {icon: redIcon})
      .bindPopup(labs[i][0]);

  cluster.addLayer(marker);
  map.addLayer(cluster);
}

//Place all classroom markers on the map
for (var i = 0; i < classrooms.length; i++) 
{
  marker = new L.marker([classrooms[i][1],classrooms[i][2]], {icon: greenIcon})
      .bindPopup(classrooms[i][0]);

  cluster.addLayer(marker);
  map.addLayer(cluster);
}

//Place men's restrooms on the map
for (var i = 0; i < mensRR.length; i++) 
{
  marker = new L.marker([mensRR[i][1],mensRR[i][2]], {icon: maleIcon})
      .bindPopup(mensRR[i][0]);

  cluster.addLayer(marker);
  map.addLayer(cluster);
}

//Place women's restrooms on the map
for (var i = 0; i < womensRR.length; i++) 
{
  marker = new L.marker([womensRR[i][1],womensRR[i][2]], {icon: femaleIcon})
      .bindPopup(womensRR[i][0]);

  cluster.addLayer(marker);
  map.addLayer(cluster);
}

//Place water fountain markers on map
for (var i = 0; i < fountains.length; i++) 
{
  marker = new L.marker([fountains[i][1],fountains[i][2]], {icon: fountainIcon})
      .bindPopup(fountains[i][0]);

  cluster.addLayer(marker);
  map.addLayer(cluster);
}

//Place stair markers on the map
for (var i = 0; i < stairs.length; i++) 
{
  marker = new L.marker([stairs[i][1],stairs[i][2]], {icon: stairIcon})
      .bindPopup(stairs[i][0]);

  cluster.addLayer(marker);
  map.addLayer(cluster);
}

//Place elevator markers on the map
for (var i = 0; i < elevators.length; i++) 
{
  marker = new L.marker([elevators[i][1],elevators[i][2]], {icon: elevatorIcon})
      .bindPopup(elevators[i][0]);

  cluster.addLayer(marker);
  map.addLayer(cluster);
}

//Place ECC marker
marker = new L.marker([ecc[1], ecc[2]], {icon: purpleIcon}).bindPopup(ecc[0]);
cluster.addLayer(marker);
map.addLayer(cluster);

//Place ACM lounge marker
marker = new L.marker([acmLounge[1], acmLounge[2]], {icon: acmIcon}).bindPopup(acmLounge[0]);
cluster.addLayer(marker);
map.addLayer(cluster);

//(just for testing) create a popup whereever the user clicks the map
var popup = L.popup();
function onMapClick(e) {
popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(map);
}

//map.on('click', onMapClick);

var current_loc = new L.marker([0,0], {icon: currentLocIcon});
map.addLayer(current_loc);
