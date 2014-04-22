var cluster = L.markerClusterGroup({showCoverageOnHover: false, maxClusterRadius: 47});

//create an array to hold all the markers
var offices = [
        //CSE Offices
        ["<center><u>ECC</u> <br> The Engineering Computing Center is for the use of students that are pursuing a major or minor in the College of Engineering. " + 
        "It is also available to anyone that is currently enrolled in an engineering or computer science class. " +
        "<br> <a href='#ECC'>GO HERE</a> </center>", 0.268, 0.134],
        
        ["<center><u>Computer Science and Engineering Department Office</u> <br>" +  
        "The Department of Computer Science and Engineering offers undergraduate and graduate degrees that provide a well-rounded education in computing. " +
        "Our students gain experience with both hardware and software and learn how to blend technical expertise with creative problem-solving " +
        "skills to push technological boundaries, create automated solutions to human problems and build better computing systems. " +
        "<br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>", 0.252, 1.496],

        ["<center><u>IT Offices</u> <br> <a href='#ITOffice'>GO HERE</a> </center>", 0.486, 1.570],
            
        ["<center><u>Steve Clayton's Office</u> <br> IT Technician <br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>",  0.280,  1.230],
        
        ["<center><u>Dr. George Bebis's Office</u> <br> Dr. Bebis is the chair of the CSE department as well as a professor. " +
        "His research interests include: computer vision, image processing, machine learning, and pattern recognition. " +
        "His research has been funded by the NSF and NASA, among others. " +
        "<br> <a href='#CSEClaytonOffice'>GO HERE</a> </center>", 0.120, 1.650],
        
        ["<center><u>Graduate Student Offices</u> <br> Graduate students have their offices in this area. " +
        "Graduate students assist professors with the research they are working on. They may also act as teaching assistants (TAs) for classes. " +
        "<br> <a href='#GradOffices'>GO HERE</a> </center>", 0.909, -0.260],
        
        ["<center><u>Dr. Fred Harris's Office</u> <br> Dr. Harris is the professor in charge of the High Performance Computation and Visualization (HPCVIS) Lab. " +
        "His research interests include: computer graphics, parallel computing, cortical simulation, and virtual reality. " +
        "<br> <a href='#HarrisNancyOffice'>GO HERE</a> </center>", -0.140, 1.650],
        
        ["<center><u>Nancy LaTourette's Office</u> <br> Prof. LaTourette is a lecturer for the CSE department. Her research interests include: " +
        "discrete mathematics, theory of computation, and systems administration. " +
        "<br> <a href='#HarrisNancyOffice'>GO HERE</a> </center>", -0.140,  1.488],
            
        ["<center><u>Dr. Monica Nicolescu's Office</u> <br> Dr. Nicolescu is one of the professors in charge of the Robotics Lab. " +
        "Her research interests include: robotics, artificial intelligence, machine learning, human robot interaction, and multi-robot systems. " +
        "<br> <a href='#MonicaOffice'>GO HERE</a> </center>", -0.140,  1.350],
            
        ["<center><u>Dr. Mehmet Gunes's Office</u> <br> Dr. Gunes is a professor that works in the Computer Network Lab. " +
        "His research interests include: communications, complex networks, internet measurements, and network security. Much of his gets funded by the NSF. " +
        "<br> <a href='#GunesOffice'>GO HERE</a> </center>", -0.140,  1.210],
            
        ["<center><u>Dr. Murat Yuksel's Office</u> <br> Dr. Yuksel is an associate professor for the CSE department. " +
        "His research interests include: networked and wireless systems, optical wireless, big-data networking, and cloud-assisted routing. " +
        "<br> <a href='#YukselOffice'>GO HERE</a> </center>", -0.140,  1.080],

        ["<center><u>Dr. Sergiu Dascalu's Office</u> <br> Dr. Dascalu is the Director of the Software Engineering Laboratory (SOELA) and the " +
        "Co-Director of the Cyber Infrastructure Lab (CIL). His main research interests include Software Engineering and Human-Computer Interaction. " +
        "<br> <a href='#DascaluOffice'>GO HERE</a> </center>", -0.140,  0.950],
            
        ["<center><u>Dr. Bobby Bryant's Office</u> <br> Dr. Bryant is an assistant professor for the CSE department. His research interests include: " +
        "machine learning, agent modeling, biologically inspired methods, and simulated biological intelligence. " +
        "<br> <a href='#BryantOffice'>GO HERE</a> </center>", -0.400, -1.451],
            
        ["<center><u>Dr. Eelke Folmer's Office </u> <br> Dr. Folmer is an associate professor for the CSE department. His research focuses on " +
        "designing, building, and evaluating technology to address high impact social problems pertaining to assistive technology, “real world” " +
        "accessibility, health and well-being. " +
        "<br> <a href='#EelkeOffice'>GO HERE</a> </center>", -0.280, -1.448],
            
        ["<center><u>Dr. Yaakov Varol's Office</u> <br> Dr. Varol is a professor for the CSE department. His research interests include: " +
        "parallel computing, algorithm design and analysis, data fusion, and discrete simulation and modeling. " +
        "<br> <a href='#VarolOffice'>GO HERE</a> </center>", -0.140, -1.050],
            
        ["<center><u>Dr. David Feil-Seifer's Office</u> <br> Dr. Feil-Seifer is an assistant professor that works in the Robotics Lab. " +
        "His research interests includes: socially assistive robotics, human-robot interaction, machine learning, and ethics in computing. " +
        "<br> <a href='#DaveOffice'>GO HERE</a> </center>", -0.140, -0.925],
            
        ["<center><u>Dr. Michael Leverington's Office</u> <br> Dr. Leverington is a lecturer for the CSE department. His research interests " +
        "include: curriculum and course development, teaching effectiveness, and problem-solving (human and computer). " +
        "<br> <a href='#MichaelOffice'>GO HERE</a> </center>", -0.140,  0.315],
            
        ["<center><u>Dr. Mircea Nicolescu's Office</u> <br> Dr. Nicolescu is an associate professor for the CSE department. His research interests " +
        "include: computer vision, three-dimensional reconstruction, and image and video segmentation. " +
        "<br> <a href='#MirceaOffice'>GO HERE</a> </center>", -0.140,  0.440],
            
        ["<center><u>Dr. Sushil Louis's Office</u> <br> Dr. Louis is a professor who works on evolutionary algorithms. His research interests include: " +
        "genetic algorithms, serious games, game artificial intelligence, and engineering design and optimization. " +
        "<br> <a href='#SushilOfficeClass'>GO HERE</a> </center>", -0.140,  0.675],
            
        ["<center><u>Dr. Shamik Sengupta's Office</u> <br> Dr. Sengupta is an assistant professor for the CSE department . His research interests include: " +
        "wireless network and mobile computing, network security, covert communications, and dynamic spectrum access. " +
        "<br> <a href='#ShamikOffice'>GO HERE</a> </center>", -0.520, -1.454],
];

