/*https://www.w3schools.com/graphics/svg_rect.asp .height("=+10"); vergroot telkens je vierkant met 10px*/

$(document).ready(function () {

    $("#btn1").click(function () {
        $("#rect").height("+=10");
        if ($("#rect").height() > 100) {
            $("#rect").height("10px");
        }
    })

    $("#btn2").on("click", function () {
        $("#rect").css("background-color", "green");
    })

    $("#btn3").on("click", function () {
        $("#rect").css("background-color", "white");

    })
    $("#btn4").on("click", function () {
        $("#rect").hide(200);
    })

    $("#btn5").on("click", function () {
        $("#rect").show(200);
    })


});

