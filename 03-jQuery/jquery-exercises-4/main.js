let count = 0;
let pick = "";
let options = ["rock", "paper", "scissors"];

$(".rock").click(function () {
    pick = "rock";

    console.log(pick);
});

$(".paper").click(function () {
    pick = "paper";

    console.log(pick)
});

$(".scissors").click(function () {
    pick = "scissors";

    console.log(pick);
});

$(".btn").click(function () {
    if (pick !== ""){
        let computer = options[Math.floor(Math.random()*options.length)];
       console.log(computer);
       if ( pick === "scissors"){
        switch(computer){
            case "scissors":
            alert("computer select: " + computer  + "you picked:" + pick +": Draw");
            break;

            case "paper":
            alert("computer select: " + computer  + "you picked:" + pick +":you win");
            break;

            case "rock":
            alert("computer select: " + computer  + "you picked:" + pick +": you lose");
            break;
            
        }
       }
       if ( pick === "paper"){
        switch(computer){
            case "scissors":
            alert("computer select: " + computer  + "you picked:" + pick +": you lose");
            break;

            case "paper":
            alert("computer select: " + computer  + "you picked:" + pick +": Draw");
            break;

            case "rock":
            alert("computer select: " + computer  + "you picked:" + pick +": you win");
            break;
            
        }
       }
       if ( pick === "rock"){
        switch(computer){
            case "scissors":
            alert("computer select: " + computer  + "you picked:" + pick +": you lose");
            break;

            case "paper":
            alert("computer select: " + computer  + "you picked:" + pick +": Win");
            break;

            case "rock":
            alert("computer select: " + computer  + "you picked:" + pick +": Draw");
            break;
        }
       }
    }     
});