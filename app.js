var btnCheck = document.querySelector("#btn-check");
var billAmount = document.querySelector("#billamount");
var cashPaid = document.querySelector("#cashpaid");
const noteToBeGiven = document.querySelectorAll(".notes");
var message = document.querySelector("#message");



const currency = [2000, 500, 100, 50, 20, 10, 1];

function errorMessage(msg) {

    message.style.display = "block";
    message.innerText = msg;

}

function calculate(amountToBeReturn) {



    for (var i = 0; i < currency.length; i++) {

        var numberOfNote = Math.trunc(amountToBeReturn / currency[i]);
        var amountToBeReturn = amountToBeReturn % currency[i];



        noteToBeGiven[i].innerText = numberOfNote;





    }
}


function clickHandler() {
    if (Number(cashPaid.value) >= 0 && Number(billAmount.value) >= 0) {
        if (billAmount.value > 0) {

            if (Number(cashPaid.value) >= Number(billAmount.value)) {

                var amountToBeReturn = Number(cashPaid.value) - Number(billAmount.value);
                calculate(amountToBeReturn);


            } else {
                errorMessage("Please provid the equal amount");
            }

        } else {
            errorMessage("Invalid input");
        }
    } else {
                 message.innerText = "Please provide the positive value";
    }




}

btnCheck.addEventListener('click', clickHandler)