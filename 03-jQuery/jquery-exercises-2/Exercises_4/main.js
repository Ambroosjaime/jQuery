// Write your solution here
/* Exercise 4 When you click on a color button, 
you change the color of the text of the div.*/

/*https://www.w3schools.com/jquery/css_css.asp*/

/*https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_css_name_value*/

$(document).ready(function(){
    $("#green").click(function(){
      $("p").css("color", "green");
    });
  });

$(document).ready(function(){
    $("#red").click(function(){
      $("p").css("color", "red");
    });
  });


  $(document).ready(function(){
    $("#blue").click(function(){
      $("p").css("color", "blue");
    });
  });

