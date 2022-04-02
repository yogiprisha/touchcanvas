canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

color="pink";

var me="empty";

var lx,ly;

width=5;

s_width=screen.width;

newwidth=screen.width-70;

newheight=screen.height-300;

if (s_width<992) {
 
    document.getElementById("myCanvas").width=newwidth;


 document.getElementById("myCanvas").height=newheight;

 document.body.style.overflow="hidden";

}



canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
 
   console.log("my_touchstart");

    color=document.getElementById("color").value ;

    width=document.getElementById("width").value ;
    
   lx=e.touches[0].clientX-canvas.offsetLeft; 

   ly=e.touches[0].clientY-canvas.offsetTop;    

}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
 
    console.log("my_touchmove");

   cx=e.touches[0].clientX - canvas.offsetLeft;

   cy=e.touches[0].clientY - canvas.offsetTop;

  
    ctx.beginPath();

ctx.strokeStyle=color;

ctx.lineWidth=width;

ctx.moveTo(lx,ly);

ctx.lineTo(cx,cy);

ctx.stroke();


       
  

   lx=cx;

   ly=cy;



    
}

function clearArea() {
    

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

