function setVariables(){
if (navigator.appName == "Netscape") {
v=".top=";h=".left=";dS="document.";sD="";
y="window.pageYOffset";x="window.pageXOffset";}
else {h=".pixelLeft=";v=".pixelTop=";dS="";sD=".style";
y="document.body.scrollTop";x="document.body.scrollLeft";}checkLocationA()}
movex=0,movey=0,xdiff=0,ydiff=0,ystart=0,xstart=0
function checkLocation(){
object="object1";yy=eval(y);xx=eval(x);ydiff=ystart-yy;xdiff=xstart-xx;
if ((ydiff<(-1))||(ydiff>(1))) movey=Math.round(ydiff/10),ystart-=movey
if ((xdiff<(-1))||(xdiff>(1))) movex=Math.round(xdiff/10),xstart-=movex
eval(dS+object+sD+v+ystart);eval(dS+object+sD+h+xstart);
setTimeout("checkLocation()",10)}
function checkLocationA(){ystart=eval(y);xstart=eval(x);}
