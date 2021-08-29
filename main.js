Canvas= document.getElementById("myCanvas");
ctx= Canvas.getContext("2d");

var mouse_event="empty";
var color="black";
var width_of_line="2";
var last_pos_x,last_pos_y

var width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;
if (width < 992){
document.getElementById("myCanvas").width = new_width;
document.getElementById("myCanvas").height = new_height;
document.body.style.overflow="hidden";
}

Canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
mouse_event="mousedown";
}
Canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event="mouseup";
}
Canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouse_event="mouseleave";
}
Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_pos_x= e.clientX - Canvas.offsetLeft;
current_pos_y= e.clientY - Canvas.offsetTop;

if (mouse_event == "mousedown"){
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(last_pos_x,last_pos_y);
ctx.lineTo(current_pos_x,current_pos_y);
ctx.stroke();
}
last_pos_x=current_pos_x;
last_pos_y=current_pos_y;
}
Canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
last_pos_x = e.touches[0].clientX - Canvas.offsetLeft;
last_pos_y = e.touches[0].clientY - Canvas.offsetTop;
}

Canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
current_pos_touch_x = e.touches[0].clientX - Canvas.offsetLeft;
current_pos_touch_y = e.touches[0].clientY - Canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.moveTo(last_pos_x, last_pos_y);   
ctx.lineTo(current_pos_touch_x, current_pos_touch_y);
ctx.stroke();
    
last_pos_x = current_pos_touch_x; 
last_pos_y = current_pos_touch_y;
}

function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}