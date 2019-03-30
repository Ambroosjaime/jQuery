let expens = 18;
let insurance = 7;
let contri = 5;
totalCosts = expens + insurance + contri;


$(".calc").click(function () {
    let start = Number($("#salary").val());
    let gender = Number($("#gender").val());
    let child = Number($("#children").val());


    if (gender === 2) {
        totalCosts = totalCosts - 2;
    }

    if (child === 3) {
        totalCosts = totalCosts - 1;
    } else if (child === 4) {
        totalCosts = totalCosts - 2;
    }
    let result = start - ((start / 100) * totalCosts);
    $(".salary").html("€" + result)
    totalCost = expens + insurance + contri;
});
