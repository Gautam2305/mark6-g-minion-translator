var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var txtInput = document.querySelector("#txt-input");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" +"text=" + text
}

function clickHandler() {
    var input= txtInput.value
    fetch(getTranslationURL(input))
    .then(response =>response.json())
    .then(json=> {
        var output =json.contents.translated;
    outputDiv.innerText = output})
};




 
// outputDiv.innerText="Gautam Adatra";

btnTranslate.addEventListener("click",clickHandler)

