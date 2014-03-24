$(document).ready(function(){

  // initialize
  $("#end_tour_button").hide();

  // functions to handle styling
  var hide_welcome = function() { 
    $("#welcome_button").hide(); 
    $("#end_tour_button").show(); 
  };
  var show_welcome = function() { 
    $("#end_tour_button").hide(); 
    $("#welcome_button").show(); 
  };
  var enter_map_pane = function() {
    $("#welcome_pane").fadeTo(400,0);
    $("#begin_tour_button").hide();
    $("#interactive_mode_pane").hide();
    $("#map_pane").fadeTo(400,1);

    hide_welcome();

    $("div").removeClass("current");
    $("#map_button").addClass("current");
    $("body").css("background", "url('assets/img/map2.png')");


  };

  var enter_interactive_pane = function() {
    $("#welcome_pane").fadeTo(200,0);
    $("#map_pane").hide();
    $("#interactive_mode_pane").fadeTo(200,1);

    $("div").removeClass("current");
    $("#interactive_mode_button").addClass("current");

    $("body").css("background", "url('assets/img/camera.png')");
  
    hide_welcome();

  }

  var end_tour = function() {
    $("#welcome_pane").fadeTo(200,1);
    $("#begin_tour_button").show();
    $("#map_pane").hide();
    $("#interactive_mode_pane").hide();

    show_welcome();

    $("div").removeClass("current");
    $("#welcome_button").addClass("current");

    $("body").css("background", "url(assets/img/binding_light.png)");
  };

  // handle buttons 
  $("#begin_tour_button").click(enter_map_pane);
  $("#map_button").click(enter_map_pane);
  $("#interactive_mode_button").click(enter_interactive_pane);

  $("#end_tour_button").click(end_tour);

});

var ros = new ROSLIB.Ros();

// If there is an error on the backend, an 'error' emit will be emitted.
ros.on('error', function(error) {
  console.log(error);
});

// Find out exactly when we made a connection.
ros.on('connection', function() {
  console.log('Connection made!');
});

// Create a connection to the rosbridge WebSocket server.
ros.connect('ws://172.27.48.32:9090');
// ros.connect('ws://localhost:9090');


// LISTENER
var listener = new ROSLIB.Topic({
  ros : ros,
  name : '/amcl_pose',
  messageType : 'geometry_msgs/PoseWithCovarianceStamped'
});



// Then we add a callback to be called every time a message is published on this topic.
listener.subscribe(function(message) {
  // for (var key in message.pose) {
  // // do something with key
  //   console.log(key + ' ' + message.pose[key]);
  // } 

  console.log(message.pose.pose.position);
});
