var img = 0;
if (document.images) img = 1;

if (img) {
img0 = new Image();
img0.src="/gif/anim/oo-horiz/oo-horiz1.gif";

img1 = new Image();
img1.src="/gif/anim/oo-horiz/oo-horiz2.gif";

img2 = new Image();
img2.src="/gif/anim/oo-horiz/oo-horiz2a.gif";

img3 = new Image();
img3.src="/gif/anim/oo-horiz/oo-horiz2ab.gif";

img4 = new Image();
img4.src="/gif/anim/oo-horiz/oo-horiz2abc.gif";
}

function ooHoriz(num){
  if (img) {
    if (num=="1") on0()
    if (num=="0") off0()
  }
}

function on0(){ if (img) { document.images.flux.src=img0.src; setTimeout("on1()",100);}}
function on1(){ if (img) { document.images.flux.src=img1.src; setTimeout("on2()",100);}}
function on2(){ if (img) { document.images.flux.src=img2.src; setTimeout("on3()",100);}}
function on3(){ if (img) { document.images.flux.src=img3.src; setTimeout("on4()",100);}}
function on4(){ if (img) { document.images.flux.src=img4.src;}}

function off0(){ if (img) { document.images.flux.src=img4.src; setTimeout("off1()",100);}}
function off1(){ if (img) { document.images.flux.src=img3.src; setTimeout("off2()",100);}}
function off2(){ if (img) { document.images.flux.src=img2.src; setTimeout("off3()",100);}}
function off3(){ if (img) { document.images.flux.src=img1.src; setTimeout("off4()",100);}}
function off4(){ if (img) { document.images.flux.src=img0.src;}}
