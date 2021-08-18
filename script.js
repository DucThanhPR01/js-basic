//click event
// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("Click successful");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputValue () {
    return input.value.length;
}
function createEventListener () {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}
function addListAfterClick () {
    if (inputValue() > 0) {
        createEventListener();
    }  
}
function addListAfterKeypress(event) {
    if (inputValue() > 0 && event.keyCode === 13) {
        createEventListener();
    }   
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("Keypress",addListAfterKeypress )