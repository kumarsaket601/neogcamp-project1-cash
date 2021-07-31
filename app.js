var btnCheck = document.querySelector("#btn-translated");
var inputFirst = document.querySelector("#input1");
var inputSecond = document.querySelector("#input2");
var outputDiv = document.querySelector("#output");
var log = console.log;

const error = "give aproprate value in paid amount";



function clickhandler() {


    var first = inputFirst.value;
    var second = inputSecond.value;


    if (second > first) {

        var sub = second - first;
        
        var divide = sub / 100;

        outputDiv.innerText  = divide;
       
        
    } 
    else {

        
    }


    




};

btnCheck.addEventListener("click", clickhandler)