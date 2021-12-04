var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");


function clickHandler() {
    console.log("clicked!");
    console.log("input", txtInput.value);
};

var txtInput = document.querySelector("#txt-input");
console.log(txtInput);


btnTranslate.addEventListener("click",clickHandler)

 
// outputDiv.innerText="Gautam Adatra";
function clickHandler(){
    outputDiv.innerText = "The meaning is: "+ txtInput.value;

}
