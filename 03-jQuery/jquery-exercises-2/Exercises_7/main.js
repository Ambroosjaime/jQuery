// Exercise 7 Summary of series 1 and 2. The instructions can be found in the HTML file.



$(document).ready(function () {
    /* On click: Enlarge the font (120%) */
    /*https://www.w3schools.com/jquery/jquery_ref_selectors.asp*/
    /*("#content") is de div waar alles text in zit("html") selecteerd je het hele bestand*/
    $("li:first-child").on("click", function () {
        $("html").css("font-size", "120%");
    });

    /* On click: Decrease the font size (80%) */
    $("li:nth-child(2)").on("click", function () {
        $("html").css("font-size", "80%");
    });
    /* On click: Bold or normalize the green words */
    $("li:nth-child(3)").on("click", function () {
        $(".green").css({ "font-style": "italic", "font-weight": "bold", "text-decoration": "underline" });
    });

    /* On click: Bold or normalize the green words */
    $("li:nth-child(4)").on("click", function () {
        $("html").css("color", "red");
    });

    /* On click: Replace the logo with another image */
    $("li:nth-child(5)").hover(function () {
        // over
        $("img").attr("src", "images/koala.jpg");

    }, function () {
        // out
        $("img").atrr("src", "images/jquery-logo.png");
    });

    /* On hover: Display the URL of links in a tooltip when hovering over links */
    /*event is een parrameter*/
    
    $("a").hover(function (event) {
        // over
        $(this)
            .css("cursor", "pointer")
            /*(event) terug oproepen*/
            .attr("title", event.target.href);
    });


    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */

    $("#instructions li:last-child").click(function () {
        /*de eerste h2 */
        $("h2:first").prepend("Chapter 1: ");
        $("h2:nth-of-type(2)").prepend("Chapter 2");

    });
});   