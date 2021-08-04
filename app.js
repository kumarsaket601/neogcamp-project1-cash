var btnCheck = document.querySelector("#btn-check");
var billAmount = document.querySelector("#billamount");
var cashPaid = document.querySelector("#cashpaid");
const noteToBeGiven = document.querySelectorAll(".notes");
var message = document.querySelector(".message");



const currency = [2000, 500, 100, 50, 20, 10, 1];

function erroMessage(msg){



}

function calculate(amountToBeReturn) {



    for (var i = 0; i < currency.length; i++) {

        var  numberOfNote = Math.trunc(amountToBeReturn / currency[i]);
        var amountToBeReturn  =  amountToBeReturn % currency[i];


       
         noteToBeGiven[i].innerText = numberOfNote;

        
       


    }
}


function clickHandler() {

    if (billAmount.value > 0) {

        if (cashPaid.value >= billAmount.value) {

            var amountToBeReturn = cashPaid.value - billAmount.value;
                         calculate(amountToBeReturn);


        }
         else{
                errorMessage();
            }

    }
     else{
            erroMessage();
      }


};

btnCheck.addEventListener('click', clickHandler)