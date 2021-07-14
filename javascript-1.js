let myinputelement1 = document.querySelector("#myinput");
myinputelement1.oninput = () => {
    console.log("Text changed");
}
let myinputelement = document.querySelector("#mybutton");
// myinputelement.onclick = function (){
//     console.log('On click method was called');
// }
// function buttonEventHandlerMethod (){
//     console.log('On change method was called');
// }
// myinputelement.addEventListener("click", buttonEventHandlerMethod);
myinputelement.addEventListener("hover", () => {
    console.log("Hovering over button");
})
function displayText(){
    let spanelement = document.querySelector('#time');
    let clock = new Date();
    spanelement.textContent=clock.toLocaleTimeString();
}

let productForm = document.querySelector("#product-form");
productForm.addEventListener("submit", (ev) => {
    console.log("In form submission");
    ev.preventDefault();
})
// displayText();
// setInterval(displayText,1000);