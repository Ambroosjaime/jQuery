$(document).ready(function () {
    let count = 0;

    $("#plus").click(function () {

        $("input").val(count++);
        /*count++ optellen*/
    })
    /*roept id "#min" aan, geeft een "".click(function())"hieraan mee.*/
    $("#min").click(function () {

        $("input").val(--count);
        /*--count aftrek*/
    });
});


/*Exercise 2
Build an html page with a "+" button, a "-" button and a text field that shows the number that will be
raised or lowered according to the buttons you click.*/

