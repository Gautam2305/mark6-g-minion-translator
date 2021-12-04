var btnTranslate = document.querySelector("#btn-translate");
btnTranslate.addEventListener("click",function
    clickEventHandler(){
        console.log("clicked!")
    }
)
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);
function clickHandler(){
    console.log("clicked!");
    console.log("input", txtInput.value);
};
