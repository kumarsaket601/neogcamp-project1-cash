var btnCheck = document.querySelector("#btn-check");
var billAmount = document.querySelector("#billamount");
var cashPaid = document.querySelector("#cashpaid");
var noteToBeGiven = document.querySelector("#no-of-note");

var log = console.log;

var currency = [2000, 500, 100, 50, 20, 10, 1];

function calculate(amountToBeReturn) {



    for (var i = 0; i < currency.length; i++) {

        var numberOfNote = Math.trunc(amountToBeReturn / currency[i]);
        var amountToBeReturn = amountToBeReturn % currency[i];

        noteToBeGiven[i].innerText = numberOfNote;

        



    }
}

function clickHandler() {

    if (billAmount.value >= 0) {

        if (cashPaid.value >= billAmount.value) {

            var amountToBeReturn = cashPaid.value - billAmount.value;
            calculate(amountToBeReturn);


        }
         else{

            }

    }
     else{

      }


};



btnCheck.addEventListener('click', clickHandler)