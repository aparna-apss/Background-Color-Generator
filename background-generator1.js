
var inputColor1 = document.getElementById("color1");
    var inputColor2 = document.getElementById("color2");
    var body = document.getElementById("body");
    var h3 = document.querySelector("h3");
    var btn = document.getElementById("random");
function setBgColor(){
    
    var bodyColor = body.style.background = "linear-gradient(to right,"+ inputColor1.value +","+ inputColor2.value +")";
    //h3.innerHTML = "The color codes of the body are: "+ bodyColor;
    h3.textContent = "The color codes of the body are: "+ bodyColor;
}

function generateRandomNo(){
    var randomColor1 = Math.floor(Math.random()*10241891).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    inputColor1.value = "#" + randomColor1;
    inputColor2.value = "#" + randomColor2;
    setBgColor();
}

inputColor1.addEventListener("input", setBgColor);
inputColor2.addEventListener("input", setBgColor);
btn.addEventListener("click", generateRandomNo);