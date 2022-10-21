
var lastPositionX, lastPositionY;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
widthLine = 5;

var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}



canvas.addEventListener("touchstart", mytouchStart);
function mytouchStart(e) {
    color = document.getElementById("color").value;
    widthLine = document.getElementById("widthLine").value;
    console.log("mytouchstart");
    lastPositionX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionY = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", mytouchMove);

function mytouchMove(e) {
    console.log("mytouchMove");
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
    console.log("ultima coordenada de x e y")
    console.log("x= " + lastPositionX + "y= " + lastPositionY);
    ctx.moveTo(lastPositionX, lastPositionY);

    console.log("posição atual das coordenada x e y");
    console.log("x= " + currentPositionOfTouchX + "y= " + currentPositionOfTouchY);
    ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
    ctx.stroke();
    lastPositionX = currentPositionOfTouchX;
    lastPositionY = currentPositionOfTouchY;

}
function limpar() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
