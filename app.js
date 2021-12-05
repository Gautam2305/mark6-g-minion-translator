var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var txtInput = document.querySelector("#txt-input");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
    return serverURL + "?" +"text=" + text
}
function errorHandler(error){
    console.log("error occured", error)
alert("Something wrong with the server, try again after sometime")
}



function clickHandler() {
    var inputText= txtInput.value;
    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json=> {
        var output =json.contents.translated;
    outputDiv.innerText = output})
    .catch(errorHandler)
};




 
// outputDiv.innerText="Gautam Adatra";

btnTranslate.addEventListener("click",clickHandler)