var labs = [
        //Labs
        ["<center><u>Evolutionary Computing Systems Lab</u> <br> ECSL investigates systems that combine genetic algorithm search with case-based " +
        "reasoning principles. Such Case Injected Genetic Algorithms (CIGAR) lead to a new paradigm for machine learning " +
        "with special emphasis on design, optimization, and human modeling. " +
        "<br> <a href='#ECSL'>GO HERE</a> </center>", -0.570, -1.697],
        
        ["<center><u>Computer Networking Lab</u> <br> The research efforts in the CNL are on various topics in computer communication networks " +
        "encompassing both experimental and theoretical aspects. Research performed in the CNL has been funded by both the government and by the industry. " +
        "<br> <a href='#NetworkLab'>GO HERE</a> </center>", 0.000, -1.690],
        
        ["<center><u>Robotics Lab</u> <br> Dr. David Feil-Seifer and Dr. Monica Nicolescu run the Robotics Lab. " +
        "Some of the research interests of these professors include: socially assistive robotics, artificial intelligence, " +
        "human-robot interaction, and behavior-based control. <br> <a href='#RoboticsLab'>GO HERE</a> </center>", 0.679, 1.570],
        
        ["<center><u>Robotics Lab Workroom</u> <br> This room is currently used by undergraduate researchers who are working on senior projects related to robotics " +
        "<br> <a href='#RoboticsWorkroom'>GO HERE</a> </center>", 0.570, 1.230],
            
        ["<center><u>Cyber Infrastructure Lab</u> <br> The focused of the CIL is on developing new computing environments and " +
        "related methodologies that enable and accelerate modern scientific research and knowledge discovery. " +
        "<br> <a href='#CyberLab'>GO HERE</a> </center>", 0.867, -0.457],
];

var classrooms = [
        //Classrooms        
        ["<center>Classroom <br> <a href='#SushilOfficeClass'>GO HERE</a> </center>", 0.178, 0.909],

        ["<center>Engineering Grid Node <br> <a href='#GridNode'>GO HERE</a> </center>", -0.820, -1.700],
            
        ["<center>Classroom <br> <a href='#Class2'>GO HERE</a> </center>",  0.250, -0.740],
            
        ["<center>Classroom <br> <a href='#Class1'>GO HERE</a> </center>",  0.570, -0.740],
];

var mensRR = [
    ["<center>Men's Restroom <br> <a href='#MenRR2'>GO HERE</a> </center>", 0.100, -0.443],
    ["<center>Men's Restroom <br> <a href='#MenRR1'>GO HERE</a> </center>", 0.100, 1.230],
];    

var womensRR = [
    ["<center>Women's Restroom <br> <a href='#WomenRR1'>GO HERE</a> </center>", -0.140,  0.550],
    ["<center>Women's Restroom <br> <a href='#WomenRR2'>GO HERE</a> </center>", 0.100,  -1.480],
]

var helpMarker = [
    ["<center><u>Icon Key</u></center>", 1.000, -1.59]
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
var southWest2 = L.latLng(-500/360.0, -850/360.0),  
northEast2 = L.latLng(500/360.0, 900/360.0),        
boundsMap = L.latLngBounds(southWest2, northEast2);

map.setMaxBounds(boundsMap);

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

var maleIcon = L.icon({
    iconUrl: 'assets/img/male.png',
    iconSize: [20,40],
    iconAnchor: [10, 40],
    popupAnchor: [0, -40],
});

var femaleIcon = L.icon({
    iconUrl: 'assets/img/female.png',
    iconSize: [20,40],
    iconAnchor: [10, 40],
    popupAnchor: [0, -40],
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

//(just for testing) create a popup whereever the user clicks the map
var popup = L.popup();
function onMapClick(e) {
popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(map);
}

map.on('click', onMapClick);
