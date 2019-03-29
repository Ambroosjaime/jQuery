// Write your solution here
// Exercise 6 When the mouse moves over a colored button, color the text. The text must turn black again when the mouse leaves the button.
// https://www.w3schools.com/jquery/event_mouseover.asp
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseover_mouseout

$(document).ready(function(){
    $("#green").mouseover(function(){
      $("p").css("background-color", "green");
    });
    $("p").mouseout(function(){
      $("p").css("background-color", "black");
    });
  });

$(document).ready(function(){
    $("#red").mouseover(function(){
      $("p").css("background-color", "red");
    });
    $("p").mouseout(function(){
      $("p").css("background-color", "black");
    });
  });

  $(document).ready(function(){
    $("#blue").mouseover(function(){
      $("p").css("background-color", "blue");
    });
    $("p").mouseout(function(){
      $("p").css("background-color", "black");
    });
  });