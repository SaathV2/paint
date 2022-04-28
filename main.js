<link rel="javascript" type="script/java" href="C81script.java"></link>

var mouseEvent = "empty"
var last_position_of_x, last_position_of_y;
cavas = document.getElementById('mycanvas')
ctx = canvas.getElementById("2d")

colour = "black";
width_of_line = 1;
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e)
{
    //Addional Activity start
    colour = document.getElementById("colour"),
    width_of_line = document.getElementById("width_of_line").value;
    // Addional Acitivity ends
  
    mouseEvent= "mouseDown"

}

canvas.addEventListener("mousemove", my_mousemove)
function mymousemove(e)
{
    current_position_of_mouse_x = eclientX - canvasoffsetLeft;
    current_position_of_mouse_y = eclientY - canvasoffsetTop;
}
 if (mouseEvent == "mouseDown"){
    ctx.beginpath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = width_of_line;

 

 console.log("Last position of x and y coordinates = ");
 console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
 ctx.moveTo(last_position_of_x, last_position_of_y )

 console.log("Current position of x and y coordinates = ");
 console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
 ctx.lineTo(current_position_of_x, current_position_of_y )
 ctx.stroke();
 }

 last_position_of_x = current_position_of_mouse_x
 last_position_of_y = current_position_of_mouse_y



canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}




