$(document).ready(function(){
    let a = Math.floor(Math.random() * 100);
    /*maak je een variable waar je de input van uw getal op null zet*/
    let guess = 0;
    /*veranderd u nummer in de title (exercies 3.3)*/
    $("title").text(a);
    /*#one geef je een click functie*/ 
    $("#one").click(function(){
        /**/ 
        guess = $("#two").val();
        if (guess > a){
            alert("to high");
        }
        if (guess < a){
            alert("to low");
        }
        if(guess == a){
            alert("right");
        }
    });
});