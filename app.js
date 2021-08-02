var btnCheck = document.querySelector("#btn-check");
var billAmount = document.querySelector("#billamount");
var cashPaid = document.querySelector("#cashpaid");
var noteTobeGiven = document.querySelector("#notes");

var log = console.log;

var currency = [2000, 500, 100, 50, 20, 10, 1];



function clickHandler(){

    if(billAmount.value >=  0){

        if(cashPaid.value >= billAmount.value){

            var amountToBeReturn = cashPaid.value - billAmount.value;
           // calculate(amountToBeReturn); 
            for( var i = 0; i<currency.length; i++ ){

                var numberOfNote = Math.trunc(amountToBeReturn / currency[i]);
                var amountToBeReturn = amountToBeReturn % currency[i];

                  var noteNumber = numberOfNote;

                  noteTobeGiven[i].innerText = noteNumber;
                

            }
            
        }
       // else{

       // }
        
    }
    //else{

    //}
       
 
};



btnCheck.addEventListener("click", clickHandler)