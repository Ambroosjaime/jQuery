/*$(document).ready(function(){
    $("#left").click(function() {
		$("#rect").animate({
		'marginLeft' : "-=30px" //moves left
		});
    });
    $("#right").click(function() {
		$("#rect").animate({
		'marginLeft' : "+=30px" //moves left
        });
        
	});
});*/

/*https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery*/

/*https://www.sanwebe.com/2011/12/jquery-move-div-leftrightupdown*/ 

/*$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        break;

        case 38: // up
        break;

        case 39: // right
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});*/

/*e is een parameter, gaat kijken welke nummer van key is, 39 dan weet die dat het de rechter errow is*/
$(document).keydown(function(e){
  /*switch (e.which) is een if statement, check de case: 37*/
  switch (e.which){
  case 37: //left arrow key
  $(".square").css({
  left: "-=10"
  });
  break;/*belangrijk break geeft aan dat je uit uw case gaat en aan de volgende kunt*/
  case 38: //up arrow key
  $(".square").css({
  top: "-=10"
  });
  break;
  case 39: //right arrow key
  $(".square").css({
  left: "+=10"
  });
  break;
  case 40: //bottom arrow key
  $(".square").css({
  top: "+=10"
  });
  break;
  }
  });