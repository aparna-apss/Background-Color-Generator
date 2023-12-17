

function setBgColor(){
    var inputColor1 = document.getElementById("color1").value;
    var inputColor2 = document.getElementById("color2").value;
    var body = document.getElementById("body");
    var h3 = document.querySelector("h3");
    var bodyColor = body.style.background = "linear-gradient(to right,"+ inputColor1 +","+ inputColor2 +")";
    h3.innerHTML = "The color codes of the body are: "+ bodyColor;
}