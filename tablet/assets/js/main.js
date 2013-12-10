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
    $("#welcome_pane").fadeTo(200,0);
    $("#interactive_mode_pane").fadeTo(200,0);
    $("#map_pane").fadeTo(200,1);

    hide_welcome();

    $("div").removeClass("current");
    $("#map_button").addClass("current");

    $("body").css("background", "url('assets/img/map.png')");
  };

  var end_tour = function() {
    $("#welcome_pane").fadeTo(200,1);
    $("#map_pane").fadeTo(200,0);
    $("#interactive_mode_pane").fadeTo(200,0);

    show_welcome();

    $("div").removeClass("current");
    $("#welcome_button").addClass("current");

    $("body").css("background", "#fff");
  };

  // handle buttons 
  $("#begin_tour_button").click(enter_map_pane);
  $("#map_button").click(enter_map_pane);

  $("#interactive_mode_button").click(function(){
    $("#welcome_pane").fadeTo(200,0);
    $("#map_pane").fadeTo(200,0);
    $("#interactive_mode_pane").fadeTo(200,1);

    $("div").removeClass("current");
    $("#interactive_mode_button").addClass("current");

    $("body").css("background", "url('assets/img/camera.png')");
  
    hide_welcome();
  });

  $("#end_tour_button").click(end_tour);

});
