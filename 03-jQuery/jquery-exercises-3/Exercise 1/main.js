$(document).ready(function () {
    /*variable, begint te tellen vanaf 0*/
    let count = 0;
    /*roept functie button aan*/
    $("button").click(function () {
        /*+ functie bij het optellen*/
        count++;
        $("input").val(count);
    })
});

/*Exercise 1 Build an html page with a button and a text 
field showing the number of clicks on the button.*/

