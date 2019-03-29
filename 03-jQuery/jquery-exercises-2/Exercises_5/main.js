// Write your solution here
// Exercise 5 When the user focuses on a field, set its edge to "1px solid green". 
// When the field is no longer sharp, set the border to "1px solid red". 
// https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_focusout
    $("form").focusin(function(){
      $("#name").css("background-color", "green");
    });
    $("form").focusout(function(){
      $("#first_name").css("background-color", "red");
    });
    