/*
  TODO:
  [ ] add all locations  
  [ ] add all destinations for locations
  [ ] add descriptions for locations
  [ ] make groupings
  [ ] make multiple colored icons for markers
  [ ] send destination to ROS
  [ ] get current location from ROS and display it
  [ ] get video feed and display it
        http://www.html5rocks.com/en/tutorials/getusermedia/intro/
  [ ] display points of interest in interactive mode
  [ ] send terminate tour with end tour in ROS
  [ ] package with Adobe Cordova
  [ ] test on actual tour
  [ ] add appropriate distance from human
*/

var marker;

var convertTFtoLeaflet = function(x,y) {
  var x_prime = 0.0127815*x+0.695113;
  var y_prime = 0.0936971*y+1.39433;
  return [x_prime, y_prime];
};

// DO THIS
// var convertLeaflettoTF = function(x_prime,y_prime) {
//   var x_prime = 0.0127815*x+0.695113;
//   var y_prime = 0.0936971*y+1.39433;
//   return [x_prime, y_prime];
// };

var destinations = 
{
  "ECC": [0.00275, 0.12634],
  "CSEClaytonOffice": [0.28839, 1.35132],
  "ITOffice": [0.49301, 1.35132],
  "RoboticsLab": [0.71272, 1.35132],
  "RoboticsWorkroom": [0.75254, 1.230],
  "MenRR1": [0.00549, 1.230],
  "WomenRR1": [0.00824, 0.550],
  "HarrisNancyOffice": [0.00824, 1.44196],
  "MonicaOffice": [0.00824, 1.350],
  "GunesOffice": [0.00824, 1.210],
  "YukselOffice": [0.00824, 1.080],
  "DascaluOffice": [0.00824, 0.950],
  "SushilOfficeClass": [0.00824, 0.675],
  "MirceaOffice": [0.00824, 0.440],
  "MichaelOffice": [0.00824, 0.315],
  "CyberLab": [0.75254, -0.457],
  "GradOffices": [0.75254, -0.26],
  "Class1": [0.56853, -0.56442],
  "Class2": [0.21423, -0.56442],
  "MenRR2": [0.00824, -0.443],
  "DaveOffice": [0.00824, -0.925],
  "VarolOffice": [0.00824,-1.050],
  "NetworkLab": [0.08377, -1.58066],
  "EelkeOffice": [-0.280, -1.58752],
  "BryantOffice": [-0.400, -1.5889],
  "ShamikOffice": [-0.520, -1.59439],
  "GridNode": [-0.820, -1.59851],
  "ECSL": [-0.570,-1.59439]

}

$(document).ready(function(){



var ros = new ROSLIB.Ros({url:'ws://10.8.4.1:9090'});

// If there is an error on the backend, an 'error' emit will be emitted.
ros.on('error', function(error) {
  console.log(error);
});

// Find out exactly when we made a connection.
ros.on('connection', function() {
  console.log('Connection made!');
});

// LISTENER
var listener = new ROSLIB.Topic({
  ros : ros,
  name : '/amcl_pose',
  messageType : 'geometry_msgs/PoseWithCovarianceStamped'
});

var tf_listener = new ROSLIB.TFClient({
  ros : ros,
  fixedFrame: 'map'
});



// Then we add a callback to be called every time a message is published on this topic.
listener.subscribe(function(message) {
  // for (var key in message.pose) {
  // // do something with key
  //   console.log(key + ' ' + message.pose[key]);
  // } 

  var x = message.pose.pose.position.x;
  var y = message.pose.pose.position.y;
  // console.log(message);
  // $("#map_robot_marker").css({'top': Math.floor(y*100+300).toString()+'px',
  //                             'left': Math.floor(x*100+300).toString()+'px'
  //                           });
  // $("#map_robot_marker").set('left', floor(message.pose.position.x*1000+300).toString()+'px');


});


tf_listener.subscribe('base_link', function(tf) {
  // console.log(tf_listener.processFeedback(tf));

  console.log(tf.translation.x, tf.translation.y);

  // map.removeLayer(marker);
  // marker = new L.marker(convertTFtoLeaflet(tf.translation.x, tf.translation.y), {icon: redIcon})
  //     .addTo(map);

});






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



  var submitGoal = new ROSLIB.Topic({
    ros : ros,
    name : '/move_base_simple/goal',
    messageType : 'geometry_msgs/PoseStamped'
  });

  $(window).bind( 'hashchange', function(e) { 
    if(window.location.hash && (window.location.hash=="#ECC" || window.location.hash=="#RoboticsWorkroom"))
    {
      // TODO CONVERT THIS-21.9127
      // var converted = convertLeaflettoTF(destinations[window.location.hash.substring(1)]);
      
      // RoboticsWorkroom
      var robotics_lab_x = 0.154026;      
      var robotics_lab_y = 0.278556;

      // ECC
      var ecc_x = -34.403;      
      var ecc_y = -21.9127;

      var x;
      var y;

      if(window.location.hash=="#ECC")
      {
        x = ecc_x;
        y = ecc_y;
      }
      else if(window.location.hash=="#RoboticsWorkroom")
      {
        x = robotics_lab_x;
        y = robotics_lab_y;
      }

      var newGoal = new ROSLIB.Message({
        header : {
          seq : 1,
          stamp : {
            secs : 0,
            nsecs : 0
          },
          frame_id : 'map'
        },
        pose : {
          position : {
            x : x,
            y : y,
            z : 0
          },
          orientation : {
            x : 0,
            y : 0,
            z : 0,
            w : 1
          }
        }
      });
      submitGoal.publish(newGoal);



      alert('go to ' + window.location.hash + ' ' + destinations[window.location.hash.substring(1)])
      window.location.hash = '#';
    }
  });












});




