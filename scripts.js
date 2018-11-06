// chowane menu navigacji
var logo = document.querySelector("#logo");
    navbar = document.querySelector("#navbar");
logo.addEventListener("click", function(){
    navbar.classList.toggle("hidden");
}, false);

// chowane pole w formularzu praca
var inne = document.querySelector("input[id='inne']");
    corobisz = document.querySelector("input[id='corobisz']");
corobisz.style.visibility = "hidden";
inne.onchange = function(){
if (inne.checked){
    corobisz.style.visibility = "visible";
    corobisz.value = "";
}else{
    corobisz.style.visibility = "hidden";
}
}
// chowane pola w formularzu zainteresowań
var text = document.querySelectorAll(".text");
var box = document.querySelectorAll(".box");
for (var i = 0; i < box.length; i++){
    box[i].onchange = textFieldPop;
    function textFieldPop(){
    for (var j = 0; j < box.length; j++)
        if (box[j].checked){
            text[j].classList.remove("hidden");
        }else{
            text[j].classList.add("hidden");
}
}
}

