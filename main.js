var mouseEvent="empty";

canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line=2;
radius=40;

canvas.addEventListener("mousedown" , my_mouseDown);
function my_mouseDown(e){
 color=document.getElementById("color").value;
 width=document.getElementById("width_of_line").value;
 radius=document.getElementById("radius").value;

 mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e){

mouseEvent= "mouseleave";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e){

    mouseEvent="mouseUP";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){

    currentPosOfX=e.clientX - canvas.offsetLeft;
    currentPosOfY=e.clientY - canvas.offsetTop; 

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.arc(currentPosOfX , currentPosOfY , radius , 0 , 2 * Math.PI);
        ctx.stroke();
    }
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}