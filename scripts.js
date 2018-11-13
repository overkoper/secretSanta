// chowane menu navigacji & znikający alert do menu
var logo = document.querySelector("#logo");
    navbar = document.querySelector("#navbar");
    alert = document.querySelector(".alert");
logo.addEventListener("click", function(){
    navbar.classList.toggle("hidden");
    alert.classList.add("hidden");
}, false);
//alert do menu na scroll
logo.addEventListener("mouseenter", function(){

    alert.classList.remove("hidden");
    
}, false);
logo.addEventListener("mouseleave", function(){

    alert.classList.add("hidden");

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
// walidator formularza
var form = document.querySelector(".form");
    fields = form.querySelectorAll("[data-error]");
    dane = form.querySelector(".dane");

function isNotEmpty(field){
    return field.value !== "";
};
function isEmail(field){
    return field.value.indexOf("@") !== -1;
};
function displayErrors(errors){
    var ul = document.querySelector("ul.errors")
    if(!ul){
        ul = document.createElement("ul");
        ul.classList.add("errors");
    }
    ul.innerHTML = "";
    errors.forEach(function(error){
        var li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
    dane.appendChild(ul);
};
form.addEventListener("submit", function(e){
    var errors = [];
    e.preventDefault();
    for(let i = 0; i < fields.length; i++){
        var field = fields[i],
        isValid = false;
        if(field.type === "text"){
        isValid = isNotEmpty(field);
        }else if (field.type === "email"){
        isValid = isEmail(field);
        }else if(field.type === "select-one"){
        isValid = isNotEmpty(field);
        }
        if(!isValid){
        field.classList.add("error");
        errors.push(field.dataset.error);
        }else{
        field.classList.remove("error");
    }
}
    if(errors.length){
        displayErrors(errors);
    }else{
        form.submit();
    }
    console.log(errors);
}, false);
